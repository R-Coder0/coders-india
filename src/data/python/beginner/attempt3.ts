export const questions = [
  {
    "id": 1,
    "question": "What is the result of the following code?\n\nx = 5\ny = '5'\nprint(x + int(y))",
    "options": [
      '"55"',
      "Error",
      "10",
      "55"
    ],
    "correctAnswer": 2,
    "explanation": "The string '5' is converted to an integer using int(), so the result is 5 + 5 = 10."
  },
  {
    "id": 2,
    "question": "Which of these is a valid variable name in Python?",
    "options": [
      "1variable",
      "my-variable",
      "_variable",
      "for"
    ],
    "correctAnswer": 2,
    "explanation": "Variable names can start with an underscore, but not with a number or a keyword."
  },
  {
    "id": 3,
    "question": "What is the type of None in Python?",
    "options": [
      "NullType",
      "NoneType",
      "Void",
      "EmptyType"
    ],
    "correctAnswer": 1,
    "explanation": "None is the only value of type NoneType in Python."
  },
  {
    "id": 4,
    "question": "What will this code output?\n\nx = '10'\ny = 5\nprint(x + str(y))",
    "options": [
      "15",
      "105",
      '"105"',
      "Error"
    ],
    "correctAnswer": 2,
    "explanation": "Both operands are strings after str(y) conversion, so the result is '10' + '5' = '105'."
  },
  {
    "id": 5,
    "question": "What is the output of type(3.0)?",
    "options": [
      "<class 'float'>",
      "<class 'int'>",
      "<class 'double'>",
      "<class 'decimal'>"
    ],
    "correctAnswer": 0,
    "explanation": "The type of 3.0 is <class 'float'>."
  },
  {
    "id": 6,
    "question": "Which of the following is a mutable data type?",
    "options": [
      "int",
      "str",
      "list",
      "tuple"
    ],
    "correctAnswer": 2,
    "explanation": "Lists are mutable in Python, meaning they can be modified after creation."
  },
  {
    "id": 7,
    "question": "Which of these conversions will raise an error?",
    "options": [
      "int('10')",
      "float('3.14')",
      "str(100)",
      "int('3.14')"
    ],
    "correctAnswer": 3,
    "explanation": "You cannot directly convert a float string to int. int('3.14') will raise a ValueError."
  },
  {
    "id": 8,
    "question": "What does isinstance('hello', str) return?",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "The isinstance() function checks if 'hello' is an instance of the str class, which it is, so it returns True."
  },
  {
    "id": 9,
    "question": "Which of the following statements is true?",
    "options": [
      "Python allows variable declaration without assignment",
      "Variables must be declared with a type",
      "Variable types must be declared explicitly",
      "Python infers the type at runtime"
    ],
    "correctAnswer": 3,
    "explanation": "Python is dynamically typed, so variable types are inferred at runtime."
  },
  {
    "id": 10,
    "question": "Which function would you use to convert a float to an integer?",
    "options": [
      "float()",
      "str()",
      "int()",
      "eval()"
    ],
    "correctAnswer": 2,
    "explanation": "The 'int()' function is used to convert a float to an integer in Python."
  },
  {
    "id": 11,
    "question": "Which of the following is an immutable data type?",
    "options": [
      "list",
      "dictionary",
      "set",
      "tuple"
    ],
    "correctAnswer": 3,
    "explanation": "Tuples are immutable, meaning their values cannot be changed after creation."
  },
  {
    "id": 12,
    "question": "What will be the output of type(True)?",
    "options": [
      "<class 'int'>",
      "<class 'bool'>",
      "<class 'str'>",
      "<class 'NoneType'>"
    ],
    "correctAnswer": 1,
    "explanation": "The type of True is <class 'bool'>."
  },
  {
    "id": 13,
    "question": "What will bool(0) return?",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "The bool() function converts 0 to False since 0 is considered falsy in Python."
  },
  {
    "id": 14,
    "question": "Which of the following statements about Python variables is false?",
    "options": [
      "Variables store references to objects",
      "Python variables are statically typed",
      "Variables can change type during execution",
      "Variable names are case-sensitive"
    ],
    "correctAnswer": 1,
    "explanation": "Python variables are dynamically typed, not statically typed."
  },
  {
    "id": 15,
    "question": "What will int(True) + int(False) return?",
    "options": [
      "1",
      "0",
      "2",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "int(True) is 1 and int(False) is 0, so the result is 1."
  },
  {
    "id": 16,
    "question": "Which function is used to get the memory address of a variable?",
    "options": [
      "memory()",
      "id()",
      "addr()",
      "location()"
    ],
    "correctAnswer": 1,
    "explanation": "The id() function is used to get the memory address of a variable."
  },
  {
    "id": 17,
    "question": "Which keyword is used to delete a variable in Python?",
    "options": [
      "delete",
      "destroy",
      "del",
      "remove"
    ],
    "correctAnswer": 2,
    "explanation": "The 'del' keyword is used to delete a variable in Python."
  },
  {
    "id": 18,
    "question": "What will be the output of type(5/2)?",
    "options": [
      "<class 'int'>",
      "<class 'float'>",
      "<class 'decimal'>",
      "<class 'double'>"
    ],
    "correctAnswer": 1,
    "explanation": "Division in Python 3 returns a float, so the output is <class 'float'>."
  },
  {
    "id": 19,
    "question": "Which of the following will evaluate to True?",
    "options": [
      "None == False",
      "0 == None",
      "bool('')",
      "bool('0')"
    ],
    "correctAnswer": 3,
    "explanation": "Non-empty strings like '0' evaluate to True in Python."
  },
  {
    "id": 20,
    "question": "What is the result of this code?\n\nx = [1, 2, 3]\ny = x\nx[0] = 99\nprint(y)",
    "options": [
      "[1, 2, 3]",
      "[99, 2, 3]",
      "Error",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "y is a reference to x, so modifying x[0] also modifies y, making it [99, 2, 3]."
  }
];
