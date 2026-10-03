/* Semester 2 topics (Units 4–6) */
window.UNITS.push({
  id: "u4", semester: 2, num: 4,
  title: "Networks and digital communication",
  blurb: "Topologies, protocols, scalability, parity checks and network security.",
  topics: [
{
  id: "9.2.1", title: "Building blocks of networking", pages: "55–60",
  objectives: ["9DC.01"],
  summary: "A network connects devices so they can share. Bus, ring and star are three ways to arrange them.",
  reading: `
<p>A <b>network</b> is two or more devices connected so they can share data, files, printers and an internet connection.</p>
<h4>Network types and hardware</h4>
<ul><li><b>LAN</b> (local area network) — a small area like a school or home.</li>
<li><b>WAN</b> (wide area network) — a large area, e.g. across countries. The internet is the biggest WAN.</li>
<li><b>Node</b> — any device on a network (computer, printer, phone).</li>
<li><b>Switch</b> — connects devices in a LAN and sends data only to the device it is meant for.</li>
<li><b>Router</b> — connects different networks together, e.g. your home network to the internet.</li>
<li><b>Cable</b> or <b>wireless (Wi-Fi)</b> — the transmission media.</li></ul>
<h4>Topology</h4>
<p>A <b>topology</b> is the <b>layout</b> — the way devices are connected.</p>
<div class="topo-row">
<svg viewBox="0 0 160 90" class="topo"><line x1="10" y1="45" x2="150" y2="45" stroke="currentColor" stroke-width="3"/><g fill="var(--accent)"><rect x="20" y="15" width="18" height="14" rx="2"/><rect x="70" y="15" width="18" height="14" rx="2"/><rect x="120" y="15" width="18" height="14" rx="2"/><rect x="45" y="62" width="18" height="14" rx="2"/><rect x="95" y="62" width="18" height="14" rx="2"/></g><g stroke="currentColor" stroke-width="2"><line x1="29" y1="29" x2="29" y2="45"/><line x1="79" y1="29" x2="79" y2="45"/><line x1="129" y1="29" x2="129" y2="45"/><line x1="54" y1="45" x2="54" y2="62"/><line x1="104" y1="45" x2="104" y2="62"/></g><text x="80" y="88" text-anchor="middle" font-size="10" fill="currentColor">Bus</text></svg>
<svg viewBox="0 0 160 90" class="topo"><circle cx="80" cy="42" r="30" fill="none" stroke="currentColor" stroke-width="3"/><g fill="var(--accent)"><rect x="71" y="5" width="18" height="14" rx="2"/><rect x="101" y="25" width="18" height="14" rx="2"/><rect x="93" y="58" width="18" height="14" rx="2"/><rect x="49" y="58" width="18" height="14" rx="2"/><rect x="41" y="25" width="18" height="14" rx="2"/></g><text x="80" y="88" text-anchor="middle" font-size="10" fill="currentColor">Ring</text></svg>
<svg viewBox="0 0 160 90" class="topo"><g stroke="currentColor" stroke-width="2"><line x1="80" y1="42" x2="30" y2="15"/><line x1="80" y1="42" x2="130" y2="15"/><line x1="80" y1="42" x2="30" y2="70"/><line x1="80" y1="42" x2="130" y2="70"/><line x1="80" y1="42" x2="80" y2="8"/></g><circle cx="80" cy="42" r="10" fill="currentColor"/><g fill="var(--accent)"><rect x="21" y="8" width="18" height="14" rx="2"/><rect x="121" y="8" width="18" height="14" rx="2"/><rect x="21" y="63" width="18" height="14" rx="2"/><rect x="121" y="63" width="18" height="14" rx="2"/><rect x="71" y="0" width="18" height="12" rx="2"/></g><text x="80" y="88" text-anchor="middle" font-size="10" fill="currentColor">Star</text></svg>
</div>
<ul><li><b>Bus</b> — all devices connect to <b>one main cable</b> (the backbone), with terminators at each end.</li>
<li><b>Ring</b> — each device connects to <b>two others</b>, forming a circle. Data travels around the ring in one direction.</li>
<li><b>Star</b> — every device connects to a <b>central switch</b> (or hub) with its own cable.</li></ul>
<div class="keywords"><b>Key words:</b> network, LAN, WAN, node, switch, router, topology, bus, ring, star, backbone</div>`
},
{
  id: "9.2.2", title: "Topologies and architecture", pages: "61–63",
  objectives: ["9DC.01"],
  summary: "Advantages and disadvantages of bus, ring and star — and how networks are organised.",
  reading: `
<table class="tbl"><tr><th>Topology</th><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td><b>Bus</b></td><td>Cheap — uses the least cable. Easy to set up for a few devices.</td><td>If the main cable breaks, the <b>whole network fails</b>. Slows down with lots of traffic (data collisions). Hard to find faults.</td></tr>
<tr><td><b>Ring</b></td><td>Data flows in one direction, so no collisions. Performs well even with heavy traffic.</td><td>If <b>one device or cable fails</b>, the whole ring can stop. Adding a device disrupts the network.</td></tr>
<tr><td><b>Star</b></td><td>If one cable/device fails, <b>only that device</b> is affected. Easy to add devices. Fast and reliable; easy to find faults.</td><td>Needs <b>more cable</b> — more expensive. If the <b>central switch fails</b>, the whole network fails.</td></tr></table>
<h4>Network architecture</h4>
<p>Architecture is how the computers on a network share jobs.</p>
<ul><li><b>Client–server</b> — a powerful central <b>server</b> stores files, manages logins, backups and security. <b>Clients</b> (users' computers) request services from it. Used in schools and businesses. Easier to manage and secure, but servers are expensive and if the server fails, clients lose access.</li>
<li><b>Peer-to-peer (P2P)</b> — all computers are equal and share directly with each other; no server. Cheap and simple for a few devices at home, but harder to back up and secure.</li></ul>
<div class="tip">Most schools use a <b>star</b> topology with a <b>client–server</b> architecture.</div>
<div class="keywords"><b>Key words:</b> topology, collision, central switch, single point of failure, architecture, client, server, peer-to-peer</div>`
},
{
  id: "9.2.3", title: "It's all in the protocol", pages: "64–66",
  objectives: ["9DC.02"],
  summary: "Protocols are rules for communication. TCP/IP sends data in packets; HTTP fetches web pages.",
  reading: `
<p>A <b>protocol</b> is a set of <b>rules</b> that devices follow so they can communicate. Like people agreeing to speak the same language, devices must agree how data is formatted, sent, received and checked for errors.</p>
<h4>Packets</h4>
<p>Data sent over a network is broken into small pieces called <b>packets</b>. Each packet has a <b>header</b> (the sender's and receiver's IP addresses, the packet number) and a <b>payload</b> (the actual data). Packets may take different routes and are put back together at the end.</p>
<h4>TCP/IP</h4>
<ul><li><b>TCP</b> (Transmission Control Protocol) — breaks data into packets, numbers them, and puts them back together <b>in the right order</b> at the destination. It checks that every packet arrived and asks for missing ones to be <b>resent</b>.</li>
<li><b>IP</b> (Internet Protocol) — gives every device an <b>IP address</b> (e.g. 192.168.1.5) and <b>routes</b> each packet to the right address.</li></ul>
<h4>HTTP and HTTPS</h4>
<ul><li><b>HTTP</b> (Hypertext Transfer Protocol) — the rules for requesting and sending <b>web pages</b> between a web browser (client) and a web server.</li>
<li><b>HTTPS</b> — the <b>secure</b> version; data is <b>encrypted</b>, so it is safe for passwords and payments. Look for the padlock in the address bar.</li></ul>
<h4>Other protocols you might meet</h4>
<p>FTP (file transfer), SMTP (sending email), IMAP/POP3 (receiving email).</p>
<div class="keywords"><b>Key words:</b> protocol, packet, header, payload, TCP, IP, IP address, routing, HTTP, HTTPS, encryption</div>`
},
{
  id: "9.2.4", title: "Scalable considerations", pages: "67–70",
  objectives: ["9DC.01", "9DC.03"],
  summary: "A scalable network can grow. Plan for users, devices, bandwidth, cost, topology and future needs.",
  reading: `
<p>A network is <b>scalable</b> if it can easily <b>grow</b> (more users, devices or data) without needing to be rebuilt and without slowing down too much.</p>
<h4>Factors to consider when designing a network</h4>
<ul><li><b>Number of users and devices</b> — now and in the future. Will a new building or more students be added?</li>
<li><b>Topology</b> — a <b>star</b> is easy to grow: just plug a new device into the switch. A <b>bus</b> slows down as devices are added, and a <b>ring</b> must be broken to add a device.</li>
<li><b>Bandwidth</b> — how much data can be sent per second. More users streaming video need more bandwidth.</li>
<li><b>Hardware</b> — switches with spare ports, routers and servers that can handle more traffic.</li>
<li><b>Cost</b> — of cabling, hardware, installation and maintenance; budget for future upgrades.</li>
<li><b>Wired vs wireless</b> — Wi-Fi is easy to expand and flexible; cables are faster and more reliable.</li>
<li><b>Physical space</b> — distance between buildings, where cables can run.</li>
<li><b>Security</b> — more devices means more ways in for attackers.</li>
<li><b>Cloud services</b> — storage and servers that can be increased quickly when needed.</li></ul>
<div class="tip">Exam tip: always link the factor to the situation — e.g. "A star topology is scalable because a new classroom computer just needs a cable to a free port on the switch, without disrupting other users."</div>
<div class="keywords"><b>Key words:</b> scalability, bandwidth, capacity, growth, cost, switch ports, cloud, future-proof</div>`
},
{
  id: "9.2.5", title: "Checking for errors", pages: "71–73",
  objectives: ["9DC.04"],
  summary: "A parity bit is added so the receiver can check if a bit was changed during transmission.",
  reading: `
<p>When data travels, interference can flip a bit (0 → 1 or 1 → 0). A <b>parity check</b> helps the receiver find out if this happened.</p>
<h4>The parity bit</h4>
<p>An extra bit, called the <b>parity bit</b>, is added to each group of bits (often 7 data bits + 1 parity bit = 1 byte).</p>
<ul><li><b>Even parity</b>: the total number of 1s (including the parity bit) must be <b>even</b>.</li>
<li><b>Odd parity</b>: the total number of 1s must be <b>odd</b>.</li></ul>
<h4>Example — even parity</h4>
<p>Data: <code>1011001</code> has four 1s (even), so the parity bit is <b>0</b> → <code>01011001</code> (parity bit at the front).</p>
<p>Data: <code>1110000</code> has three 1s (odd), so the parity bit is <b>1</b> → <code>11110000</code>.</p>
<h4>Checking</h4>
<p>Sender and receiver agree on even or odd parity. The receiver counts the 1s. If even parity was used but the receiver counts an <b>odd</b> number of 1s → an <b>error</b> has happened and the data is sent again.</p>
<h4>Limitations</h4>
<ul><li>If <b>two</b> bits flip, the count is still even — the error is <b>not detected</b>.</li>
<li>Parity can tell you an error happened, but <b>not which bit</b> is wrong.</li></ul>
<div class="keywords"><b>Key words:</b> transmission error, interference, parity bit, even parity, odd parity, error detection</div>`
},
{
  id: "9.2.6", title: "Keeping it all secure", pages: "74–78",
  objectives: ["9DC.05", "9CS.10"],
  summary: "Choose security methods by balancing how sensitive the data is, cost and accessibility.",
  reading: `
<h4>Threats to networks</h4>
<p>Malware (viruses, ransomware, spyware), hackers, phishing emails, weak passwords, and people accidentally sharing data.</p>
<h4>Security methods</h4>
<ul><li><b>Passwords</b> and <b>two-factor authentication</b> (password + code on your phone).</li>
<li><b>Biometrics</b> — fingerprint or face recognition.</li>
<li><b>Firewall</b> — checks traffic coming in and out and blocks anything suspicious.</li>
<li><b>Encryption</b> — scrambles data so only someone with the key can read it.</li>
<li><b>Anti-malware</b> software.</li>
<li><b>Access levels / user permissions</b> — users only see what they need (students can't open the grades folder).</li>
<li><b>Backups</b> — copies of data in case it is lost or held by ransomware.</li>
<li><b>Physical security</b> — locked server rooms.</li></ul>
<h4>Making the right choices — balance three things</h4>
<ul><li><b>How sensitive is the data?</b> Medical records, bank details and exam results need <b>strong</b> security. A public school lunch menu needs very little.</li>
<li><b>Cost</b> — strong security (biometrics, expert staff, extra software) costs more. Spend most protecting the most valuable data.</li>
<li><b>Accessibility</b> — security must not make it too hard for the right people to use the system. Too many passwords → people write them down. Systems must also work for users with disabilities.</li></ul>
<h4>Machine learning in security</h4>
<p>Machine learning can learn what "normal" network activity looks like and flag unusual behaviour — spotting new malware, spam/phishing emails or fraudulent logins faster than humans.</p>
<div class="keywords"><b>Key words:</b> malware, phishing, firewall, encryption, authentication, biometrics, access level, backup, sensitive data, accessibility, cost</div>`
},
{
  id: "9.2.7", title: "Go further & two-dimensional parity checks", pages: "78–84",
  objectives: ["9DC.04"],
  summary: "Parity across rows AND columns finds exactly which bit is wrong — so it can be corrected.",
  reading: `
<p>A single parity bit can tell us <i>that</i> an error happened, but not <i>where</i>. A <b>two-dimensional (2D) parity check</b> solves this.</p>
<h4>How it works</h4>
<ol><li>Arrange the data bytes in a <b>grid</b> — one byte per row.</li>
<li>Add a <b>parity bit to each row</b>.</li>
<li>Add a <b>parity byte</b> at the bottom: a parity bit for <b>each column</b>.</li>
<li>The receiver checks every row and every column.</li></ol>
<h4>Example (even parity) — after transmission</h4>
<table class="tbl mono"><tr><th></th><th>C1</th><th>C2</th><th>C3</th><th>C4</th><th>Parity</th></tr>
<tr><th>Row 1</th><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
<tr><th>Row 2</th><td>0</td><td>1</td><td class="hl">1</td><td>0</td><td>1</td></tr>
<tr><th>Row 3</th><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
<tr><th>Parity</th><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr></table>
<p>Check every row: Row 1 has four 1s ✓, <b>Row 2 has three 1s ✗ (odd)</b>, Row 3 has two ✓. Check every column: C1 ✓, C2 ✓, <b>C3 has three 1s ✗ (odd)</b>, C4 ✓. The error is where the <b>bad row and bad column cross</b> — Row 2, C3. That bit should be <b>0</b>, so the receiver can simply <b>flip it back</b> to correct it, without asking for the data to be sent again.</p>
<div class="tip">Find the row with the wrong parity, find the column with the wrong parity — the error is where they meet.</div>
<h4>Why it's better</h4>
<ul><li>It <b>locates</b> a single-bit error, so it can be <b>corrected</b> without resending.</li><li>It needs extra bits (more data to send), and some multi-bit errors can still be missed.</li></ul>
<div class="keywords"><b>Key words:</b> two-dimensional parity, parity byte, row parity, column parity, error correction</div>`
},
{
  id: "9.2.9", title: "Project: design a school network", pages: "85–87",
  objectives: ["9DC.01","9DC.02","9DC.03","9DC.04","9DC.05","9CS.02","9CS.03"],
  project: true,
  summary: "Plan a network for a new school building using everything from Unit 4.",
  reading: `
<p>A new school wing is opening with 4 classrooms, a library and an office. Design its network and write a short report.</p>
<h4>Your report must include</h4>
<ul class="check"><li>A labelled diagram with your chosen <b>topology</b> (bus, ring or star) and why you chose it.</li>
<li>The hardware needed: switch, router, server, cables/Wi-Fi.</li>
<li>How data travels using <b>TCP/IP</b>, and how students load web pages with <b>HTTP/HTTPS</b>.</li>
<li>How your design is <b>scalable</b> (e.g. adding another classroom next year).</li>
<li>How <b>parity checks</b> can detect transmission errors.</li>
<li>Your <b>security</b> choices for different data (student records vs. the lunch menu) — balancing sensitivity, cost and accessibility.</li>
<li>Tasks the <b>operating system</b> on the server does (user accounts, file management, security) and <b>utility programs</b> needed (drivers, anti-malware, backup).</li></ul>
<div class="tip">The project quiz mixes questions from every Unit 4 topic plus OS and utility software.</div>`
}
  ]
});

