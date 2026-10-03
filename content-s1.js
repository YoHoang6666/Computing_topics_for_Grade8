/* Learning objectives and Semester 1 topics (Units 1–3) */
window.OBJECTIVES = {
  "9CT.01": "Follow, understand, edit and correct algorithms that are presented as pseudocode.",
  "9CT.02": "Follow flowchart or pseudocode algorithms that use loops.",
  "9CT.03": "Know how to create algorithms using flowcharts and pseudocode.",
  "9CT.04": "Know how to use predefined sub-routines in flowcharts or pseudocode.",
  "9CT.05": "Describe and use binary searches.",
  "9CT.06": "Understand and use iteration statements, limited to count-controlled loops, presented as either flowcharts or pseudocode.",
  "9CT.07": "Predict the outcome of algorithms that use iteration.",
  "9CT.08": "Compare and contrast algorithms designed for the same tasks to determine which is best suited to the purpose.",
  "9CT.09": "Combine multiple constructs (sequence, selection, count-controlled iteration) to write algorithms as flowcharts or pseudocode.",
  "9P.01": "Explain the purpose of a one-dimensional array.",
  "9P.02": "Identify and describe data types in text-based programs, including integer, real, character, string and Boolean.",
  "9P.03": "Know how to develop text-based programs with count-controlled loops.",
  "9P.04": "Know how to access data from an array using a text-based language.",
  "9P.05": "Know how to develop text-based programs using string manipulation, including length, uppercase and lowercase.",
  "9P.06": "Use iterative development on software prototypes to produce solutions to problems.",
  "9P.07": "Evaluate the processes that are followed to develop programs.",
  "9P.08": "Know how to develop and apply test plans that include normal, extreme and invalid data.",
  "9P.09": "Identify test data that covers normal, extreme and invalid data.",
  "9P.10": "Identify a range of errors, including syntax, logic and runtime errors.",
  "9P.11": "Use trace tables to systematically debug text-based programs.",
  "9CS.01": "Identify improvements to the design of digital devices, based on prototypes and a range of factors including user experience, accessibility, ergonomics and emerging technologies.",
  "9CS.02": "Understand which tasks are carried out by an operating system.",
  "9CS.03": "Describe examples of utility programs including drivers, security software and defragmentation.",
  "9CS.04": "Understand that there are different types of translator, including the main characteristics of compilers and interpreters.",
  "9CS.05": "Describe how analogue sound is digitised.",
  "9CS.06": "Know how to convert between storage units.",
  "9CS.07": "Know how to draw logic circuits for Boolean expressions.",
  "9CS.08": "Understand that computers store lists of instructions to be run one at a time.",
  "9CS.09": "Understand the fetch–decode–execute cycle.",
  "9CS.10": "Describe a range of scenarios where machine learning is used.",
  "9CS.11": "Describe the benefits and risks of the computerisation of traditional manufacturing and industrial practices, for example Industry 4.0.",
  "9MD.01": "Evaluate the use of models that represent real-life systems.",
  "9MD.02": "Know how to use functions in spreadsheets to analyse data, including IF, MIN, MAX, COUNT.",
  "9MD.03": "Create spreadsheets that model real-life systems.",
  "9MD.04": "Evaluate the suitability of pre-existing spreadsheets for given purposes.",
  "9MD.05": "Know how to create relational databases with two or more linked tables.",
  "9MD.06": "Know how to create complex searches for data in databases using two or more criteria.",
  "9MD.07": "Create complex searches in relational databases.",
  "9MD.08": "Define the term ‘Big Data’ and describe its applications.",
  "9DC.01": "Know that there are different network topologies, including bus, ring and star.",
  "9DC.02": "Explain the role of protocols in transmitting data, including TCP/IP and HTTP.",
  "9DC.03": "Explain the scalability factors that should be considered when designing networks.",
  "9DC.04": "Understand the role of parity bits in error detection.",
  "9DC.05": "Explain the choices that should be made when implementing network security, including accessibility, cost and the relative security requirements of different datasets."
};

window.UNITS = window.UNITS || [];

