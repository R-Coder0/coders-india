export const questions = [
  {
    "id": 1,
    "question": "What does the globals() function return?",
    "options": [
      "Local variables",
      "Global variables as a dictionary",
      "A list of functions",
      "Environment variables"
    ],
    "correctAnswer": 1,
    "explanation": "The globals() function returns the global variables as a dictionary."
  },
  {
    "id": 2,
    "question": "Which of the following is true about a local variable?",
    "options": [
      "Accessible throughout the program",
      "Declared with the local keyword",
      "Only accessible inside the function where it is declared",
      "Stored in the global namespace"
    ],
    "correctAnswer": 2,
    "explanation": "Local variables are only accessible within the function where they are declared."
  },
  {
    "id": 3,
    "question": "What is the output of the following code?\n\n  x = 5\n  def test():\n      print(x)\n  test()",
    "options": [
      "5",
      "Error",
      "None",
      "x"
    ],
    "correctAnswer": 0,
    "explanation": "The value of x is 5, and the function test prints the value of x."
  },
  {
    "id": 4,
    "question": "Which namespace is created when a function is called?",
    "options": [
      "Built-in namespace",
      "Global namespace",
      "Local namespace",
      "User-defined namespace"
    ],
    "correctAnswer": 2,
    "explanation": "A local namespace is created when a function is called, which holds the local variables."
  },
  {
    "id": 5,
    "question": "What happens when you try to modify a global variable without using the global keyword inside a function?",
    "options": [
      "It modifies the global variable",
      "It throws an error",
      "It creates a new local variable",
      "It prints the global variable"
    ],
    "correctAnswer": 2,
    "explanation": "Without the global keyword, a new local variable is created, leaving the global variable unchanged."
  },
  {
    "id": 6,
    "question": "What is the type of object returned by map() in Python 3?",
    "options": [
      "List",
      "Tuple",
      "Map object (iterator)",
      "Dictionary"
    ],
    "correctAnswer": 2,
    "explanation": "In Python 3, map() returns a map object, which is an iterator."
  },
  {
    "id": 7,
    "question": "Which function can be used to convert the result of map() into a list?",
    "options": [
      "convert()",
      "filter()",
      "reduce()",
      "list()"
    ],
    "correctAnswer": 3,
    "explanation": "The 'list()' function can be used to convert a map object into a list."
  },
  {
    "id": 8,
    "question": "What is the output of this code?\n\n  list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))",
    "options": [
      "[1, 3]",
      "[2, 4]",
      "[1, 2, 3, 4]",
      "[2]"
    ],
    "correctAnswer": 1,
    "explanation": "The filter() function returns the elements that satisfy the condition, i.e., [2, 4]."
  },
  {
    "id": 9,
    "question": "Which of the following is a correct way to use reduce()?",
    "options": [
      "reduce(x + y, [1, 2, 3])",
      "reduce(lambda x, y: x + y, [1, 2, 3])",
      "reduce(lambda x: x * 2, [1, 2, 3])",
      "reduce(x for x in [1, 2, 3])"
    ],
    "correctAnswer": 1,
    "explanation": "The correct syntax for using reduce() is to pass a lambda function and an iterable, like 'reduce(lambda x, y: x + y, [1, 2, 3])'."
  },
  {
    "id": 10,
    "question": "What does the __name__ variable represent in Python?",
    "options": [
      "The filename",
      "The name of the function",
      "The current module’s namespace",
      "The name of the current thread"
    ],
    "correctAnswer": 2,
    "explanation": "__name__ represents the name of the current module's namespace in Python."
  },
  {
    "id": 11,
    "question": "In Python, what type of error is caused by dividing a number by zero?",
    "options": [
      "TypeError",
      "ValueError",
      "ArithmeticError",
      "ZeroDivisionError"
    ],
    "correctAnswer": 3,
    "explanation": "Dividing a number by zero raises a ZeroDivisionError."
  },
  {
    "id": 12,
    "question": "What does the pass statement do inside an exception block?",
    "options": [
      "Stops the program",
      "Handles the exception",
      "Skips execution",
      "Does nothing"
    ],
    "correctAnswer": 3,
    "explanation": "The pass statement does nothing and is used as a placeholder inside the exception block."
  },
  {
    "id": 13,
    "question": "What happens if an exception is raised inside a try block and not caught?",
    "options": [
      "The program exits",
      "The program continues",
      "The program returns None",
      "The error is silently ignored"
    ],
    "correctAnswer": 0,
    "explanation": "If an exception is not caught, the program will exit with the unhandled exception."
  },
  {
    "id": 14,
    "question": "What does this code raise?\n\n  raise ValueError(\"Invalid input\")",
    "options": [
      "SyntaxError",
      "RuntimeError",
      "ValueError",
      "TypeError"
    ],
    "correctAnswer": 2,
    "explanation": "The code raises a ValueError with the message 'Invalid input'."
  },
  {
    "id": 15,
    "question": "Which error is raised when a variable is used before assignment?",
    "options": [
      "SyntaxError",
      "NameError",
      "AssignmentError",
      "RuntimeError"
    ],
    "correctAnswer": 1,
    "explanation": "A NameError is raised when a variable is used before being assigned a value."
  },
  {
    "id": 16,
    "question": "What type of function is defined using lambda?",
    "options": [
      "Named function",
      "Anonymous function",
      "Recursive function",
      "Static function"
    ],
    "correctAnswer": 1,
    "explanation": "Lambda functions are anonymous functions, meaning they are not bound to a name."
  },
  {
    "id": 17,
    "question": "Which of these can be used inside a lambda function?",
    "options": [
      "if-else",
      "loops",
      "def",
      "try-except"
    ],
    "correctAnswer": 0,
    "explanation": "You can use if-else inside a lambda function to make conditional decisions."
  },
  {
    "id": 18,
    "question": "What is the maximum number of expressions a lambda function can contain?",
    "options": [
      "One",
      "Two",
      "Unlimited",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "Lambda functions can only contain a single expression."
  },
  {
    "id": 19,
    "question": "What is the result of this expression?\n\n  (lambda x, y: x * y)(2, 3)",
    "options": [
      "5",
      "6",
      "(2, 3)",
      "lambda x, y: x * y"
    ],
    "correctAnswer": 1,
    "explanation": "The lambda function multiplies the two arguments 2 and 3, returning 6."
  },
  {
    "id": 20,
    "question": "Which of the following is not a scope in Python?",
    "options": [
      "Global",
      "Enclosing",
      "Static",
      "Built-in"
    ],
    "correctAnswer": 2,
    "explanation": "There is no 'Static' scope in Python. The valid scopes are Global, Enclosing, and Built-in."
  }
];
