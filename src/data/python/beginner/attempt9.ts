export const questions = [
  {
    "id": 1,
    "question": "What is the output of the following list comprehension?\n\n[x*3 for x in range(3)]",
    "options": [
      "[3, 6, 9]",
      "[1, 2, 3]",
      "[0, 1, 2]",
      "[0, 3, 6]"
    ],
    "correctAnswer": 3,
    "explanation": "The list comprehension multiplies each element by 3, resulting in [0, 3, 6]."
  },
  {
    "id": 2,
    "question": "Which of the following creates a list of even numbers from 0 to 8?",
    "options": [
      "[x for x in range(10) if x % 2 == 0]",
      "[x for x in range(10) if x % 2 != 0]",
      "[x for x in range(1, 10, 2)]",
      "[x*2 for x in range(5)]"
    ],
    "correctAnswer": 0,
    "explanation": "The list comprehension with 'if x % 2 == 0' returns even numbers from 0 to 8."
  },
  {
    "id": 3,
    "question": "Which part of a list comprehension defines the condition?",
    "options": [
      "x",
      "for x in range",
      "x + 1",
      "if clause"
    ],
    "correctAnswer": 3,
    "explanation": "The 'if clause' defines the condition in a list comprehension."
  },
  {
    "id": 4,
    "question": "What is the output of this code?\n\n[x for x in 'abc']",
    "options": [
      "['abc']",
      "'a', 'b', 'c'",
      "['a', 'b', 'c']",
      "(a, b, c)"
    ],
    "correctAnswer": 2,
    "explanation": "The list comprehension creates a list of the characters in the string 'abc', resulting in ['a', 'b', 'c']."
  },
  {
    "id": 5,
    "question": "Which of the following is a valid list comprehension with if-else?",
    "options": [
      "[x for x in range(5) else 0]",
      "[x if x > 2 else 0 for x in range(5)]",
      "[if x > 2: x else 0 for x in range(5)]",
      "[x for x in range(5) if x > 2 else 0]"
    ],
    "correctAnswer": 1,
    "explanation": "The correct syntax for a list comprehension with if-else is '[x if x > 2 else 0 for x in range(5)]'."
  },
  {
    "id": 6,
    "question": "What will be the output of this list comprehension?\n\n[x for x in range(3, 0, -1)]",
    "options": [
      "[1, 2, 3]",
      "[3, 2, 1]",
      "[0, 1, 2, 3]",
      "[1, 2, 3, 0]"
    ],
    "correctAnswer": 1,
    "explanation": "The list comprehension iterates from 3 to 1, resulting in [3, 2, 1]."
  },
  {
    "id": 7,
    "question": "Which of the following creates a list of squares from 1 to 5?",
    "options": [
      "[x*2 for x in range(1, 6)]",
      "[x**2 for x in range(1, 6)]",
      "[pow(x, 2) for x in range(1, 6)]",
      "Both B and C"
    ],
    "correctAnswer": 3,
    "explanation": "Both B and C correctly create a list of squares from 1 to 5."
  },
  {
    "id": 8,
    "question": "What is the result of this code?\n\n[i+1 for i in range(3) if i != 1]",
    "options": [
      "[1, 2, 3]",
      "[2, 3]",
      "[1, 3]",
      "[0, 2]"
    ],
    "correctAnswer": 2,
    "explanation": "The 'if i != 1' condition excludes 1 from the list, so the result is [1, 3]."
  },
  {
    "id": 9,
    "question": "What is the output of this code?\n\n[x for x in range(10) if x % 3 == 0]",
    "options": [
      "[0, 3, 6, 9]",
      "[1, 4, 7]",
      "[3, 6, 9]",
      "[0, 3, 6]"
    ],
    "correctAnswer": 0,
    "explanation": "The list comprehension selects multiples of 3, resulting in [0, 3, 6, 9]."
  },
  {
    "id": 10,
    "question": "What does this nested list comprehension produce?\n\n[[i + j for j in range(2)] for i in range(2)]",
    "options": [
      "[[0, 0], [1, 1]]",
      "[[0, 1], [1, 2]]",
      "[[1, 2], [3, 4]]",
      "[[2, 3], [3, 4]]"
    ],
    "correctAnswer": 1,
    "explanation": "The nested list comprehension produces [[0, 1], [1, 2]]."
  },
  {
    "id": 11,
    "question": "What does a shallow copy do with nested objects?",
    "options": [
      "Fully duplicates them",
      "Removes them",
      "Creates new copies",
      "References them"
    ],
    "correctAnswer": 3,
    "explanation": "A shallow copy references nested objects, meaning changes to nested objects in the copy affect the original."
  },
  {
    "id": 12,
    "question": "Which of the following performs a shallow copy of a list?",
    "options": [
      "a.copy()",
      "copy.copy(a)",
      "a[:] ",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "All of these methods perform a shallow copy of the list."
  },
  {
    "id": 13,
    "question": "Which method ensures all nested objects are duplicated in a copy?",
    "options": [
      "shallowcopy()",
      "list()",
      "clone()",
      "deepcopy()"
    ],
    "correctAnswer": 3,
    "explanation": "The deepcopy() method ensures that all nested objects are fully duplicated."
  },
  {
    "id": 14,
    "question": "Which import is necessary to use deepcopy()?",
    "options": [
      "import tools",
      "import duplicate",
      "import os",
      "import copy"
    ],
    "correctAnswer": 3,
    "explanation": "The 'deepcopy()' function is part of the 'copy' module."
  },
  {
    "id": 15,
    "question": "What is the result of this code?\n\nimport copy\na = [1, [2, 3]]\nb = copy.deepcopy(a)\nb[1][0] = 99\nprint(a)",
    "options": [
      "[1, [99, 3]]",
      "[1, [2, 3]]",
      "[[1, 2], 3]",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "The 'deepcopy()' method creates a fully independent copy of 'a', so changes to 'b' do not affect 'a'."
  },
  {
    "id": 16,
    "question": "Which of the following statements is true?",
    "options": [
      "copy.copy() performs a deep copy",
      "copy.deepcopy() does not copy nested lists",
      "copy.copy() and copy.deepcopy() give the same result always",
      "copy.deepcopy() creates a fully independent object"
    ],
    "correctAnswer": 3,
    "explanation": "copy.deepcopy() creates a fully independent object, including nested objects."
  },
  {
    "id": 17,
    "question": "What is the output of this code?\n\nx = [1, 2, [3, 4]]\ny = x.copy()\ny[2][0] = 100\nprint(x)",
    "options": [
      "[1, 2, [100, 4]]",
      "[1, 2, [3, 4]]",
      "[1, 2, 100]",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "Since copy() creates a shallow copy, changes to the nested list in 'y' affect 'x'."
  },
  {
    "id": 18,
    "question": "What type of copy is needed to prevent changes in nested objects from affecting the original list?",
    "options": [
      "Soft copy",
      "Shallow copy",
      "Normal assignment",
      "Deep copy"
    ],
    "correctAnswer": 3,
    "explanation": "A deep copy ensures that nested objects are fully duplicated and changes in the copy do not affect the original."
  },
  {
    "id": 19,
    "question": "What happens if you modify a nested list in a shallow copy?",
    "options": [
      "Only copy is affected",
      "Both original and copy are affected",
      "Nothing changes",
      "An error occurs"
    ],
    "correctAnswer": 1,
    "explanation": "Since shallow copies reference nested objects, changes in the copy affect the original."
  },
  {
    "id": 20,
    "question": "Which of the following creates a new object with the same structure but different memory address for all elements?",
    "options": [
      "copy.copy()",
      "copy.deepcopy()",
      "list()",
      "x.copy()"
    ],
    "correctAnswer": 1,
    "explanation": "copy.deepcopy() creates a new object with the same structure but a different memory address for all elements."
  }
];