window.UNITS.push({
  id: "u1", semester: 1, num: 1,
  title: "Programming a chatbot",
  blurb: "Data types, algorithms, loops, arrays, testing and debugging — all while building a chatbot in Python.",
  topics: [
{
  id: "9.1.1", title: "Chatbots & data types and collecting data", pages: "8–15",
  objectives: ["9P.02", "9CT.03"],
  summary: "Every piece of data in a program has a type. Algorithms can be planned as flowcharts or pseudocode.",
  reading: `
<p>A <b>chatbot</b> is a program that has a conversation with a user. It asks questions, stores the answers and replies. To do that, it must store <b>data</b> — and every piece of data has a <b>data type</b>.</p>
<h4>The five data types you must know</h4>
<table class="tbl"><tr><th>Data type</th><th>What it stores</th><th>Examples</th></tr>
<tr><td><b>Integer</b></td><td>Whole numbers (no decimal point)</td><td>14, 0, -3</td></tr>
<tr><td><b>Real</b> (float in Python)</td><td>Numbers with a decimal point</td><td>3.14, 1.5, -0.25</td></tr>
<tr><td><b>Character</b></td><td>One single letter, digit or symbol</td><td>'A', '7', '?'</td></tr>
<tr><td><b>String</b></td><td>Text — a group of characters</td><td>"Hello", "8B", "07700 900123"</td></tr>
<tr><td><b>Boolean</b></td><td>Only two values: True or False</td><td>True, False</td></tr></table>
<div class="tip"><b>Watch out!</b> A phone number is stored as a <b>string</b>, not an integer — you never do maths with it and it may start with 0.</div>
<h4>Collecting data in Python</h4>
<p><code>input()</code> always gives back a <b>string</b>. If you need a number, convert it:</p>
<pre class="code">name = input("What is your name? ")        # string
age = int(input("How old are you? "))       # integer
height = float(input("Height in metres? ")) # real
likes_cats = True                           # Boolean
print("Nice to meet you,", name)</pre>
<h4>Planning: flowcharts and pseudocode</h4>
<p>An <b>algorithm</b> is a set of step-by-step instructions to solve a problem. Before coding we plan it.</p>
<ul>
<li><b>Flowchart</b> — a diagram. <i>Oval</i> = Start/Stop, <i>parallelogram</i> = input/output, <i>rectangle</i> = process, <i>diamond</i> = decision (Yes/No). Arrows show the order.</li>
<li><b>Pseudocode</b> — instructions written in structured English that look a bit like code but don't follow strict rules.</li>
</ul>
<pre class="code">OUTPUT "What is your name?"
INPUT Name
OUTPUT "Hello " + Name
IF Name = "Robi" THEN
   OUTPUT "Welcome back!"
ENDIF</pre>
<div class="keywords"><b>Key words:</b> data type, integer, real, character, string, Boolean, algorithm, flowchart, pseudocode, input, output</div>`
},
{
  id: "9.1.2", title: "Developing in iterations", pages: "16–18",
  objectives: ["9P.06"],
  summary: "Build a small working version (a prototype), test it, improve it, and repeat.",
  reading: `
<p>Programmers rarely write a whole program in one go. Instead they use <b>iterative development</b>: build a little, test it, improve it, and repeat. Each repeat is called an <b>iteration</b>.</p>
<h4>What is a prototype?</h4>
<p>A <b>prototype</b> is an early, simple version of a program. It does not have every feature yet, but it works well enough to test and show to users.</p>
<h4>The cycle</h4>
<ol><li><b>Plan</b> — decide what this version should do.</li>
<li><b>Design</b> — draw a flowchart or write pseudocode.</li>
<li><b>Code</b> — write the program.</li>
<li><b>Test</b> — run it, find errors, get feedback from users.</li>
<li><b>Review / evaluate</b> — decide what to fix or add next. Then go back to step 1.</li></ol>
<h4>Example: a chatbot</h4>
<ul><li><b>Version 1:</b> asks the user's name and says hello.</li>
<li><b>Version 2:</b> also asks their age and replies differently for different ages.</li>
<li><b>Version 3:</b> remembers a list of favourite hobbies and asks about each one.</li></ul>
<h4>Why work this way?</h4>
<ul><li>Errors are found early, when they are small and easy to fix.</li>
<li>Users can give feedback on each version.</li>
<li>You always have a working program to show.</li>
<li>It is easier to change your plans if needs change.</li></ul>
<div class="tip">Save each version with a new name (chatbot_v1.py, chatbot_v2.py…) so you can go back if something breaks.</div>
<div class="keywords"><b>Key words:</b> iterative development, iteration, prototype, feedback, version, evaluate</div>`
},
{
  id: "9.1.3", title: "Code tracers", pages: "19–23",
  objectives: ["9P.11"],
  summary: "A trace table records the value of each variable, line by line, so you can find bugs.",
  reading: `
<p>A <b>trace table</b> helps you follow a program step by step — like being the computer. You write down the value of every variable each time it changes. This is called <b>dry running</b> and it is a great way to find bugs.</p>
<h4>How to make a trace table</h4>
<ol><li>Make one column for each variable (and one for output).</li>
<li>Go through the code one line at a time.</li>
<li>Each time a variable changes, write its new value on a new row.</li>
<li>Compare the results to what you <i>expected</i>. Where they differ, there is a bug.</li></ol>
<h4>Example</h4>
<pre class="code">total = 0
for count in range(1, 4):
    total = total + count
print(total)</pre>
<table class="tbl"><tr><th>count</th><th>total</th><th>output</th></tr>
<tr><td>–</td><td>0</td><td></td></tr><tr><td>1</td><td>1</td><td></td></tr><tr><td>2</td><td>3</td><td></td></tr><tr><td>3</td><td>6</td><td></td></tr><tr><td></td><td></td><td>6</td></tr></table>
<div class="tip"><code>range(1, 4)</code> gives 1, 2, 3 — it stops <b>before</b> 4.</div>
<h4>Why use them?</h4>
<ul><li>They show exactly where a program goes wrong.</li><li>You can test code on paper, without a computer.</li><li>They are especially useful for <b>logic errors</b>, where the program runs but gives the wrong answer.</li></ul>
<div class="keywords"><b>Key words:</b> trace table, dry run, variable, debug, logic error, systematic</div>`
},
{
  id: "9.1.4", title: "Error processing", pages: "23–28",
  objectives: ["9P.06", "9P.10", "9P.11"],
  summary: "Syntax, logic and runtime errors — what they are and how to find and fix them.",
  reading: `
<p>An <b>error</b> (or <b>bug</b>) is a mistake in a program. Finding and fixing them is called <b>debugging</b>. There are three main types.</p>
<table class="tbl"><tr><th>Error</th><th>What it means</th><th>Example</th></tr>
<tr><td><b>Syntax error</b></td><td>Breaks the rules of the language, so the program will not run at all.</td><td><code>print("Hi"</code> — missing bracket; <code>prnt("Hi")</code> — spelling</td></tr>
<tr><td><b>Logic error</b></td><td>The program runs but gives the wrong result.</td><td><code>average = a + b / 2</code> (should be <code>(a + b) / 2</code>)</td></tr>
<tr><td><b>Runtime error</b></td><td>The program starts but crashes while it is running.</td><td>Dividing by zero; <code>int("hello")</code>; reading a list item that doesn't exist</td></tr></table>
<h4>Spotting them</h4>
<ul><li><b>Syntax</b>: Python shows a SyntaxError before anything runs. Look for missing brackets, colons, quotes or wrong indentation.</li>
<li><b>Runtime</b>: Python shows an error message (e.g. ZeroDivisionError, ValueError, IndexError) part-way through.</li>
<li><b>Logic</b>: no message! You only notice because the answer is wrong. Use a <b>trace table</b> and test data to find it.</li></ul>
<pre class="code">age = int(input("Age: "))
if age > 13:          # logic error? 13-year-olds are teenagers too!
    print("Teenager")</pre>
<p>Should be <code>age >= 13</code>. The program runs, so this is a logic error.</p>
<div class="tip">Fix one error at a time, then test again — that is iterative development.</div>
<div class="keywords"><b>Key words:</b> bug, debugging, syntax error, logic error, runtime error, error message</div>`
},
{
  id: "9.1.5", title: "Iteration in algorithms", pages: "28–35",
  objectives: ["9CT.02", "9CT.06", "9CT.07", "9CT.08", "9P.03"],
  summary: "Count-controlled loops repeat code a set number of times. Predict and compare looping algorithms.",
  reading: `
<p><b>Iteration</b> means repeating. A <b>count-controlled loop</b> repeats a set number of times — you know in advance how many.</p>
<h4>In pseudocode</h4>
<pre class="code">FOR Counter ← 1 TO 5
    OUTPUT "Hello"
NEXT Counter</pre>
<h4>In Python</h4>
<pre class="code">for counter in range(1, 6):   # 1, 2, 3, 4, 5
    print("Hello")</pre>
<ul><li><code>range(5)</code> → 0, 1, 2, 3, 4 (5 times)</li>
<li><code>range(1, 6)</code> → 1 to 5</li>
<li><code>range(2, 11, 2)</code> → 2, 4, 6, 8, 10 (the third number is the <b>step</b>)</li></ul>
<h4>In a flowchart</h4>
<p>A loop is drawn with a <b>decision diamond</b> (e.g. "Is counter > 5?") and an arrow that goes <b>back up</b> to repeat the steps. Inside the loop, the counter is increased by 1 each time.</p>
<h4>Predicting the outcome</h4>
<pre class="code">x = 1
for i in range(3):
    x = x * 2
print(x)   # 1 → 2 → 4 → 8, prints 8</pre>
<h4>Comparing algorithms</h4>
<p>Two algorithms can solve the same task. Which is best? Ask:</p>
<ul><li>Does it give the <b>correct</b> result every time?</li>
<li>Is it <b>efficient</b> — fewer steps / less code?</li>
<li>Is it <b>easy to read</b> and change? (e.g. 1 loop instead of 10 copied print lines)</li></ul>
<div class="keywords"><b>Key words:</b> iteration, loop, count-controlled, FOR, NEXT, range, step, efficient</div>`
},
{
  id: "9.1.6", title: "Iteration and arrays", pages: "35–38",
  objectives: ["9CT.02", "9CT.07", "9P.01", "9P.03", "9P.04"],
  summary: "An array (list) stores many values under one name; use an index and loops to access them.",
  reading: `
<p>An <b>array</b> is a data structure that stores <b>many values under one name</b>. In Python we use a <b>list</b>. A <b>one-dimensional</b> array is a single row of items.</p>
<h4>Why use an array?</h4>
<p>Instead of 30 variables (score1, score2 … score30) you have one array <code>scores</code>. It is shorter, neater and works with loops.</p>
<pre class="code">hobbies = ["football", "music", "gaming", "art"]
#  index:      0          1        2       3</pre>
<h4>Accessing data with an index</h4>
<ul><li>Each item has a position number called an <b>index</b>.</li>
<li>Indexes start at <b>0</b>! <code>hobbies[0]</code> is "football", <code>hobbies[3]</code> is "art".</li>
<li><code>hobbies[4]</code> would cause an <b>IndexError</b> (runtime error) — there is no item 4.</li>
<li><code>len(hobbies)</code> gives the number of items: 4.</li>
<li>Change an item: <code>hobbies[1] = "dance"</code></li></ul>
<h4>Loops + arrays</h4>
<pre class="code">for i in range(len(hobbies)):
    print("Do you like", hobbies[i], "?")</pre>
<p>The loop counter <code>i</code> goes 0, 1, 2, 3 and is used as the index.</p>
<h4>In pseudocode</h4>
<pre class="code">FOR i ← 0 TO 3
    OUTPUT Hobbies[i]
NEXT i</pre>
<div class="keywords"><b>Key words:</b> array, list, one-dimensional, index, element, len, IndexError</div>`
},
{
  id: "9.1.7", title: "Developing the chatbot further", pages: "38–45",
  objectives: ["9CT.03", "9CT.09", "9P.01", "9P.06"],
  summary: "Combine sequence, selection and iteration — with arrays — to improve the chatbot.",
  reading: `
<p>Real programs combine three <b>constructs</b>:</p>
<ul><li><b>Sequence</b> — steps done in order, one after another.</li>
<li><b>Selection</b> — making a choice with IF … THEN … ELSE.</li>
<li><b>Iteration</b> — repeating with a loop.</li></ul>
<h4>Putting them together</h4>
<pre class="code">questions = ["Favourite food?", "Favourite sport?", "Favourite colour?"]
for i in range(3):                 # iteration
    answer = input(questions[i])    # sequence
    if answer == "pizza":           # selection
        print("Me too!")
    else:
        print("Cool, I like", answer)</pre>
<h4>Same idea in pseudocode</h4>
<pre class="code">FOR i ← 0 TO 2
    OUTPUT Questions[i]
    INPUT Answer
    IF Answer = "pizza" THEN
        OUTPUT "Me too!"
    ELSE
        OUTPUT "Cool, I like " + Answer
    ENDIF
NEXT i</pre>
<h4>Improving the chatbot (iterations)</h4>
<p>Store questions and replies in arrays so that adding a new question means adding one item, not new code. Test each new version before adding more — that is iterative development.</p>
<div class="tip">In a flowchart: the IF is a <b>diamond</b> with Yes/No arrows; the loop is a diamond with an arrow going back up.</div>
<div class="keywords"><b>Key words:</b> construct, sequence, selection, iteration, IF/ELSE, combine, array</div>`
},
{
  id: "9.1.8", title: "Testing times", pages: "45–48",
  objectives: ["9P.08", "9P.09", "9P.10"],
  summary: "Test plans use normal, extreme and invalid data to prove a program works.",
  reading: `
<p>A <b>test plan</b> is a table that lists the tests you will do, the data you will use, the result you <b>expect</b>, and the <b>actual</b> result.</p>
<h4>Three kinds of test data</h4>
<p>Example: a program accepts ages from <b>11 to 16</b>.</p>
<table class="tbl"><tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Normal</b></td><td>Sensible data the program should accept.</td><td>13, 14</td></tr>
<tr><td><b>Extreme</b> (boundary)</td><td>Data right at the edge of what is allowed — still accepted.</td><td>11 and 16</td></tr>
<tr><td><b>Invalid</b></td><td>Data that should be rejected — outside the range or wrong type.</td><td>10, 17, -5, "twelve"</td></tr></table>
<h4>Example test plan</h4>
<table class="tbl"><tr><th>Test</th><th>Data</th><th>Type</th><th>Expected</th><th>Actual</th></tr>
<tr><td>1</td><td>14</td><td>Normal</td><td>Accepted</td><td>Accepted ✓</td></tr>
<tr><td>2</td><td>16</td><td>Extreme</td><td>Accepted</td><td>Rejected ✗</td></tr>
<tr><td>3</td><td>abc</td><td>Invalid</td><td>"Please enter a number"</td><td>Program crashed ✗</td></tr></table>
<p>Test 2 found a <b>logic error</b> (probably <code>age &lt; 16</code> instead of <code>age &lt;= 16</code>). Test 3 found a <b>runtime error</b> (<code>int("abc")</code>).</p>
<div class="tip">Always test both extremes — boundaries are where most logic errors hide.</div>
<div class="keywords"><b>Key words:</b> test plan, normal data, extreme data, boundary, invalid data, expected result, actual result</div>`
},
{
  id: "9.1.9", title: "Go further: strings & pseudocode", pages: "49–52",
  objectives: ["9CT.01", "9P.05"],
  summary: "Find string length, change to upper/lowercase, and fix pseudocode algorithms.",
  reading: `
<p><b>String manipulation</b> means changing or examining text.</p>
<table class="tbl"><tr><th>Task</th><th>Python</th><th>Result for word = "Chatbot"</th></tr>
<tr><td>Length</td><td><code>len(word)</code></td><td>7</td></tr>
<tr><td>Uppercase</td><td><code>word.upper()</code></td><td>"CHATBOT"</td></tr>
<tr><td>Lowercase</td><td><code>word.lower()</code></td><td>"chatbot"</td></tr>
<tr><td>First character</td><td><code>word[0]</code></td><td>"C"</td></tr></table>
<h4>Why is this useful?</h4>
<p>Users type in different ways: "YES", "yes", "Yes". Convert to lowercase first, then compare:</p>
<pre class="code">reply = input("Do you like music? ")
if reply.lower() == "yes":
    print("Great!")</pre>
<p>Checking length is useful for passwords: <code>if len(password) &lt; 8: print("Too short")</code></p>
<h4>Following and correcting pseudocode</h4>
<pre class="code">INPUT Password
IF LENGTH(Password) > 8 THEN
    OUTPUT "Accepted"
ENDIF</pre>
<p>If the rule is "at least 8 characters", this is wrong — an 8-letter password is rejected. Fix: <code>LENGTH(Password) >= 8</code>. To correct an algorithm: read each line, trace it with test data, find where it goes wrong, edit, then trace again.</p>
<div class="tip">Pseudocode functions you may see: LENGTH(s), UCASE(s), LCASE(s).</div>
<div class="keywords"><b>Key words:</b> string manipulation, length, uppercase, lowercase, len(), upper(), lower(), correct, edit</div>`
},
{
  id: "9.1.10", title: "Project: build your chatbot", pages: "52–54",
  objectives: ["9CT.03","9CT.06","9CT.09","9P.01","9P.02","9P.03","9P.04","9P.05","9P.06","9P.07","9P.08","9P.09","9P.10","9P.11"],
  project: true,
  summary: "Plan, build, test and evaluate a complete chatbot using everything from Unit 1.",
  reading: `
<p>Time to put Unit 1 together! You will build a chatbot that talks to the user about a topic of your choice.</p>
<h4>Your chatbot must…</h4>
<ul class="check"><li>Use variables of at least <b>three data types</b> (string, integer, real, Boolean…).</li>
<li>Store questions or replies in an <b>array</b> and access items using an index.</li>
<li>Use a <b>count-controlled loop</b> (<code>for … in range</code>).</li>
<li>Use <b>selection</b> (if/else) to reply differently.</li>
<li>Use <b>string manipulation</b> — <code>.lower()</code>, <code>.upper()</code> or <code>len()</code>.</li></ul>
<h4>Process</h4>
<ol><li><b>Plan</b>: draw a flowchart or write pseudocode.</li>
<li><b>Prototype 1</b>: build a simple version and test it.</li>
<li><b>Improve</b> in iterations: add features one at a time.</li>
<li><b>Test plan</b>: include normal, extreme and invalid data. Record expected vs actual.</li>
<li><b>Debug</b>: use a trace table for any logic error. Note whether each bug was syntax, logic or runtime.</li>
<li><b>Evaluate</b>: what went well? What would you do differently? Did iterative development help?</li></ol>
<h4>Evaluating your process (9P.07)</h4>
<p>Think about <i>how</i> you worked, not just the final program: Was your plan detailed enough? Did testing find problems early? Did feedback from a partner help you improve?</p>
<div class="tip">The quiz for this project mixes questions from <b>every</b> Unit 1 topic — it is great revision.</div>`
}
  ]
});

