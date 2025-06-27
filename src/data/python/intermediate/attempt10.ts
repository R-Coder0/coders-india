export const questions = [
  {
    "id": 1,
    "question": "What is an iterator in Python?",
    "options": [
      "A variable that stores values",
      "An object with a count",
      "An object which implements __iter__() and __next__()",
      "A list or tuple"
    ],
    "correctAnswer": 2,
    "explanation": "An iterator is an object that implements the __iter__() and __next__() methods."
  },
  {
    "id": 2,
    "question": "What does the __iter__() method do?",
    "options": [
      "Returns the next value",
      "Initializes the loop",
      "Returns the iterator object itself",
      "Stops iteration"
    ],
    "correctAnswer": 2,
    "explanation": "The __iter__() method returns the iterator object itself."
  },
  {
    "id": 3,
    "question": "What happens when next() is called on an exhausted iterator?",
    "options": [
      "It restarts the iteration",
      "It returns None",
      "It raises a StopIteration exception",
      "It creates a new iterator"
    ],
    "correctAnswer": 2,
    "explanation": "When next() is called on an exhausted iterator, it raises a StopIteration exception."
  },
  {
    "id": 4,
    "question": "Which of these is an iterator?",
    "options": [
      "list",
      "tuple",
      "dict",
      "object returned by iter()"
    ],
    "correctAnswer": 3,
    "explanation": "An iterator is the object returned by the iter() function."
  },
  {
    "id": 5,
    "question": "What function is used to get an iterator from an iterable?",
    "options": [
      "iter()",
      "next()",
      "list()",
      "range()"
    ],
    "correctAnswer": 0,
    "explanation": "The iter() function is used to get an iterator from an iterable."
  },
  {
    "id": 6,
    "question": "Which of the following methods must be defined in an iterator class?",
    "options": [
      "init",
      "len",
      "iter and next",
      "getitem"
    ],
    "correctAnswer": 2,
    "explanation": "In an iterator class, both __iter__() and __next__() methods must be defined."
  },
  {
    "id": 7,
    "question": "What is the output of next(iter('hi'))?",
    "options": [
      "'hi'",
      "'h'",
      "'i'",
      "['h', 'i']"
    ],
    "correctAnswer": 1,
    "explanation": "The next() function will return the first character 'h' from the string 'hi'."
  },
  {
    "id": 8,
    "question": "What keyword is used to create a generator in Python?",
    "options": [
      "yield",
      "return",
      "next",
      "generate"
    ],
    "correctAnswer": 0,
    "explanation": "The 'yield' keyword is used to create a generator in Python."
  },
  {
    "id": 9,
    "question": "What does a generator return?",
    "options": [
      "A list",
      "A tuple",
      "An iterator",
      "A function"
    ],
    "correctAnswer": 2,
    "explanation": "A generator returns an iterator that generates values one at a time."
  },
  {
    "id": 10,
    "question": "Which statement is true about generators?",
    "options": [
      "They store all values in memory",
      "They return all values at once",
      "They generate values on the fly",
      "They are slower than lists"
    ],
    "correctAnswer": 2,
    "explanation": "Generators generate values on the fly, meaning they do not store all values in memory."
  },
  {
    "id": 11,
    "question": "What does the yield keyword do?",
    "options": [
      "Returns from the function",
      "Stops iteration",
      "Pauses the function and saves its state",
      "Skips a loop iteration"
    ],
    "correctAnswer": 2,
    "explanation": "The 'yield' keyword pauses the function and saves its state, allowing the function to resume from where it left off."
  },
  {
    "id": 12,
    "question": "What is a generator expression?",
    "options": [
      "A function with return",
      "A for loop",
      "An expression that creates a generator using parentheses",
      "A string formatting style"
    ],
    "correctAnswer": 2,
    "explanation": "A generator expression is an expression that creates a generator using parentheses."
  },
  {
    "id": 13,
    "question": "Which of the following will create a generator expression?",
    "options": [
      "[x for x in range(5)]",
      "(x for x in range(5))",
      "{x for x in range(5)}",
      "<x for x in range(5)>"
    ],
    "correctAnswer": 1,
    "explanation": "The correct syntax for a generator expression is '(x for x in range(5))'."
  },
  {
    "id": 14,
    "question": "Which is more memory efficient for large data: list comprehension or generator expression?",
    "options": [
      "List comprehension",
      "Generator expression",
      "Both are the same",
      "Neither"
    ],
    "correctAnswer": 1,
    "explanation": "A generator expression is more memory efficient as it generates values on the fly and doesn't store all values in memory."
  },
  {
    "id": 15,
    "question": "What is the main advantage of generators?",
    "options": [
      "They are faster",
      "They are easy to debug",
      "They use less memory",
      "They are easy to convert to list"
    ],
    "correctAnswer": 2,
    "explanation": "The main advantage of generators is that they use less memory, as they generate values on the fly."
  },
  {
    "id": 16,
    "question": "What exception is raised when a generator is exhausted?",
    "options": [
      "ValueError",
      "TypeError",
      "StopIteration",
      "KeyError"
    ],
    "correctAnswer": 2,
    "explanation": "When a generator is exhausted, a StopIteration exception is raised."
  },
  {
    "id": 17,
    "question": "How can you iterate through a generator?",
    "options": [
      "Using a while loop",
      "Using next()",
      "Using a for loop",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "You can iterate through a generator using a while loop, next(), or a for loop."
  },
  {
    "id": 18,
    "question": "Can a generator be reused once it's exhausted?",
    "options": [
      "Yes",
      "No",
      "Only inside a loop",
      "Only if you redefine it"
    ],
    "correctAnswer": 1,
    "explanation": "Once a generator is exhausted, it cannot be reused. You need to create a new generator."
  },
  {
    "id": 19,
    "question": "What is the difference between yield and return?",
    "options": [
      "yield exits the function",
      "yield allows resuming the function",
      "return is used in loops",
      "No difference"
    ],
    "correctAnswer": 1,
    "explanation": "The 'yield' keyword allows resuming the function, while 'return' exits the function permanently."
  },
  {
    "id": 20,
    "question": "Which function converts an iterator to a list?",
    "options": [
      "list()",
      "tolist()",
      "map()",
      "iter()"
    ],
    "correctAnswer": 0,
    "explanation": "The 'list()' function is used to convert an iterator to a list."
  }
];
