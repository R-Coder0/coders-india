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
    "correctAnswer": 3,
    "explanation": "In Python, functions are defined using the 'def' keyword followed by the function name and parentheses."
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
    "correctAnswer": 2,
    "explanation": "The 'return' keyword is used to exit a function and return a value to the caller."
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
    "correctAnswer": 2,
    "explanation": "The function has a default parameter b=2, so when called with only one argument (3), it uses the default value for b, resulting in 3+2=5."
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
    "correctAnswer": 2,
    "explanation": "Positional arguments are passed without parameter names, like '3' in this case."
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
    "correctAnswer": 1,
    "explanation": "Python requires non-default arguments to come before default arguments in function definitions."
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
    "correctAnswer": 1,
    "explanation": "The function is called with \"Alice\" as argument, which overrides the default \"User\" parameter."
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
    "correctAnswer": 1,
    "explanation": "*args allows a function to accept any number of positional arguments as a tuple."
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
    "correctAnswer": 1,
    "explanation": "**kwargs allows a function to accept any number of keyword arguments as a dictionary."
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
    "correctAnswer": 2,
    "explanation": "The correct syntax for arbitrary positional arguments is *args (though the variable name can be anything after the *)."
  },
  {
    "id": 10,
    "question": "Which statement is true about variable scope in Python?",
    "options": [
      "Variables defined in a function are global",
      "Variables defined outside a function can be accessed inside without global",
      "Global variables can be accessed inside a function",
      "All variables in Python are local"
    ],
    "correctAnswer": 2,
    "explanation": "Global variables can be accessed inside functions, but to modify them you need the global keyword."
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
    "correctAnswer": 2,
    "explanation": "Local variables are defined within a function and are only accessible within that function."
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
    "correctAnswer": 0,
    "explanation": "The 'global' keyword is used to declare that a variable inside a function should refer to a global variable."
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
    "correctAnswer": 2,
    "explanation": "Local variables exist only while the function is executing and are destroyed when the function completes."
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
    "correctAnswer": 1,
    "explanation": "A nested function is defined inside another function and can access variables from the enclosing scope."
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
    "correctAnswer": 0,
    "explanation": "The outer function calls the inner function, which returns \"Inner\", so that's what gets printed."
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
    "correctAnswer": 2,
    "explanation": "In Python, functions are first-class objects and can be passed as arguments to other functions."
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
    "correctAnswer": 1,
    "explanation": "The speak function calls the passed function (shout) with \"hello\" as argument, which converts it to uppercase."
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
    "correctAnswer": 1,
    "explanation": "A method is a function that is associated with an object or class in Python."
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
    "correctAnswer": 1,
    "explanation": "Methods in classes automatically receive the instance as the first argument (self by convention)."
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
    "correctAnswer": 2,
    "explanation": "Higher-order functions are functions that either take other functions as arguments or return functions as results."
  }
];