export const questions = [
  {
    "id": 1,
    "question": "Which is an example of a higher-order function?",
    "options": [
      "print()",
      "int()",
      "map()",
      "len()"
    ],
    "correctAnswer": 2,
    "explanation": "A higher-order function is a function that takes one or more functions as arguments or returns a function as a result. map() is an example of this."
  },
  {
    "id": 2,
    "question": "What will be the output?\n\ndef multiply(x):\n    def inner(y):\n        return x * y\n    return inner\nresult = multiply(3)\nprint(result(4))",
    "options": [
      "12",
      "7",
      "1",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "The function multiply returns the inner function, which when called with 4, multiplies it by 3, resulting in 12."
  },
  {
    "id": 3,
    "question": "Which function can be used to filter elements from a list based on a condition?",
    "options": [
      "map()",
      "reduce()",
      "filter()",
      "find()"
    ],
    "correctAnswer": 2,
    "explanation": "filter() is used to filter elements from an iterable based on a given condition."
  },
  {
    "id": 4,
    "question": "What is the purpose of return in a function?",
    "options": [
      "To print value",
      "To stop the function",
      "To return a value to the caller",
      "To restart the function"
    ],
    "correctAnswer": 2,
    "explanation": "The return statement is used to send a result back to the caller of the function."
  },
  {
    "id": 5,
    "question": "What is the output?\n\ndef example():\n    return\nprint(example())",
    "options": [
      "Error",
      "0",
      "None",
      "Blank"
    ],
    "correctAnswer": 2,
    "explanation": "The function returns None by default when no value is explicitly returned."
  },
  {
    "id": 6,
    "question": "What is true about default arguments?",
    "options": [
      "Must be at the start",
      "Cannot be used with *args",
      "Are overwritten if positional arguments are passed",
      "Must always be zero"
    ],
    "correctAnswer": 2,
    "explanation": "If a positional argument is passed, it will overwrite the default argument value."
  },
  {
    "id": 7,
    "question": "What does the following define?\n\ndef func(a, b=5, *args, **kwargs):\n    pass",
    "options": [
      "Syntax error",
      "Function with fixed arguments only",
      "Function with flexible arguments",
      "Function with no arguments"
    ],
    "correctAnswer": 2,
    "explanation": "This function can accept both positional and keyword arguments flexibly."
  },
  {
    "id": 8,
    "question": "Which function call is invalid for the definition below?\n\ndef func(a, b, c=3):\n    pass",
    "options": [
      "func(1, 2)",
      "func(1, 2, 4)",
      "func(1)",
      "func(1, b=2)"
    ],
    "correctAnswer": 2,
    "explanation": "When using default values, the second argument (b) must be passed, and the third argument (c) is optional."
  },
  {
    "id": 9,
    "question": "What does the following return?\n\ndef f():\n    pass\nprint(f())",
    "options": [
      "Nothing",
      "Null",
      "None",
      "Error"
    ],
    "correctAnswer": 2,
    "explanation": "If a function doesn't explicitly return a value, it returns None by default."
  },
  {
    "id": 10,
    "question": "What is printed?\n\ndef f(a, b):\n    print(a, b)\nf(b=2, a=1)",
    "options": [
      "1 2",
      "2 1",
      "Error",
      "a=1 b=2"
    ],
    "correctAnswer": 0,
    "explanation": "In Python, you can specify arguments in any order if you use keyword arguments."
  },
  {
    "id": 11,
    "question": "What is the purpose of * in function parameters?",
    "options": [
      "To define multiplication",
      "To allow multiple return values",
      "To accept variable number of positional arguments",
      "To mark required arguments"
    ],
    "correctAnswer": 2,
    "explanation": "The * allows a function to accept any number of positional arguments as a tuple."
  },
  {
    "id": 12,
    "question": "What will be the output?\n\ndef fun(x, y=5, *args):\n    print(x, y, args)\nfun(1, 2, 3, 4)",
    "options": [
      "1 2 (3, 4)",
      "1 2 3",
      "1 2 4",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "The function will print 1, 2, followed by the tuple of extra arguments (3, 4)."
  },
  {
    "id": 13,
    "question": "What is a function that calls itself called?",
    "options": [
      "Generator",
      "Iterator",
      "Recursive",
      "Inherited"
    ],
    "correctAnswer": 2,
    "explanation": "A recursive function is one that calls itself to solve smaller instances of a problem."
  },
  {
    "id": 14,
    "question": "How can you access a function defined inside another function?",
    "options": [
      "Not possible",
      "Only with globals",
      "By returning it",
      "By importing"
    ],
    "correctAnswer": 2,
    "explanation": "A function defined inside another function can be accessed by returning it."
  },
  {
    "id": 15,
    "question": "What will this code print?\n\ndef make_multiplier(n):\n    def multiplier(x):\n        return x * n\n    return multiplier\ndouble = make_multiplier(2)\nprint(double(5))",
    "options": [
      "2",
      "10",
      "5",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "The function make_multiplier returns a function that multiplies its argument by n. In this case, 2 * 5 = 10."
  },
  {
    "id": 16,
    "question": "In which case would you use kwargs?",
    "options": [
      "To pass integers",
      "To pass unknown keyword arguments",
      "To pass strings",
      "To pass return values"
    ],
    "correctAnswer": 1,
    "explanation": "kwargs allows you to pass any number of keyword arguments to a function."
  },
  {
    "id": 17,
    "question": "Can you define multiple functions with the same name in Python?",
    "options": [
      "Yes",
      "Only in classes",
      "No",
      "Only in modules"
    ],
    "correctAnswer": 2,
    "explanation": "Functions cannot have the same name in Python; the last defined function will overwrite the previous one."
  },
  {
    "id": 18,
    "question": "What does the map() function do?",
    "options": [
      "Sorts a list",
      "Applies a function to every element of an iterable",
      "Filters elements",
      "Returns keys of a dictionary"
    ],
    "correctAnswer": 1,
    "explanation": "The map() function applies a given function to each item in an iterable and returns a map object."
  },
  {
    "id": 19,
    "question": "Which function allows combining all items in a list using a binary function?",
    "options": [
      "map()",
      "reduce()",
      "zip()",
      "filter()"
    ],
    "correctAnswer": 1,
    "explanation": "reduce() is used to apply a binary function cumulatively to the items in an iterable."
  },
  {
    "id": 20,
    "question": "What is printed?\n\ndef f(a, b=2, c=3):\n    return a + b + c\nprint(f(1, c=4))",
    "options": [
      "7",
      "6",
      "Error",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": "The value of c is overridden with 4, so the sum becomes 1 + 2 + 4 = 7."
  }
];
