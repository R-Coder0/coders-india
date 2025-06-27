export const questions = [
{
    "id": 1,
    "question": "What is the correct way to create an empty tuple?",
    "options": ["tuple = {}", "tuple = []", "tuple = ()", "tuple = \"\""],
    "correctAnswer": 2,
    "explanation": "Parentheses without elements define an empty tuple."
  },
  {
    "id": 2,
    "question": "What will this code output?\nx = ('a', 'b', 'c', 'd')\nprint(x[1:3])",
    "options": ["['b', 'c']", "('b', 'c')", "('a', 'b')", "['a', 'b']"],
    "correctAnswer": 1,
    "explanation": "Slicing a tuple returns a tuple with the selected range."
  },
  {
    "id": 3,
    "question": "Tuples are:",
    "options": ["Mutable", "Changeable", "Immutable", "Sorted"],
    "correctAnswer": 2,
    "explanation": "Tuples are immutable, meaning they cannot be changed."
  },
  {
    "id": 4,
    "question": "What is the output of this code?\nt = (1, 2, 3)\nprint(4 in t)",
    "options": ["True", "4", "False", "Error"],
    "correctAnswer": 2,
    "explanation": "The value 4 is not in the tuple, so it returns False."
  },
  {
    "id": 5,
    "question": "How do you repeat the contents of a tuple twice?",
    "options": ["t.repeat(2)", "t + t", "2 * t", "t ** 2"],
    "correctAnswer": 2,
    "explanation": "The * operator repeats a tuple."
  },
  {
    "id": 6,
    "question": "Which of the following creates a set?",
    "options": ["set = [1, 2, 3]", "set = (1, 2, 3)", "set = {1, 2, 3}", "set = <1, 2, 3>"],
    "correctAnswer": 2,
    "explanation": "Curly braces with distinct elements define a set."
  },
  {
    "id": 7,
    "question": "How do you access individual elements in a set?",
    "options": ["Using index", "Using slice", "Using keys", "You can't directly access items by index in a set"],
    "correctAnswer": 3,
    "explanation": "Sets are unordered and do not support indexing."
  },
  {
    "id": 8,
    "question": "What is the result of the following code?\ns = {1, 2, 3}\ns.add(4)\nprint(s)",
    "options": ["{1, 2, 3}", "{1, 2, 3, 4}", "{4, 2, 3}", "Error"],
    "correctAnswer": 1,
    "explanation": "The add() method adds 4 to the set."
  },
  {
    "id": 9,
    "question": "What does discard() do in a set?",
    "options": ["Deletes the entire set", "Removes item or throws error if not found", "Removes item without error if not found", "Removes last item"],
    "correctAnswer": 2,
    "explanation": "discard() removes an element if present, no error if absent."
  },
  {
    "id": 10,
    "question": "Which loop is used to iterate over a set?",
    "options": ["for loop", "while loop", "foreach loop", "loop() function"],
    "correctAnswer": 0,
    "explanation": "for loops are typically used to iterate over sets."
  },
  {
    "id": 11,
    "question": "What does the union operation return?",
    "options": ["Items in both sets only", "Only common items", "All unique items from both sets", "A single string"],
    "correctAnswer": 2,
    "explanation": "The union includes all elements without duplicates."
  },
  {
    "id": 12,
    "question": "What is the output of this code?\na = {1, 2}\nb = {2, 3}\nprint(a & b)",
    "options": ["{1, 2, 3}", "{1}", "{2}", "{}"],
    "correctAnswer": 2,
    "explanation": "The & operator returns intersection, which is {2}."
  },
  {
    "id": 13,
    "question": "What does the pop() method do in a set?",
    "options": ["Removes last inserted item", "Removes first inserted item", "Removes a random item", "Removes item by value"],
    "correctAnswer": 2,
    "explanation": "pop() removes and returns an arbitrary item due to lack of order."
  },
  {
    "id": 14,
    "question": "Which of the following methods does not exist in sets?",
    "options": ["update()", "intersection()", "append()", "clear()"],
    "correctAnswer": 2,
    "explanation": "append() is for lists; sets do not have this method."
  },
  {
    "id": 15,
    "question": "What does the difference() method return?\na = {1, 2, 3}\nb = {2, 3, 4}\nprint(a.difference(b))",
    "options": ["{2, 3}", "{4}", "{1}", "{}"],
    "correctAnswer": 2,
    "explanation": "difference() returns items in a but not in b."
  },
  {
    "id": 16,
    "question": "What is a frozenset in Python?",
    "options": ["A list that can’t change", "A set that can’t change", "A tuple with set properties", "A set with indexes"],
    "correctAnswer": 1,
    "explanation": "frozenset is an immutable version of a set."
  },
  {
    "id": 17,
    "question": "How do you create a frozenset?",
    "options": ["frozenset = set([])", "f = frozen([])", "f = frozenset([1, 2, 3])", "f = fixedset([1, 2, 3])"],
    "correctAnswer": 2,
    "explanation": "frozenset() is the correct constructor."
  },
  {
    "id": 18,
    "question": "What will happen if you try to add an item to a frozenset?\nf = frozenset([1, 2])\nf.add(3)",
    "options": ["Adds 3", "Replaces 2 with 3", "No change", "Raises AttributeError"],
    "correctAnswer": 3,
    "explanation": "frozensets are immutable; you can't modify them."
  },
  {
    "id": 19,
    "question": "Which of the following operations are valid on frozensets?",
    "options": ["add()", "remove()", "intersection()", "discard()"],
    "correctAnswer": 2,
    "explanation": "frozensets support read-only set operations like intersection."
  },
  {
    "id": 20,
    "question": "What is the main benefit of frozenset over set?",
    "options": ["Larger memory", "Mutable elements", "It’s faster", "Can be used as a dictionary key"],
    "correctAnswer": 3,
    "explanation": "frozensets are hashable, making them valid keys for dictionaries."
  }
];
