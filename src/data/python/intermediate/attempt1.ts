export const questions = [
  {
    "id": 1,
    "question": "What is the correct syntax to define a function in Python?",
    "options": [
      "function myfunc():",
      "def myfunc:",
      "define myfunc():",
      "def myfunc():"
    ],
    "correctAnswer": 3
  },
  {
    "id": 2,
    "question": "What keyword is used to return a value from a function?",
    "options": [
      "break",
      "continue",
      "return",
      "yield"
    ],
    "correctAnswer": 2
  },
  {
    "id": 3,
    "question": "What is the output of the following code?\ndef add(a, b=2):\n    return a + b\nprint(add(3))",
    "options": [
      "2",
      "3",
      "5",
      "Error"
    ],
    "correctAnswer": 2
  },
  {
    "id": 4,
    "question": "Which of the following is a positional argument?",
    "options": [
      "a=3",
      "*args",
      "3",
      "**kwargs"
    ],
    "correctAnswer": 2
  },
  {
    "id": 5,
    "question": "What happens if you define default arguments before non-default arguments in a function?",
    "options": [
      "Works correctly",
      "SyntaxError",
      "Logical error",
      "Returns None"
    ],
    "correctAnswer": 1
  },
  {
    "id": 6,
    "question": "What will be the output?\ndef greet(name=\"User\"):\n    print(\"Hello\", name)\ngreet(\"Alice\")",
    "options": [
      "Hello",
      "Hello Alice",
      "Hello User",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 7,
    "question": "What does *args allow in a function?",
    "options": [
      "Unlimited keyword arguments",
      "Unlimited positional arguments",
      "Only default arguments",
      "Only integers"
    ],
    "correctAnswer": 1
  },
  {
    "id": 8,
    "question": "What does **kwargs represent in function definitions?",
    "options": [
      "A list of arguments",
      "A dictionary of keyword arguments",
      "A string",
      "A set of positional arguments"
    ],
    "correctAnswer": 1
  },
  {
    "id": 9,
    "question": "Which of the following is a valid function definition with arbitrary arguments?",
    "options": [
      "def func(**args):",
      "def func(*kwargs):",
      "def func(args):",
      "def func(args):"
    ],
    "correctAnswer": 2
  },
  {
    "id": 10,
    "question": "Which statement is true about variable scope in Python?",
    "options": [
      "Variables defined in a function are global",
      "Variables defined outside a function can be modified without global",
      "Global variables can be accessed inside a function",
      "All variables in Python are local"
    ],
    "correctAnswer": 2
  },
  {
    "id": 11,
    "question": "What is a local variable?",
    "options": [
      "A variable declared in the main script",
      "A variable passed as an argument",
      "A variable declared inside a function",
      "A variable starting with underscore"
    ],
    "correctAnswer": 2
  },
  {
    "id": 12,
    "question": "Which keyword is used to declare a global variable inside a function?",
    "options": [
      "global",
      "Global",
      "public",
      "extern"
    ],
    "correctAnswer": 0
  },
  {
    "id": 13,
    "question": "What is the lifetime of a local variable?",
    "options": [
      "Until the program terminates",
      "Until the module is closed",
      "Until the function ends",
      "Until the interpreter is shut down"
    ],
    "correctAnswer": 2
  },
  {
    "id": 14,
    "question": "Which of the following is a nested function?",
    "options": [
      "A function with multiple return values",
      "A function inside another function",
      "A function with *args",
      "A function that returns None"
    ],
    "correctAnswer": 1
  },
  {
    "id": 15,
    "question": "What will be the output?\ndef outer():\n    def inner():\n        return \"Inner\"\n    return inner()\nprint(outer())",
    "options": [
      "Inner",
      "outer",
      "Error",
      "None"
    ],
    "correctAnswer": 0
  },
  {
    "id": 16,
    "question": "Can a function be passed as an argument to another function?",
    "options": [
      "No",
      "Only if it returns a value",
      "Yes",
      "Only with lambda functions"
    ],
    "correctAnswer": 2
  },
  {
    "id": 17,
    "question": "What is the output?\ndef shout(text):\n    return text.upper()\ndef speak(func):\n    return func(\"hello\")\nprint(speak(shout))",
    "options": [
      "hello",
      "HELLO",
      "shout",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 18,
    "question": "What is a method in Python?",
    "options": [
      "A function not associated with an object",
      "A function attached to a class or object",
      "A static function",
      "A function inside a loop"
    ],
    "correctAnswer": 1
  },
  {
    "id": 19,
    "question": "How is a method different from a function?",
    "options": [
      "No difference",
      "Method takes self as first parameter",
      "Function takes class as first argument",
      "Function can only be used with objects"
    ],
    "correctAnswer": 1
  },
  {
    "id": 20,
    "question": "What is a higher-order function?",
    "options": [
      "A function that returns integers",
      "A function that is very complex",
      "A function that takes or returns another function",
      "A function that uses loops"
    ],
    "correctAnswer": 2
  }
];