/* Compass · Grade 8 Computing — app logic (no frameworks, works on GitHub Pages) */
(function () {
  "use strict";
  const C = window.CONFIG, UNITS = window.UNITS, BANK = window.BANK, GENS = window.GENERATORS, OBJ = window.OBJECTIVES;
  const { shuffle, pick } = window.QUtil;
  const $ = s => document.querySelector(s);
  const view = $("#view");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------------- dates ---------------- */
  const parseD = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const dayKey = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const startOfDay = d => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const today = () => startOfDay(new Date());
  const fmtD = (d, o) => d.toLocaleDateString(undefined, o || { day: "numeric", month: "short" });
  const fmtDT = iso => new Date(iso).toLocaleString(undefined, { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  const fmtTime = secs => { secs = Math.round(secs || 0); const h = Math.floor(secs / 3600), m = Math.floor((secs % 3600) / 60); return h ? `${h} h ${m} min` : m ? `${m} min` : `${secs % 60} s`; };
  const hours = secs => (secs / 3600).toFixed(1);

  /* ---------------- content index ---------------- */
  const TOPICS = {}; const UNIT_OF = {};
  UNITS.forEach(u => u.topics.forEach(t => { TOPICS[t.id] = t; UNIT_OF[t.id] = u; }));
  const unitById = id => UNITS.find(u => u.id === id);
  const semUnits = sem => UNITS.filter(u => u.semester === sem);
  const semTopics = sem => semUnits(sem).flatMap(u => u.topics);

  /* ---------------- storage ---------------- */
  const KEY = "compass8_tracker_v1";
  let DB = { profiles: {}, current: null };
  try { DB = JSON.parse(localStorage.getItem(KEY)) || DB; } catch (e) { /* private mode */ }
  let P = null; // current profile
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e) { } };
  const newProfile = (name, cls) => ({ id: "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), name, cls, created: new Date().toISOString(), attempts: [], read: {}, tasks: [], time: { days: {}, topics: {}, total: 0 }, outbox: [], lastSync: null, sem: null, active: null });
  function useProfile(id) { DB.current = id; P = DB.profiles[id]; if (P) { P.time = P.time || { days: {}, topics: {}, total: 0 }; P.outbox = P.outbox || []; } save(); }

  /* ---------------- schedule ---------------- */
  function schedule(sem) {
    const s = C.semesters.find(x => x.id === sem); if (!s) return [];
    let prev = null;
    return (C.weeklyPlan[sem] || []).map(w => {
      const start = w.start ? parseD(w.start) : prev ? addDays(prev, 7) : parseD(s.start); prev = start;
      const fri = addDays(start, 4); let assess;
      if (w.unitTest) { const u = unitById(w.unitTest); assess = { id: "UT-" + w.unitTest, kind: "unit", title: `Unit ${u.num} test`, sub: u.title, date: fri, topics: u.topics.map(t => t.id), n: C.questionsPerUnitTest, sem }; }
      else assess = { id: `SC-${sem}-${w.week}`, kind: "spot", title: `Week ${w.week} spot check`, sub: w.topics.map(id => TOPICS[id] ? TOPICS[id].title : id).join(" · "), date: fri, topics: w.topics, n: C.questionsPerSpot, sem };
      return Object.assign({}, w, { start, end: addDays(start, 6), fri, assess, sem });
    });
  }
  const allAssess = () => [1, 2].flatMap(s => schedule(s).map(w => w.assess));
  const assessById = id => allAssess().find(a => a.id === id);
  function currentWeek(sem) {
    const ws = schedule(sem), t = today(); if (!ws.length) return null;
    if (t < ws[0].start) return Object.assign({ state: "before" }, ws[0]);
    const w = ws.find(w => t >= w.start && t <= w.end); if (w) return Object.assign({ state: "now" }, w);
    const past = ws.filter(w => w.start <= t); return Object.assign({ state: "after" }, past[past.length - 1] || ws[ws.length - 1]);
  }
  function defaultSem() { const s2 = C.semesters.find(s => s.id === 2); return s2 && today() >= addDays(parseD(s2.start), -14) ? 2 : 1; }
  const sem = () => (P && P.sem) || defaultSem();

  /* ---------------- progress helpers ---------------- */
  const attemptsFor = q => (P ? P.attempts.filter(a => a.quiz === q) : []);
  const best = q => { const a = attemptsFor(q); return a.length ? Math.max(...a.map(x => x.pct)) : null; };
  const passed = topicId => { const b = best("T:" + topicId); return b != null && b >= C.passMark; };
  function topicState(id) { const b = best("T:" + id); if (b == null) return P && P.read[id] ? "read" : "new"; return b >= C.passMark ? "passed" : "retry"; }
  const stateTag = id => { const s = topicState(id), b = best("T:" + id); return s === "passed" ? `<span class="tag sm good">✓ Passed ${b}%</span>` : s === "retry" ? `<span class="tag sm warn">Best ${b}% · retry</span>` : s === "read" ? `<span class="tag sm">Read · quiz next</span>` : `<span class="tag sm">Not started</span>`; };
  function assessOpen(a) { if (today() >= startOfDay(a.date)) return true; return C.openSpotEarly && a.topics.every(id => attemptsFor("T:" + id).length > 0); }
  function weekStatus(w) { const t = today(); if (w.topics.every(passed)) return "done"; if (w.end < t) return "overdue"; if (w.start <= t) return "current"; return "upcoming"; }
  function trend(vals) {
    const n = vals.length; if (n < 2) return { slope: 0, at: i => vals[0] || 0 };
    const xs = vals.map((_, i) => i), mx = (n - 1) / 2, my = vals.reduce((a, b) => a + b, 0) / n;
    let num = 0, den = 0; xs.forEach((x, i) => { num += (x - mx) * (vals[i] - my); den += (x - mx) ** 2; });
    const slope = den ? num / den : 0, b = my - slope * mx; return { slope, at: i => Math.max(0, Math.min(100, b + slope * i)) };
  }
  const trendLabel = s => s > 2 ? `<span class="up">▲ Improving</span>` : s < -2 ? `<span class="down">▼ Declining</span>` : `<span class="flat">● Steady</span>`;

  /* ---------------- time tracking ---------------- */
  let lastActive = Date.now(), activeSinceBeat = 0;
  ["mousemove", "keydown", "click", "scroll", "touchstart"].forEach(ev => window.addEventListener(ev, () => { lastActive = Date.now(); }, { passive: true }));
  setInterval(() => {
    if (!P || document.visibilityState !== "visible" || Date.now() - lastActive > 120000) return;
    const k = dayKey(new Date()); P.time.days[k] = (P.time.days[k] || 0) + 10; P.time.total = (P.time.total || 0) + 10;
    const m = location.hash.match(/^#(?:topic|quiz\/T)\/(.+)$/); if (m) { const id = decodeURIComponent(m[1]); P.time.topics[id] = (P.time.topics[id] || 0) + 10; }
    activeSinceBeat += 10; if (activeSinceBeat >= 600) { activeSinceBeat = 0; queueActivity(); }
    save();
  }, 10000);

  /* ---------------- Google Sheets sync ---------------- */
  let flushing = false;
  function summary() {
    const all = P.attempts; const avg = all.length ? Math.round(all.reduce((a, b) => a + b.pct, 0) / all.length) : 0;
    const passedCount = Object.keys(TOPICS).filter(passed).length;
    return { studentId: P.id, name: P.name, cls: P.cls, totalHours: +hours(P.time.total || 0), attemptsCount: all.length, averagePct: avg, topicsPassed: passedCount, topicsTotal: Object.keys(TOPICS).length };
  }
  function queue(item) { if (!C.googleSheetsUrl) return; P.outbox.push(item); save(); flush(); }
  function queueActivity() { if (!C.googleSheetsUrl || !P) return; P.outbox = P.outbox.filter(o => o.type !== "activity"); queue(Object.assign({ type: "activity", date: new Date().toISOString() }, summary())); }
  async function flush() {
    if (!C.googleSheetsUrl || flushing || !P || !navigator.onLine) { syncDot(); return; } flushing = true;
    while (P.outbox.length) {
      try { await fetch(C.googleSheetsUrl, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(P.outbox[0]) }); P.outbox.shift(); P.lastSync = new Date().toISOString(); save(); }
      catch (e) { break; }
    }
    flushing = false; syncDot();
  }
  function syncDot() { $("#syncDot").hidden = !(P && P.outbox && P.outbox.length); }
  window.addEventListener("online", flush);
  window.addEventListener("pagehide", () => { if (C.googleSheetsUrl && P && navigator.sendBeacon) { try { navigator.sendBeacon(C.googleSheetsUrl, new Blob([JSON.stringify(Object.assign({ type: "activity", date: new Date().toISOString() }, summary()))], { type: "text/plain" })); } catch (e) { } } });

  /* ---------------- UI helpers ---------------- */
  function toast(msg, ms = 3200) { const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), ms); }
  function modal(html, onMount) { const o = document.createElement("div"); o.className = "overlay"; o.innerHTML = `<div class="modal">${html}</div>`; document.body.appendChild(o); const close = () => o.remove(); onMount && onMount(o, close); return close; }
  const tip = $("#tooltip");
  document.addEventListener("mouseover", e => { const el = e.target.closest("[data-tip]"); if (!el) { tip.style.display = "none"; return; } tip.innerHTML = el.getAttribute("data-tip"); tip.style.display = "block"; });
  document.addEventListener("mousemove", e => { if (tip.style.display === "block") { tip.style.left = Math.min(e.clientX + 14, innerWidth - 250) + "px"; tip.style.top = (e.clientY + 14) + "px"; } });
  const initials = n => n.split(/\s+/).filter(Boolean).slice(0, 2).map(s => s[0].toUpperCase()).join("") || "?";

  function chrome(route) {
    $("#brandName").textContent = C.siteName; $("#brandSub").textContent = C.subtitle; $("#yearVal").textContent = C.academicYear;
    document.querySelectorAll("#menu a").forEach(a => a.classList.toggle("on", a.dataset.r === route));
    $("#semToggle").innerHTML = C.semesters.map(s => `<button data-sem="${s.id}" class="${sem() === s.id ? "on" : ""}">${esc(s.name)}</button>`).join("");
    if (P) { $("#avatar").textContent = initials(P.name); $("#whoName").textContent = P.name; $("#whoRole").textContent = "Student · " + P.cls; }
    $("#sidebar").classList.remove("open"); syncDot();
  }
  $("#semToggle").addEventListener("click", e => { const b = e.target.closest("button"); if (!b || !P) return; if (QZ && !QZ.done) return toast("Finish your quiz first."); P.sem = +b.dataset.sem; save(); render(); });
  $("#hamburger").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $("#sideFoot").addEventListener("click", profileModal);
  $("#syncBtn").addEventListener("click", syncModal);

  /* ---------------- router ---------------- */
  let QZ = null, ignoreHash = false;
  window.addEventListener("hashchange", () => {
    if (ignoreHash) { ignoreHash = false; return; }
    if (QZ && !QZ.done && !location.hash.startsWith("#quiz/")) {
      if (!confirm("Leave this quiz? It will be submitted now and any unanswered questions will be marked wrong.")) { ignoreHash = true; history.back(); return; }
      finishQuiz(true, false);
    }
    render();
  });
  window.addEventListener("beforeunload", e => { if (QZ && !QZ.done) { e.preventDefault(); e.returnValue = ""; } });

  function render() {
    if (!P) { loginModal(); return; }
    const h = decodeURIComponent(location.hash.slice(1) || "home"); const [r, a, b] = h.split("/");
    window.scrollTo(0, 0);
    const crumb = t => $("#crumb").textContent = "Computing / " + t;
    switch (r) {
      case "plan": chrome("plan"); crumb("Weekly plan"); return vPlan();
      case "calendar": chrome("calendar"); crumb("Calendar & assessments"); return vCalendar(a);
      case "resources": chrome("resources"); crumb("Resources"); return vResources();
      case "topic": chrome("resources"); crumb("Resources / " + a); return vTopic(a);
      case "quiz": chrome(a === "T" ? "resources" : "calendar"); crumb("Quiz"); return vQuiz(a, b);
      case "results": chrome("results"); crumb("My results"); return vResults(a);
      case "help": chrome("help"); crumb("Help"); return vHelp();
      default: chrome("home"); crumb("Home"); return vHome();
    }
  }

  /* ================= HOME ================= */
  function pendingItems() {
    const s = sem(), ws = schedule(s), t = today(), items = [];
    ws.filter(w => w.start <= t || w === ws[0]).forEach(w => w.topics.forEach(id => {
      if (!TOPICS[id] || passed(id)) return;
      const b = best("T:" + id), overdue = w.end < t;
      items.push({ ic: overdue ? "!" : "T", cls: overdue ? "accent" : "", tt: `${id.replace(/^R/, "")} · ${TOPICS[id].title}`, ds: `Week ${w.week}${overdue ? " · overdue" : ""} · ${b == null ? (P.read[id] ? "Read — now take the quiz" : "Read the topic, then pass the quiz") : `Best ${b}% — reach ${C.passMark}%`}`,
        act: `<a class="btn sm" href="#topic/${encodeURIComponent(id)}">Read</a><a class="btn sm primary" href="#quiz/T/${encodeURIComponent(id)}">Quiz</a>` });
    }));
    ws.map(w => w.assess).filter(a => assessOpen(a) && !attemptsFor("A:" + a.id).length).forEach(a => items.push({ ic: "A", cls: "accent", tt: a.title, ds: `${a.kind === "unit" ? "Unit test" : "Spot check"} · due ${fmtD(a.date, { weekday: "short", day: "numeric", month: "short" })}`, act: `<a class="btn sm accent" href="#quiz/A/${a.id}">Start</a>` }));
    return items;
  }
  function vHome() {
    const s = sem(), first = P.name.split(" ")[0], hr = new Date().getHours();
    const greet = hr < 12 ? "Good morning" : hr < 17 ? "Good afternoon" : "Good evening";
    const pend = pendingItems(), tasks = P.tasks.filter(t => !t.done), open = pend.length + tasks.length;
    const topics = semTopics(s), pct = topics.length ? Math.round(topics.filter(t => passed(t.id)).length / topics.length * 100) : 0;
    const objs = new Set(topics.flatMap(t => t.objectives)), objDone = new Set(topics.filter(t => passed(t.id)).flatMap(t => t.objectives));
    const ws = schedule(s), t = today(), cw = currentWeek(s);
    const upcoming = ws.map(w => w.assess).filter(a => !attemptsFor("A:" + a.id).length && (assessOpen(a) || (a.date >= t && a.date <= addDays(t, 14)))).length;
    const openWeeks = ws.filter(w => w.start <= t && !w.topics.every(passed)).length;
    const wk = Object.entries(P.time.days).filter(([k]) => parseD(k) >= addDays(t, -6)).reduce((a, [, v]) => a + v, 0);
    view.innerHTML = `
      <div class="hero-row"><div><div class="eyebrow">Your learning week</div><h1 class="h-xl">${greet}, ${esc(first)}.</h1><div class="sub">Everything assigned to you for ${esc(C.semesters.find(x => x.id === s).name)}, in one place.</div></div>
      <span class="tag">${esc(P.cls)} · ${C.googleSheetsUrl ? "Synced to teacher" : "Saved on this device"}</span></div>
      <div class="section"><div class="eyebrow">Teacher note</div><h2 class="h-lg">Weekly guidance</h2>
        <div class="note mt"><div><div class="lbl">${esc(C.teacherNote.title)}</div><div class="t">${cw ? "Week " + cw.week : ""} · ${esc(C.teacherName)}</div></div><p>${esc(C.teacherNote.text)}</p><span class="tag sm accent">Weekly note</span></div></div>
      <div class="section card top">
        <div class="row" style="justify-content:space-between;align-items:flex-start"><div><div class="eyebrow">My pending activities</div><h2 class="h-lg">${open} open item${open === 1 ? "" : "s"}</h2><div class="sub small">Topics to read and pass, open assessments, and your own tasks.</div></div><div class="count-badge">${open}</div></div>
        <form class="task-row" id="taskForm"><input class="input" id="taskIn" placeholder="Add a personal task (e.g. revise trace tables)" maxlength="120"><button class="btn" type="submit">Add task</button></form>
        <div class="items">${pend.map((i, n) => `<div class="item" ${n >= 6 ? 'data-more hidden' : ""}><div class="ic ${i.cls}">${i.ic}</div><div><div class="tt">${esc(i.tt)}</div><div class="ds">${esc(i.ds)}</div></div><div class="act">${i.act}</div></div>`).join("")}
        ${pend.length > 6 ? `<button class="btn sm more-btn" id="moreBtn">Show all ${pend.length} activities ▾</button>` : ""}
        ${P.tasks.map(tk => `<div class="item ${tk.done ? "done" : ""}"><input type="checkbox" class="chk" data-task="${tk.id}" ${tk.done ? "checked" : ""} aria-label="Done"><div><div class="tt">${esc(tk.text)}</div><div class="ds">Personal task</div></div><div class="act"><button class="btn sm" data-del="${tk.id}" aria-label="Delete task">✕</button></div></div>`).join("")}
        ${open === 0 ? `<div class="item"><div class="ic good">✓</div><div><div class="tt">Nothing needs attention</div><div class="ds">You're up to date. Add a personal task whenever you need one.</div></div></div>` : ""}</div>
      </div>
      <div class="section grid4">
        <div class="card stat top"><div class="head"><div class="lbl">Semester progress</div><a class="link" href="#plan">View plan →</a></div><div class="num">${pct}%</div><div class="cap">Topics passed · ${objDone.size}/${objs.size} objectives covered</div></div>
        <div class="card stat"><div class="head"><div class="lbl">Assessments</div><a class="link" href="#calendar">Calendar →</a></div><div class="num">${upcoming}</div><div class="cap">Open now or due in the next 14 days</div></div>
        <div class="card stat"><div class="head"><div class="lbl">Open actions</div><a class="link" href="#plan">Review →</a></div><div class="num">${openWeeks}</div><div class="cap">Current or past weeks with topics not yet passed</div></div>
        <div class="card stat"><div class="head"><div class="lbl">Study time</div><a class="link" href="#results">Results →</a></div><div class="num">${hours(P.time.total || 0)} h</div><div class="cap">Total on Compass · ${fmtTime(wk)} in the last 7 days</div></div>
      </div>
      ${cw ? `<div class="section"><div class="section-head"><div><div class="eyebrow">Weekly delivery</div><h2 class="h-lg">${cw.state === "before" ? "Coming up first" : cw.state === "after" ? "Last scheduled week" : "What is happening now"}</h2></div><a class="link" href="#plan">Open full plan →</a></div>${nowCard(cw)}</div>` : ""}
      ${recentMini()}`;
    const mb = $("#moreBtn"); if (mb) mb.onclick = () => { view.querySelectorAll("[data-more]").forEach(x => x.hidden = false); mb.remove(); };
    $("#taskForm").onsubmit = e => { e.preventDefault(); const v = $("#taskIn").value.trim(); if (!v) return; P.tasks.unshift({ id: Date.now().toString(36), text: v, done: false }); save(); vHome(); };
    view.querySelectorAll("[data-task]").forEach(c => c.onchange = () => { const tk = P.tasks.find(x => x.id === c.dataset.task); tk.done = c.checked; save(); vHome(); });
    view.querySelectorAll("[data-del]").forEach(b => b.onclick = () => { P.tasks = P.tasks.filter(x => x.id !== b.dataset.del); save(); vHome(); });
  }
  function nowCard(w) {
    const u = UNIT_OF[w.topics[0]];
    return `<div class="now"><div class="now-head"><div class="now-badge">U${u ? u.num : ""}</div><div style="flex:1"><div class="lbl">${w.state === "now" ? "This week" : "Week"} · Week ${w.week} · ${fmtD(w.start)} – ${fmtD(addDays(w.start, 4))}</div><h3>${esc(u ? u.title : "")}</h3></div></div>
      <div class="now-body">${w.topics.map(id => TOPICS[id] ? `<div class="now-topic"><span class="code">${id.replace(/^R/, "")}</span><span class="nm">${esc(TOPICS[id].title)}</span>${stateTag(id)}<a class="btn sm" href="#topic/${encodeURIComponent(id)}">Open →</a></div>` : "").join("")}
      <div class="now-topic"><span class="code">FRI</span><span class="nm">${esc(w.assess.title)}</span>${attemptsFor("A:" + w.assess.id).length ? `<span class="tag sm good">Done ${best("A:" + w.assess.id)}%</span>` : assessOpen(w.assess) ? `<a class="btn sm" href="#quiz/A/${w.assess.id}">Start →</a>` : `<span class="tag sm">Opens ${fmtD(w.assess.date)}</span>`}</div></div></div>`;
  }
  function recentMini() {
    const a = P.attempts.slice(-5).reverse(); if (!a.length) return "";
    return `<div class="section"><div class="section-head"><div><div class="eyebrow">Recent results</div><h2 class="h-lg">Your last tries</h2></div><a class="link" href="#results">All results →</a></div>
      <div class="card"><div class="table-wrap"><table class="data-table"><tr><th>Quiz</th><th>Score</th><th>When</th></tr>${a.map(x => `<tr><td>${esc(x.title)}</td><td class="n"><b>${x.pct}%</b> <span class="muted small">(${x.score}/${x.total})</span></td><td class="small muted">${fmtDT(x.date)}</td></tr>`).join("")}</table></div></div></div>`;
  }

  /* ================= WEEKLY PLAN ================= */
  function vPlan() {
    const s = sem(), ws = schedule(s), cw = currentWeek(s);
    const label = { done: '<span class="tag sm good">✓ Complete</span>', overdue: '<span class="tag sm bad">Overdue</span>', current: '<span class="tag sm accent">This week</span>', upcoming: '<span class="tag sm">Upcoming</span>' };
    view.innerHTML = `<div class="eyebrow">${esc(C.semesters.find(x => x.id === s).name)}</div><h1 class="h-xl">Weekly plan</h1><div class="sub">The topics you must finish each week. Read each topic, then pass its quiz (${C.passMark}%+). A spot check runs every Friday.</div>
      <div class="section">${ws.map(w => {
        const st = weekStatus(w), done = w.topics.filter(passed).length, isCur = cw && cw.week === w.week && cw.state === "now";
        const u = UNIT_OF[w.topics[0]];
        return `<div class="week ${isCur ? "current open" : ""}" data-week><div class="week-h"><div class="week-n">Week ${w.week}</div><div class="week-d"><b>${esc(u ? "Unit " + u.num + " · " + u.title : "")}</b><br>${fmtD(w.start, { weekday: "short", day: "numeric", month: "short" })} – ${fmtD(addDays(w.start, 4), { weekday: "short", day: "numeric", month: "short" })}</div>
          <div class="progress" title="${done}/${w.topics.length} passed"><i style="width:${w.topics.length ? done / w.topics.length * 100 : 0}%"></i></div>${label[st]}</div>
          <div class="week-b">${w.topics.map(id => { const t = TOPICS[id]; if (!t) return ""; return `<div class="trow"><span class="code">${id.replace(/^R/, "")}</span><div><div class="nm">${esc(t.title)}${t.project ? " 👷" : ""}</div><div class="ob">${t.objectives.slice(0, 6).join(" · ")}${t.objectives.length > 6 ? " …" : ""}${t.pages ? " · pages " + t.pages : ""}</div></div>${stateTag(id)}<div class="acts"><a class="btn sm" href="#topic/${encodeURIComponent(id)}">Read</a><a class="btn sm primary" href="#quiz/T/${encodeURIComponent(id)}">Quiz</a></div></div>`; }).join("")}
          <div class="trow"><span class="code">FRI</span><div><div class="nm">${esc(w.assess.title)}</div><div class="ob">${w.assess.n} questions · ${esc(w.assess.sub)}</div></div>${attemptsFor("A:" + w.assess.id).length ? `<span class="tag sm good">Best ${best("A:" + w.assess.id)}%</span>` : assessOpen(w.assess) ? '<span class="tag sm accent">Open</span>' : `<span class="tag sm">Opens ${fmtD(w.assess.date)}</span>`}<div class="acts">${assessOpen(w.assess) ? `<a class="btn sm accent" href="#quiz/A/${w.assess.id}">${attemptsFor("A:" + w.assess.id).length ? "Retake" : "Start"}</a>` : ""}</div></div></div></div>`;
      }).join("")}</div>`;
    view.querySelectorAll(".week-h").forEach(h => h.onclick = () => h.parentElement.classList.toggle("open"));
  }

  /* ================= CALENDAR ================= */
  let calMonth = null;
  function vCalendar() {
    const s = sem(), ws = schedule(s);
    if (!calMonth) { const t = today(), first = ws[0] ? ws[0].start : t, last = ws.length ? ws[ws.length - 1].end : t; const base = t < first ? first : t > last ? last : t; calMonth = new Date(base.getFullYear(), base.getMonth(), 1); }
    const y = calMonth.getFullYear(), m = calMonth.getMonth(), firstDow = (new Date(y, m, 1).getDay() + 6) % 7, days = new Date(y, m + 1, 0).getDate();
    const events = {};
    const push = (d, html) => { const k = dayKey(d); (events[k] = events[k] || []).push(html); };
    [1, 2].forEach(sx => schedule(sx).forEach(w => {
      push(w.start, `<a class="ev topic" href="#plan" data-tip="${esc("Week " + w.week + ": " + w.topics.map(id => TOPICS[id] ? TOPICS[id].title : id).join(", "))}">W${w.week}: ${w.topics.map(id => id.replace(/^R/, "")).join(", ")}</a>`);
      const a = w.assess, done = attemptsFor("A:" + a.id).length;
      push(a.date, `<a class="ev ${done ? "done" : a.kind}" href="${assessOpen(a) ? "#quiz/A/" + a.id : "#calendar"}" data-tip="${esc(a.title + " — " + a.sub)}">${done ? "✓ " : ""}${a.kind === "unit" ? "Unit test" : "Spot check"}</a>`);
    }));
    let cells = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => `<div class="dow">${d}</div>`).join("");
    for (let i = 0; i < firstDow; i++) cells += `<div class="day out"></div>`;
    const tk = dayKey(today());
    for (let d = 1; d <= days; d++) { const k = dayKey(new Date(y, m, d)); cells += `<div class="day ${k === tk ? "today" : ""}"><div class="dn">${d}</div>${(events[k] || []).join("")}</div>`; }
    const list = ws.map(w => w.assess);
    view.innerHTML = `<div class="eyebrow">Schedule</div><h1 class="h-xl">Calendar &amp; assessments</h1><div class="sub">Spot checks test the topics from that week. Unit tests cover the whole unit. Each one opens on its date${C.openSpotEarly ? " — or earlier, once you've tried every topic quiz it covers" : ""}.</div>
      <div class="section card"><div class="cal-head"><button class="btn sm" id="prevM" aria-label="Previous month">←</button><h3>${calMonth.toLocaleDateString(undefined, { month: "long", year: "numeric" })}</h3><button class="btn sm" id="todayM">Today</button><button class="btn sm" id="nextM" aria-label="Next month">→</button></div>
        <div class="cal">${cells}</div>
        <div class="legend"><span><i style="background:var(--chip)"></i>Topics start</span><span><i style="background:var(--accent-l)"></i>Spot check</span><span><i style="background:var(--accent)"></i>Unit test</span><span><i style="background:var(--good-l)"></i>Completed</span></div></div>
      <div class="section"><div class="eyebrow">${esc(C.semesters.find(x => x.id === s).name)}</div><h2 class="h-lg">Assessment list</h2>
      <div class="card mt"><div class="table-wrap"><table class="data-table"><tr><th>Date</th><th>Assessment</th><th>Covers</th><th>Status</th><th></th></tr>
      ${list.map(a => { const at = attemptsFor("A:" + a.id), op = assessOpen(a); return `<tr><td class="small" style="white-space:nowrap">${fmtD(a.date, { weekday: "short", day: "numeric", month: "short" })}</td><td><b>${esc(a.title)}</b><div class="small muted">${a.n} questions · ${C.secondsPerQuestion}s each</div></td><td class="small">${esc(a.sub)}</td>
        <td>${at.length ? `<span class="tag sm good">Best ${best("A:" + a.id)}% · ${at.length} tr${at.length === 1 ? "y" : "ies"}</span>` : op ? '<span class="tag sm accent">Open</span>' : '<span class="tag sm">Locked</span>'}</td>
        <td>${op ? `<a class="btn sm ${at.length ? "" : "accent"}" href="#quiz/A/${a.id}">${at.length ? "Retake" : "Start"}</a>` : ""}</td></tr>`; }).join("")}</table></div></div></div>`;
    $("#prevM").onclick = () => { calMonth = new Date(y, m - 1, 1); vCalendar(); };
    $("#nextM").onclick = () => { calMonth = new Date(y, m + 1, 1); vCalendar(); };
    $("#todayM").onclick = () => { calMonth = new Date(today().getFullYear(), today().getMonth(), 1); vCalendar(); };
  }

  /* ================= RESOURCES ================= */
  function vResources() {
    const s = sem();
    view.innerHTML = `<div class="eyebrow">Library</div><h1 class="h-xl">Resources</h1><div class="sub">Every topic explained in simple terms, with its learning objectives. Read it, then take the quiz.</div>
      <div class="section row"><input class="input search" id="q" placeholder="Search topics, e.g. parity, loops, IF…" aria-label="Search topics"><span class="muted small" id="qinfo"></span></div>
      <div class="section" id="units"></div>`;
    const draw = term => {
      term = (term || "").toLowerCase().trim();
      const units = term ? UNITS : semUnits(s); let shown = 0;
      $("#units").innerHTML = units.map(u => {
        const ts = u.topics.filter(t => !term || (t.title + " " + t.summary + " " + t.id + " " + t.objectives.join(" ") + " " + t.reading.replace(/<[^>]+>/g, " ")).toLowerCase().includes(term));
        shown += ts.length; if (!ts.length) return "";
        return `<div class="card unit-card"><div class="uh"><div class="unit-num">${u.num}</div><div><div class="eyebrow">Unit ${u.num} · Semester ${u.semester}</div><h2 class="h-md">${esc(u.title)}</h2><div class="sub small">${esc(u.blurb)}</div></div></div>
          <div class="topic-list">${ts.map(t => `<a class="tcard" href="#topic/${encodeURIComponent(t.id)}"><span class="code">${t.id.replace(/^R/, "")}${t.pages ? " · p. " + t.pages : ""}</span><span class="nm">${esc(t.title)}${t.project ? " 👷" : ""}</span><span class="ds">${esc(t.summary)}</span><span class="ft">${stateTag(t.id)}<span class="tag sm">${t.objectives.length} LO${t.objectives.length > 1 ? "s" : ""}</span></span></a>`).join("")}</div></div>`;
      }).join("") || `<div class="empty">No topics match “${esc(term)}”.</div>`;
      $("#qinfo").textContent = term ? `${shown} topic${shown === 1 ? "" : "s"} found (both semesters)` : "";
    };
    draw(); $("#q").oninput = e => draw(e.target.value);
  }
  function vTopic(id) {
    const t = TOPICS[id]; if (!t) { view.innerHTML = `<div class="empty">Topic not found. <a href="#resources">Back to resources</a></div>`; return; }
    const u = UNIT_OF[id], idx = u.topics.indexOf(t), prev = u.topics[idx - 1], next = u.topics[idx + 1];
    const at = attemptsFor("T:" + id), links = C.extraLinks[t.refId || id] || [];
    const s1best = t.refId ? best("T:" + t.refId) : null;
    view.innerHTML = `<a class="link" href="#resources">← All resources</a>
      <div class="hero-row mt"><div><div class="eyebrow">Unit ${u.num} · ${id.replace(/^R/, "")}${t.pages ? " · Book pages " + t.pages : ""}</div><h1 class="h-xl">${esc(t.title)}</h1><div class="sub">${esc(t.summary)}</div></div>${stateTag(id)}</div>
      <div class="section reader"><div>
        ${t.revisit ? `<div class="banner">Revisit week — your Semester 1 best on this topic was ${s1best == null ? "not recorded" : s1best + "%"}. Can you beat it?</div>` : ""}
        <article class="card reading">${t.reading}</article>
        <div class="row mt"><button class="btn" id="readBtn">${P.read[id] ? "✓ Marked as read" : "Mark as read"}</button><a class="btn primary" href="#quiz/T/${encodeURIComponent(id)}">Take the quiz (${C.questionsPerQuiz} questions) →</a></div>
        <div class="row mt">${prev ? `<a class="link" href="#topic/${encodeURIComponent(prev.id)}">← ${esc(prev.title)}</a>` : ""}<span style="flex:1"></span>${next ? `<a class="link" href="#topic/${encodeURIComponent(next.id)}">${esc(next.title)} →</a>` : ""}</div>
      </div>
      <aside class="side-panel">
        <div class="card"><div class="eyebrow">Learning objectives</div><div class="mt-s">${t.objectives.map(o => `<div class="obj"><b>${o}</b><span>${esc(OBJ[o] || "")}</span></div>`).join("")}</div></div>
        <div class="card"><div class="eyebrow">My progress</div><div class="mt-s small">Quiz tries: <b>${at.length}</b><br>Best score: <b>${at.length ? best("T:" + id) + "%" : "—"}</b><br>Latest: <b>${at.length ? at[at.length - 1].pct + "%" : "—"}</b><br>Time on this topic: <b>${fmtTime(P.time.topics[id] || 0)}</b></div>${at.length > 1 ? `<div class="mt-s small">Trend: ${trendLabel(trend(at.map(a => a.pct)).slope)}</div>` : ""}<a class="link small" href="#results/T:${encodeURIComponent(id)}">See my graph →</a></div>
        ${links.length ? `<div class="card"><div class="eyebrow">Extra links</div>${links.map(l => `<div class="mt-s"><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a></div>`).join("")}</div>` : ""}
      </aside></div>`;
    $("#readBtn").onclick = () => { if (P.read[id]) delete P.read[id]; else P.read[id] = new Date().toISOString(); save(); vTopic(id); };
  }

  /* ================= QUIZ ENGINE ================= */
  const norm = s => String(s).toLowerCase().trim().replace(/^["'“”‘’]+|["'“”‘’.]+$/g, "").replace(/[\s,]+/g, " ").trim();
  const normNum = s => norm(s).replace(/ /g, "");
  const isCodey = s => /\n|^[=\w.]+\(.*\)|\[|←|==|^def |^for |^if /.test(s);
  function toItem(raw, obj) { const [q, a, w, x] = raw; return Object.assign({ q, a, w: w || [], obj }, x || {}); }

  function buildQuestions(objectives, n) {
    const seen = new Set(), pool = [];
    objectives.forEach(o => (BANK[o] || []).forEach(r => { const it = toItem(r, o); const k = it.q + "|" + (it.c || ""); if (!seen.has(k)) { seen.add(k); pool.push(it); } }));
    const gens = GENS.filter(g => g.objs.some(o => objectives.includes(o)));
    let gCount = gens.length ? Math.min(Math.round(n * 0.3), gens.length * 3) : 0;
    if (pool.length < n - gCount) gCount = n - pool.length;
    const sp = shuffle(pool), chosen = sp.slice(0, n - gCount), spare = sp.slice(n - gCount);
    const gSeen = new Set(); let guard = 0, gi = 0; const gOrder = shuffle(gens);
    while (chosen.length < n && gens.length && guard++ < 400) {
      const g = gOrder[gi++ % gOrder.length]; const it = g.fn(); const k = it.q + "|" + (it.c || "") + "|" + (it.h || "");
      if (gSeen.has(k)) continue; gSeen.add(k); it.obj = g.objs.find(o => objectives.includes(o)); it.gen = true; chosen.push(it);
    }
    // turn items into rendered questions with a random type
    let qs = chosen.map(it => {
      const wrong = [...new Set(it.w.map(String))].filter(x => x !== String(it.a));
      const typable = !!it.t && String(it.a).length <= 30;
      const r = Math.random(); let type = "mcq";
      if (typable) type = r < 0.45 ? "mcq" : r < 0.65 ? "tf" : "typed"; else type = r < 0.72 ? "mcq" : "tf";
      if (!wrong.length) type = typable ? "typed" : "mcq";
      const acc = [String(it.a)].concat(Array.isArray(it.t) ? it.t : []);
      const base = { obj: it.obj, prompt: it.q, code: it.c, html: it.h, answer: String(it.a), expl: it.e, typable, accept: acc };
      if (type === "mcq") return Object.assign(base, { type, options: shuffle([String(it.a)].concat(wrong.slice(0, 3))) });
      if (type === "tf") { const showRight = Math.random() < 0.5; return Object.assign(base, { type, shown: showRight ? String(it.a) : pick(wrong), truth: showRight ? "True" : "False" }); }
      return Object.assign(base, { type: "typed" });
    });
    // guarantee some typed answers when the topic allows it
    let typedN = qs.filter(q => q.type === "typed").length;
    shuffle(qs.map((q, i) => i)).forEach(i => { if (typedN < 3 && qs[i].typable && qs[i].type !== "typed") { qs[i] = Object.assign({}, qs[i], { type: "typed" }); typedN++; } });
    // add up to 2 matching questions from spare static items (replacing simple ones, keeping the count)
    const short = spare.filter(it => !it.c && !it.h && String(it.a).length <= 42 && it.q.length <= 120);
    for (let m = 0; m < 2 && short.length >= 3 && qs.length >= 6; m++) {
      const trio = []; const used = new Set();
      while (short.length && trio.length < 3) { const it = short.shift(); if (!used.has(String(it.a))) { used.add(String(it.a)); trio.push(it); } }
      if (trio.length < 3) break;
      const replaceAt = qs.findIndex(q => q.type === "mcq" && !q.code && !q.html && !q.matchReplaced);
      if (replaceAt < 0) break;
      qs[replaceAt] = { type: "match", obj: trio[0].obj, prompt: "Match each question to its correct answer.", pairs: trio.map(it => ({ q: it.q, a: String(it.a) })), options: shuffle(trio.map(it => String(it.a))), matchReplaced: true };
    }
    // make sure at least 3 different types appear
    const types = new Set(qs.map(q => q.type));
    if (types.size < 3) { const i = qs.findIndex(q => q.type === "mcq" && q.options && q.options.length > 1); if (i >= 0 && !types.has("tf")) { const q = qs[i]; const w = q.options.filter(o => o !== q.answer); const sr = Math.random() < .5; qs[i] = Object.assign({}, q, { type: "tf", shown: sr ? q.answer : pick(w), truth: sr ? "True" : "False" }); } }
    return shuffle(qs);
  }

  function vQuiz(kind, id) {
    let title, objectives, n, qkind, back;
    if (kind === "T") { const t = TOPICS[id]; if (!t) return view.innerHTML = `<div class="empty">Quiz not found.</div>`; title = `${id.replace(/^R/, "")} ${t.title}${t.revisit ? " (revisit)" : ""}`; objectives = t.objectives; n = C.questionsPerQuiz; qkind = "topic"; back = "#topic/" + encodeURIComponent(id); }
    else { const a = assessById(id); if (!a) return view.innerHTML = `<div class="empty">Assessment not found.</div>`; if (!assessOpen(a)) { view.innerHTML = `<div class="card empty"><h2 class="h-lg">Not open yet</h2><p>${esc(a.title)} opens on ${fmtD(a.date, { weekday: "long", day: "numeric", month: "long" })}${C.openSpotEarly ? ", or as soon as you have tried every topic quiz it covers" : ""}.</p><a class="btn" href="#calendar">Back to calendar</a></div>`; return; }
      title = a.title + (a.kind === "unit" ? " · " + a.sub : ""); objectives = [...new Set(a.topics.flatMap(tid => TOPICS[tid] ? TOPICS[tid].objectives : []))]; n = a.n; qkind = a.kind; back = "#calendar"; }
    if (QZ && !QZ.done && QZ.quiz === kind + ":" + id) return drawQ();
    const prev = attemptsFor(kind + ":" + id);
    view.innerHTML = `<div class="quiz-wrap"><a class="link" href="${back}">← Back</a>
      <div class="card score-hero mt"><div class="eyebrow">${qkind === "topic" ? "Topic quiz" : qkind === "unit" ? "Unit test" : "Spot check"}</div><h1 class="h-lg mt-s">${esc(title)}</h1>
      <p class="sub">${n} questions · ${C.secondsPerQuestion} seconds each · pass mark ${C.passMark}%</p>
      <div class="items mt" style="text-align:left;max-width:520px;margin-left:auto;margin-right:auto">
        <div class="item"><div class="ic">⏱</div><div class="ds">Each question has its own <b>${C.secondsPerQuestion}-second timer</b>. If time runs out, it is marked wrong.</div></div>
        <div class="item"><div class="ic">→</div><div class="ds">You <b>cannot skip</b> — answer each question to move on. Leaving the page submits the quiz.</div></div>
        <div class="item"><div class="ic">↻</div><div class="ds">Every try gives <b>different questions and question types</b>: multiple choice, true/false, typed answers and matching.</div></div>
      </div>
      ${prev.length ? `<p class="small muted mt">Tries so far: ${prev.length} · best ${best(kind + ":" + id)}% · last ${prev[prev.length - 1].pct}%</p>` : ""}
      <button class="btn primary mt" id="startQ">Start ${prev.length ? "a new try" : "quiz"} →</button></div></div>`;
    $("#startQ").onclick = () => {
      QZ = { quiz: kind + ":" + id, kind: qkind, title, back, qs: buildQuestions(objectives, n), i: 0, score: 0, answers: [], started: Date.now(), done: false };
      P.active = { quiz: QZ.quiz, title, kind: qkind, total: QZ.qs.length, score: 0, answered: 0, started: new Date().toISOString() }; save();
      drawQ();
    };
  }

  let timerId = null;
  function drawQ() {
    const q = QZ.qs[QZ.i], N = QZ.qs.length, L = "ABCD";
    const typeName = { mcq: "Multiple choice", tf: "True or false", typed: "Type your answer", match: "Match up" }[q.type];
    let body = "";
    if (q.type === "mcq") body = `<div class="opts">${q.options.map((o, k) => `<button class="opt ${isCodey(o) ? "codey" : ""}" data-v="${esc(o)}"><span class="ltr">${L[k]}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
    if (q.type === "tf") body = `<div class="proposed">Proposed answer: <b class="${isCodey(q.shown) ? "codey" : ""}">${esc(q.shown)}</b></div><div class="small muted mt-s">Is the proposed answer correct?</div><div class="opts tf"><button class="opt" data-v="True">✓ True</button><button class="opt" data-v="False">✗ False</button></div>`;
    if (q.type === "typed") body = `<div class="typed"><input class="input" id="typedIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type your answer…" aria-label="Your answer"></div><div class="small muted mt-s">Spelling matters, capitals don't. Press Enter to submit.</div>`;
    if (q.type === "match") body = `<div class="match">${q.pairs.map((p, k) => `<div class="mrow" data-row="${k}"><span>${esc(p.q)}</span><select data-k="${k}" aria-label="Answer for item ${k + 1}"><option value="">Choose…</option>${q.options.map(o => `<option>${esc(o)}</option>`).join("")}</select></div>`).join("")}</div>`;
    view.innerHTML = `<div class="quiz-wrap">
      <div class="quiz-top"><div class="qprog"><div class="row" style="justify-content:space-between"><b>Question ${QZ.i + 1} of ${N}</b><span class="small muted">${esc(QZ.title)}</span></div><div class="bar"><i style="width:${QZ.i / N * 100}%"></i></div></div>
      <div class="timer" id="timer"><svg width="70" height="70"><circle cx="35" cy="35" r="30" fill="none" stroke="var(--chip)" stroke-width="6"/><circle id="tring" cx="35" cy="35" r="30" fill="none" stroke="var(--navy)" stroke-width="6" stroke-linecap="round" stroke-dasharray="188.5" stroke-dashoffset="0"/></svg><div class="tnum" id="tnum">${C.secondsPerQuestion}</div></div></div>
      <div class="card qcard"><div class="qtype"><span class="tag sm">${typeName}</span> <span class="tag sm accent">${q.obj || ""}</span></div>
        <div class="qtext">${esc(q.prompt)}</div>${q.code ? `<pre class="q-code">${esc(q.code)}</pre>` : ""}${q.html ? `<div class="table-wrap">${q.html}</div>` : ""}
        ${body}<div id="fb"></div>
        <div class="qfoot"><span class="hint" id="hint">No skipping — answer to continue.</span><button class="btn primary" id="go" disabled>Submit answer</button></div></div></div>`;
    let sel = null; const go = $("#go");
    view.querySelectorAll(".opt").forEach(b => b.onclick = () => { if (QZ.locked) return; view.querySelectorAll(".opt").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); sel = b.dataset.v; go.disabled = false; });
    const ti = $("#typedIn"); if (ti) { ti.focus(); ti.oninput = () => { sel = ti.value; go.disabled = !ti.value.trim(); }; ti.onkeydown = e => { if (e.key === "Enter" && !go.disabled) go.click(); }; }
    view.querySelectorAll(".match select").forEach(s => s.onchange = () => { const v = [...view.querySelectorAll(".match select")].map(x => x.value); sel = v; go.disabled = v.some(x => !x); });
    QZ.locked = false; QZ.qStart = Date.now();
    go.onclick = () => { if (!QZ.locked) lock(sel); else nextQ(); };
    clearInterval(timerId);
    timerId = setInterval(() => {
      if (QZ.locked) return clearInterval(timerId);
      const left = C.secondsPerQuestion - (Date.now() - QZ.qStart) / 1000;
      const tn = $("#tnum"), ring = $("#tring"); if (!tn) return clearInterval(timerId);
      tn.textContent = Math.max(0, Math.ceil(left)); ring.setAttribute("stroke-dashoffset", String(188.5 * (1 - Math.max(0, left) / C.secondsPerQuestion)));
      $("#timer").classList.toggle("low", left <= 10); ring.setAttribute("stroke", left <= 10 ? "var(--bad)" : "var(--navy)");
      if (left <= 0) lock(null, true);
    }, 200);
  }
  function check(q, v) {
    if (v == null) return false;
    if (q.type === "mcq") return v === q.answer;
    if (q.type === "tf") return v === q.truth;
    if (q.type === "typed") { const a = norm(v), an = normNum(v); return q.accept.some(x => norm(x) === a || normNum(x) === an); }
    if (q.type === "match") return q.pairs.every((p, k) => v[k] === p.a);
    return false;
  }
  function lock(v, timedOut) {
    if (QZ.locked) return; QZ.locked = true; clearInterval(timerId);
    const q = QZ.qs[QZ.i], ok = check(q, v); if (ok) QZ.score++;
    QZ.answers.push({ q, v, ok, timedOut: !!timedOut, secs: Math.round((Date.now() - QZ.qStart) / 1000) });
    P.active.score = QZ.score; P.active.answered = QZ.answers.length; save();
    // reveal
    view.querySelectorAll(".opt").forEach(b => { b.disabled = true; const val = b.dataset.v; const good = q.type === "mcq" ? val === q.answer : val === q.truth; if (good) b.classList.add("right"); else if (val === v) b.classList.add("wrong"); });
    const ti = $("#typedIn"); if (ti) ti.disabled = true;
    view.querySelectorAll(".match select").forEach(s => { s.disabled = true; const k = +s.dataset.k; s.parentElement.classList.add(s.value === q.pairs[k].a ? "right" : "wrong"); });
    const correctTxt = q.type === "match" ? q.pairs.map(p => `${p.q} → <b>${esc(p.a)}</b>`).join("<br>") : q.type === "tf" ? `The proposed answer was <b>${q.truth === "True" ? "correct" : "wrong"}</b>. The correct answer is <b>${esc(q.answer)}</b>.` : `Correct answer: <b class="${isCodey(q.answer) ? "codey" : ""}">${esc(q.answer)}</b>`;
    $("#fb").innerHTML = `<div class="feedback ${ok ? "good" : "bad"}">${timedOut ? "<b>⏱ Time's up!</b> " : ok ? "<b>✓ Correct!</b> " : "<b>✗ Not quite.</b> "}${ok && q.type !== "match" ? "" : correctTxt}${q.expl ? `<div class="mt-s">${esc(q.expl)}</div>` : ""}</div>`;
    const go = $("#go"); go.disabled = false; go.textContent = QZ.i + 1 < QZ.qs.length ? "Next question →" : "See my score →"; $("#hint").textContent = `Score so far: ${QZ.score}/${QZ.answers.length}`; go.focus();
  }
  function nextQ() { QZ.i++; if (QZ.i >= QZ.qs.length) finishQuiz(false, true); else drawQ(); }

  function recordAttempt(quiz, title, kind, score, total, secs, incomplete) {
    const pct = Math.round(score / total * 100);
    const att = { id: Date.now().toString(36), quiz, title, kind, score, total, pct, secs, date: new Date().toISOString() };
    if (incomplete) att.incomplete = true; P.attempts.push(att); P.active = null; save();
    queue(Object.assign({ type: "result", quiz, title, kind, score, total, pct, secs, incomplete: !!incomplete, attemptNo: attemptsFor(quiz).length, date: att.date }, summary()));
    return att;
  }
  function finishQuiz(abandoned, show) {
    clearInterval(timerId); if (!QZ || QZ.done) return; QZ.done = true;
    const secs = Math.round((Date.now() - QZ.started) / 1000);
    const att = recordAttempt(QZ.quiz, QZ.title, QZ.kind, QZ.score, QZ.qs.length, secs, abandoned);
    if (show) showScore(att); else toast(`Quiz submitted: ${att.score}/${att.total} (${att.pct}%)`);
  }
  function showScore(att) {
    const tries = attemptsFor(att.quiz), prevT = tries[tries.length - 2], tr = trend(tries.map(t => t.pct));
    const pass = att.pct >= C.passMark, diff = prevT ? att.pct - prevT.pct : null, proj = tries.length >= 2 ? Math.round(tr.at(tries.length)) : null;
    const [k, id] = att.quiz.split(":");
    view.innerHTML = `<div class="quiz-wrap"><div class="card score-hero"><div class="eyebrow">${esc(QZ.title)}</div><div class="score-big">${att.pct}%</div><div class="h-md">${att.score} out of ${att.total} correct</div>
      <p class="mt">${pass ? `<span class="tag good">✓ Passed — great work!</span>` : `<span class="tag warn">Keep going — you need ${C.passMark}% to pass</span>`}</p>
      <p class="sub">${diff == null ? "This is your first try. Your next try will have new questions." : `${diff > 0 ? "▲ " + diff + " points better than" : diff < 0 ? "▼ " + (-diff) + " points lower than" : "The same as"} your last try.`} ${proj != null ? ` Trend: ${tr.slope > 2 ? "improving" : tr.slope < -2 ? "declining" : "steady"} · projected next try ≈ <b>${proj}%</b>.` : ""}</p>
      <div class="row mt" style="justify-content:center"><a class="btn primary" href="#quiz/${k}/${encodeURIComponent(id)}" id="again">Try again (new questions)</a><a class="btn" href="${QZ.back}">Back</a><a class="btn" href="#results/${encodeURIComponent(att.quiz)}">My progress graph</a></div></div>
      <div class="card mt"><h3 class="h-md">Review your answers</h3>${QZ.answers.map((a, i) => `<div class="review-item"><div class="q">${a.ok ? '<span class="up">✓</span>' : '<span class="down">✗</span>'} ${i + 1}. ${esc(a.q.prompt)}</div>${a.q.code ? `<pre class="q-code">${esc(a.q.code)}</pre>` : ""}
        <div class="a">${a.timedOut ? "Ran out of time. " : a.q.type === "match" ? "" : `Your answer: ${esc(Array.isArray(a.v) ? a.v.join(", ") : a.v == null ? "—" : a.q.type === "tf" ? a.v + " (proposed: " + a.q.shown + ")" : a.v)}. `}${a.ok ? "" : `Correct: <b>${a.q.type === "match" ? a.q.pairs.map(p => esc(p.a)).join(" · ") : esc(a.q.answer)}</b>`}</div></div>`).join("")}</div></div>`;
    $("#again").onclick = e => { e.preventDefault(); QZ = null; const h = `#quiz/${k}/${encodeURIComponent(id)}`; if (location.hash === h) render(); else location.hash = h; };
  }

  /* ================= RESULTS ================= */
  function lineChart(vals, labels) {
    const W = 720, H = 270, l = 40, r = 20, t = 18, b = 34, n = vals.length, ext = n >= 2 ? 3 : 0;
    const X = i => l + (n + ext <= 1 ? (W - l - r) / 2 : i * (W - l - r) / (n + ext - 1)), Y = v => t + (100 - v) * (H - t - b) / 100;
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Scores per try with trend line">`;
    [0, 25, 50, 75, 100].forEach(v => { s += `<line x1="${l}" x2="${W - r}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)" stroke-width="1"/><text x="${l - 8}" y="${Y(v) + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${v}%</text>`; });
    s += `<line x1="${l}" x2="${W - r}" y1="${Y(C.passMark)}" y2="${Y(C.passMark)}" stroke="var(--good)" stroke-width="1.5" stroke-dasharray="4 4"/><text x="${W - r}" y="${Y(C.passMark) - 6}" text-anchor="end" font-size="11" fill="var(--good)" font-weight="700">Pass ${C.passMark}%</text>`;
    if (n >= 2) { const tr = trend(vals); s += `<line x1="${X(0)}" y1="${Y(tr.at(0))}" x2="${X(n - 1)}" y2="${Y(tr.at(n - 1))}" stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 5"/><line x1="${X(n - 1)}" y1="${Y(tr.at(n - 1))}" x2="${X(n - 1 + ext)}" y2="${Y(tr.at(n - 1 + ext))}" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3 5"/>`;
      for (let k = 1; k <= ext; k++) { const v = Math.round(tr.at(n - 1 + k)); s += `<circle cx="${X(n - 1 + k)}" cy="${Y(v)}" r="5" fill="#fff" stroke="var(--accent)" stroke-width="2" data-tip="Projected try ${n + k}: ≈${v}%"/>`; }
      s += `<text x="${X(n - 1 + ext)}" y="${Y(tr.at(n - 1 + ext)) - 12}" text-anchor="end" font-size="11.5" fill="var(--accent)" font-weight="700">Projection</text>`; }
    if (n) s += `<polyline fill="none" stroke="var(--navy)" stroke-width="2.5" stroke-linejoin="round" points="${vals.map((v, i) => X(i) + "," + Y(v)).join(" ")}"/>`;
    vals.forEach((v, i) => { s += `<circle cx="${X(i)}" cy="${Y(v)}" r="5.5" fill="var(--navy)" stroke="#fff" stroke-width="2" data-tip="${esc(labels[i])}"/><circle cx="${X(i)}" cy="${Y(v)}" r="14" fill="transparent" data-tip="${esc(labels[i])}"/>`; });
    for (let i = 0; i < n + ext; i++) if (n + ext <= 16 || i % Math.ceil((n + ext) / 12) === 0) s += `<text x="${X(i)}" y="${H - 12}" text-anchor="middle" font-size="11" fill="var(--muted)">${i < n ? "Try " + (i + 1) : "+" + (i - n + 1)}</text>`;
    if (n) s += `<text x="${X(n - 1)}" y="${Y(vals[n - 1]) - 12}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">${vals[n - 1]}%</text>`;
    return s + "</svg>";
  }
  function barChart() {
    const W = 720, H = 210, l = 40, r = 10, t = 14, b = 34, days = [...Array(14).keys()].map(i => addDays(today(), i - 13));
    const vals = days.map(d => Math.round((P.time.days[dayKey(d)] || 0) / 60)), max = Math.max(30, ...vals), top = Math.ceil(max / 30) * 30;
    const bw = (W - l - r) / 14, Y = v => t + (top - v) * (H - t - b) / top;
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Minutes of study per day, last 14 days">`;
    [0, top / 2, top].forEach(v => { s += `<line x1="${l}" x2="${W - r}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/><text x="${l - 8}" y="${Y(v) + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${v}m</text>`; });
    vals.forEach((v, i) => { const x = l + i * bw + 3, h = Y(0) - Y(v); const tipTxt = `${fmtD(days[i], { weekday: "short", day: "numeric", month: "short" })}: ${v} min`;
      if (v > 0) s += `<path d="M${x},${Y(0)} V${Y(v) + Math.min(4, h)} q0,-4 4,-4 h${bw - 14} q4,0 4,4 V${Y(0)} Z" fill="var(--navy)" data-tip="${tipTxt}"/>`;
      s += `<rect x="${x}" y="${t}" width="${bw - 6}" height="${H - t - b}" fill="transparent" data-tip="${tipTxt}"/><text x="${x + (bw - 6) / 2}" y="${H - 12}" text-anchor="middle" font-size="10.5" fill="var(--muted)">${days[i].getDate()}</text>`; });
    return s + "</svg>";
  }
  function vResults(sel) {
    const all = P.attempts, quizzes = [...new Set(all.map(a => a.quiz))];
    sel = sel && quizzes.includes(sel) ? sel : "all";
    const series = sel === "all" ? all : attemptsFor(sel);
    const vals = series.map(a => a.pct), labels = series.map((a, i) => `Try ${i + 1}: ${a.pct}% — ${a.title}<br>${fmtDT(a.date)}`), tr = trend(vals);
    const avg = all.length ? Math.round(all.reduce((x, y) => x + y.pct, 0) / all.length) : 0;
    const wk = Object.entries(P.time.days).filter(([k]) => parseD(k) >= addDays(today(), -6)).reduce((a, [, v]) => a + v, 0);
    const rows = quizzes.map(q => { const a = attemptsFor(q), v = a.map(x => x.pct), t = trend(v); return { q, title: a[a.length - 1].title, n: a.length, first: v[0], last: v[v.length - 1], best: Math.max(...v), slope: t.slope, proj: a.length >= 2 ? Math.round(t.at(a.length)) : null, time: q.startsWith("T:") ? P.time.topics[q.slice(2)] || 0 : null }; });
    view.innerHTML = `<div class="hero-row"><div><div class="eyebrow">Personal tracker</div><h1 class="h-xl">My results</h1><div class="sub">Every quiz try, your trend, a projection of your next scores, and the time you've put in.</div></div>
      <div class="row no-print"><button class="btn sm" id="csv">Export CSV</button>${C.googleSheetsUrl ? '<button class="btn sm" id="syncNow">Sync to teacher</button>' : ""}<button class="btn sm" onclick="window.print()">Print</button></div></div>
      <div class="section grid4">
        <div class="card stat top"><div class="lbl">Quiz tries</div><div class="num">${all.length}</div><div class="cap">${quizzes.length} different quizzes</div></div>
        <div class="card stat"><div class="lbl">Average score</div><div class="num">${all.length ? avg + "%" : "—"}</div><div class="cap">Across all tries</div></div>
        <div class="card stat"><div class="lbl">Overall trend</div><div class="num" style="font-size:22px">${all.length > 1 ? trendLabel(trend(all.map(a => a.pct)).slope) : "—"}</div><div class="cap">${all.length > 1 ? `${trend(all.map(a => a.pct)).slope >= 0 ? "+" : ""}${trend(all.map(a => a.pct)).slope.toFixed(1)} points per try` : "Needs 2+ tries"}</div></div>
        <div class="card stat"><div class="lbl">Hours put in</div><div class="num">${hours(P.time.total || 0)} h</div><div class="cap">${fmtTime(wk)} in the last 7 days</div></div>
      </div>
      <div class="section card chart-card"><div class="chart-tools"><h2 class="h-md" style="flex:1">Progress per try</h2><select class="input" id="sel" aria-label="Choose quiz"><option value="all">All quizzes (in order)</option>${quizzes.map(q => `<option value="${esc(q)}" ${q === sel ? "selected" : ""}>${esc(attemptsFor(q)[0].title)}</option>`).join("")}</select></div>
        ${vals.length ? `<div class="small muted" style="margin-bottom:6px">Navy line = your scores · grey dashes = trend · orange = projected next 3 tries. ${vals.length > 1 ? "Status: " + trendLabel(tr.slope) : ""}</div>${lineChart(vals, labels)}` : `<div class="empty">No tries yet. Take a topic quiz and your graph will appear here.</div>`}</div>
      <div class="section card chart-card"><h2 class="h-md">Study time · last 14 days</h2><div class="small muted" style="margin:4px 0 8px">Active minutes on Compass each day (counted only while you're using the page).</div>${barChart()}</div>
      <div class="section card"><h2 class="h-md">By quiz</h2>${rows.length ? `<div class="table-wrap mt-s"><table class="data-table"><tr><th>Quiz</th><th>Tries</th><th>First</th><th>Latest</th><th>Best</th><th>Trend</th><th>Next (proj.)</th><th>Topic time</th></tr>
        ${rows.map(r => `<tr><td><a href="#results/${encodeURIComponent(r.q)}">${esc(r.title)}</a></td><td class="n">${r.n}</td><td class="n">${r.first}%</td><td class="n">${r.last}%</td><td class="n"><b>${r.best}%</b> ${r.best >= C.passMark ? "✓" : ""}</td><td>${r.n > 1 ? trendLabel(r.slope) : '<span class="flat">—</span>'}</td><td class="n">${r.proj == null ? "—" : r.proj + "%"}</td><td class="small">${r.time == null ? "—" : fmtTime(r.time)}</td></tr>`).join("")}</table></div>` : `<div class="empty">Nothing yet.</div>`}</div>
      <div class="section card"><h2 class="h-md">All tries</h2>${all.length ? `<div class="table-wrap mt-s"><table class="data-table"><tr><th>When</th><th>Quiz</th><th>Type</th><th>Score</th><th>Time taken</th></tr>${all.slice().reverse().map(a => `<tr><td class="small">${fmtDT(a.date)}</td><td>${esc(a.title)}${a.incomplete ? ' <span class="tag sm warn">left early</span>' : ""}</td><td class="small">${a.kind === "topic" ? "Topic quiz" : a.kind === "unit" ? "Unit test" : "Spot check"}</td><td class="n"><b>${a.pct}%</b> (${a.score}/${a.total})</td><td class="small">${fmtTime(a.secs)}</td></tr>`).join("")}</table></div>` : `<div class="empty">Nothing yet.</div>`}</div>`;
    $("#sel").onchange = e => { location.hash = e.target.value === "all" ? "#results" : "#results/" + encodeURIComponent(e.target.value); };
    $("#csv").onclick = exportCSV;
    const sn = $("#syncNow"); if (sn) sn.onclick = () => { queueActivity(); toast("Sending your results to your teacher…"); };
  }
  function download(name, text, type) { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); }
  function exportCSV() {
    const q = v => `"${String(v).replace(/"/g, '""')}"`;
    const lines = [["Name", "Class", "Date", "Quiz", "Type", "Score", "Total", "Percent", "Seconds", "Left early"].join(",")].concat(P.attempts.map(a => [P.name, P.cls, a.date, a.title, a.kind, a.score, a.total, a.pct, a.secs, a.incomplete ? "yes" : ""].map(q).join(",")));
    lines.push(""); lines.push(q("Total study hours") + "," + hours(P.time.total || 0));
    download(`${P.name.replace(/\s+/g, "_")}_${P.cls}_results.csv`, lines.join("\n"), "text/csv");
  }

  /* ================= HELP ================= */
  function vHelp() {
    view.innerHTML = `<div class="eyebrow">Help</div><h1 class="h-xl">How Compass works</h1>
      <div class="section card help">
        <h4>1. Follow your weekly plan</h4><p>Each week lists the topics you must finish. Open a topic in <b>Resources</b>, read it carefully, and press <b>Mark as read</b>.</p>
        <h4>2. Pass the topic quiz</h4><p>Every topic has a ${C.questionsPerQuiz}-question quiz based on its learning objectives. You need <b>${C.passMark}%</b> to pass. Each question has a <b>${C.secondsPerQuestion}-second timer</b> and you <b>can't skip</b>. Every try gives you <b>new questions and different question types</b>, so retrying is real practice, not memorising.</p>
        <h4>3. Spot checks and unit tests</h4><p>Every Friday there is a spot check on that week's topics. At the end of each unit there is a ${C.questionsPerUnitTest}-question unit test. Find them in <b>Calendar &amp; assessments</b>.</p>
        <h4>4. Track your progress</h4><p><b>My results</b> shows a graph of every try, whether you're <span class="up">improving</span> or <span class="down">declining</span>, a projection of your next scores, and how many hours you've studied. Time is only counted while you're actively using the page.</p>
        <h4>Question types</h4><ul><li><b>Multiple choice</b> — pick one answer.</li><li><b>True or false</b> — decide whether the proposed answer is correct.</li><li><b>Type your answer</b> — spelling matters, capitals don't.</li><li><b>Match up</b> — choose the right answer for each of three questions. All three must be right.</li></ul>
        <h4>Where is my data saved?</h4><p>Your progress is saved in <b>this browser on this device</b>. Use the same device and browser each time. ${C.googleSheetsUrl ? "Your quiz results and study time are also sent to your teacher automatically." : ""} If you change device, open your name (bottom left) → <b>Download backup</b>, then <b>Restore backup</b> on the new device.</p>
        <h4>Rules</h4><ul><li>Leaving or refreshing the page during a quiz submits it — unanswered questions count as wrong.</li><li>Do the quizzes yourself. They're for <i>you</i> to see what you really know.</li></ul>
      </div>`;
  }

  /* ================= PROFILES ================= */
  function loginModal() {
    if (document.querySelector(".overlay")) return;
    const ps = Object.values(DB.profiles);
    modal(`<div class="eyebrow">Welcome to ${esc(C.siteName)}</div><h2 class="mt-s">${esc(C.subtitle)}</h2><p class="sub small">Your personal topic tracker. ${C.googleSheetsUrl ? "Your results are shared with your teacher." : "Your progress is saved in this browser."}</p>
      ${ps.length ? `<div class="mt"><div class="lbl" style="color:var(--ink-2)">Continue as</div>${ps.map(p => `<button class="profile-btn" data-p="${p.id}"><span class="avatar">${esc(initials(p.name))}</span><span><b>${esc(p.name)}</b><br><span class="small muted">${esc(p.cls)} · ${p.attempts.length} quiz tries</span></span></button>`).join("")}</div><div class="lbl mt" style="color:var(--ink-2)">Or add a new student</div>` : ""}
      <form id="newP"><div class="field"><label for="nm">Full name</label><input class="input" id="nm" required maxlength="40" placeholder="e.g. Ana Reyes" autocomplete="name"></div>
      <div class="field"><label for="cl">Class</label><select class="input" id="cl">${C.classes.map(c => `<option>${esc(c)}</option>`).join("")}</select></div>
      <button class="btn primary mt" style="width:100%" type="submit">Start →</button></form>`, (o, close) => {
      o.querySelectorAll("[data-p]").forEach(b => b.onclick = () => { useProfile(b.dataset.p); close(); afterLogin(); });
      o.querySelector("#newP").onsubmit = e => { e.preventDefault(); const name = o.querySelector("#nm").value.trim().replace(/\s+/g, " "); if (!name) return; const p = newProfile(name, o.querySelector("#cl").value); DB.profiles[p.id] = p; useProfile(p.id); close(); queueActivity(); afterLogin(); };
    });
  }
  function profileModal() {
    if (!P) return loginModal(); if (QZ && !QZ.done) return toast("Finish your quiz first.");
    modal(`<div class="row"><span class="avatar" style="width:48px;height:48px;font-size:17px">${esc(initials(P.name))}</span><div><h2 style="font-size:22px">${esc(P.name)}</h2><div class="small muted">${esc(P.cls)} · since ${fmtD(new Date(P.created), { day: "numeric", month: "short", year: "numeric" })}</div></div></div>
      <div class="field"><label for="cl2">Class</label><select class="input" id="cl2">${C.classes.map(c => `<option ${c === P.cls ? "selected" : ""}>${esc(c)}</option>`).join("")}</select></div>
      <div class="items mt">
        <button class="btn" id="bk">⬇ Download backup (to move to another device)</button>
        <label class="btn" style="cursor:pointer">⬆ Restore backup<input type="file" id="rs" accept=".json,application/json" hidden></label>
        <button class="btn" id="sw">⇄ Switch student</button>
        <button class="btn" id="cls">Close</button>
      </div>`, (o, close) => {
      o.querySelector("#cl2").onchange = e => { P.cls = e.target.value; save(); chrome(); };
      o.querySelector("#bk").onclick = () => download(`compass_backup_${P.name.replace(/\s+/g, "_")}.json`, JSON.stringify(P), "application/json");
      o.querySelector("#rs").onchange = e => { const f = e.target.files[0]; if (!f) return; const rd = new FileReader(); rd.onload = () => { try { const d = JSON.parse(rd.result); if (!d.id || !Array.isArray(d.attempts)) throw 0; DB.profiles[d.id] = d; useProfile(d.id); close(); toast("Backup restored for " + d.name); render(); } catch (err) { toast("That file is not a Compass backup."); } }; rd.readAsText(f); };
      o.querySelector("#sw").onclick = () => { close(); DB.current = null; P = null; save(); loginModal(); };
      o.querySelector("#cls").onclick = close;
    });
  }
  function syncModal() {
    if (!P) return;
    modal(`<h2 style="font-size:22px">Saving &amp; syncing</h2>
      <p class="sub small">Your progress is always saved in this browser.</p>
      ${C.googleSheetsUrl ? `<div class="item mt"><div class="ic ${P.outbox.length ? "accent" : "good"}">${P.outbox.length ? "!" : "✓"}</div><div><div class="tt">${P.outbox.length ? P.outbox.length + " update(s) waiting to send" : "All results sent to your teacher"}</div><div class="ds">Last sent: ${P.lastSync ? fmtDT(P.lastSync) : "not yet"}</div></div></div>
        <div class="row mt"><button class="btn primary" id="sn">Sync now</button><button class="btn" id="cx">Close</button></div>` : `<div class="item mt"><div class="ic">i</div><div class="ds">Teacher sync is not switched on for this site. Use <b>My results → Export CSV</b> to send your results.</div></div><button class="btn mt" id="cx">Close</button>`}`, (o, close) => {
      const sn = o.querySelector("#sn"); if (sn) sn.onclick = () => { queueActivity(); close(); toast("Syncing…"); };
      o.querySelector("#cx").onclick = close;
    });
  }
  function afterLogin() {
    if (P.active) { const a = P.active; recordAttempt(a.quiz, a.title, a.kind, a.score, a.total, Math.round((Date.now() - new Date(a.started)) / 1000), true); toast(`Your unfinished quiz “${a.title}” was submitted: ${a.score}/${a.total}.`, 5000); }
    render(); flush();
  }

  /* ---------------- init ---------------- */
  if (DB.current && DB.profiles[DB.current]) { useProfile(DB.current); afterLogin(); } else { chrome("home"); loginModal(); }
  window.__compass = { buildQuestions, TOPICS, schedule }; // for testing
})();