/* Unit 5 revisits Unit 1 with separate attempts so students can compare. */
(function () {
  const u1 = window.UNITS.find(u => u.id === "u1");
  window.UNITS.push({
    id: "u5", semester: 2, num: 5,
    title: "Revisit: programming a chatbot",
    blurb: "Back to Unit 1. Re-read every topic and beat your Semester 1 scores — the quizzes generate fresh questions.",
    topics: u1.topics.map(t => Object.assign({}, t, { id: "R" + t.id, refId: t.id, revisit: true }))
  });
})();

window.UNITS.push({
  id: "u6", semester: 2, num: 6,
  title: "Programming with Python: lists, loops and logins",
  blurb: "Decomposition, login systems, strings, trace tables, lists, binary search and debugging.",
  topics: [
{
  id: "9.6.1", title: "Breaking it down: decomposition and sub-programs", pages: "198–202",
  objectives: ["9P.07"],
  summary: "Split a big problem into small parts; use sub-programs; evaluate how programs are developed.",
  reading: `
<p><b>Decomposition</b> means breaking a big problem into <b>smaller, easier parts</b>. Each part can be solved, tested and even given to a different team member.</p>
<h4>Example: a login system</h4>
<ul><li>Ask for username</li><li>Ask for password</li><li>Check the details</li><li>Count the failed attempts</li><li>Lock the account after 3 failures</li></ul>
<h4>Sub-programs</h4>
<p>A <b>sub-program</b> (also called a <b>sub-routine</b>, procedure or function) is a named block of code that does one job. You write it once and <b>call</b> it whenever you need it.</p>
<pre class="code">def welcome(name):
    print("Welcome,", name)

welcome("Ana")
welcome("Ben")</pre>
<p><b>Benefits:</b> less repeated code; easier to read, test and fix; can be reused in other programs; teams can work on different parts at once.</p>
<h4>Development processes — and evaluating them (9P.07)</h4>
<ul><li><b>Iterative development</b> — build prototypes, test, improve, repeat. Good when needs may change; gets feedback early.</li>
<li><b>Step-by-step / "all at once"</b> — plan everything, then code everything, then test at the end. Problems may only be found late, when they are harder to fix.</li></ul>
<p>To <b>evaluate</b> a process, ask: Did planning (decomposition, flowcharts) save time? Were errors found early? Did testing cover normal, extreme and invalid data? Did user feedback improve the program? What would you do differently next time?</p>
<div class="keywords"><b>Key words:</b> decomposition, sub-program, sub-routine, procedure, function, call, reuse, evaluate, development process</div>`
},
{
  id: "9.6.2", title: "User login: it's all in the loops", pages: "202–206",
  objectives: ["9P.02","9P.03","9P.08","9P.09","9CT.02","9CT.03","9CT.06"],
  summary: "Build a login that gives the user three tries, using a count-controlled loop and the right data types.",
  reading: `
<p>A login system checks a username and password. Most give you a limited number of tries — perfect for a <b>count-controlled loop</b>.</p>
<pre class="code">correct_password = "Cat123"      # string
logged_in = False                # Boolean
for attempt in range(3):         # attempt = 0, 1, 2
    guess = input("Password: ")
    if guess == correct_password:
        logged_in = True
        print("Access granted")
        break                    # stop the loop early
    else:
        print("Wrong password")
if logged_in == False:
    print("Account locked")</pre>
<h4>Data types in this program</h4>
<ul><li><code>correct_password</code>, <code>guess</code> → <b>string</b></li><li><code>logged_in</code> → <b>Boolean</b></li><li><code>attempt</code> → <b>integer</b></li></ul>
<h4>Pseudocode version</h4>
<pre class="code">LoggedIn ← FALSE
FOR Attempt ← 1 TO 3
    INPUT Guess
    IF Guess = "Cat123" THEN
        LoggedIn ← TRUE
    ENDIF
NEXT Attempt</pre>
<h4>Testing the login</h4>
<table class="tbl"><tr><th>Test</th><th>Type</th><th>Expected</th></tr>
<tr><td>Cat123 on the first try</td><td>Normal</td><td>Access granted</td></tr>
<tr><td>Correct on the <b>3rd</b> (last allowed) try</td><td>Extreme</td><td>Access granted</td></tr>
<tr><td>Wrong 3 times</td><td>Invalid</td><td>Account locked</td></tr>
<tr><td>cat123 (wrong case)</td><td>Invalid</td><td>Wrong password</td></tr></table>
<div class="keywords"><b>Key words:</b> login, authentication, count-controlled loop, attempt, Boolean flag, break, test data</div>`
},
{
  id: "9.6.3", title: "String manipulation", pages: "207–211",
  objectives: ["9P.05","9P.06","9P.08","9P.09","9CT.01"],
  summary: "Use len(), upper() and lower() to check and tidy text — e.g. usernames and passwords.",
  reading: `
<table class="tbl"><tr><th>Python</th><th>Pseudocode</th><th>Result for s = "Robot"</th></tr>
<tr><td><code>len(s)</code></td><td>LENGTH(s)</td><td>5</td></tr>
<tr><td><code>s.upper()</code></td><td>UCASE(s)</td><td>"ROBOT"</td></tr>
<tr><td><code>s.lower()</code></td><td>LCASE(s)</td><td>"robot"</td></tr>
<tr><td><code>s[0]</code></td><td>—</td><td>"R" (first character)</td></tr></table>
<h4>Making usernames</h4>
<pre class="code">first = input("First name: ")
last = input("Last name: ")
username = (first[0] + last).lower()
print(username)        # Ana Reyes → areyes</pre>
<h4>Checking password length</h4>
<pre class="code">password = input("New password: ")
if len(password) &lt; 8:
    print("Too short - use at least 8 characters")
else:
    print("Password saved")</pre>
<h4>Test data for "at least 8 characters, max 12"</h4>
<ul><li><b>Normal:</b> "sunflower" (9)</li><li><b>Extreme:</b> "abcdefgh" (exactly 8) and a 12-character password</li><li><b>Invalid:</b> "cat" (3), a 13-character password, or nothing at all</li></ul>
<h4>Iterative improvement</h4>
<p>Version 1 checks the length. Version 2 also turns the username to lowercase. Version 3 checks the password isn't the same as the username… Test after every version.</p>
<div class="keywords"><b>Key words:</b> string, character, length, uppercase, lowercase, concatenation (+), validation</div>`
},
{
  id: "9.6.4", title: "Tracing through the lines", pages: "211–215",
  objectives: ["9CT.02", "9P.11", "9CT.07"],
  summary: "Use trace tables on loops to predict output and find bugs systematically.",
  reading: `
<p>Loops can be tricky to predict. A <b>trace table</b> lets you follow them one step at a time.</p>
<h4>Example</h4>
<pre class="code">number = 2
for i in range(1, 4):
    number = number * i
    print(number)</pre>
<table class="tbl"><tr><th>i</th><th>number</th><th>output</th></tr>
<tr><td>–</td><td>2</td><td></td></tr><tr><td>1</td><td>2</td><td>2</td></tr><tr><td>2</td><td>4</td><td>4</td></tr><tr><td>3</td><td>12</td><td>12</td></tr></table>
<h4>Finding a bug with a trace table</h4>
<p>This should add up the numbers 1 to 5 (answer 15):</p>
<pre class="code">total = 0
for n in range(1, 5):
    total = total + n
print(total)</pre>
<p>Trace: n = 1, 2, 3, 4 → total = 1, 3, 6, 10. Output is <b>10</b>, not 15! The loop stops <b>before</b> 5. Fix: <code>range(1, 6)</code>. This is a <b>logic error</b>.</p>
<h4>Tracing pseudocode with a flowchart loop</h4>
<pre class="code">Count ← 0
FOR x ← 1 TO 6
    IF x MOD 2 = 0 THEN
        Count ← Count + 1
    ENDIF
NEXT x
OUTPUT Count</pre>
<p>x MOD 2 = 0 means "x is even". Even values: 2, 4, 6 → output <b>3</b>.</p>
<div class="keywords"><b>Key words:</b> trace table, dry run, predict, iteration, logic error, MOD</div>`
},
{
  id: "9.6.5", title: "It's all in the lists", pages: "216–219",
  objectives: ["9P.01", "9P.04", "9P.06"],
  summary: "Lists (arrays) store many items; access, change and add items using indexes.",
  reading: `
<p>In Python, a one-dimensional <b>array</b> is called a <b>list</b>. It stores many values under one name, in order.</p>
<pre class="code">users = ["ana", "ben", "chen", "dev"]
print(users[0])      # ana  (indexes start at 0)
print(users[2])      # chen
print(users[-1])     # dev  (last item)
print(len(users))    # 4</pre>
<h4>Changing a list</h4>
<pre class="code">users[1] = "bella"      # replace item 1
users.append("eli")     # add to the end
users.remove("chen")    # remove an item</pre>
<h4>Why use a list?</h4>
<ul><li>Store many related items (all usernames) without making lots of variables.</li>
<li>Easy to process with a loop.</li><li>Easy to add or remove items while the program runs.</li></ul>
<h4>Checking if an item is in a list</h4>
<pre class="code">name = input("Username: ").lower()
if name in users:
    print("User found")</pre>
<h4>Common mistake</h4>
<p><code>users[4]</code> when there are only 4 items (indexes 0–3) → <b>IndexError: list index out of range</b> — a runtime error.</p>
<div class="keywords"><b>Key words:</b> list, array, element, index, append, remove, len, IndexError</div>`
},
{
  id: "9.6.6", title: "Using iteration with lists", pages: "220–224",
  objectives: ["9P.03","9P.04","9P.06","9P.11","9CT.01","9CT.05","9CT.07"],
  summary: "Loop through lists, search them with linear and binary search.",
  reading: `
<h4>Looping through a list</h4>
<pre class="code">scores = [12, 18, 9, 20]
total = 0
for i in range(len(scores)):
    total = total + scores[i]
print(total)       # 59</pre>
<h4>Linear search</h4>
<p>Check each item <b>one by one</b> from the start until you find it. Works on any list (sorted or not) but can be slow for long lists.</p>
<h4>Binary search</h4>
<p>A much faster search — but the list <b>must be sorted</b>.</p>
<ol><li>Look at the <b>middle</b> item.</li>
<li>If it is the target — found!</li>
<li>If the target is <b>smaller</b>, throw away the right half. If <b>bigger</b>, throw away the left half.</li>
<li>Repeat with the half that is left until found (or nothing is left).</li></ol>
<p>Example: find <b>23</b> in [3, 8, 12, 17, 23, 31, 40]</p>
<ul><li>Middle = 17 (index 3). 23 &gt; 17 → keep right half [23, 31, 40]</li>
<li>Middle = 31. 23 &lt; 31 → keep left half [23]</li><li>Middle = 23 → found in <b>3 comparisons</b>. (Linear search needed 5.)</li></ul>
<div class="tip">Middle index = (low + high) ÷ 2, rounded down. Each step halves the list — 1000 items need at most about 10 checks!</div>
<div class="keywords"><b>Key words:</b> iterate, linear search, binary search, sorted, middle, comparison, efficient</div>`
},
{
  id: "9.6.7", title: "Identifying errors and debugging & go further", pages: "225–230",
  objectives: ["9P.08","9P.09","9P.10","9CT.01","9P.04","9P.03","9P.06"],
  summary: "Find and fix syntax, logic and runtime errors in list and loop programs; test thoroughly.",
  reading: `
<h4>Spot the error type</h4>
<pre class="code">names = ["Ana", "Ben", "Chen"]
for i in range(4):          # runtime error: names[3] does not exist
    print(names[i])

for i in range(len(names)) # syntax error: missing colon
    print(names[i])

total = 0
for n in [5, 10, 15]:
    total = n               # logic error: should be total = total + n
print(total)                # prints 15, not 30</pre>
<h4>A debugging routine</h4>
<ol><li><b>Read</b> the error message — it gives the line number and type (SyntaxError, IndexError, TypeError, NameError, ZeroDivisionError).</li>
<li>No message but wrong result? It's a <b>logic</b> error — use a <b>trace table</b>.</li>
<li>Fix <b>one</b> thing at a time, then run your <b>test plan</b> again.</li></ol>
<h4>Correcting pseudocode</h4>
<pre class="code">// Should output the largest number in the array
Max ← Numbers[0]
FOR i ← 1 TO 4
    IF Numbers[i] &lt; Max THEN      // error!
        Max ← Numbers[i]
    ENDIF
NEXT i
OUTPUT Max</pre>
<p>The comparison is the wrong way round — it finds the <b>smallest</b>. Fix: <code>Numbers[i] &gt; Max</code>.</p>
<h4>Test data for a list program</h4>
<p>Program asks for an item number from 1 to 5: <b>normal</b> 3; <b>extreme</b> 1 and 5; <b>invalid</b> 0, 6, "two".</p>
<div class="keywords"><b>Key words:</b> syntax error, logic error, runtime error, IndexError, TypeError, NameError, debugging, test plan</div>`
},
{
  id: "9.6.9", title: "Project: a secure login & user list", pages: "231–235",
  objectives: ["9P.03","9P.08","9P.09","9P.04","9P.02","9P.06","9CT.06","9CT.01","9CT.03","9CT.02","9CT.04"],
  project: true,
  summary: "Build a login system with a list of users, a 3-try loop, sub-routines and a full test plan.",
  reading: `
<p>Build a program for a school club that lets members log in and see the member list.</p>
<h4>Requirements</h4>
<ul class="check"><li>Store usernames in a <b>list</b> and access items by index.</li>
<li>Give the user <b>3 attempts</b> using a count-controlled loop.</li>
<li>Use at least <b>three data types</b> (string, integer, Boolean…).</li>
<li>Use at least one <b>sub-routine</b> (e.g. <code>def check_login(name, pw):</code>) and call it.</li>
<li>Plan with a <b>flowchart or pseudocode</b> first; use <b>predefined sub-routines</b> in your plan (e.g. LENGTH, UCASE, or your own CheckLogin).</li>
<li>Write a <b>test plan</b> with normal, extreme and invalid data.</li>
<li>Develop in <b>iterations</b> — keep a log of each version and what you changed.</li></ul>
<h4>Predefined sub-routines in pseudocode (9CT.04)</h4>
<pre class="code">PROCEDURE ShowMembers()
    FOR i ← 0 TO 4
        OUTPUT Members[i]
    NEXT i
ENDPROCEDURE

IF CheckLogin(Name, Password) = TRUE THEN
    CALL ShowMembers()
ENDIF</pre>
<p>A <b>predefined</b> sub-routine has already been written, so you just <b>call</b> it by name. In a flowchart, a sub-routine call is drawn as a rectangle with <b>double lines on each side</b>.</p>
<div class="tip">The project quiz mixes questions from all of Unit 6.</div>`
}
  ]
});
