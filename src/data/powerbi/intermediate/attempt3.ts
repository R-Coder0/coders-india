export const questions = [
  {
    "id": 1,
    "question": "What is the output of the following program?\n\n  i = 2 \n  if i == 2:\n      i+=1\n  for j in range(i):\n      pass\n      break\n      i+=1\n  print(i)",
    "options": [
      "3",
      "1",
      "Infinite loop",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "The loop runs once and breaks immediately, while i is incremented from 2 to 3."
  },
  {
    "id": 2,
    "question": "What would be the output of the following program?\n\n  n = 8\n  while n>=0:\n      n-=2\n      if n%2 == 0:\n          continue\n      print(n,end=\" \")\n  else:\n      print(\"Exce\",end=\" \")",
    "options": [
      "Exec",
      "4 6 8 2 0",
      "4 6 8 2 0 Exec",
      "No Output"
    ],
    "correctAnswer": 0,
    "explanation": "The loop executes and prints 'Exec' at the end after completing."
  },
  {
    "id": 3,
    "question": "Which of the following is a built-in namespace?",
    "options": [
      "User namespace",
      "Function namespace",
      "Local namespace",
      "Global namespace"
    ],
    "correctAnswer": 3,
    "explanation": "Global namespace is a built-in namespace that contains all globally accessible variables."
  },
  {
    "id": 4,
    "question": "Which Python statement is used to modify a global variable inside a function?",
    "options": [
      "public",
      "global",
      "static",
      "nonlocal"
    ],
    "correctAnswer": 1,
    "explanation": "The 'global' keyword is used to modify a global variable inside a function."
  },
  {
    "id": 5,
    "question": "What does nonlocal keyword do?",
    "options": [
      "Declares a global variable",
      "Refers to a local variable",
      "Refers to a variable in the nearest enclosing scope",
      "Declares a static variable"
    ],
    "correctAnswer": 2,
    "explanation": "The 'nonlocal' keyword is used to refer to a variable in the nearest enclosing scope."
  },
  {
    "id": 6,
    "question": "What is the correct syntax of a lambda function?",
    "options": [
      "lambda a, b: a + b",
      "def lambda(a, b): a + b",
      "lambda(a, b): return a + b",
      "return lambda a, b: a + b"
    ],
    "correctAnswer": 0,
    "explanation": "The correct syntax for a lambda function is 'lambda' followed by arguments and the expression to return."
  },
  {
    "id": 7,
    "question": "What will this code output?\n\n  x = lambda a: a * 2\n  print(x(4))",
    "options": [
      "2",
      "4",
      "8",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "The lambda function multiplies the input by 2, so the result is 4 * 2 = 8."
  },
  {
    "id": 8,
    "question": "Which function is used to apply a function to all items in a list?",
    "options": [
      "filter()",
      "map()",
      "reduce()",
      "zip()"
    ],
    "correctAnswer": 1,
    "explanation": "The map() function is used to apply a given function to each item in an iterable."
  },
  {
    "id": 9,
    "question": "What is the output of this code?\n\n  list(map(lambda x: x * 2, [1, 2, 3]))",
    "options": [
      "[1, 2, 3]",
      "[2, 4, 6]",
      "[3, 4, 5]",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "The lambda function multiplies each element of the list by 2, so the result is [2, 4, 6]."
  },
  {
    "id": 10,
    "question": "What does the filter() function return?",
    "options": [
      "A single value",
      "A boolean",
      "A list of values meeting a condition",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "The filter() function returns a list of values that satisfy a given condition."
  },
  {
    "id": 11,
    "question": "Which of the following best describes reduce()?",
    "options": [
      "Applies a function to all items and returns one value",
      "Sorts a list",
      "Filters a list",
      "Returns length"
    ],
    "correctAnswer": 0,
    "explanation": "reduce() applies a binary function cumulatively to the items in an iterable, resulting in a single value."
  },
  {
    "id": 12,
    "question": "What module is required to use reduce() in Python 3?",
    "options": [
      "functools",
      "itertools",
      "math",
      "operator"
    ],
    "correctAnswer": 0,
    "explanation": "The 'functools' module contains the reduce() function in Python 3."
  },
  {
    "id": 13,
    "question": "What is the output of this code?\n\n  from functools import reduce\n  reduce(lambda x, y: x + y, [1, 2, 3])",
    "options": [
      "1",
      "2",
      "6",
      "[6]"
    ],
    "correctAnswer": 2,
    "explanation": "reduce() adds all elements of the list together, resulting in 1 + 2 + 3 = 6."
  },
  {
    "id": 14,
    "question": "Which of the following is an anonymous function?",
    "options": [
      "def add():",
      "lambda x: x + 1",
      "return x + y",
      "add = def(x): x + 1"
    ],
    "correctAnswer": 1,
    "explanation": "A lambda function is an anonymous function, meaning it doesn't have a name."
  },
  {
    "id": 15,
    "question": "What is a syntax error?",
    "options": [
      "Error due to wrong logic",
      "Error due to incorrect indentation",
      "Error due to incorrect code structure",
      "Both B and C"
    ],
    "correctAnswer": 3,
    "explanation": "A syntax error occurs when the code structure or indentation is incorrect."
  },
  {
    "id": 16,
    "question": "Which of the following will raise a syntax error?",
    "options": [
      "print(\"Hello\")",
      "def func(",
      "x = 5 +",
      "Both B and C"
    ],
    "correctAnswer": 3,
    "explanation": "Both 'def func(' and 'x = 5 +' will raise syntax errors because they are incomplete."
  },
  {
    "id": 17,
    "question": "What kind of error is raised when a file is not found?",
    "options": [
      "FileError",
      "IOError",
      "FileNotFoundError",
      "InputError"
    ],
    "correctAnswer": 2,
    "explanation": "When a file is not found, Python raises a 'FileNotFoundError'."
  },
  {
    "id": 18,
    "question": "Which block must be used to catch exceptions?",
    "options": [
      "catch",
      "handle",
      "except",
      "try"
    ],
    "correctAnswer": 2,
    "explanation": "The 'except' block is used to catch exceptions in Python."
  },
  {
    "id": 19,
    "question": "Which block is always executed whether an exception occurs or not?",
    "options": [
      "try",
      "except",
      "finally",
      "raise"
    ],
    "correctAnswer": 2,
    "explanation": "The 'finally' block is always executed after the try and except blocks, regardless of whether an exception occurs."
  },
  {
    "id": 20,
    "question": "Which keyword is used to manually throw an exception?",
    "options": [
      "raise",
      "throw",
      "assert",
      "error"
    ],
    "correctAnswer": 0,
    "explanation": "The 'raise' keyword is used to manually throw an exception in Python."
  }
];