window.UNITS.push({
  id: "u2", semester: 1, num: 2,
  title: "Computer systems",
  blurb: "Software, sound, storage units, translators, the fetch–decode–execute cycle, logic circuits and machine learning.",
  topics: [
{
  id: "9.4.1", title: "Understanding software", pages: "129–135",
  objectives: ["9CS.02", "9CS.03"],
  summary: "The operating system manages the computer; utility programs keep it running well.",
  reading: `
<p><b>Software</b> is the programs that run on a computer. <b>System software</b> runs the computer itself; <b>application software</b> (games, browsers, word processors) helps users do tasks.</p>
<h4>The operating system (OS)</h4>
<p>The OS is the most important system software (e.g. Windows, macOS, Android, iOS, Linux). It sits between the user, the applications and the hardware. Its jobs:</p>
<ul><li><b>User interface</b> — lets you control the computer (windows, icons, touch).</li>
<li><b>Memory management</b> — decides which programs use which part of RAM.</li>
<li><b>Multitasking / process management</b> — shares the processor between running programs.</li>
<li><b>File management</b> — saving, opening, naming, moving and deleting files and folders.</li>
<li><b>Managing peripherals</b> — talks to printers, keyboards, mice (using drivers).</li>
<li><b>Security</b> — user accounts, passwords and permissions.</li></ul>
<h4>Utility programs</h4>
<p>Small programs that help <b>maintain</b> and <b>protect</b> the computer.</p>
<ul><li><b>Device drivers</b> — let the OS communicate with a piece of hardware, like a printer or graphics card.</li>
<li><b>Security software</b> — anti-virus/anti-malware scans for and removes harmful software; firewalls block unwanted network traffic.</li>
<li><b>Defragmentation</b> — on a hard disk drive, files get split into pieces scattered across the disk. Defragmenting puts the pieces back together, so files load faster. (Not needed on SSDs.)</li>
<li>Others: backup, compression, disk clean-up.</li></ul>
<div class="keywords"><b>Key words:</b> operating system, system software, application software, utility, driver, anti-virus, firewall, defragmentation</div>`
},
{
  id: "9.4.2", title: "Digitising sound & data storage", pages: "135–139",
  objectives: ["9CS.05", "9CS.06"],
  summary: "Sound is sampled to turn it into numbers; storage is measured in bits, bytes, KB, MB, GB, TB.",
  reading: `
<p><b>Analogue</b> sound is a smooth, continuous wave. Computers only store <b>digital</b> data — 1s and 0s. So sound must be <b>digitised</b>.</p>
<h4>How sound is digitised</h4>
<ol><li>A <b>microphone</b> turns the sound wave into an electrical signal.</li>
<li>An <b>analogue-to-digital converter (ADC)</b> measures the height (amplitude) of the wave many times a second. Each measurement is a <b>sample</b>.</li>
<li>Each sample is stored as a binary number.</li></ol>
<ul><li><b>Sample rate</b> — how many samples per second, measured in hertz (Hz). CD quality is 44 100 Hz. Higher rate = closer to the real sound, but a bigger file.</li>
<li><b>Sample resolution / bit depth</b> — how many bits are used for each sample. More bits = more accurate, but bigger file.</li></ul>
<div class="tip">Samples in a recording = sample rate × seconds. 1000 Hz for 5 seconds = 5000 samples.</div>
<h4>Storage units</h4>
<table class="tbl"><tr><th>Unit</th><th>Size</th></tr>
<tr><td>Bit</td><td>A single 0 or 1</td></tr><tr><td>Nibble</td><td>4 bits</td></tr>
<tr><td>Byte</td><td>8 bits</td></tr><tr><td>Kilobyte (KB)</td><td>1024 bytes</td></tr>
<tr><td>Megabyte (MB)</td><td>1024 KB</td></tr><tr><td>Gigabyte (GB)</td><td>1024 MB</td></tr><tr><td>Terabyte (TB)</td><td>1024 GB</td></tr></table>
<p><b>Converting:</b> going to a <b>smaller</b> unit → <b>multiply</b> (by 1024, or 8 for bytes → bits). Going to a <b>bigger</b> unit → <b>divide</b>.</p>
<p>Example: 2 MB = 2 × 1024 = 2048 KB. 4096 MB ÷ 1024 = 4 GB.</p>
<div class="keywords"><b>Key words:</b> analogue, digital, sample, sample rate, bit depth, ADC, bit, byte, kilobyte, megabyte, gigabyte, terabyte</div>`
},
{
  id: "9.4.3", title: "Computer programming languages", pages: "140–142",
  objectives: ["9CS.04"],
  summary: "Translators turn high-level code into machine code. Compilers do it all at once; interpreters line by line.",
  reading: `
<p>Computers only understand <b>machine code</b> — binary. Humans write in <b>high-level languages</b> like Python that use English-like words. So code must be translated.</p>
<h4>Types of language</h4>
<ul><li><b>High-level</b> (Python, Java, C#): easy for people to read and write; must be translated.</li>
<li><b>Low-level</b>: machine code (binary) and assembly language — close to what the processor understands.</li></ul>
<h4>Translators</h4>
<p>A <b>translator</b> is a program that converts code into machine code. Three types: <b>compiler</b>, <b>interpreter</b> and <b>assembler</b> (for assembly language).</p>
<table class="tbl"><tr><th>Compiler</th><th>Interpreter</th></tr>
<tr><td>Translates the <b>whole program at once</b></td><td>Translates and runs <b>one line at a time</b></td></tr>
<tr><td>Makes an <b>executable file</b> you can run again without translating</td><td>No executable file; it must translate every time the program runs</td></tr>
<tr><td>Finished program runs <b>fast</b></td><td>Runs more <b>slowly</b></td></tr>
<tr><td>Reports all errors at the end — harder to find</td><td>Stops at the <b>first error</b> — easy to find and fix</td></tr>
<tr><td>Source code can be kept secret</td><td>Users need the source code and the interpreter</td></tr>
<tr><td>Good for <b>finished</b> software you sell</td><td>Good for <b>developing and testing</b></td></tr></table>
<div class="tip">Python is usually run with an interpreter — that is why it stops at the line with the error.</div>
<div class="keywords"><b>Key words:</b> high-level, low-level, machine code, translator, compiler, interpreter, assembler, executable, source code</div>`
},
{
  id: "9.4.4", title: "The fetch–decode–execute cycle", pages: "143–146",
  objectives: ["9CS.08", "9CS.09"],
  summary: "Programs are lists of instructions stored in memory; the CPU fetches, decodes and executes them one at a time.",
  reading: `
<p>A program is a <b>list of instructions</b> stored in <b>memory (RAM)</b>. The <b>CPU</b> (central processing unit) runs them <b>one at a time</b>, in order, billions of times a second. This repeating process is the <b>fetch–decode–execute cycle</b>.</p>
<h4>The three stages</h4>
<ol><li><b>Fetch</b> — the CPU gets the next instruction from memory. The <b>program counter</b> holds the address of the next instruction and then goes up by 1.</li>
<li><b>Decode</b> — the <b>control unit</b> works out what the instruction means (what to do and what data to use).</li>
<li><b>Execute</b> — the instruction is carried out, e.g. the <b>ALU</b> (arithmetic logic unit) adds two numbers, or data is stored.</li></ol>
<p>Then the cycle repeats with the next instruction.</p>
<h4>Parts of the CPU</h4>
<ul><li><b>Control unit (CU)</b> — directs the cycle and decodes instructions.</li>
<li><b>ALU</b> — does calculations (+ − ) and logic comparisons (AND, OR, &gt;, =).</li>
<li><b>Registers</b> — tiny, super-fast stores inside the CPU (e.g. program counter).</li>
<li><b>Clock</b> — sends pulses that time each cycle. Clock speed is measured in GHz (billions of cycles per second).</li></ul>
<div class="tip">Memory trick: <b>F</b>ind it, <b>D</b>ecide what it means, <b>E</b>xecute it.</div>
<div class="keywords"><b>Key words:</b> CPU, instruction, memory, RAM, fetch, decode, execute, program counter, control unit, ALU, register, clock speed</div>`
},
{
  id: "9.4.5", title: "Logic circuits", pages: "147–149",
  objectives: ["9CS.07"],
  summary: "AND, OR and NOT gates combine to make circuits for Boolean expressions.",
  reading: `
<p>Inside computers, <b>logic gates</b> take binary inputs (1 = on/true, 0 = off/false) and produce an output.</p>
<table class="tbl"><tr><th>Gate</th><th>Rule</th><th>Symbol shape</th></tr>
<tr><td><b>AND</b></td><td>Output is 1 only if <b>both</b> inputs are 1</td><td>D-shape (flat back, round front)</td></tr>
<tr><td><b>OR</b></td><td>Output is 1 if <b>at least one</b> input is 1</td><td>Curved back, pointed front</td></tr>
<tr><td><b>NOT</b></td><td>Only one input; output is the <b>opposite</b></td><td>Triangle with a small circle</td></tr></table>
<h4>Truth tables</h4>
<table class="tbl"><tr><th>A</th><th>B</th><th>A AND B</th><th>A OR B</th><th>NOT A</th></tr>
<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr></table>
<p>With 2 inputs there are 4 rows; with 3 inputs there are 8 rows.</p>
<h4>Drawing a circuit from a Boolean expression</h4>
<p>Expression: <b>Q = (A AND B) OR NOT C</b></p>
<ol><li>Work out what is in brackets first: A and B go into an <b>AND</b> gate.</li>
<li>C goes into a <b>NOT</b> gate.</li>
<li>The outputs of both go into an <b>OR</b> gate, giving Q.</li></ol>
<p>Real example: an alarm sounds (Q) if the door is open (A) AND the alarm is set (B).  Q = A AND B.</p>
<div class="keywords"><b>Key words:</b> logic gate, AND, OR, NOT, input, output, truth table, Boolean expression, logic circuit</div>`
},
{
  id: "9.4.6", title: "Machine learning and computerisation", pages: "150–155",
  objectives: ["9CS.01", "9CS.10", "9CS.11"],
  summary: "Devices are improved through prototypes; machine learning finds patterns in data; Industry 4.0 brings benefits and risks.",
  reading: `
<h4>Improving digital devices</h4>
<p>Designers build <b>prototypes</b>, test them with users and improve them. They think about:</p>
<ul><li><b>User experience (UX)</b> — is it easy and enjoyable to use?</li>
<li><b>Accessibility</b> — can everyone use it, including people with disabilities? (screen readers, large text, voice control, captions)</li>
<li><b>Ergonomics</b> — is it comfortable and safe for the body? (shape, weight, button position, screen height)</li>
<li><b>Emerging technologies</b> — new tech that could improve it (foldable screens, AI assistants, better batteries).</li></ul>
<h4>Machine learning (ML)</h4>
<p>Machine learning is a type of <b>artificial intelligence</b> where a computer <b>learns from data</b> to find patterns and make predictions, instead of being told every rule. The more good data, the better it gets.</p>
<p>Examples: recommendations on YouTube and Netflix; spam email filters; face recognition to unlock phones; voice assistants; self-driving cars; spotting diseases in medical scans; detecting bank card fraud; predictive text.</p>
<h4>Computerisation and Industry 4.0</h4>
<p><b>Industry 4.0</b> is the "fourth industrial revolution": factories using robots, sensors, the Internet of Things, AI and data to automate production.</p>
<table class="tbl"><tr><th>Benefits</th><th>Risks</th></tr>
<tr><td>Faster production, 24/7</td><td>Loss of some jobs</td></tr>
<tr><td>Fewer mistakes, consistent quality</td><td>High cost to set up</td></tr>
<tr><td>Robots do dangerous jobs — safer</td><td>Cyber attacks could stop a factory</td></tr>
<tr><td>Less waste, lower costs</td><td>Workers need new skills / retraining</td></tr>
<tr><td>New, skilled jobs created</td><td>Dependence on technology if it fails</td></tr></table>
<div class="keywords"><b>Key words:</b> prototype, user experience, accessibility, ergonomics, emerging technology, machine learning, AI, Industry 4.0, automation</div>`
},
{
  id: "9.4.7", title: "Go further: storage conversions", pages: "155–156",
  objectives: ["9CS.06"],
  summary: "Practise converting between bits, bytes, KB, MB, GB and TB — and work out file sizes.",
  reading: `
<h4>The conversion ladder</h4>
<pre class="code">TB  ×1024 →  GB  ×1024 →  MB  ×1024 →  KB  ×1024 →  bytes  ×8 →  bits
TB  ← ÷1024  GB  ← ÷1024  MB  ← ÷1024  KB  ← ÷1024  bytes  ← ÷8  bits</pre>
<p><b>Down the ladder</b> (to smaller units) → multiply. <b>Up the ladder</b> (to bigger units) → divide.</p>
<h4>Worked examples</h4>
<ul><li>3 KB → bytes: 3 × 1024 = <b>3072 bytes</b></li>
<li>16 bytes → bits: 16 × 8 = <b>128 bits</b></li>
<li>2048 MB → GB: 2048 ÷ 1024 = <b>2 GB</b></li>
<li>1 GB → KB: 1 × 1024 × 1024 = <b>1 048 576 KB</b> (two steps)</li></ul>
<h4>Will it fit?</h4>
<p>A USB stick has 2 GB free. Each photo is 4 MB. How many photos fit? 2 GB = 2048 MB. 2048 ÷ 4 = <b>512 photos</b>.</p>
<h4>Sound file size</h4>
<p>File size (bits) = sample rate × bit depth × seconds. Then ÷ 8 for bytes.</p>
<p>Example: 1000 Hz × 8 bits × 10 s = 80 000 bits = 10 000 bytes.</p>
<div class="tip">Some people use 1000 instead of 1024 (e.g. hard drive adverts). In this course we use <b>1024</b>.</div>`
},
{
  id: "9.4.8", title: "Project: computer systems", pages: "157–159",
  objectives: ["9CS.01","9CS.02","9CS.03","9CS.04","9CS.05","9CS.06","9CS.07","9CS.08","9CS.09","9CS.10","9CS.11"],
  project: true,
  summary: "Design a device or explain a computer system, using everything from Unit 2.",
  reading: `
<p>Create a presentation, poster or short guide that explains how a computer system works — for example, a <b>smart speaker</b> or a <b>smartphone</b>.</p>
<h4>Include</h4>
<ul class="check"><li>The jobs its <b>operating system</b> does, and two <b>utility programs</b> it needs (e.g. driver, security software).</li>
<li>How it <b>digitises sound</b> from the microphone (sample rate, bit depth).</li>
<li>How much <b>storage</b> it has, with at least two <b>unit conversions</b>.</li>
<li>Whether its apps are made with a <b>compiler</b> or <b>interpreter</b> and why.</li>
<li>How its CPU runs instructions using the <b>fetch–decode–execute cycle</b>.</li>
<li>A <b>logic circuit</b> for one feature, e.g. "light ON if (motion AND dark) OR button".</li>
<li>One way it uses <b>machine learning</b>.</li>
<li>Your <b>improvements</b> to its design based on UX, accessibility, ergonomics and emerging tech.</li>
<li>Benefits and risks of the factory that makes it using <b>Industry 4.0</b>.</li></ul>
<div class="tip">The project quiz mixes questions from every Unit 2 topic.</div>`
}
  ]
});

