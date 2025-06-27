export const questions = [
  {
    "id": 1,
    "question": "What is a Python decorator used for?",
    "options": [
      "Modifying the syntax of Python",
      "Changing the behavior of a function or method",
      "Optimizing the execution time of a function",
      "Converting a function to a class"
    ],
    "correctAnswer": 1,
    "explanation": "Decorators are used to modify or extend the behavior of functions or methods without permanently modifying the function itself."
  },
  {
    "id": 2,
    "question": "What does a decorator in Python do?",
    "options": [
      "It converts a function into an object",
      "It allows you to add functionality to an existing function",
      "It creates a new class from a function",
      "It prints out the source code of a function"
    ],
    "correctAnswer": 1,
    "explanation": "Decorators wrap another function to extend its behavior, allowing you to add functionality before and/or after the wrapped function runs."
  },
  {
    "id": 3,
    "question": "How is a decorator applied to a function in Python?",
    "options": [
      "By using the @ symbol above the function definition",
      "By calling the decorator function inside the function",
      "By using the def keyword inside the function",
      "By importing a module"
    ],
    "correctAnswer": 0,
    "explanation": "The @ symbol is placed immediately before the function definition to apply a decorator."
  },
  {
    "id": 4,
    "question": "Which of the following is the correct syntax for a decorator in Python?",
    "options": [
      "@decorator_name",
      "decorator_name@",
      "decorator_name:",
      "def decorator_name()"
    ],
    "correctAnswer": 0,
    "explanation": "The correct syntax is @decorator_name placed above the function definition."
  },
  {
    "id": 5,
    "question": "How does Python pass the arguments to the decorated function?",
    "options": [
      "By automatically passing a predefined set of arguments",
      "Through the *args and **kwargs syntax",
      "By passing the arguments manually inside the decorator",
      "Through the return statement"
    ],
    "correctAnswer": 1,
    "explanation": "Python uses *args and **kwargs to handle variable numbers of positional and keyword arguments in decorators."
  },
  {
    "id": 6,
    "question": "What will happen if you apply a decorator without parentheses to a function?",
    "options": [
      "The decorator will throw an error",
      "The decorator will be applied without any parameters",
      "The function will be ignored",
      "The function will run without modification"
    ],
    "correctAnswer": 1,
    "explanation": "Without parentheses, the decorator is called with the function as its only argument (the decorator itself is used as a function)."
  },
  {
    "id": 7,
    "question": "Can a decorator in Python return another function?",
    "options": [
      "No, it can only modify the original function",
      "Yes, a decorator can return another function or a value",
      "No, decorators do not have a return value",
      "Yes, but only in the case of class decorators"
    ],
    "correctAnswer": 1,
    "explanation": "Decorators can return either a modified version of the original function or a completely different function."
  },
  {
    "id": 8,
    "question": "What does the functools.wraps() function do when used in a decorator?",
    "options": [
      "It decorates the functools library",
      "It replaces the original function with the decorator function",
      "It preserves the original function's metadata like its name and docstring",
      "It makes the function callable"
    ],
    "correctAnswer": 2,
    "explanation": "functools.wraps() preserves the original function's metadata (__name__, __doc__, etc.) which would otherwise be overwritten by the decorator."
  },
  {
    "id": 9,
    "question": "What is the output of the following code?",
    "code": "def my_decorator(func):\n    def wrapper():\n        print(\"Before the function\")\n        func()\n        print(\"After the function\")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print(\"Hello!\")\n    \nsay_hello()",
    "options": [
      "Before the function\nHello!\nAfter the function",
      "Hello!\nBefore the function\nAfter the function",
      "Before the function\nAfter the function\nHello!",
      "After the function\nBefore the function"
    ],
    "correctAnswer": 0,
    "explanation": "The decorator adds behavior before and after the original function call while maintaining the original function's execution."
  },
  {
    "id": 10,
    "question": "What is the benefit of using decorators in Python?",
    "options": [
      "They reduce memory usage",
      "They allow code reuse and clean function modification",
      "They improve the execution speed of a function",
      "They make debugging easier"
    ],
    "correctAnswer": 1,
    "explanation": "Decorators promote DRY (Don't Repeat Yourself) principles by allowing reusable modifications to multiple functions."
  },
  {
    "id": 11,
    "question": "Can decorators be stacked on top of one another in Python?",
    "options": [
      "No, only one decorator can be applied to a function",
      "Yes, multiple decorators can be applied in a stack",
      "Only class decorators can be stacked",
      "Only function decorators can be stacked"
    ],
    "correctAnswer": 1,
    "explanation": "Multiple decorators can be stacked, with each decorator wrapping the result of the one below it (executed from bottom to top)."
  },
  {
    "id": 12,
    "question": "Which of the following decorators is used to measure the execution time of a function?",
    "options": [
      "@retry",
      "@timeit",
      "@staticmethod",
      "@functools.lru_cache"
    ],
    "correctAnswer": 1,
    "explanation": "@timeit (typically implemented as a custom decorator) is used to measure function execution time, though it's not a built-in Python decorator."
  },
  {
    "id": 13,
    "question": "Can a decorator modify the function's arguments?",
    "options": [
      "No, decorators can only modify the output",
      "Yes, decorators can modify both input arguments and output",
      "No, decorators can only execute additional code before and after the function",
      "Yes, but only class-based decorators can modify arguments"
    ],
    "correctAnswer": 1,
    "explanation": "Decorators can inspect and modify both incoming arguments and return values of the functions they decorate."
  },
  {
    "id": 14,
    "question": "What will the following code output?",
    "code": "def my_decorator(func):\n    def wrapper(a, b):\n        return func(a + 1, b + 1)\n    return wrapper\n\n@my_decorator\ndef add_numbers(a, b):\n    return a + b\n\nprint(add_numbers(2, 3))",
    "options": [
      "5",
      "6",
      "7",
      "Error"
    ],
    "correctAnswer": 2,
    "explanation": "The decorator increments both arguments by 1 before passing them to the original function, so (3 + 4) = 7."
  },
  {
    "id": 15,
    "question": "How can you apply a decorator to a method in a class?",
    "options": [
      "By using the @ symbol on the method definition within the class",
      "By defining a decorator inside the method",
      "By calling the decorator directly in the method",
      "You cannot use decorators on class methods"
    ],
    "correctAnswer": 0,
    "explanation": "Class methods can be decorated just like regular functions by placing the @decorator above the method definition."
  },
  {
    "id": 16,
    "question": "Which of the following decorators is used to define a static method in Python?",
    "options": [
      "@staticmethod",
      "@classmethod",
      "@property",
      "@abstractmethod"
    ],
    "correctAnswer": 0,
    "explanation": "@staticmethod is used to define methods that don't receive an implicit first argument (self or cls)."
  },
  {
    "id": 17,
    "question": "What is the purpose of the @property decorator in Python?",
    "options": [
      "To define a method as a getter for an attribute",
      "To make a function a class method",
      "To make a function a static method",
      "To define an abstract method"
    ],
    "correctAnswer": 0,
    "explanation": "@property allows you to define getter methods that can be accessed like attributes, enabling encapsulation with attribute-like syntax."
  },
  {
    "id": 18,
    "question": "What happens if a decorator is applied to a method that requires parameters but doesn't handle them?",
    "options": [
      "The function will raise an error because the parameters are missing",
      "The decorator will automatically handle the parameters",
      "The parameters will be ignored by the decorator",
      "The decorator will convert the parameters into default values"
    ],
    "correctAnswer": 0,
    "explanation": "If the decorator's wrapper function doesn't accept and forward the parameters, Python will raise a TypeError about missing arguments."
  },
  {
    "id": 19,
    "question": "Which of the following decorators is used to define a class method?",
    "options": [
      "@staticmethod",
      "@classmethod",
      "@abstractmethod",
      "@decorator"
    ],
    "correctAnswer": 1,
    "explanation": "@classmethod is used to define methods that receive the class (cls) as their first argument instead of the instance (self)."
  },
  {
    "id": 20,
    "question": "Can a decorator return a function that takes arguments?",
    "options": [
      "No, decorators cannot return functions",
      "Yes, decorators can return functions that take any arguments",
      "Only functions with no arguments can be returned by decorators",
      "Decorators only return functions with default arguments"
    ],
    "correctAnswer": 1,
    "explanation": "Decorators can return functions that accept any number and type of arguments, as long as the interface matches what callers expect."
  }
];