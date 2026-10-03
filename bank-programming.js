/* Question bank — Programming (9P) and Computational Thinking (9CT)
   Format: [question, correctAnswer, [wrong answers], {c: code, e: explanation, t: true|[alternatives] (allows typed answer)}] */
window.BANK = window.BANK || {};
Object.assign(window.BANK, {

"9P.01": [
  ["What is the purpose of a one-dimensional array?", "To store many values of the same kind under one name", ["To store a single value that never changes", "To repeat a block of code", "To make a decision in a program"]],
  ["What is the index of the FIRST item in a Python list?", "0", ["1", "-1", "It depends on the list"], {t: true}],
  ["A list has 6 items. What is the index of the LAST item?", "5", ["6", "7", "0"], {t: true}],
  ["Which is the best reason to use an array instead of 30 separate variables?", "Code is shorter and the items can be processed with a loop", ["Arrays use no memory", "Arrays make the program run without errors", "Variables cannot store numbers"]],
  ["What is the position number of an item in an array called?", "Index", ["Value", "Counter", "Type"], {t: ["index"]}],
  ["What is one item stored in an array called?", "An element", ["A loop", "A field", "A function"], {t: ["element"]}],
  ["Which of these is a one-dimensional array in Python?", "colours = [\"red\", \"blue\", \"green\"]", ["colours = \"red, blue, green\"", "colours = red + blue + green", "colours = (red)"]],
  ["Why is an array useful in a chatbot?", "It can store all the questions so a loop can ask each one", ["It makes the chatbot speak aloud", "It stops the user typing wrong answers", "It translates the code into machine code"]],
  ["'One-dimensional' means the array…", "is a single row (list) of items", ["has rows and columns", "can only store one item", "can only store numbers"]],
  ["Which data would be BEST stored in an array?", "The names of all students in a class", ["The user's age", "Whether a door is open or closed", "The value of pi"]],
  ["An array called scores holds 10 numbers. How many variable names are used?", "1", ["10", "11", "0"], {t: true, e: "The whole array uses just one name: scores."}],
  ["True statement about arrays:", "Every element can be reached using the array name and an index", ["Each element must have its own name", "An array cannot be used in a loop", "Arrays can only hold integers in Python"]]
],

"9P.02": [
  ["Which data type stores whole numbers?", "Integer", ["Real", "String", "Boolean"], {t: ["integer", "int"]}],
  ["Which data type stores numbers with a decimal point?", "Real", ["Integer", "Character", "Boolean"], {t: ["real", "float"]}],
  ["Which data type can only be True or False?", "Boolean", ["String", "Integer", "Character"], {t: ["boolean", "bool"]}],
  ["Which data type stores a single letter, digit or symbol?", "Character", ["String", "Integer", "Real"], {t: ["character", "char"]}],
  ["Which data type stores text such as a name?", "String", ["Character", "Integer", "Boolean"], {t: ["string", "str"]}],
  ["What data type should a phone number like 07700 900123 be stored as?", "String", ["Integer", "Real", "Boolean"], {e: "You never do maths with a phone number, and it starts with 0, so store it as a string."}],
  ["What data type does input() always return in Python?", "String", ["Integer", "Real", "Boolean"], {e: "input() always gives back text. Use int() or float() to convert."}],
  ["Which line converts the user's input into an integer?", "age = int(input(\"Age? \"))", ["age = input(int(\"Age? \"))", "age = str(input(\"Age? \"))", "age = float(\"Age? \")"]],
  ["Best data type for 'Has the student paid for the trip?'", "Boolean", ["String", "Real", "Character"]],
  ["Best data type for the price of a sandwich, e.g. 3.75", "Real", ["Integer", "Boolean", "Character"]],
  ["Best data type for the number of students in a class", "Integer", ["Real", "String", "Boolean"]],
  ["Best data type for a grade such as 'A' or 'B'", "Character", ["Boolean", "Integer", "Real"]],
  ["In Python, what is the data type name used for real numbers?", "float", ["int", "str", "bool"], {t: ["float"]}],
  ["Why do programs need data types?", "So the computer knows how to store the data and what can be done with it", ["To make the code look colourful", "So the program runs without a translator", "To make the program shorter"]]
],

"9P.03": [
  ["What is a count-controlled loop?", "A loop that repeats a set number of times", ["A loop that never ends", "A loop that repeats until the user types 'stop'", "An IF statement"]],
  ["Which Python keyword starts a count-controlled loop?", "for", ["if", "while", "def"], {t: ["for"]}],
  ["How many times does this loop run?", "5", ["4", "6", "10"], {c: "for i in range(5):\n    print(\"Hi\")", t: true}],
  ["What numbers does range(1, 4) produce?", "1, 2, 3", ["1, 2, 3, 4", "0, 1, 2, 3", "4, 3, 2, 1"]],
  ["What numbers does range(0, 10, 2) produce?", "0, 2, 4, 6, 8", ["0, 2, 4, 6, 8, 10", "2, 4, 6, 8, 10", "0, 10, 2"]],
  ["Which line repeats a block exactly 10 times?", "for i in range(10):", ["for i in range(1, 10):", "for i in range(11):", "if i == 10:"]],
  ["What is missing at the end of this line?  for i in range(3)", "A colon :", ["A semicolon ;", "A bracket )", "Nothing"]],
  ["Code inside a Python loop must be…", "indented", ["in capital letters", "in quotation marks", "on the same line"]],
  ["What is the third number in range(1, 20, 3) called?", "The step", ["The stop", "The index", "The count"], {t: ["step"]}],
  ["What does this print?", "0 1 2", ["1 2 3", "0 1 2 3", "3"], {c: "for n in range(3):\n    print(n, end=\" \")"}],
  ["Why use a loop instead of writing print() 50 times?", "Less code that is easier to change and less likely to contain mistakes", ["Loops run without a computer", "print() only works inside loops", "It makes the output different every time"]],
  ["Which loop counts down 5, 4, 3, 2, 1?", "for i in range(5, 0, -1):", ["for i in range(5, 1):", "for i in range(1, 5, -1):", "for i in range(0, 5):"]]
],

"9P.04": [
  ["What does this print?", "music", ["football", "gaming", "An error"], {c: "hobbies = [\"football\", \"music\", \"gaming\"]\nprint(hobbies[1])"}],
  ["Which line prints the first item of the list pets?", "print(pets[0])", ["print(pets[1])", "print(pets(0))", "print(pets.first)"]],
  ["What happens here?", "IndexError — there is no item at index 3", ["It prints \"c\"", "It prints \"a\"", "It prints nothing"], {c: "letters = [\"a\", \"b\", \"c\"]\nprint(letters[3])"}],
  ["What does len([4, 8, 15, 16]) return?", "4", ["3", "16", "43"], {t: true}],
  ["How do you change the second item of the list days to \"Tue\"?", "days[1] = \"Tue\"", ["days[2] = \"Tue\"", "days = \"Tue\"", "\"Tue\" = days[1]"]],
  ["Which line adds \"eli\" to the end of the list users?", "users.append(\"eli\")", ["users.add(\"eli\")", "users[end] = \"eli\"", "append.users(\"eli\")"]],
  ["What does this print?", "30", ["10", "20", "60"], {c: "marks = [10, 20, 30]\nprint(marks[-1])", e: "Index -1 is the last item."}],
  ["What does this print?", "True", ["False", "\"ben\"", "An error"], {c: "users = [\"ana\", \"ben\"]\nprint(\"ben\" in users)"}],
  ["What is the output?", "15", ["5", "105", "An error"], {c: "nums = [5, 10]\nprint(nums[0] + nums[1])"}],
  ["Which loop prints every item of the list names?", "for i in range(len(names)):\n    print(names[i])", ["for i in range(names):\n    print(i)", "print(names[all])", "for i in len(names):\n    print(names)"]],
  ["In pseudocode, how do you output the 3rd item of the array Cities (starting at index 0)?", "OUTPUT Cities[2]", ["OUTPUT Cities[3]", "OUTPUT Cities", "OUTPUT 3"]],
  ["What does this print?", "[\"x\", \"z\"]", ["[\"x\", \"y\", \"z\"]", "[\"y\"]", "An error"], {c: "items = [\"x\", \"y\", \"z\"]\nitems.remove(\"y\")\nprint(items)"}]
],

"9P.05": [
  ["What does len(\"Python\") return?", "6", ["5", "7", "\"Python\""], {t: true}],
  ["What does \"hello\".upper() return?", "\"HELLO\"", ["\"Hello\"", "\"hello\"", "5"], {t: ["HELLO"]}],
  ["What does \"GoodBye\".lower() return?", "\"goodbye\"", ["\"GOODBYE\"", "\"Goodbye\"", "7"], {t: ["goodbye"]}],
  ["Why convert a reply to lowercase before checking it?", "So \"YES\", \"Yes\" and \"yes\" are all matched", ["To make the program faster", "To fix syntax errors", "To change the data type to integer"]],
  ["Which line checks if a password is shorter than 8 characters?", "if len(password) < 8:", ["if password < 8:", "if password.length < 8:", "if len(password) > 8:"]],
  ["What does len(\"hi there\") return? (count the space)", "8", ["7", "2", "6"], {t: true}],
  ["What is the output?", "R", ["Robot", "o", "t"], {c: "word = \"Robot\"\nprint(word[0])"}],
  ["What is the output?", "areyes", ["AReyes", "Ana Reyes", "ar"], {c: "first = \"Ana\"\nlast = \"Reyes\"\nprint((first[0] + last).lower())"}],
  ["In pseudocode, which function gives the number of characters in a string?", "LENGTH", ["UCASE", "COUNT", "SIZE"], {t: ["length"]}],
  ["In pseudocode, UCASE(\"cat\") returns…", "\"CAT\"", ["\"cat\"", "\"Cat\"", "3"]],
  ["Does \"Yes\" == \"yes\" give True in Python?", "No — the case is different", ["Yes — Python ignores case", "Only if they have the same length", "It causes an error"]],
  ["What does len(\"\") return (an empty string)?", "0", ["1", "None", "An error"], {t: true}]
],

"9P.06": [
  ["What is iterative development?", "Building a program in versions: plan, code, test, improve, and repeat", ["Writing the whole program in one go then testing it once", "Copying code from the internet", "Writing a program that uses loops"]],
  ["What is a prototype?", "An early, simple working version of a program", ["The final finished product", "A list of errors", "A type of loop"], {t: ["prototype"]}],
  ["Each repeat of the develop–test–improve cycle is called…", "an iteration", ["a syntax", "a variable", "an index"], {t: ["iteration", "an iteration"]}],
  ["Why test a prototype with users?", "To get feedback on what to improve in the next version", ["To make the code shorter", "To translate the program", "Users cannot test prototypes"]],
  ["Which is an advantage of iterative development?", "Errors are found early when they are easier to fix", ["You never need to test", "The program is finished on day one", "You don't need to plan"]],
  ["Chatbot v1 says hello. v2 also asks the user's age. What is this an example of?", "Iterative development", ["A syntax error", "A trace table", "Decomposition only"]],
  ["What should you do straight after coding a new version?", "Test it", ["Delete the old version", "Start the next version immediately", "Hand it in"]],
  ["Why save each version with a new file name (v1, v2, v3)?", "So you can go back to a working version if something breaks", ["Python needs a new name to run", "It removes all errors", "It makes the file smaller"]],
  ["Which order is correct for one iteration?", "Plan → Design → Code → Test → Evaluate", ["Code → Plan → Evaluate → Test → Design", "Test → Code → Plan → Design", "Evaluate → Test → Code → Plan"]],
  ["A user says the chatbot's replies are too long. In iterative development you should…", "change the replies in the next version and test again", ["ignore the feedback", "start a completely new project", "only fix it after the final version"]],
  ["How is a prototype different from the final program?", "It does not yet have all the features", ["It cannot be run", "It is written in a different language", "It has no code"]],
  ["What happens at the 'evaluate' stage?", "Decide what worked and what to improve or add next", ["Type the code", "Draw the first flowchart", "Install Python"]],
  ["Iterative development is best when…", "the requirements might change or need user feedback", ["you are sure nothing will ever change", "there is no time to test", "the program has one line"]],
  ["Which is a DISADVANTAGE of iterative development?", "It can be hard to know when the program is 'finished'", ["Errors are found early", "Users give feedback", "You always have a working version"]],
  ["You add a new feature and the program stops working. What should you do?", "Find and fix the error, test again, then continue", ["Add more features to hide it", "Delete the whole program", "Hand it in anyway"]],
  ["What does 'iterate' mean?", "Repeat", ["Translate", "Delete", "Compile"], {t: ["repeat"]}],
  ["Which statement about prototypes is TRUE?", "They help show ideas to users early", ["They must have every feature", "They are never tested", "They are only made of paper"]],
  ["Version 3 of a game adds a high-score list. Version 2 added sound. Which is TRUE?", "Each version builds on the previous one", ["Version 3 must remove the sound", "Only version 1 was tested", "Versions don't need testing"]],
  ["Why should only a small number of changes be made in each iteration?", "If something breaks, it is easy to find which change caused it", ["Python only allows small changes", "To use more memory", "Big changes are not allowed in Python"]],
  ["Which tool helps record what changed in each version?", "A development log", ["A trace table only", "A firewall", "A compiler"]],
  ["In iterative development, testing happens…", "after every version", ["only at the very end", "never", "only before coding"]],
  ["A prototype calculator only adds numbers. What would a sensible next iteration add?", "Subtraction, then test it", ["Every feature at once without testing", "Nothing — prototypes are final", "A new programming language"]]
],

"9P.07": [
  ["What does it mean to 'evaluate' a development process?", "Judge how well the way you built the program worked, and how to improve it", ["Count the lines of code", "Run the program once", "Translate the code"]],
  ["What is decomposition?", "Breaking a big problem into smaller parts", ["Deleting old code", "Repeating code in a loop", "Testing with invalid data"], {t: ["decomposition"]}],
  ["What is a sub-program?", "A named block of code that does one job and can be called when needed", ["A program for small computers", "A syntax error", "A list of test data"]],
  ["Which is a benefit of using sub-programs?", "Code can be reused instead of repeated", ["The program needs no testing", "It makes the program longer", "It removes the need for variables"]],
  ["Which question helps evaluate your development process?", "Were errors found early enough to fix easily?", ["What colour is the code editor?", "How fast can I type?", "Which keyboard did I use?"]],
  ["A team splits a game into: menu, scoring, levels, sound. This is…", "decomposition", ["debugging", "iteration", "compiling"]],
  ["What is a disadvantage of planning everything, coding everything and only testing at the end?", "Problems may be found late when they are harder to fix", ["Errors are found too early", "It uses too many prototypes", "Users give too much feedback"]],
  ["In Python, which keyword creates a sub-program?", "def", ["for", "if", "sub"], {t: ["def"]}],
  ["What do you call running a sub-program by its name?", "Calling it", ["Compiling it", "Indexing it", "Tracing it"]],
  ["Why might decomposition help a team?", "Different people can work on different parts at the same time", ["It means only one person can work", "It makes the problem bigger", "It removes the need for a plan"]],
  ["A student wrote all their code before testing and found 30 errors. What would improve their process?", "Test after each small part or version", ["Write even more code before testing", "Stop testing", "Use only invalid test data"]],
  ["Which is a sign of a GOOD development process?", "The plan, testing and feedback led to improvements in each version", ["The program was never tested", "There was no plan", "Errors were ignored"]],
  ["Which is NOT a stage of developing a program?", "Defragmenting", ["Planning", "Testing", "Evaluating"]],
  ["What does an algorithm design (flowchart/pseudocode) add to the development process?", "A clear plan before coding, which reduces mistakes", ["Nothing, it wastes time", "It translates the program", "It replaces testing"]],
  ["Another name for a sub-program is…", "sub-routine", ["sub-loop", "sub-index", "sub-data"], {t: ["subroutine", "sub-routine", "procedure", "function"]}],
  ["Which is the best evaluation comment?", "Testing with extreme data found a boundary bug early, so next time I will plan extreme tests first", ["My program is good", "It works", "I finished it"]],
  ["Why is it useful to get feedback from a partner when evaluating?", "They may spot problems or ideas you missed", ["They can type faster", "Partners must do the coding", "It is required by Python"]],
  ["Small sub-programs are easier to…", "test and fix one at a time", ["hide from users", "turn into hardware", "delete accidentally"]],
  ["Which process gives users a working version early?", "Iterative development", ["Testing only at the end", "Writing no plan", "Copying code"]],
  ["A login problem is decomposed. Which part is MOST sensible?", "Check the password", ["Paint the screen blue", "Buy a new computer", "Write the final report first"]],
  ["What does 'reuse' code mean?", "Using the same sub-program in different places or programs", ["Typing the same code again", "Deleting the code", "Printing the code"]],
  ["When evaluating a process, you should mention…", "what went well and what you would do differently", ["only what went well", "only the program's colour", "nothing — just hand it in"]]
],

"9P.08": [
  ["What is a test plan?", "A table of tests showing the data used, the expected result and the actual result", ["A list of program variables", "A flowchart of the program", "A list of error messages"]],
  ["Which columns should a test plan include?", "Test data, type of data, expected result, actual result", ["Font, colour, size", "Name, age, address", "Line number only"]],
  ["What does 'expected result' mean in a test plan?", "What the program SHOULD do with that data", ["What the program actually did", "The type of error", "The number of tests"]],
  ["A test's actual result is different from the expected result. This means…", "there is an error that needs fixing", ["the test passed", "the test data was normal", "nothing — ignore it"]],
  ["Why include all three types of test data in a test plan?", "To check the program accepts good data and rejects bad data, including at the boundaries", ["To make the plan longer", "Because Python needs it", "To make the program faster"]],
  ["When should a test plan be written?", "Before testing — ideally while planning the program", ["After the program is handed in", "Never", "Only if there are errors"]],
  ["A program accepts 1–10. Test data 10, expected 'Accepted', actual 'Rejected'. What kind of error is likely?", "A logic error (probably < instead of <=)", ["A syntax error", "No error", "A hardware error"]],
  ["Which is the BEST expected result for invalid data 'abc' entered as an age?", "An error message asking for a number", ["The program crashes", "It accepts the age", "Nothing happens"]],
  ["Applying a test plan means…", "running each test and recording the actual result", ["deleting failed tests", "only reading the plan", "changing the expected results to match"]],
  ["What should you do after fixing an error found by a test?", "Run the test again (and the others) to check it now passes", ["Remove the test from the plan", "Change the expected result", "Stop testing"]],
  ["A test plan for a login should include…", "correct password, last allowed try, and wrong passwords", ["only the correct password", "only wrong passwords", "no passwords"]],
  ["Test plans help programmers to…", "test systematically, so nothing is forgotten", ["skip testing", "write code faster", "avoid planning"]]
],

"9P.09": [
  ["A program accepts ages 11–16. Which is NORMAL test data?", "14", ["11", "17", "\"abc\""]],
  ["A program accepts ages 11–16. Which is EXTREME test data?", "16", ["14", "20", "\"ten\""]],
  ["A program accepts ages 11–16. Which is INVALID test data?", "17", ["11", "16", "13"]],
  ["What is extreme (boundary) data?", "Data at the very edge of the allowed range — it should be accepted", ["Data that is far too big", "Data of the wrong type", "Random data"]],
  ["What is invalid data?", "Data that should be rejected — outside the range or the wrong type", ["Data at the boundary", "Any number", "Data the program accepts"]],
  ["What is normal data?", "Sensible data well inside the range that should be accepted", ["Data at the edges of the range", "Data that should be rejected", "Text data only"]],
  ["Marks from 0 to 100 are allowed. Which pair are BOTH extreme data?", "0 and 100", ["1 and 99", "-1 and 101", "50 and 60"]],
  ["Marks from 0 to 100 are allowed. Which is invalid?", "-5", ["0", "100", "57"]],
  ["A password must be 8–12 characters. Which is extreme data?", "\"abcdefgh\" (8 characters)", ["\"sunflower\" (9 characters)", "\"cat\" (3 characters)", "\"abcdefghijklmnop\" (16 characters)"]],
  ["A program asks for a number of tickets (1–6). The user types \"two\". This is…", "invalid data", ["normal data", "extreme data", "boundary data"]],
  ["Why is extreme data important to test?", "Boundaries are where logic errors (like < instead of <=) often hide", ["It is the easiest data", "It always crashes programs", "It is never used"]],
  ["A quiz accepts answers A, B, C or D. Which is invalid data?", "E", ["A", "D", "B"]]
],

"9P.10": [
  ["What is a syntax error?", "Breaking the rules of the programming language, so the program won't run", ["The program gives the wrong answer", "The program crashes while running", "A slow program"]],
  ["What is a logic error?", "The program runs but gives the wrong result", ["The program won't run at all", "A spelling mistake in print", "The computer turns off"]],
  ["What is a runtime error?", "The program starts but crashes while running", ["A spelling mistake that stops it starting", "The program gives a slightly wrong answer", "A slow internet connection"]],
  ["What type of error is this?", "Syntax error", ["Logic error", "Runtime error", "No error"], {c: "print(\"Hello\""}],
  ["What type of error is this? (It should work out the average.)", "Logic error", ["Syntax error", "Runtime error", "No error"], {c: "average = a + b / 2"}],
  ["What type of error is this?", "Runtime error", ["Syntax error", "Logic error", "No error"], {c: "x = 10\ny = 0\nprint(x / y)"}],
  ["What type of error is this?", "Syntax error", ["Logic error", "Runtime error", "No error"], {c: "prnt(\"Hi\")"}],
  ["What type of error happens when the user types \"twelve\" here?", "Runtime error", ["Syntax error", "Logic error", "No error"], {c: "age = int(input(\"Age: \"))"}],
  ["Which type of error gives NO error message?", "Logic error", ["Syntax error", "Runtime error", "All of them give messages"]],
  ["What type of error is this? (Teenagers are 13–19.)", "Logic error", ["Syntax error", "Runtime error", "No error"], {c: "if age > 13 and age <= 19:\n    print(\"Teenager\")"}],
  ["What type of error is this?", "Syntax error", ["Logic error", "Runtime error", "No error"], {c: "for i in range(5)\n    print(i)"}],
  ["What type of error is this?", "Runtime error", ["Syntax error", "Logic error", "No error"], {c: "names = [\"Ana\", \"Ben\"]\nprint(names[2])"}],
  ["Which tool is MOST helpful for finding a logic error?", "A trace table", ["A spell checker", "A printer", "A firewall"]],
  ["ZeroDivisionError, ValueError and IndexError are examples of…", "runtime errors", ["syntax errors", "logic errors", "hardware errors"]]
],

"9P.11": [
  ["What is a trace table used for?", "To record the value of variables step by step to find errors", ["To draw a flowchart", "To store data in a database", "To translate code"]],
  ["Working through code on paper with a trace table is called…", "a dry run", ["compiling", "decomposition", "a wet run"], {t: ["dry run", "a dry run"]}],
  ["In a trace table, what does each column usually represent?", "A variable (or the output)", ["A line of code", "A test plan", "A data type"]],
  ["When do you write a new value in a trace table?", "Each time a variable changes", ["Only at the end", "Only when there is output", "Once per program"]],
  ["Trace this. What is the final value of total?", "6", ["3", "10", "4"], {c: "total = 0\nfor count in range(1, 4):\n    total = total + count", t: true}],
  ["Trace this. What is the final value of x?", "8", ["6", "4", "16"], {c: "x = 1\nfor i in range(3):\n    x = x * 2", t: true}],
  ["This should add 1 to 5 (=15) but prints 10. What does a trace table show?", "The loop stops at 4 — range(1, 5) should be range(1, 6)", ["total should start at 1", "print is spelt wrong", "There is no error"], {c: "total = 0\nfor n in range(1, 5):\n    total = total + n\nprint(total)"}],
  ["Why is a trace table described as 'systematic'?", "It checks every step in order, so nothing is missed", ["It uses a computer system", "It is random", "It only checks the last line"]],
  ["Which type of error are trace tables MOST useful for finding?", "Logic errors", ["Syntax errors", "Hardware faults", "Typing speed"]],
  ["Trace: a = 5, b = 3, a = a + b, b = a - b. What is b?", "5", ["3", "8", "2"], {t: true}],
  ["Trace this. What is printed last?", "9", ["3", "6", "12"], {c: "for i in range(1, 4):\n    print(i * 3)", t: true}],
  ["Trace this. What is the final value of count?", "2", ["3", "1", "4"], {c: "count = 0\nfor n in [4, 7, 10, 13]:\n    if n > 8:\n        count = count + 1", t: true}]
],

"9CT.01": [
  ["The rule is 'at least 8 characters'. What is wrong with: IF LENGTH(Password) > 8 THEN OUTPUT \"OK\"", "It should be >= 8 so an 8-character password is accepted", ["It should be < 8", "LENGTH should be UCASE", "Nothing is wrong"]],
  ["This should output the LARGEST number. What is the error?", "Numbers[i] < Max should be Numbers[i] > Max", ["Max should start at 100", "The loop should start at 0", "OUTPUT should be INPUT"], {c: "Max ← Numbers[0]\nFOR i ← 1 TO 4\n    IF Numbers[i] < Max THEN\n        Max ← Numbers[i]\n    ENDIF\nNEXT i\nOUTPUT Max"}],
  ["What does this pseudocode output?", "15", ["5", "10", "0"], {c: "Total ← 0\nFOR i ← 1 TO 5\n    Total ← Total + i\nNEXT i\nOUTPUT Total", t: true}],
  ["What does ← mean in pseudocode?", "Assign (store a value in a variable)", ["Less than", "Output", "Go back"]],
  ["Which keyword ends an IF block in pseudocode?", "ENDIF", ["STOP", "NEXT", "END"], {t: ["endif"]}],
  ["Which keyword ends a FOR loop in pseudocode?", "NEXT", ["ENDIF", "STOP", "UNTIL"], {t: ["next"]}],
  ["This should output 'Pass' for marks of 50 or more. Fix: IF Mark > 50 THEN OUTPUT \"Pass\"", "Change > to >=", ["Change > to <", "Change Pass to Fail", "Remove THEN"]],
  ["This should print 'Hello' 3 times. What should be edited?", "Change 1 TO 4 to 1 TO 3", ["Change OUTPUT to INPUT", "Remove NEXT i", "Change Hello to hello"], {c: "FOR i ← 1 TO 4\n    OUTPUT \"Hello\"\nNEXT i"}],
  ["What does this output if Name = \"sam\"?", "SAM", ["sam", "Sam", "3"], {c: "INPUT Name\nOUTPUT UCASE(Name)"}],
  ["What does this output?", "Odd", ["Even", "7", "Nothing"], {c: "Num ← 7\nIF Num MOD 2 = 0 THEN\n    OUTPUT \"Even\"\nELSE\n    OUTPUT \"Odd\"\nENDIF"}],
  ["What is the best first step to correct an algorithm?", "Trace it with test data to find where it goes wrong", ["Delete it and start again", "Add more lines", "Change all the variable names"]],
  ["What is the error? (It should count from 1 to 10.)", "Count should be increased by 1, not 2 — or use FOR Count ← 1 TO 10", ["OUTPUT should come first", "Count should start at 10", "There is no error"], {c: "Count ← 1\nFOR i ← 1 TO 10\n    OUTPUT Count\n    Count ← Count + 2\nNEXT i"}]
],

"9CT.02": [
  ["How many times is 'Hi' output?", "4", ["3", "5", "1"], {c: "FOR i ← 1 TO 4\n    OUTPUT \"Hi\"\nNEXT i", t: true}],
  ["In a flowchart, how can you tell there is a loop?", "An arrow goes back up to an earlier step", ["There is an oval", "There are two outputs", "The shapes are coloured"]],
  ["What is output?", "2 4 6", ["1 2 3", "2 3 4", "6"], {c: "FOR i ← 1 TO 3\n    OUTPUT i * 2\nNEXT i"}],
  ["Which flowchart symbol is used to decide whether the loop should repeat?", "A diamond", ["An oval", "A parallelogram", "A rectangle"]],
  ["What is the value of Total at the end?", "20", ["4", "16", "24"], {c: "Total ← 0\nFOR i ← 1 TO 4\n    Total ← Total + 5\nNEXT i", t: true}],
  ["In a flowchart loop, which step stops the loop from going on forever?", "Increasing the counter each time and checking it in the decision", ["The Start oval", "An input box", "Drawing more arrows"]],
  ["What does this output?", "3", ["6", "2", "0"], {c: "Count ← 0\nFOR x ← 1 TO 6\n    IF x MOD 2 = 0 THEN\n        Count ← Count + 1\n    ENDIF\nNEXT x\nOUTPUT Count", t: true}],
  ["A flowchart: Counter = 1 → Output Counter → Counter = Counter + 1 → Is Counter > 3? (No: back to Output; Yes: Stop). What is output?", "1, 2, 3", ["1, 2, 3, 4", "1", "2, 3"]],
  ["How many times does the loop body run? FOR i ← 0 TO 9", "10", ["9", "11", "1"], {t: true}],
  ["What is output?", "10 8 6", ["10 9 8", "6 8 10", "10"], {c: "FOR i ← 10 TO 6 STEP -2\n    OUTPUT i\nNEXT i"}],
  ["Following an algorithm means…", "carrying out each step in order to see what it does", ["rewriting it in Python", "deleting the loop", "adding a new input"]],
  ["What is output?", "Hello Ana, Hello Ben, Hello Cy", ["Hello Ana", "Ana, Ben, Cy", "Hello Names"], {c: "Names ← [\"Ana\", \"Ben\", \"Cy\"]\nFOR i ← 0 TO 2\n    OUTPUT \"Hello \" + Names[i]\nNEXT i"}]
],

"9CT.03": [
  ["What is an algorithm?", "A set of step-by-step instructions to solve a problem", ["A type of computer", "A programming error", "A spreadsheet function"], {t: ["algorithm"]}],
  ["Which flowchart symbol shows Start or Stop?", "Oval (terminator)", ["Diamond", "Rectangle", "Parallelogram"]],
  ["Which flowchart symbol shows a decision?", "Diamond", ["Oval", "Rectangle", "Parallelogram"], {t: ["diamond"]}],
  ["Which flowchart symbol shows input or output?", "Parallelogram", ["Diamond", "Oval", "Circle"], {t: ["parallelogram"]}],
  ["Which flowchart symbol shows a process, e.g. Total = Total + 1?", "Rectangle", ["Diamond", "Oval", "Parallelogram"], {t: ["rectangle"]}],
  ["What is pseudocode?", "Structured English used to plan an algorithm, which looks a bit like code", ["A real programming language", "A secret code", "Machine code"], {t: ["pseudocode"]}],
  ["Which pseudocode line asks the user for their name?", "INPUT Name", ["OUTPUT Name", "Name ← INPUT", "PRINT Name"]],
  ["What do the arrows in a flowchart show?", "The order (flow) of the steps", ["Errors", "Loops only", "Data types"]],
  ["Why plan an algorithm before coding?", "It helps you think through the logic and spot problems early", ["It makes the code run faster", "Python requires it", "To avoid using variables"]],
  ["Which pseudocode correctly makes a decision?", "IF Age >= 13 THEN\n   OUTPUT \"Teen\"\nENDIF", ["IF Age >= 13\nOUTPUT \"Teen\"", "FOR Age >= 13\nNEXT", "Age >= 13 THEN OUTPUT"]],
  ["How many arrows normally leave a decision diamond?", "2 (Yes and No)", ["1", "3", "0"]],
  ["Which is TRUE about pseudocode?", "It does not need to follow strict syntax rules", ["It runs on any computer", "It must be written in Python", "It cannot contain loops"]]
],

"9CT.04": [
  ["What is a predefined sub-routine?", "A sub-routine that has already been written, so you just call it by name", ["A sub-routine you must write first", "A loop that never ends", "A type of variable"]],
  ["How is a sub-routine call drawn in a flowchart?", "A rectangle with double lines on each side", ["A diamond", "An oval", "A parallelogram with a circle"]],
  ["Which pseudocode line runs the procedure ShowMenu?", "CALL ShowMenu()", ["OUTPUT ShowMenu", "INPUT ShowMenu", "FOR ShowMenu"]],
  ["LENGTH(\"cat\") is an example of…", "a predefined function", ["a loop", "a variable", "a syntax error"]],
  ["What is the benefit of using predefined sub-routines?", "You save time and avoid writing (and testing) the same code again", ["The program has more lines", "No need to plan", "They make the computer faster"]],
  ["In pseudocode, which keywords start and end a procedure?", "PROCEDURE … ENDPROCEDURE", ["IF … ENDIF", "FOR … NEXT", "START … STOP"]],
  ["CheckLogin(Name, Password) returns TRUE or FALSE. What data type does it return?", "Boolean", ["String", "Integer", "Real"]],
  ["What are Name and Password in CheckLogin(Name, Password)?", "Parameters — data passed into the sub-routine", ["Loops", "Outputs only", "Error messages"]],
  ["What is the difference between a function and a procedure?", "A function returns a value; a procedure just carries out steps", ["There is no difference", "A procedure returns a value; a function doesn't", "Functions can't be called"]],
  ["Which pseudocode correctly uses a predefined function?", "Size ← LENGTH(Word)", ["LENGTH ← Word", "Word(LENGTH) ← Size", "CALL Word LENGTH"]],
  ["The procedure DrawSquare() is called 3 times. How many times must it be written?", "Once", ["3 times", "4 times", "It cannot be called more than once"]],
  ["Which Python line calls a predefined function?", "print(len(\"hello\"))", ["def len():", "for len in range(3):", "len = 5"]]
],

"9CT.05": [
  ["What must be true before you use a binary search?", "The list must be sorted", ["The list must have 10 items", "The list must contain text", "The list must be unsorted"]],
  ["Where does a binary search start?", "At the middle item", ["At the first item", "At the last item", "At a random item"]],
  ["In a binary search, if the target is SMALLER than the middle item, you…", "discard the right half and search the left half", ["discard the left half", "start again from the beginning", "stop — it is not there"]],
  ["Which is faster for a long sorted list?", "Binary search", ["Linear search", "They are always the same", "Neither can search sorted lists"]],
  ["What is a linear search?", "Checking each item one by one from the start", ["Starting in the middle and halving", "Sorting the list", "Searching only the last item"]],
  ["Each step of a binary search…", "halves the number of items left to search", ["checks one more item", "doubles the list", "sorts the list"]],
  ["Find 23 in [3, 8, 12, 17, 23, 31, 40] using binary search. Which item is checked first?", "17", ["3", "23", "40"], {t: true}],
  ["Find 23 in [3, 8, 12, 17, 23, 31, 40]. How many comparisons does binary search need?", "3", ["5", "1", "7"], {t: true}],
  ["Which search can be used on an UNSORTED list?", "Linear search", ["Binary search", "Both", "Neither"]],
  ["Roughly how many checks does a binary search need for 1000 sorted items, at most?", "About 10", ["About 500", "1000", "About 100"]],
  ["Search for 4 in [1, 3, 5, 7, 9]. Middle is 5, then 1, then 3. What is the result?", "Not found", ["Found at index 2", "Found at index 1", "Found at index 4"]],
  ["Which is a disadvantage of binary search?", "The data must be sorted first", ["It is slower than linear search", "It only works on 5 items", "It checks every item"]]
],

"9CT.06": [
  ["What is iteration?", "Repeating a set of instructions", ["Making a decision", "Doing steps in order", "Storing data"], {t: ["repeating", "repetition", "repeat"]}],
  ["A count-controlled loop is used when…", "you know how many times to repeat", ["you don't know how many times", "you want to make a decision", "you want to stop the program"]],
  ["Which pseudocode is a count-controlled loop?", "FOR i ← 1 TO 10 … NEXT i", ["IF i = 10 THEN … ENDIF", "INPUT i", "OUTPUT i"]],
  ["Which Python is a count-controlled loop?", "for i in range(10):", ["if i == 10:", "print(i)", "i = 10"]],
  ["In 'FOR Counter ← 1 TO 5', what is Counter?", "The loop counter variable", ["An output", "A constant", "An error"]],
  ["In a flowchart, a count-controlled loop needs…", "a counter, a decision that checks it, and an arrow looping back", ["two ovals in the middle", "no decision", "only parallelograms"]],
  ["Which is the pseudocode equivalent of: for i in range(1, 6):", "FOR i ← 1 TO 5", ["FOR i ← 1 TO 6", "FOR i ← 0 TO 6", "FOR i ← 0 TO 5"]],
  ["How many times does FOR x ← 2 TO 7 repeat?", "6", ["5", "7", "2"], {t: true}],
  ["What does STEP 2 mean in 'FOR i ← 0 TO 10 STEP 2'?", "i goes up by 2 each time", ["The loop runs twice", "i starts at 2", "The loop stops at 2"]],
  ["What are the three basic programming constructs?", "Sequence, selection, iteration", ["Input, output, store", "Syntax, logic, runtime", "Integer, real, string"]],
  ["Which keyword in pseudocode moves the loop on to the next value?", "NEXT", ["ENDIF", "THEN", "ELSE"]],
  ["What would be BEST for asking 5 quiz questions?", "A count-controlled loop", ["5 IF statements", "A single INPUT", "A parallelogram"]]
],

"9CT.07": [
  ["Predict the output.", "8", ["6", "4", "2"], {c: "x = 1\nfor i in range(3):\n    x = x * 2\nprint(x)", t: true}],
  ["Predict the output.", "12", ["9", "6", "24"], {c: "number = 2\nfor i in range(1, 4):\n    number = number * i\nprint(number)", t: true}],
  ["Predict the output.", "***", ["*", "* * *", "3"], {c: "line = \"\"\nfor i in range(3):\n    line = line + \"*\"\nprint(line)"}],
  ["Predict the final value of Total.", "25", ["15", "20", "30"], {c: "Total ← 0\nFOR i ← 1 TO 5\n    Total ← Total + 5\nNEXT i", t: true}],
  ["Predict how many times 'Go' is printed.", "6", ["5", "3", "2"], {c: "for a in range(2):\n    for b in range(3):\n        print(\"Go\")", t: true}],
  ["Predict the output.", "5 4 3 2 1", ["1 2 3 4 5", "5 4 3 2 1 0", "4 3 2 1"], {c: "for i in range(5, 0, -1):\n    print(i, end=\" \")"}],
  ["Predict the output.", "10", ["4", "6", "0"], {c: "s = 0\nfor n in [1, 2, 3, 4]:\n    s = s + n\nprint(s)", t: true}],
  ["Predict the output.", "0", ["10", "1", "5"], {c: "count = 10\nfor i in range(5):\n    count = count - 2\nprint(count)", t: true}],
  ["Predict the value of Big at the end.", "9", ["2", "7", "4"], {c: "Nums ← [4, 9, 2, 7]\nBig ← 0\nFOR i ← 0 TO 3\n    IF Nums[i] > Big THEN\n        Big ← Nums[i]\n    ENDIF\nNEXT i", t: true}],
  ["Predict the output.", "11", ["10", "12", "1"], {c: "x = 1\nfor i in range(5):\n    x = x + 2\nprint(x)", t: true}],
  ["Predict the output.", "3", ["2", "4", "5"], {c: "words = [\"cat\", \"elephant\", \"dog\", \"tiger\"]\nshort = 0\nfor w in words:\n    if len(w) <= 4:\n        short = short + 1\nprint(short + 1)", t: true}],
  ["Predict the last number printed.", "16", ["8", "32", "4"], {c: "for i in range(1, 5):\n    print(i * i)", t: true}]
],

"9CT.08": [
  ["Two algorithms give the same correct result. Algorithm A has 3 lines using a loop; B has 20 copied lines. Which is better and why?", "A — it is shorter, easier to read and easier to change", ["B — longer code is more accurate", "B — loops are slower", "They are exactly as good"]],
  ["When comparing algorithms, which is the MOST important first question?", "Does it give the correct result every time?", ["Which one is longer?", "Which one uses capital letters?", "Which one was written first?"]],
  ["What does 'efficient' mean for an algorithm?", "It solves the problem using fewer steps or less time", ["It uses more code", "It has more variables", "It always uses a loop"]],
  ["Linear search vs binary search on a sorted list of 1 million names. Which is best suited?", "Binary search — far fewer comparisons", ["Linear search — it checks everything", "Both are the same", "Neither works"]],
  ["Linear search vs binary search on an unsorted list of 8 items. Which is best suited?", "Linear search — binary search needs sorted data", ["Binary search — always faster", "Neither", "Both are impossible"]],
  ["Which algorithm is easier to change if we need 100 stars instead of 10?", "for i in range(10): print(\"*\")", ["print(\"*\") written 10 times", "Both are equally easy", "Neither can be changed"]],
  ["Algorithm A gets the right answer in 50 steps. B gets a wrong answer in 5 steps. Which is better?", "A — a correct result matters more than speed", ["B — it is faster", "B — it is shorter", "Neither"]],
  ["Which factor is LEAST important when choosing between two algorithms?", "Which one uses longer variable names", ["Correctness", "Efficiency", "How easy it is to understand and maintain"]],
  ["To compare two algorithms fairly you should…", "test both with the same test data", ["test only one", "use different data for each", "only read the first line"]],
  ["Add 1 to 100: Algorithm A loops 100 times. B uses the formula 100 × 101 ÷ 2. Which is more efficient?", "B — one calculation instead of 100", ["A — loops are always best", "They take the same time", "Neither gives the right answer"]],
  ["'Contrast' two algorithms means…", "describe how they are different", ["describe how they are the same", "delete one", "run them together"]],
  ["Why might a slightly slower algorithm still be chosen?", "It is much easier for others to read and fix", ["It is always more correct", "Slow code uses less memory", "Teachers prefer slow code"]]
],

"9CT.09": [
  ["Which construct is: steps carried out one after another in order?", "Sequence", ["Selection", "Iteration", "Decomposition"], {t: ["sequence"]}],
  ["Which construct is: making a choice using IF?", "Selection", ["Sequence", "Iteration", "Translation"], {t: ["selection"]}],
  ["Which construct is: repeating with a loop?", "Iteration", ["Selection", "Sequence", "Compilation"], {t: ["iteration"]}],
  ["Which constructs are used here?", "Sequence, selection and iteration", ["Sequence only", "Selection only", "Iteration only"], {c: "FOR i ← 1 TO 3\n    INPUT Answer\n    IF Answer = \"yes\" THEN\n        OUTPUT \"Great\"\n    ENDIF\nNEXT i"}],
  ["In a flowchart, which shape shows SELECTION?", "A diamond with Yes/No branches", ["An oval", "A parallelogram", "A rectangle"]],
  ["Which algorithm needs selection inside iteration?", "Check 10 test scores and output 'Pass' for each one 50 or above", ["Output 'Hello' once", "Add two numbers", "Ask for a name and print it"]],
  ["What is output when Scores = [40, 75, 60]?", "2", ["3", "1", "0"], {c: "Passed ← 0\nFOR i ← 0 TO 2\n    IF Scores[i] >= 50 THEN\n        Passed ← Passed + 1\n    ENDIF\nNEXT i\nOUTPUT Passed", t: true}],
  ["Where should OUTPUT \"Done\" go so it only appears ONCE after the loop?", "After NEXT i", ["Inside the loop", "Before FOR", "Inside the IF"]],
  ["Which line is SELECTION?", "IF Age >= 18 THEN", ["FOR i ← 1 TO 5", "Total ← 0", "INPUT Age"]],
  ["What does this output?", "Big Small Big", ["Big Big Big", "Small Big Small", "Big"], {c: "Nums ← [12, 3, 20]\nFOR i ← 0 TO 2\n    IF Nums[i] > 10 THEN\n        OUTPUT \"Big\"\n    ELSE\n        OUTPUT \"Small\"\n    ENDIF\nNEXT i"}],
  ["A program asks 5 questions and adds 1 to Score for each right answer. Which constructs are needed?", "Sequence, selection and iteration", ["Iteration only", "Selection only", "Sequence only"]],
  ["Which statement about combining constructs is TRUE?", "Loops can contain IF statements, and IF statements can contain loops", ["You can only use one construct per program", "IF statements cannot go inside loops", "Sequence is never needed"]]
]
});
