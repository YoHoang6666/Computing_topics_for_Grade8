/* Question bank — Computer Systems (9CS) */
window.BANK = window.BANK || {};
Object.assign(window.BANK, {

"9CS.01": [
  ["What does 'accessibility' mean in device design?", "Making sure everyone, including people with disabilities, can use it", ["Making it as cheap as possible", "Making it run faster", "Making it waterproof"]],
  ["What does 'ergonomics' mean?", "Designing a device to be comfortable and safe for the human body", ["Making a device use less power", "Designing the software menus", "Adding more storage"], {t: ["ergonomics"]}],
  ["What is 'user experience' (UX)?", "How easy and enjoyable a device is to use", ["How old the user is", "How much the device costs", "How many users it has"]],
  ["Which is an ACCESSIBILITY improvement for a phone?", "A screen reader that reads text aloud", ["A faster processor", "A cheaper case", "A brighter logo"]],
  ["Which is an ERGONOMIC improvement for a keyboard?", "A curved shape and wrist rest to reduce strain", ["A built-in camera", "More storage", "A new colour"]],
  ["Why do designers build prototypes of devices?", "To test ideas with users and improve the design before making the final product", ["To sell them straight away", "Because prototypes never break", "To avoid getting feedback"]],
  ["Which is an example of an EMERGING technology that could improve a device?", "A foldable screen", ["A floppy disk drive", "A cathode-ray tube monitor", "A dial-up modem"]],
  ["Users say a smartwatch's buttons are too small. Which factor is this about?", "User experience / ergonomics", ["Data storage", "Network topology", "Compilers"]],
  ["Adding captions to a video app helps people who…", "are deaf or hard of hearing", ["have slow internet", "use a laptop", "speak quickly"]],
  ["Which is an accessibility feature?", "Voice control", ["A metal case", "A 4K camera", "Faster charging"]],
  ["A tablet for young children is redesigned with a rubber bumper and bigger icons. Which factors were considered?", "Ergonomics and user experience", ["Compilers and interpreters", "Bus and ring", "Integer and real"]],
  ["Which question is about ERGONOMICS?", "Is the laptop screen at a comfortable height to avoid neck pain?", ["Does it have enough RAM?", "Is it connected to Wi-Fi?", "Which OS does it run?"]]
],

"9CS.02": [
  ["Which is a task of the operating system?", "Managing memory (RAM)", ["Writing essays", "Editing photos", "Playing music videos online"]],
  ["Which software is an operating system?", "Windows", ["Microsoft Word", "Google Chrome", "Minecraft"]],
  ["What does 'multitasking' mean for an OS?", "Sharing the processor between several running programs", ["Using two keyboards", "Running one program at a time", "Connecting to the internet"]],
  ["Saving, naming, moving and deleting files is called…", "file management", ["memory management", "defragmentation", "compiling"]],
  ["How does the OS provide security?", "User accounts, passwords and permissions", ["By speeding up the CPU", "By adding more storage", "By drawing flowcharts"]],
  ["What does the OS provide so you can control the computer (windows, icons, menus)?", "A user interface", ["A compiler", "A parity bit", "A database"], {t: ["user interface", "a user interface", "ui", "gui"]}],
  ["The OS uses __________ to communicate with printers and other peripherals.", "device drivers", ["spreadsheets", "trace tables", "packets"]],
  ["Which of these is NOT a job of the operating system?", "Creating a slideshow presentation", ["Managing memory", "Managing files", "Managing peripherals"]],
  ["Android and iOS are examples of…", "operating systems for mobile devices", ["web browsers", "utility programs", "programming languages"]],
  ["Where does the operating system sit?", "Between the user/applications and the hardware", ["Inside the keyboard", "Only on the internet", "Inside each application"]],
  ["Deciding which program gets which part of RAM is called…", "memory management", ["file management", "user interface", "compression"], {t: ["memory management"]}],
  ["What is application software?", "Programs that help users do tasks, like a word processor or game", ["The operating system", "Hardware like a mouse", "Device drivers only"]]
],

"9CS.03": [
  ["What is a utility program?", "A small program that helps maintain or protect the computer", ["A game", "The main operating system", "A type of hardware"]],
  ["What does a device driver do?", "Lets the operating system communicate with a piece of hardware", ["Drives a car", "Removes viruses", "Defragments the disk"]],
  ["What does anti-virus software do?", "Scans for and removes harmful software (malware)", ["Speeds up the internet", "Translates code", "Makes files smaller"]],
  ["What does defragmentation do?", "Puts the scattered pieces of files on a hard disk back together so they load faster", ["Deletes all files", "Breaks files into pieces", "Encrypts files"]],
  ["Why do files become fragmented on a hard disk drive?", "Files are split and stored in gaps across the disk as files are saved and deleted", ["Viruses break them", "The screen is too small", "The keyboard is old"]],
  ["Should a solid state drive (SSD) be defragmented?", "No — SSDs don't benefit and it can wear them out", ["Yes, every day", "Yes, it doubles their speed", "Only on Mondays"]],
  ["A new printer won't work with the computer. Which utility is most likely needed?", "A printer driver", ["Defragmentation software", "A compiler", "A spreadsheet"]],
  ["What does a firewall do?", "Monitors network traffic and blocks unwanted or suspicious connections", ["Stops the computer overheating", "Cleans the screen", "Fixes syntax errors"]],
  ["Which is an example of security software?", "Anti-malware", ["A word processor", "A device driver", "A web browser"]],
  ["Which utility makes a copy of files in case they are lost?", "Backup software", ["Defragmenter", "Compiler", "Driver"], {t: ["backup", "backup software"]}],
  ["Which utility makes files smaller to save space?", "Compression software", ["Defragmenter", "Driver", "Firewall"]],
  ["Which of these is a utility program?", "Disk defragmenter", ["Spreadsheet", "Photo editor", "Video game"]]
],

"9CS.04": [
  ["What is a translator?", "A program that converts code into machine code", ["A person who speaks two languages", "A type of hardware", "A spreadsheet function"]],
  ["Which language can a computer's processor run directly?", "Machine code (binary)", ["Python", "English", "Pseudocode"]],
  ["How does a compiler translate a program?", "The whole program at once", ["One line at a time", "Only the first line", "It doesn't translate"]],
  ["How does an interpreter translate a program?", "One line at a time, running each line as it goes", ["The whole program at once", "Only the last line", "Into a spreadsheet"]],
  ["Which translator produces an executable file?", "Compiler", ["Interpreter", "Neither", "Both"], {t: ["compiler"]}],
  ["Which translator stops at the first error it finds?", "Interpreter", ["Compiler", "Assembler", "Driver"], {t: ["interpreter"]}],
  ["Which type of translator converts assembly language into machine code?", "Assembler", ["Compiler", "Interpreter", "Defragmenter"], {t: ["assembler"]}],
  ["A finished compiled program usually runs…", "faster than an interpreted one", ["slower than an interpreted one", "only once", "without a processor"]],
  ["Why is an interpreter useful while developing a program?", "It shows errors line by line, so they are easy to find and fix", ["It makes the final program fastest", "It hides the source code", "It needs no computer"]],
  ["Why would a company selling software use a compiler?", "The executable can be shared without giving away the source code", ["Compilers are free and interpreters cost money", "Compiled programs can't have bugs", "Users must have the source code"]],
  ["Python is usually run using…", "an interpreter", ["a compiler only", "an assembler", "a device driver"]],
  ["What is a high-level language?", "A language that uses English-like words and is easy for humans to read, e.g. Python", ["Binary 1s and 0s", "A language only computers understand", "A language used only by teachers"]],
  ["What is source code?", "The program code written by the programmer", ["The machine code inside the CPU", "An error message", "The executable file"], {t: ["source code"]}],
  ["Which statement about a compiler is TRUE?", "Once compiled, the program can run again without being translated again", ["It translates every time the program runs", "It stops at the first error", "It only works on Python"]],
  ["Which statement about an interpreter is TRUE?", "The program must be translated every time it runs", ["It makes an executable file", "It translates the whole program at once", "It is only used for finished software"]],
  ["A compiler reports errors…", "after translating the whole program, which can make them harder to find", ["one at a time as each line runs", "never", "only if the program is short"]],
  ["Which is a low-level language?", "Assembly language", ["Python", "Java", "Scratch"]],
  ["Why do high-level programs need translating?", "The processor only understands machine code", ["To make them shorter", "To make them colourful", "To add more errors"]],
  ["Which is an advantage of an interpreter?", "Easy to test and debug because it runs line by line", ["Programs run fastest", "Produces an executable", "Source code stays secret"]],
  ["Which is a disadvantage of a compiler?", "Errors are only reported at the end, so debugging is harder", ["Programs run slowly", "It needs the interpreter on every computer", "It cannot translate loops"]],
  ["To run an interpreted program, the user needs…", "the source code and the interpreter", ["only an executable file", "nothing", "a printer driver"]],
  ["Which translator would you choose for a game you are selling online?", "Compiler", ["Interpreter", "Defragmenter", "Firewall"]]
],

"9CS.05": [
  ["What is analogue sound?", "A continuous, smooth sound wave", ["Sound stored as 1s and 0s", "A list of numbers", "A type of speaker"]],
  ["What does 'digitising' sound mean?", "Converting the analogue wave into binary numbers a computer can store", ["Making sound louder", "Playing sound through speakers", "Deleting sound"]],
  ["What is a sample?", "A measurement of the sound wave's height (amplitude) at a moment in time", ["A short song", "A type of microphone", "A file name"], {t: ["sample"]}],
  ["What is the sample rate?", "The number of samples taken each second", ["The number of bits per sample", "The volume of the sound", "The length of the song"]],
  ["Sample rate is measured in…", "hertz (Hz)", ["bytes", "volts", "metres"], {t: ["hertz", "hz"]}],
  ["What is bit depth (sample resolution)?", "The number of bits used to store each sample", ["The number of samples per second", "The speaker size", "The length of the file name"]],
  ["What happens when the sample rate is INCREASED?", "Better quality (closer to the original) but a bigger file", ["Worse quality and a smaller file", "No change", "The sound becomes analogue"]],
  ["Which device converts the analogue signal into digital data?", "An analogue-to-digital converter (ADC)", ["A speaker", "A monitor", "A router"]],
  ["What is the first thing that captures the sound wave?", "A microphone", ["A speaker", "A printer", "A monitor"]],
  ["CD-quality audio uses a sample rate of…", "44 100 Hz", ["8 Hz", "100 Hz", "1 Hz"]],
  ["Why can't computers store analogue sound directly?", "Computers can only store digital data (binary)", ["Sound is too quiet", "Microphones are digital", "Analogue is too small"]],
  ["Increasing bit depth gives…", "more accurate samples but a larger file", ["fewer samples per second", "a smaller file", "an analogue file"]]
],

"9CS.06": [
  ["How many bits are in a byte?", "8", ["4", "10", "1024"], {t: true}],
  ["How many bits are in a nibble?", "4", ["8", "2", "16"], {t: true}],
  ["How many bytes are in a kilobyte (in this course)?", "1024", ["1000", "100", "8"], {t: true}],
  ["Which is the largest unit?", "Terabyte", ["Gigabyte", "Megabyte", "Kilobyte"]],
  ["Which is the smallest unit?", "Bit", ["Byte", "Nibble", "Kilobyte"]],
  ["Put in order from smallest to largest:", "bit, byte, KB, MB, GB, TB", ["byte, bit, MB, KB, TB, GB", "KB, bit, byte, GB, MB, TB", "TB, GB, MB, KB, byte, bit"]],
  ["To convert from a BIGGER unit to a SMALLER unit you…", "multiply", ["divide", "add 8", "subtract 1024"], {t: ["multiply"]}],
  ["To convert from a SMALLER unit to a BIGGER unit you…", "divide", ["multiply", "add 1024", "subtract 8"], {t: ["divide"]}],
  ["How many megabytes are in a gigabyte?", "1024", ["1000", "8", "100"], {t: true}],
  ["A USB stick has 2 GB free. Each photo is 4 MB. How many photos fit?", "512", ["500", "8", "2048"], {t: true}],
  ["What is a single 0 or 1 called?", "A bit", ["A byte", "A nibble", "A kilobyte"], {t: ["bit", "a bit"]}],
  ["Which is bigger: 1500 KB or 1 MB?", "1500 KB", ["1 MB", "They are equal", "It can't be compared"]]
],

"9CS.07": [
  ["An AND gate outputs 1 when…", "both inputs are 1", ["at least one input is 1", "both inputs are 0", "the input is 0"]],
  ["An OR gate outputs 1 when…", "at least one input is 1", ["both inputs are 0", "only both inputs are 1", "never"]],
  ["A NOT gate…", "outputs the opposite of its single input", ["has two inputs", "always outputs 1", "always outputs 0"]],
  ["How many rows does a truth table with 2 inputs have?", "4", ["2", "8", "3"], {t: true}],
  ["How many rows does a truth table with 3 inputs have?", "8", ["6", "3", "9"], {t: true}],
  ["Which gate symbol is a triangle with a small circle at its tip?", "NOT", ["AND", "OR", "None"], {t: ["not"]}],
  ["Which gate symbol is a D-shape (flat back, round front)?", "AND", ["OR", "NOT", "XOR"], {t: ["and"]}],
  ["An alarm sounds if the door is open (A) AND the alarm is set (B). Which expression?", "Q = A AND B", ["Q = A OR B", "Q = NOT A", "Q = NOT B"]],
  ["A light turns on if switch A OR switch B is on. Which expression?", "Q = A OR B", ["Q = A AND B", "Q = NOT (A OR B)", "Q = NOT A AND B"]],
  ["To draw Q = (A AND B) OR C, which gate gives the final output Q?", "OR", ["AND", "NOT", "Neither"]],
  ["For Q = NOT (A OR B), which gate do A and B go into first?", "OR", ["NOT", "AND", "They go straight to Q"]],
  ["In logic circuits, 1 means…", "on / true", ["off / false", "error", "two"]]
],

"9CS.08": [
  ["How does a computer store a program?", "As a list of instructions in memory", ["As a picture", "On the keyboard", "Inside the monitor"]],
  ["How does the CPU run the instructions in a program?", "One at a time, in order", ["All at once", "Randomly", "Backwards"]],
  ["Where are programs and data stored while they are being run?", "In main memory (RAM)", ["In the mouse", "In the printer", "In the monitor"]],
  ["What does CPU stand for?", "Central processing unit", ["Computer power unit", "Central program utility", "Control print unit"]],
  ["Which register keeps track of the address of the next instruction?", "Program counter", ["Accumulator only", "Clock", "Hard disk"], {t: ["program counter", "pc"]}],
  ["Each instruction in memory is stored at a location with a unique…", "address", ["colour", "file name", "password"], {t: ["address"]}],
  ["Why does the order of instructions matter?", "The CPU follows them one after another, so the wrong order gives the wrong result", ["It doesn't matter at all", "Only the first instruction is run", "The CPU sorts them first"]],
  ["Modern CPUs carry out instructions…", "billions of times per second", ["once per second", "ten times per minute", "only when a key is pressed"]],
  ["What is an instruction?", "A single command the CPU can carry out, e.g. add two numbers", ["A whole program", "A file on a USB stick", "A printer setting"]],
  ["The idea that programs and data are both stored in memory is called…", "the stored program concept", ["the parity concept", "the topology concept", "the Big Data concept"]],
  ["What does RAM stand for?", "Random access memory", ["Read all memory", "Run any machine", "Rapid action module"]],
  ["Which statement is TRUE?", "A program is a sequence of instructions stored in memory", ["The CPU runs all instructions at exactly the same moment", "Programs are stored in the keyboard", "Instructions are never stored"]]
],

"9CS.09": [
  ["What are the three stages of the cycle the CPU repeats?", "Fetch, decode, execute", ["Input, process, output", "Plan, code, test", "Save, load, delete"]],
  ["What happens during FETCH?", "The next instruction is copied from memory to the CPU", ["The instruction is carried out", "The instruction is worked out", "The program is saved"]],
  ["What happens during DECODE?", "The control unit works out what the instruction means", ["The instruction is fetched from memory", "The result is printed", "The CPU switches off"]],
  ["What happens during EXECUTE?", "The instruction is carried out", ["The instruction is fetched", "The instruction is decoded", "The computer restarts"]],
  ["Which stage comes after decode?", "Execute", ["Fetch", "Decode again", "Store"], {t: ["execute"]}],
  ["Which stage comes after execute?", "Fetch (the cycle repeats)", ["Decode", "Stop", "Input"]],
  ["Which part of the CPU carries out calculations and comparisons?", "ALU (arithmetic logic unit)", ["Control unit", "Clock", "RAM"], {t: ["alu", "arithmetic logic unit"]}],
  ["Which part of the CPU directs the cycle and decodes instructions?", "Control unit", ["ALU", "Hard drive", "Monitor"], {t: ["control unit", "cu"]}],
  ["What happens to the program counter after an instruction is fetched?", "It increases by 1 to point to the next instruction", ["It resets to 0", "It is deleted", "It doubles"]],
  ["Clock speed is measured in…", "GHz (cycles per second)", ["GB", "Mbps", "°C"]],
  ["A CPU with a 3 GHz clock can carry out about…", "3 billion cycles per second", ["3 cycles per second", "3 thousand cycles per hour", "3 million cycles per day"]],
  ["What are registers?", "Tiny, very fast storage locations inside the CPU", ["Lists of students", "Hard disk drives", "Network cables"]]
],

"9CS.10": [
  ["What is machine learning?", "A type of AI where computers learn patterns from data to make predictions", ["Teaching people to use machines", "Repairing machines", "Writing every rule by hand"]],
  ["Which is an example of machine learning?", "Netflix recommending shows based on what you watched", ["A calculator adding numbers", "A light switch", "Typing a letter in Word"]],
  ["How does a spam filter use machine learning?", "It learns from examples of spam emails to recognise new ones", ["It deletes every email", "It only blocks emails with capital letters", "It asks the user every time"]],
  ["What does a machine learning system need to learn?", "Lots of data (examples)", ["A faster keyboard", "No data at all", "Only one example"]],
  ["Which is a medical use of machine learning?", "Spotting signs of disease in X-ray or scan images", ["Printing prescriptions", "Booking appointments by phone", "Cleaning hospital floors"]],
  ["How do banks use machine learning?", "To detect unusual card payments that might be fraud", ["To print bank notes", "To count coins by hand", "To paint the building"]],
  ["Face unlock on a phone is an example of…", "machine learning / image recognition", ["defragmentation", "a parity check", "a bus topology"]],
  ["Predictive text on your phone uses machine learning to…", "guess the next word you will type", ["check spelling with a dictionary only", "make the screen brighter", "send texts for free"]],
  ["Which could be a RISK of machine learning?", "Biased or poor training data can give unfair or wrong results", ["It never makes mistakes", "It uses no data", "It only works offline"]],
  ["Self-driving cars use machine learning to…", "recognise objects like people, signs and other cars", ["change the radio station", "fill up with fuel", "print maps"]],
  ["Voice assistants (like Siri or Alexa) use machine learning to…", "understand spoken words", ["charge the battery", "stop viruses", "translate code into binary"]],
  ["Machine learning is a type of AI. What does AI stand for?", "Artificial intelligence", ["Automatic input", "Advanced internet", "Analogue instruction"], {t: ["artificial intelligence"]}],
  ["Email filters that learn to recognise junk mail are called ______ filters.", "Spam", ["Virus", "Parity", "Router"], {t: ["spam"]}],
  ["The more good-quality data a machine learning system has…", "the better its predictions usually become", ["the worse it gets", "the slower the internet becomes", "nothing changes"]]
],

"9CS.11": [
  ["What is Industry 4.0?", "The 'fourth industrial revolution' — factories using robots, sensors, AI, data and the Internet of Things", ["A new version of Windows", "A factory with 4 workers", "A type of network cable"]],
  ["Which is a BENEFIT of computerising a factory?", "Products are made faster and more consistently", ["Every worker loses their job", "It costs nothing to set up", "Robots never need maintenance"]],
  ["Which is a RISK of computerising a factory?", "Some workers may lose their jobs", ["Production gets faster", "Fewer mistakes are made", "Robots can do dangerous tasks"]],
  ["How can robots improve worker safety?", "They can do dangerous jobs, like handling hot or toxic materials", ["They make workers do more dangerous work", "They stop all accidents forever", "They cannot help safety"]],
  ["Why might a cyber attack be a risk for an Industry 4.0 factory?", "Hackers could stop or damage machines connected to the network", ["Machines are not connected to anything", "Robots are immune to hackers", "Cyber attacks only affect phones"]],
  ["Which is a benefit of automation?", "Machines can work 24 hours a day", ["Machines need long holidays", "It always costs less to set up", "It creates no new jobs"]],
  ["What is the 'Internet of Things' (IoT)?", "Everyday devices and machines connected to the internet, sharing data", ["A list of websites", "A type of virus", "A network topology"]],
  ["Which NEW jobs might Industry 4.0 create?", "Robot technicians and data analysts", ["Candle makers", "Typewriter repairers", "Telegraph operators"]],
  ["Why is setting up an Industry 4.0 factory a risk for small companies?", "The equipment is very expensive", ["It is free", "It needs no electricity", "It is illegal"]],
  ["Sensors on machines can warn when a part is wearing out. This is called…", "predictive maintenance", ["defragmentation", "a parity check", "phishing"]],
  ["Which is a disadvantage of relying on computer systems in factories?", "If the system fails, production can stop", ["Products are more consistent", "Less waste is produced", "Work is faster"]],
  ["Workers in computerised factories may need…", "retraining to learn new skills", ["no skills at all", "to work only at night", "to stop using computers"]]
]
});
