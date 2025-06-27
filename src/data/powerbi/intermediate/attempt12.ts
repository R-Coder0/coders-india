export const questions = [
  {
    "id": 1,
    "question": "Which module in Python provides support for regular expressions?",
    "options": [
      "regex",
      "re",
      "pyregex",
      "regexp"
    ],
    "correctAnswer": 1,
    "explanation": "The 're' module provides support for regular expressions in Python."
  },
  {
    "id": 2,
    "question": "What does re.match() do in Python?",
    "options": [
      "Matches a pattern anywhere in the string",
      "Matches a pattern at the beginning of the string",
      "Finds all matches in a string",
      "Replaces part of the string"
    ],
    "correctAnswer": 1,
    "explanation": "The re.match() function matches a pattern only at the beginning of the string."
  },
  {
    "id": 3,
    "question": "What will re.findall(r'\\d+', 'a1b22c333') return?",
    "options": [
      "['a', 'b', 'c']",
      "[1, 22, 333]",
      "['1', '22', '333']",
      "'1 22 333'"
    ],
    "correctAnswer": 2,
    "explanation": "re.findall() returns all the sequences of digits in the string as a list of strings."
  },
  {
    "id": 4,
    "question": "What does the re.search() function return if a match is found?",
    "options": [
      "A string",
      "An integer",
      "A match object",
      "True"
    ],
    "correctAnswer": 2,
    "explanation": "The re.search() function returns a match object when a match is found."
  },
  {
    "id": 5,
    "question": "What will re.sub(r'\\s', '-', 'Hello World') return?",
    "options": [
      "'Hello-World'",
      "'Hello World'",
      "'Hello_World'",
      "'Hello--World'"
    ],
    "correctAnswer": 0,
    "explanation": "The re.sub() function replaces spaces with dashes, returning 'Hello-World'."
  },
  {
    "id": 6,
    "question": "Which function returns a match object if the pattern is found anywhere in the string?",
    "options": [
      "re.match()",
      "re.check()",
      "re.search()",
      "re.scan()"
    ],
    "correctAnswer": 2,
    "explanation": "The re.search() function returns a match object if the pattern is found anywhere in the string."
  },
  {
    "id": 7,
    "question": "What does . (dot) match in a regular expression by default in Python?",
    "options": [
      "Only whitespace characters",
      "Only digits",
      "Any single character except newline",
      "Any alphanumeric character"
    ],
    "correctAnswer": 2,
    "explanation": "The dot (.) matches any single character except a newline by default."
  },
  {
    "id": 8,
    "question": "Which of these patterns will match a valid 10-digit phone number?",
    "options": [
      "\\d{10}",
      "[0-9]{10}",
      "^[0-9]{10}$",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "All the above patterns match a valid 10-digit phone number."
  },
  {
    "id": 9,
    "question": "What is the output of re.split(r'\\W+', 'word1, word2! word3')?",
    "options": [
      "['word1', 'word2', 'word3']",
      "['word1 word2 word3']",
      "['word1,', 'word2!', 'word3']",
      "['word1 word2! word3']"
    ],
    "correctAnswer": 0,
    "explanation": "The re.split() function splits the string by non-word characters, returning ['word1', 'word2', 'word3']."
  },
  {
    "id": 10,
    "question": "What is the use of group() in a match object?",
    "options": [
      "Returns the position of the match",
      "Returns the full matched string",
      "Returns a list of matches",
      "Replaces the match"
    ],
    "correctAnswer": 1,
    "explanation": "The group() method returns the full matched string from a match object."
  },
  {
    "id": 11,
    "question": "What is a key difference between procedural and object-oriented programming?",
    "options": [
      "Procedural programming is based on classes and objects",
      "OOP divides programs into functions only",
      "OOP emphasizes code reuse using objects and classes",
      "Procedural programming supports inheritance"
    ],
    "correctAnswer": 2,
    "explanation": "OOP emphasizes code reuse using objects and classes, which is a key difference from procedural programming."
  },
  {
    "id": 12,
    "question": "Which of the following is not a feature of Object-Oriented Programming?",
    "options": [
      "Encapsulation",
      "Inheritance",
      "Function overloading",
      "Sequential execution"
    ],
    "correctAnswer": 3,
    "explanation": "Sequential execution is not a feature specific to Object-Oriented Programming."
  },
  {
    "id": 13,
    "question": "In procedural programming, code is organized into:",
    "options": [
      "Classes and methods",
      "Functions and procedures",
      "Modules and objects",
      "Files and constructors"
    ],
    "correctAnswer": 1,
    "explanation": "In procedural programming, code is organized into functions and procedures."
  },
  {
    "id": 14,
    "question": "In OOP, what is encapsulation?",
    "options": [
      "Wrapping code into multiple programs",
      "Hiding internal state and requiring all interaction to be performed through an object’s methods",
      "Making code longer and complex",
      "The ability of different objects to respond differently to the same function call"
    ],
    "correctAnswer": 1,
    "explanation": "Encapsulation in OOP refers to hiding the internal state of an object and allowing interaction only through its methods."
  },
  {
    "id": 15,
    "question": "Which Python keyword is used to define a class?",
    "options": [
      "method",
      "function",
      "def",
      "class"
    ],
    "correctAnswer": 3,
    "explanation": "The 'class' keyword is used to define a class in Python."
  },
  {
    "id": 16,
    "question": "What is the correct syntax to create an object of a class in Python?",
    "options": [
      "obj = ClassName()",
      "object ClassName = new()",
      "new ClassName()",
      "ClassName obj()"
    ],
    "correctAnswer": 0,
    "explanation": "The correct syntax to create an object of a class is 'obj = ClassName()'."
  },
  {
    "id": 17,
    "question": "Which of the following is true about procedural programming?",
    "options": [
      "It uses objects for data abstraction",
      "It’s based on functions and a step-by-step approach",
      "It emphasizes reusability through inheritance",
      "It uses constructors and destructors"
    ],
    "correctAnswer": 1,
    "explanation": "Procedural programming is based on functions and a step-by-step approach."
  },
  {
    "id": 18,
    "question": "Which OOP concept allows different classes to have methods with the same name, but different behavior?",
    "options": [
      "Abstraction",
      "Encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3,
    "explanation": "Polymorphism allows different classes to have methods with the same name, but different behavior."
  },
  {
    "id": 19,
    "question": "In Python, which of the following best describes self in a class method?",
    "options": [
      "A local variable",
      "A keyword to create a new class",
      "A reference to the current instance of the class",
      "A built-in module"
    ],
    "correctAnswer": 2,
    "explanation": "In Python, 'self' refers to the current instance of the class in a class method."
  },
  {
    "id": 20,
    "question": "Which of the following is a benefit of Object-Oriented Programming over Procedural Programming?",
    "options": [
      "Code is always shorter",
      "Less memory usage",
      "Easier to debug syntax errors",
      "Better code reuse and maintainability"
    ],
    "correctAnswer": 3,
    "explanation": "Object-Oriented Programming offers better code reuse and maintainability compared to procedural programming."
  }
];
