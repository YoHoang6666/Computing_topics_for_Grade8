/**
 * Compass · Grade 8 Computing — Google Sheets receiver
 * Paste this into Extensions → Apps Script of a new Google Sheet, then
 * Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone).
 * Copy the Web app URL into js/config.js → googleSheetsUrl.
 *
 * Creates two tabs automatically:
 *   Results  — one row per quiz try
 *   Students — one row per student, updated with their latest totals
 */
const RESULTS = "Results";
const STUDENTS = "Students";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (d.type === "result") appendResult_(ss, d);
    upsertStudent_(ss, d);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, message: "Compass receiver is running." });
}

function appendResult_(ss, d) {
  const sh = sheet_(ss, RESULTS, ["Received", "Date (student)", "Student ID", "Name", "Class", "Quiz", "Type", "Score", "Total", "Percent", "Seconds", "Try #", "Left early", "Total hours", "Average %", "Topics passed"]);
  sh.appendRow([new Date(), d.date ? new Date(d.date) : "", d.studentId, d.name, d.cls, d.title, d.kind, d.score, d.total, d.pct, d.secs, d.attemptNo, d.incomplete ? "yes" : "", d.totalHours, d.averagePct, d.topicsPassed + "/" + d.topicsTotal]);
}

function upsertStudent_(ss, d) {
  if (!d.studentId) return;
  const head = ["Student ID", "Name", "Class", "Total hours", "Quiz tries", "Average %", "Topics passed", "Last result", "Last seen"];
  const sh = sheet_(ss, STUDENTS, head);
  const ids = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, 1).getValues().map(r => r[0]) : [];
  let row = ids.indexOf(d.studentId);
  const lastResult = d.type === "result" ? d.title + ": " + d.pct + "%" : null;
  const values = [d.studentId, d.name, d.cls, d.totalHours, d.attemptsCount, d.averagePct, d.topicsPassed + "/" + d.topicsTotal, lastResult, new Date()];
  if (row === -1) {
    if (values[7] === null) values[7] = "";
    sh.appendRow(values);
  } else {
    row += 2;
    if (values[7] === null) values[7] = sh.getRange(row, 8).getValue();
    sh.getRange(row, 1, 1, values.length).setValues([values]);
  }
}

function sheet_(ss, name, header) {
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(header);
    sh.getRange(1, 1, 1, header.length).setFontWeight("bold").setBackground("#234a7b").setFontColor("#ffffff");
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
