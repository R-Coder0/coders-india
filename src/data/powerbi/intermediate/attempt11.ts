export const questions = [
  {
    "id": 1,
    "question": "What is the output of list((x for x in range(3)))?",
    "options": [
      "(0, 1, 2)",
      "[0, 1, 2]",
      "0 1 2",
      "generator object"
    ],
    "correctAnswer": 1,
    "explanation": "The generator expression creates an iterator, and converting it to a list gives the output [0, 1, 2]."
  },
  {
    "id": 2,
    "question": "Can a generator function have multiple yield statements?",
    "options": [
      "No",
      "Only one allowed",
      "Yes",
      "Only in loops"
    ],
    "correctAnswer": 2,
    "explanation": "A generator function can have multiple yield statements. It can yield multiple values one at a time."
  },
  {
    "id": 3,
    "question": "How do you manually get values from a generator?",
    "options": [
      "call()",
      "for()",
      "next()",
      "yield()"
    ],
    "correctAnswer": 2,
    "explanation": "The next() function is used to manually get values from a generator."
  },
  {
    "id": 4,
    "question": "Which function checks if an object is iterable?",
    "options": [
      "isinstance(obj, Iterable)",
      "isiterable(obj)",
      "obj.is_iterable()",
      "check_iterable(obj)"
    ],
    "correctAnswer": 0,
    "explanation": "The isinstance() function is used to check if an object is iterable."
  },
  {
    "id": 5,
    "question": "What is returned by a function that uses only yield?",
    "options": [
      "List",
      "String",
      "Generator",
      "Iterator"
    ],
    "correctAnswer": 2,
    "explanation": "A function using only 'yield' returns a generator object."
  },
  {
    "id": 6,
    "question": "Are iterators reusable?",
    "options": [
      "Yes",
      "Only if you reset",
      "No",
      "Only once"
    ],
    "correctAnswer": 2,
    "explanation": "Iterators are not reusable. Once they are exhausted, they cannot be used again."
  },
  {
    "id": 7,
    "question": "What does iter([1, 2, 3]) return?",
    "options": [
      "A list",
      "An iterator",
      "A tuple",
      "A generator"
    ],
    "correctAnswer": 1,
    "explanation": "The iter() function returns an iterator for the given iterable."
  },
  {
    "id": 8,
    "question": "Which module contains Iterable and Iterator types?",
    "options": [
      "sys",
      "os",
      "collections.abc",
      "itertools"
    ],
    "correctAnswer": 2,
    "explanation": "The 'collections.abc' module contains the Iterable and Iterator types."
  },
  {
    "id": 9,
    "question": "What is the purpose of the itertools module?",
    "options": [
      "To generate charts",
      "To handle files",
      "To create efficient iterators",
      "To import Excel files"
    ],
    "correctAnswer": 2,
    "explanation": "The itertools module is used to create efficient iterators for looping and combinatorics."
  },
  {
    "id": 10,
    "question": "What will next((x for x in range(3))) return?",
    "options": [
      "generator object",
      "0",
      "[0, 1, 2]",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "The next() function will return the first value of the generator expression, which is 0."
  },
  {
    "id": 11,
    "question": "Can a generator be passed as a function argument?",
    "options": [
      "Yes",
      "No",
      "Only in classes",
      "Only in loops"
    ],
    "correctAnswer": 0,
    "explanation": "A generator can be passed as a function argument just like any other object."
  },
  {
    "id": 12,
    "question": "What happens when a generator function runs to completion?",
    "options": [
      "It returns None",
      "It raises StopIteration",
      "It continues in loop",
      "It pauses"
    ],
    "correctAnswer": 1,
    "explanation": "When a generator function runs to completion, it raises the StopIteration exception."
  },
  {
    "id": 13,
    "question": "What is the return type of a generator function?",
    "options": [
      "Iterator",
      "Generator object",
      "Function",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "A generator function returns a generator object."
  },
  {
    "id": 14,
    "question": "Which is not a valid use of yield?",
    "options": [
      "Inside a loop",
      "Inside a conditional",
      "Outside a function",
      "Inside a function"
    ],
    "correctAnswer": 2,
    "explanation": "Yield must be used inside a function, not outside it."
  },
  {
    "id": 15,
    "question": "What does yield from do?",
    "options": [
      "Skips a value",
      "Exits a generator",
      "Delegates to a sub-generator",
      "Raises an error"
    ],
    "correctAnswer": 2,
    "explanation": "The 'yield from' expression delegates to another generator or iterable."
  },
  {
    "id": 16,
    "question": "Which is not an advantage of generators?",
    "options": [
      "Saves memory",
      "Supports lazy evaluation",
      "Faster random access",
      "Allows large data processing"
    ],
    "correctAnswer": 2,
    "explanation": "Generators do not support faster random access since they generate values one by one."
  },
  {
    "id": 17,
    "question": "What does the isinstance(obj, Iterator) check?",
    "options": [
      "If obj is a list",
      "If obj is iterable",
      "If obj is an iterator",
      "If obj is infinite"
    ],
    "correctAnswer": 2,
    "explanation": "The isinstance() function checks if an object is an iterator."
  },
  {
    "id": 18,
    "question": "What is the output of this code?\n\n  def gen():\n      yield 1\n      yield 2\n  print(next(gen()))",
    "options": [
      "1",
      "2",
      "[1, 2]",
      "generator object"
    ],
    "correctAnswer": 0,
    "explanation": "The next() function retrieves the first value, which is 1."
  },
  {
    "id": 19,
    "question": "What kind of loop is used to consume a generator?",
    "options": [
      "while True",
      "do-while",
      "for loop",
      "until loop"
    ],
    "correctAnswer": 2,
    "explanation": "A 'for' loop is typically used to consume a generator."
  },
  {
    "id": 20,
    "question": "What is the output of:\n\n  gen = (x*x for x in range(3))\n  print(list(gen))",
    "options": [
      "[0, 1, 4]",
      "(0, 1, 4)",
      "generator object",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "The generator expression will generate the squares of 0, 1, and 2, which are [0, 1, 4]."
  }
];
