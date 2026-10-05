/* =====================================================================
   COMPASS · GRADE 8 COMPUTING — TEACHER SETTINGS
   This is the only file you normally need to edit.
   ===================================================================== */
window.CONFIG = {
  siteName: "Compass",
  subtitle: "Grade 8 Computing",
  academicYear: "2026–2027",
  teacherName: "Mr Gilbert Madrazo",
  classes: ["8A", "8B", "8C", "8D"],

  /* Shown on every student's Home page. Change it each week. */
  teacherNote: {
    title: "Teacher note",
    text: "Great effort so far! Read each topic carefully before you try the quiz. Aim for 70% or more, and retry any quiz you did not pass — every try gives you new questions."
  },

  /* Paste your Google Apps Script Web App URL here (see README.md).
     Leave as "" to save results only in the student's browser. */
  googleSheetsUrl: "https://script.google.com/a/macros/stu.vinschool.edu.vn/s/AKfycbzBck5ZjcaEucGoJ1Kj3ol2-K35RP1Z5W8OMjZ29wq31h-auoFVkd5EiEr5r1THG9Pu/exec",

  passMark: 70,             // % needed to count a topic as "passed"
  secondsPerQuestion: 45,   // timer for every quiz question
  questionsPerQuiz: 20,     // topic quizzes
  questionsPerSpot: 20,     // weekly spot checks
  questionsPerUnitTest: 30, // unit tests

  /* Monday of week 1 for each semester (YYYY-MM-DD). */
  semesters: [
    { id: 1, name: "Semester 1", start: "2026-08-17", units: ["u1", "u2", "u3"] },
    { id: 2, name: "Semester 2", start: "2027-01-11", units: ["u4", "u5", "u6"] }
  ],

  /* Weekly plan. Each week lists the topic IDs students must finish.
     Add  start: "YYYY-MM-DD"  to a week to move it (e.g. after a holiday);
     later weeks keep counting from that date.
     unitTest: "u1" puts a unit test on that week's Friday instead of a spot check. */
  weeklyPlan: {
    1: [
      { week: 1,  topics: ["9.1.1"] },
      { week: 2,  topics: ["9.1.2", "9.1.3"] },
      { week: 3,  topics: ["9.1.4"] },
      { week: 4,  topics: ["9.1.5"] },
      { week: 5,  topics: ["9.1.6"] },
      { week: 6,  topics: ["9.1.7"] },
      { week: 7,  topics: ["9.1.8", "9.1.9"] },
      { week: 8,  topics: ["9.1.10"], unitTest: "u1" },
      { week: 9,  topics: ["9.4.1"] },
      { week: 10, topics: ["9.4.2"] },
      { week: 11, topics: ["9.4.3", "9.4.4"] },
      { week: 12, topics: ["9.4.5"] },
      { week: 13, topics: ["9.4.6", "9.4.7"] },
      { week: 14, topics: ["9.4.8"], unitTest: "u2" },
      { week: 15, topics: ["9.3.1"] },
      { week: 16, topics: ["9.3.2"] },
      { week: 17, topics: ["9.3.3"] },
      { week: 18, topics: ["9.3.4"], unitTest: "u3" }
    ],
    2: [
      { week: 1,  topics: ["9.2.1"] },
      { week: 2,  topics: ["9.2.2"] },
      { week: 3,  topics: ["9.2.3"] },
      { week: 4,  topics: ["9.2.4"] },
      { week: 5,  topics: ["9.2.5"] },
      { week: 6,  topics: ["9.2.6"] },
      { week: 7,  topics: ["9.2.7"] },
      { week: 8,  topics: ["9.2.9"], unitTest: "u4" },
      { week: 9,  topics: ["R9.1.1", "R9.1.2", "R9.1.3"] },
      { week: 10, topics: ["R9.1.4", "R9.1.5"] },
      { week: 11, topics: ["R9.1.6", "R9.1.7"] },
      { week: 12, topics: ["R9.1.8", "R9.1.9", "R9.1.10"], unitTest: "u5" },
      { week: 13, topics: ["9.6.1"] },
      { week: 14, topics: ["9.6.2"] },
      { week: 15, topics: ["9.6.3"] },
      { week: 16, topics: ["9.6.4"] },
      { week: 17, topics: ["9.6.5"] },
      { week: 18, topics: ["9.6.6"] },
      { week: 19, topics: ["9.6.7"] },
      { week: 20, topics: ["9.6.9"], unitTest: "u6" }
    ]
  },

  /* Spot exams open on their date, OR earlier once the student has
     tried every topic quiz in that week. */
  openSpotEarly: true,

  /* Optional extra links per topic, shown in Resources.
     Example: "9.1.1": [{ label: "Python data types video", url: "https://..." }] */
  extraLinks: {}
};
