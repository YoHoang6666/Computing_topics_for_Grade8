# Compass · Grade 8 Computing

A student topic tracker for Grade 8 Computing (Cambridge Lower Secondary Stage 9 objectives).
It's built in plain HTML, CSS and JavaScript, so it runs on GitHub Pages with no build step.

**Pages:** Home · Weekly plan · Calendar & assessments · Resources (topic readings) · My results (graphs, projection, study hours) · Help

---

## 1. Put it on GitHub Pages (about 5 minutes)

1. Create a free account at github.com and click **New repository**. Name it, for example `computing8`, set it to **Public** and click **Create**.
2. Click **uploading an existing file**. Drag in **everything inside this folder** (`index.html`, the `css`, `js` and `google-apps-script` folders, and this README). Click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, then branch **main** and folder **/ (root)**. Click **Save**.
4. Wait 1–2 minutes. Your site will be live at `https://YOUR-USERNAME.github.io/computing8/`. Share that link with your students.

To change something later, open the file on GitHub, click the ✏️ pencil, edit it, then **Commit**. The site updates within a minute or two.

## 2. Connect Google Sheets so you can see every student's results

1. Create a new Google Sheet (for example "Compass – Grade 8 results").
2. Go to **Extensions → Apps Script**. Delete what's there, paste in everything from `google-apps-script/Code.gs`, and click 💾 **Save**.
3. Click **Deploy → New deployment**. Click the ⚙️ gear and choose **Web app**.
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
4. Click **Deploy** and allow the permissions. (Google may warn that the app isn't verified. Click **Advanced → Go to project**. This is your own script.)
5. Copy the **Web app URL**. It ends in `/exec`.
6. Open `js/config.js` and paste the URL between the quotes:
   `googleSheetsUrl: "https://script.google.com/macros/s/....../exec",`
7. Commit the change.

Your sheet then fills in on its own:

- **Results tab:** one row for every quiz try (student, class, quiz, score, %, time taken, try number, total hours).
- **Students tab:** one row per student, showing total study hours, number of tries, average %, topics passed and when they were last seen.

> If you edit `Code.gs` later, go to **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. This keeps the same URL.

## 3. Settings you'll want to change (`js/config.js`)

| Setting | What it does |
|---|---|
| `teacherNote` | The weekly message on every student's Home page |
| `classes` | The class list students pick from |
| `semesters[].start` | The Monday of Week 1 for each semester |
| `weeklyPlan` | Which topics go in which week. Add `start: "YYYY-MM-DD"` to a week to move it (for example after a holiday) |
| `passMark` | The % needed to pass a topic (default 70) |
| `secondsPerQuestion` | The timer for each question (default 45) |
| `questionsPerQuiz / Spot / UnitTest` | Quiz lengths (20 / 20 / 30) |
| `openSpotEarly` | Lets a spot check open early once the student has tried every topic quiz in it |
| `extraLinks` | Optional videos or links for each topic |

## 4. How it works

- **Topic readings** are in `js/content-s1.js` (Units 1–3) and `js/content-s2.js` (Units 4–6). Unit 5 automatically re-uses Unit 1 as a revisit. Its tries are tracked separately, so students can compare against their Semester 1 scores.
- **Quizzes** draw from the question banks in `js/bank-*.js`. Questions are grouped by learning objective, and there are about 600 written questions. On top of that, `js/generators.js` creates brand-new questions with random values: data types, loop tracing, list indexing, string methods, test data, binary search, storage conversions, sound sampling, logic gates, parity (1D and 2D), spreadsheet functions and database queries.
- Every try picks a fresh set of questions and randomly turns each one into a **multiple choice**, **true/false**, **typed answer** or **match-up** question.
- **Rules:** each question has a 45-second timer and students can't skip. Leaving or refreshing the page submits the quiz, and unanswered questions count as wrong.
- **Tracking:** every try is stored. *My results* shows a line graph of scores per try, a trend line (improving, steady or declining) and a projection of the next 3 tries. It also shows active study minutes per day and total hours. Time only counts while the page is open and the student has been active in the last 2 minutes.
- **Storage:** progress is saved in each student's browser (`localStorage`), and results are also sent to your Google Sheet. Students can download a backup and restore it on another device.

### Adding your own questions

Open the right `js/bank-*.js` file and add a line under the objective:

```js
["Question text?", "Correct answer", ["Wrong 1", "Wrong 2", "Wrong 3"], { e: "Optional explanation", t: true }],
```

`t: true` lets the question also appear as a typed answer. Use this only for short answers. Add `c: "code here"` to show a code box.