window.UNITS.push({
  id: "u3", semester: 1, num: 3,
  title: "Modelling & data",
  blurb: "Spreadsheet models and functions, relational databases and Big Data.",
  topics: [
{
  id: "9.3.1", title: "Evaluating the use of models", pages: "",
  objectives: ["9MD.01", "9MD.02"],
  summary: "A model is a simplified version of a real system. Judge how useful and accurate it is.",
  reading: `
<p>A <b>computer model</b> is a simplified representation of a real-life system. It uses data and rules (formulas) to show what might happen. Examples: weather forecasts, a pocket-money budget, traffic light timing, flight simulators, predicting how a disease spreads.</p>
<h4>Why use models?</h4>
<ul><li><b>Safer</b> — test a bridge design or emergency plan without danger.</li>
<li><b>Cheaper</b> — no need to build the real thing first.</li>
<li><b>Faster</b> — simulate years in seconds.</li>
<li><b>"What if?"</b> questions — change a value and see what happens.</li></ul>
<h4>Limitations</h4>
<ul><li>A model is only as good as its <b>data and rules</b> ("garbage in, garbage out").</li>
<li>It is <b>simplified</b> — it may leave out factors (e.g. weather, human behaviour).</li>
<li>Predictions can be wrong, so results should be checked against real life.</li></ul>
<h4>Evaluating a model — ask:</h4>
<ul><li>Is the data accurate and up to date?</li><li>Does it include all the important factors?</li><li>Do its results match what happens in real life?</li><li>Is it easy to use and change?</li></ul>
<h4>Functions that help analyse a model</h4>
<table class="tbl"><tr><th>Function</th><th>What it does</th><th>Example</th></tr>
<tr><td>MAX</td><td>Largest value</td><td>=MAX(B2:B10)</td></tr><tr><td>MIN</td><td>Smallest value</td><td>=MIN(B2:B10)</td></tr>
<tr><td>COUNT</td><td>How many cells contain <b>numbers</b></td><td>=COUNT(B2:B10)</td></tr>
<tr><td>IF</td><td>Checks a condition, gives one result if true and another if false</td><td>=IF(B2>=50,"Pass","Fail")</td></tr></table>
<div class="keywords"><b>Key words:</b> model, simulation, real-life system, variable, rule, what-if, limitation, evaluate</div>`
},
{
  id: "9.3.2", title: "Spreadsheets: key formulas and creating models", pages: "",
  objectives: ["9MD.02", "9MD.03", "9MD.04"],
  summary: "Use IF, MIN, MAX and COUNT, build your own model, and judge whether a spreadsheet is fit for purpose.",
  reading: `
<p>A <b>spreadsheet</b> is a grid of <b>cells</b>. Each cell has an address: column letter + row number, e.g. <b>B3</b>. A group of cells is a <b>range</b>, e.g. <b>B2:B10</b>.</p>
<h4>Formulas and functions</h4>
<p>Every formula starts with <b>=</b>. A <b>function</b> is a ready-made formula.</p>
<ul><li><code>=MAX(C2:C20)</code> — highest score</li>
<li><code>=MIN(C2:C20)</code> — lowest score</li>
<li><code>=COUNT(C2:C20)</code> — how many cells contain numbers (blank cells and text are not counted)</li>
<li><code>=IF(C2>=70,"Pass","Retry")</code> — shows Pass if C2 is 70 or more, otherwise Retry</li>
<li><code>=SUM(C2:C20)</code> and <code>=AVERAGE(C2:C20)</code> are also useful</li></ul>
<h4>IF in detail</h4>
<p><code>=IF(condition, value_if_true, value_if_false)</code>. Conditions use <b>&gt;  &lt;  &gt;=  &lt;=  =  &lt;&gt;</b> (&lt;&gt; means "not equal"). Text must be in "quotes".</p>
<h4>Creating a model — e.g. a school trip budget</h4>
<table class="tbl"><tr><th></th><th>A</th><th>B</th></tr><tr><td>1</td><td>Students</td><td>30</td></tr><tr><td>2</td><td>Cost per student</td><td>12</td></tr><tr><td>3</td><td>Total cost</td><td>=B1*B2</td></tr><tr><td>4</td><td>Budget</td><td>400</td></tr><tr><td>5</td><td>Within budget?</td><td>=IF(B3&lt;=B4,"Yes","No")</td></tr></table>
<p>Change B1 to 35 and the model recalculates automatically — a "what if?" question.</p>
<h4>Is an existing spreadsheet suitable? (9MD.04)</h4>
<ul><li>Does it do what is needed (right data, right calculations)?</li><li>Are the formulas correct — or are there typed-in numbers that won't update?</li><li>Is it clear: labels, headings, formatting, charts?</li><li>Is it easy for the intended user to update?</li><li>Does it have validation to stop wrong data being entered?</li></ul>
<div class="keywords"><b>Key words:</b> cell, cell reference, range, formula, function, IF, MAX, MIN, COUNT, model, validation</div>`
},
{
  id: "9.3.3", title: "Relational databases: linking and searching", pages: "",
  objectives: ["9MD.05", "9MD.06", "9MD.07"],
  summary: "Tables are linked by key fields; searches can use two or more criteria with AND/OR.",
  reading: `
<p>A <b>database</b> stores data in an organised way. Data is stored in <b>tables</b>. Each row is a <b>record</b> (one thing, e.g. one student). Each column is a <b>field</b> (one detail, e.g. name).</p>
<h4>Keys</h4>
<ul><li><b>Primary key</b> — a field that is <b>unique</b> for every record, e.g. StudentID. No two records can share it.</li>
<li><b>Foreign key</b> — a primary key from one table placed in another table to <b>link</b> them.</li></ul>
<h4>Relational database</h4>
<p>A <b>relational database</b> has <b>two or more linked tables</b>.</p>
<table class="tbl"><tr><th colspan="3">Students</th></tr><tr><th>StudentID (PK)</th><th>Name</th><th>ClassID (FK)</th></tr><tr><td>S01</td><td>Ana</td><td>C8A</td></tr><tr><td>S02</td><td>Ben</td><td>C8B</td></tr></table>
<table class="tbl"><tr><th colspan="2">Classes</th></tr><tr><th>ClassID (PK)</th><th>Teacher</th></tr><tr><td>C8A</td><td>Ms Lim</td></tr><tr><td>C8B</td><td>Mr Cruz</td></tr></table>
<p>The teacher's name is stored <b>once</b>, not in every student's record. This avoids repeated data (<b>redundancy</b>) and mistakes when updating.</p>
<h4>Complex searches (queries)</h4>
<p>A <b>query</b> finds records that match <b>criteria</b>. Complex searches use two or more criteria:</p>
<ul><li><b>AND</b> — both must be true (gives <b>fewer</b> results). <i>Year = 8 AND Score &gt; 70</i></li>
<li><b>OR</b> — either can be true (gives <b>more</b> results). <i>Club = "Chess" OR Club = "Robotics"</i></li>
<li>Operators: =, &lt;&gt;, &gt;, &lt;, &gt;=, &lt;=</li></ul>
<p>Searching linked tables lets you combine data, e.g. "names of students taught by Ms Lim who scored over 70".</p>
<div class="keywords"><b>Key words:</b> database, table, record, field, primary key, foreign key, relationship, relational database, query, criteria, AND, OR</div>`
},
{
  id: "9.3.4", title: "Big Data", pages: "",
  objectives: ["9MD.08"],
  summary: "Huge, fast-growing, varied data sets that need special tools — and how they are used.",
  reading: `
<p><b>Big Data</b> means data sets that are so <b>large</b>, arrive so <b>fast</b> and come in so many <b>different forms</b> that normal software (like a simple spreadsheet) cannot store or analyse them.</p>
<h4>The 3 Vs</h4>
<ul><li><b>Volume</b> — a huge amount of data (terabytes, petabytes and more).</li>
<li><b>Velocity</b> — data is created and collected very quickly, often in real time.</li>
<li><b>Variety</b> — many types: text, photos, videos, GPS locations, sensor readings, clicks.</li></ul>
<p>Some people add <b>Veracity</b> (how accurate/trustworthy it is) and <b>Value</b> (how useful it is).</p>
<h4>Where does it come from?</h4>
<p>Social media, online shopping, smartphones, sensors (Internet of Things), bank transactions, satellites, hospital records, loyalty cards.</p>
<h4>Applications</h4>
<ul><li><b>Shopping</b> — recommending products, predicting what to stock.</li>
<li><b>Healthcare</b> — spotting disease outbreaks, finding patterns in patient data.</li>
<li><b>Transport</b> — live traffic in map apps, planning bus routes.</li>
<li><b>Weather</b> — more accurate forecasts.</li>
<li><b>Sport</b> — analysing player performance.</li>
<li><b>Banking</b> — detecting fraud quickly.</li>
<li><b>Cities</b> — "smart cities" managing energy and lighting.</li></ul>
<h4>Concerns</h4>
<p><b>Privacy</b> (who has my data?), <b>security</b> (data breaches), and <b>accuracy</b> (wrong data → wrong decisions). Big Data is often analysed using <b>machine learning</b>.</p>
<div class="keywords"><b>Key words:</b> Big Data, volume, velocity, variety, veracity, data analysis, privacy, Internet of Things</div>`
}
  ]
});
