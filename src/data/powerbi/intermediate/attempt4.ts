export const questions = [
  {
    "id": 1,
    "question": "What is the output of this code?\n\n  try:\n      print(1/0)\n  except ZeroDivisionError:\n      print(\"Error\")",
    "options": [
      "0",
      "1",
      "Error",
      "Crash"
    ],
    "correctAnswer": 2,
    "explanation": "The ZeroDivisionError is caught and handled, printing 'Error'."
  },
  {
    "id": 2,
    "question": "What is the purpose of assert?",
    "options": [
      "To raise an exception if a condition is true",
      "To check a condition and raise an error if false",
      "To declare variables",
      "To skip exceptions"
    ],
    "correctAnswer": 1,
    "explanation": "The assert statement checks a condition and raises an error if the condition is false."
  },
  {
    "id": 3,
    "question": "What will this code do?\n\n  assert 2 > 3, \"Wrong assertion\"",
    "options": [
      "Nothing",
      "Raise an AssertionError",
      "Return False",
      "Print \"Wrong assertion\""
    ],
    "correctAnswer": 1,
    "explanation": "Since the assertion is false, it will raise an AssertionError with the message 'Wrong assertion'."
  },
  {
    "id": 4,
    "question": "How do you define a custom exception class?",
    "options": [
      "By inheriting from Exception",
      "By using def",
      "By using assert",
      "By importing custom"
    ],
    "correctAnswer": 0,
    "explanation": "To define a custom exception class, you need to inherit from the base Exception class."
  },
  {
    "id": 5,
    "question": "Which exception class is used to create user-defined exceptions?",
    "options": [
      "BaseError",
      "Error",
      "Exception",
      "Throw"
    ],
    "correctAnswer": 2,
    "explanation": "The 'Exception' class is used as the base class for all built-in exceptions, including user-defined ones."
  },
  {
    "id": 6,
    "question": "What is printed?\n\n  try:\n      x = 1 / 0\n  except:\n      print(\"Handled\")\n  finally:\n      print(\"Done\")",
    "options": [
      "Handled",
      "Done",
      "Handled Done",
      "Error"
    ],
    "correctAnswer": 2,
    "explanation": "The exception is handled in the except block, and the finally block is executed, printing 'Handled Done'."
  },
  {
    "id": 7,
    "question": "What is the default base class for exceptions in Python?",
    "options": [
      "Error",
      "Exception",
      "RuntimeError",
      "BaseException"
    ],
    "correctAnswer": 3,
    "explanation": "The default base class for exceptions in Python is 'BaseException'."
  },
  {
    "id": 8,
    "question": "Can finally block execute even if there is a return statement in try?",
    "options": [
      "Yes",
      "No",
      "Only with error",
      "Only in Python 2"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, the finally block always executes, even if a return statement is used in the try block."
  },
  {
    "id": 9,
    "question": "What happens if an exception is not caught?",
    "options": [
      "The program crashes",
      "The program continues",
      "The program restarts",
      "The program prints \"Exception\""
    ],
    "correctAnswer": 0,
    "explanation": "If an exception is not caught, the program will crash with an unhandled exception."
  },
  {
    "id": 10,
    "question": "Which error is raised when an index is out of range?",
    "options": [
      "LookupError",
      "IndexError",
      "KeyError",
      "ValueError"
    ],
    "correctAnswer": 1,
    "explanation": "An 'IndexError' is raised when trying to access an index that is out of the valid range."
  },
  {
    "id": 11,
    "question": "What type of error is this?\n\n  int(\"abc\")",
    "options": [
      "NameError",
      "SyntaxError",
      "ValueError",
      "TypeError"
    ],
    "correctAnswer": 2,
    "explanation": "The 'ValueError' is raised because 'abc' cannot be converted to an integer."
  },
  {
    "id": 12,
    "question": "How can you access the error message of an exception?",
    "options": [
      "Using try.message",
      "Using str(exception)",
      "Using except.message",
      "Cannot access"
    ],
    "correctAnswer": 1,
    "explanation": "The error message of an exception can be accessed by converting the exception object to a string using 'str(exception)'."
  },
  {
    "id": 13,
    "question": "What does the following code do?\n\n  def my_error():\n      raise Exception(\"Custom error\")",
    "options": [
      "Defines a class",
      "Raises a built-in error",
      "Raises a custom exception",
      "Nothing"
    ],
    "correctAnswer": 2,
    "explanation": "This function raises a custom exception with the message 'Custom error'."
  },
  {
    "id": 14,
    "question": "What is printed?\n\n  print(type(lambda x: x))",
    "options": [
      "<class 'function'>",
      "<class 'lambda'>",
      "<class 'object'>",
      "<class 'method'>"
    ],
    "correctAnswer": 0,
    "explanation": "A lambda function is of type 'function' in Python."
  },
  {
    "id": 15,
    "question": "What does this code return?\n\n  list(filter(lambda x: x > 2, [1, 2, 3, 4]))",
    "options": [
      "[1, 2]",
      "[3, 4]",
      "[1, 2, 3, 4]",
      "[2, 3, 4]"
    ],
    "correctAnswer": 1,
    "explanation": "The filter() function will filter out all elements less than or equal to 2, returning [3, 4]."
  },
  {
    "id": 16,
    "question": "Which of these is not a valid exception?",
    "options": [
      "ZeroDivisionError",
      "FileFoundError",
      "TypeError",
      "NameError"
    ],
    "correctAnswer": 1,
    "explanation": "There is no 'FileFoundError' in Python; the correct exception is 'FileNotFoundError'."
  },
  {
    "id": 17,
    "question": "Which keyword is used to start an exception handling block?",
    "options": [
      "exception",
      "try",
      "raise",
      "finally"
    ],
    "correctAnswer": 1,
    "explanation": "The 'try' keyword is used to start an exception handling block in Python."
  },
  {
    "id": 18,
    "question": "Can multiple except blocks be used with one try?",
    "options": [
      "No",
      "Only two",
      "Yes",
      "Only with finally"
    ],
    "correctAnswer": 2,
    "explanation": "Yes, multiple except blocks can be used to handle different types of exceptions."
  },
  {
    "id": 19,
    "question": "What is printed?\n\n  try:\n      print(\"Start\")\n  except:\n      print(\"Error\")\n  finally:\n      print(\"End\")",
    "options": [
      "Start",
      "Start End",
      "End",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "The try block executes, printing 'Start', and the finally block always executes, printing 'End'."
  },
  {
    "id": 20,
    "question": "What is the use of lambda in Python?",
    "options": [
      "Defines anonymous functions",
      "Defines methods",
      "Creates a loop",
      "Handles exceptions"
    ],
    "correctAnswer": 0,
    "explanation": "Lambda functions are used to define anonymous functions in Python."
  }
];
