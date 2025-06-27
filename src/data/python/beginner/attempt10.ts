export const questions = [
  {
    "id": 1,
    "question": "Which of the following defines a tuple correctly?",
    "options": ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "tuple[1, 2, 3]"],
    "correctAnswer": 0,
    "explanation": "Tuples are created using parentheses: (1, 2, 3)."
  },
  {
    "id": 2,
    "question": "What is the data type of this object?\nx = (10)\nprint(type(x))",
    "options": ["<class 'tuple'>", "<class 'int'>", "<class 'list'>", "<class 'set'>"],
    "correctAnswer": 1,
    "explanation": "(10) without a comma is just an integer, not a tuple."
  },
  {
    "id": 3,
    "question": "How do you define a single-element tuple?",
    "options": ["(5)", "[5]", "{5}", "(5,)"],
    "correctAnswer": 3,
    "explanation": "Single-element tuples must include a trailing comma: (5,)."
  },
  {
    "id": 4,
    "question": "What is the output of the following code?\na = (1, 2, 3)\nprint(a[1])",
    "options": ["1", "2", "3", "Error"],
    "correctAnswer": 1,
    "explanation": "Index 1 of the tuple contains the value 2."
  },
  {
    "id": 5,
    "question": "Which of the following statements is true about tuples?",
    "options": ["Tuples are mutable", "Tuples use square brackets", "Tuples can store mixed data types", "Tuples can only store integers"],
    "correctAnswer": 2,
    "explanation": "Tuples are immutable but can contain elements of different data types."
  },
  {
    "id": 6,
    "question": "What will be the result of this code?\nx = (10, 20, 30)\nprint(x[-1])",
    "options": ["10", "20", "30", "Error"],
    "correctAnswer": 2,
    "explanation": "Negative indexing -1 refers to the last item, which is 30."
  },
  {
    "id": 7,
    "question": "What happens if you try to assign a new value to a tuple item?\nt = (1, 2, 3)\nt[0] = 5",
    "options": ["Changes value", "No change", "Adds value", "Raises an error"],
    "correctAnswer": 3,
    "explanation": "Tuples are immutable, so assigning to an index causes an error."
  },
  {
    "id": 8,
    "question": "What does slicing a tuple return?\nt = (1, 2, 3, 4)\nprint(t[1:3])",
    "options": ["[2, 3]", "(2, 3)", "{2, 3}", "2, 3"],
    "correctAnswer": 1,
    "explanation": "Slicing a tuple returns a new tuple with the specified range."
  },
  {
    "id": 9,
    "question": "Which method is used to count occurrences in a tuple?",
    "options": ["find()", "total()", "count()", "index()"],
    "correctAnswer": 2,
    "explanation": "count() returns the number of times a value appears in a tuple."
  },
  {
    "id": 10,
    "question": "What will t.index(3) return if t = (1, 2, 3, 3, 4)?",
    "options": ["2", "3", "[2, 3]", "Error"],
    "correctAnswer": 0,
    "explanation": "index() returns the first index where the value appears—in this case, 2."
  },
  {
    "id": 11,
    "question": "What is the output of this code?\nx = (1, 2)\ny = (3, 4)\nprint(x + y)",
    "options": ["(1, 2, 3, 4)", "[1, 2, 3, 4]", "(4, 6)", "Error"],
    "correctAnswer": 0,
    "explanation": "Using + combines tuples into a new one."
  },
  {
    "id": 12,
    "question": "What is the output of this code?\nt = (2, 4, 6) * 2\nprint(t)",
    "options": ["(2, 4, 6, 2, 4, 6)", "(4, 8, 12)", "[2, 4, 6, 2, 4, 6]", "Error"],
    "correctAnswer": 0,
    "explanation": "Tuple repetition via * results in elements repeating."
  },
  {
    "id": 13,
    "question": "What is returned by len((1, 2, 3, 4))?",
    "options": ["3", "4", "(4)", "Error"],
    "correctAnswer": 1,
    "explanation": "len() returns the number of elements in the tuple—4 in this case."
  },
  {
    "id": 14,
    "question": "How can you convert a list into a tuple?",
    "options": ["list(x)", "tuple(x)", "set(x)", "dict(x)"],
    "correctAnswer": 1,
    "explanation": "The tuple() constructor turns a list into a tuple."
  },
  {
    "id": 15,
    "question": "What is the result of the following?\ntuple(\"abc\")",
    "options": ["('abc')", "['a', 'b', 'c']", "('a', 'b', 'c')", "['abc']"],
    "correctAnswer": 2,
    "explanation": "Passing a string to tuple() breaks it into characters."
  },
  {
    "id": 16,
    "question": "What module provides support for named tuples in Python?",
    "options": ["struct", "dataclasses", "typing", "collections"],
    "correctAnswer": 3,
    "explanation": "The collections module provides namedtuple."
  },
  {
    "id": 17,
    "question": "How do you define a named tuple in Python?",
    "options": [
      "namedtuple('Point', ['x', 'y'])",
      "NamedTuple('Point', 'x y')",
      "Point = namedtuple(['x', 'y'], 'Point')",
      "Point = tuple.named('x', 'y')"
    ],
    "correctAnswer": 0,
    "explanation": "The correct syntax is: namedtuple('Point', ['x', 'y'])."
  },
  {
    "id": 18,
    "question": "What is the advantage of named tuples over regular tuples?",
    "options": ["Better performance", "Built-in methods", "Access via named fields", "Automatic sorting"],
    "correctAnswer": 2,
    "explanation": "Named tuples allow accessing fields by name, improving readability."
  },
  {
    "id": 19,
    "question": "What is the output of this code?\nfrom collections import namedtuple\nPerson = namedtuple('Person', 'name age')\np = Person('Alice', 30)\nprint(p.name)",
    "options": ["Person", "age", "Alice", "Error"],
    "correctAnswer": 2,
    "explanation": "Named tuple fields can be accessed by name like p.name."
  },
  {
    "id": 20,
    "question": "Can you access named tuple fields by index as well as by name?",
    "options": ["Only by name", "Only by index", "No", "Yes"],
    "correctAnswer": 3,
    "explanation": "Named tuples support both attribute-style and index-style access."
  }
];