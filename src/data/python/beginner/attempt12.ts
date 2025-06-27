export const questions = [
  {
    "id": 1,
    "question": "What is the correct way to define an empty dictionary?",
    "options": [
      "d = []",
      "d = ()",
      "d = {}",
      "d = set()"
    ],
    "correctAnswer": 2,
    "explanation": "The correct syntax to define an empty dictionary is d = {}."
  },
  {
    "id": 2,
    "question": "Which of the following creates a dictionary with two key-value pairs?",
    "options": [
      "{1, 2, 3, 4}",
      "{1: 'a', 2: 'b'}",
      "['a': 1, 'b': 2]",
      "(1: 'a', 2: 'b')"
    ],
    "correctAnswer": 1,
    "explanation": "The correct syntax for a dictionary with key-value pairs is {1: 'a', 2: 'b'}."
  },
  {
    "id": 3,
    "question": "What is the output of this code?\n\nd = {'a': 1, 'b': 2}\nprint(d['a'])",
    "options": [
      "'a'",
      "2",
      "1",
      "Error"
    ],
    "correctAnswer": 2,
    "explanation": "The dictionary d contains the key 'a', and d['a'] returns the value 1."
  },
  {
    "id": 4,
    "question": "Which of the following will raise a KeyError?",
    "options": [
      "d.get('x')",
      "'x' in d",
      "d['x']",
      "d.setdefault('x')"
    ],
    "correctAnswer": 2,
    "explanation": "Using d['x'] raises a KeyError if 'x' is not a key in the dictionary."
  },
  {
    "id": 5,
    "question": "Which method can be used to safely access a key’s value?",
    "options": [
      "lookup()",
      "get()",
      "find()",
      "select()"
    ],
    "correctAnswer": 1,
    "explanation": "The 'get()' method returns None if the key does not exist, avoiding a KeyError."
  },
  {
    "id": 6,
    "question": "How do you change the value of a key in a dictionary?",
    "options": [
      "Use .append()",
      "Use .add()",
      "Assign a new value to the key",
      "Use .change()"
    ],
    "correctAnswer": 2,
    "explanation": "You can change the value of an existing key by directly assigning a new value."
  },
  {
    "id": 7,
    "question": "What is the output?\n\nd = {'x': 1}\nd['x'] = 10\nprint(d)",
    "options": [
      "{'x': 1}",
      "{'x': 10}",
      "{1: 'x'}",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "The value of the key 'x' is changed to 10, so the dictionary becomes {'x': 10}."
  },
  {
    "id": 8,
    "question": "Which of the following represents a nested dictionary?",
    "options": [
      "{'a': 1, 'b': 2}",
      "{'a': {'x': 1, 'y': 2}}",
      "[{'a': 1}, {'b': 2}]",
      "('a', {'x': 1})"
    ],
    "correctAnswer": 1,
    "explanation": "A nested dictionary has a dictionary as a value, such as {'a': {'x': 1, 'y': 2}}."
  },
  {
    "id": 9,
    "question": "How do you access value 2 from the following dictionary?\n\nd = {'a': {'b': 2}}",
    "options": [
      "d['a']['b']",
      "d['b']['a']",
      "d['a', 'b']",
      "d.get('b').get('a')"
    ],
    "correctAnswer": 0,
    "explanation": "You access the nested value with d['a']['b']."
  },
  {
    "id": 10,
    "question": "What is the output of this code?\n\nd = {'a': 1, 'b': 2}\nfor k in d:\n    print(k)",
    "options": [
      "1 2",
      "a b",
      "['a', 'b']",
      "d.keys()"
    ],
    "correctAnswer": 1,
    "explanation": "The 'for' loop iterates through the keys of the dictionary, printing 'a' and 'b'."
  },
  {
    "id": 11,
    "question": "What does items() return when called on a dictionary?",
    "options": [
      "Only keys",
      "Only values",
      "List of tuples (key, value)",
      "List of dictionaries"
    ],
    "correctAnswer": 2,
    "explanation": "The 'items()' method returns a view of key-value pairs as a list of tuples."
  },
  {
    "id": 12,
    "question": "Which method removes a key and returns its value?",
    "options": [
      "remove()",
      "discard()",
      "pop()",
      "del()"
    ],
    "correctAnswer": 2,
    "explanation": "The 'pop()' method removes the key and returns its corresponding value."
  },
  {
    "id": 13,
    "question": "What is the result of d.clear()?",
    "options": [
      "Deletes the dictionary",
      "Resets all values to None",
      "Empties the dictionary",
      "Returns keys only"
    ],
    "correctAnswer": 2,
    "explanation": "The 'clear()' method empties the dictionary by removing all key-value pairs."
  },
  {
    "id": 14,
    "question": "Which method creates a shallow copy of a dictionary?",
    "options": [
      "copy()",
      "clone()",
      "duplicate()",
      "replicate()"
    ],
    "correctAnswer": 0,
    "explanation": "The 'copy()' method creates a shallow copy of the dictionary."
  },
  {
    "id": 15,
    "question": "What does fromkeys() do?",
    "options": [
      "Converts values to keys",
      "Removes duplicate keys",
      "Creates new dictionary from given keys",
      "Returns sorted keys"
    ],
    "correctAnswer": 2,
    "explanation": "The 'fromkeys()' method creates a new dictionary with the specified keys and a default value."
  },
  {
    "id": 16,
    "question": "What is the output?\n\nd = dict.fromkeys(['a', 'b'], 0)\nprint(d)",
    "options": [
      "{'a': 0, 'b': 0}",
      "{'a': None, 'b': None}",
      "['a', 'b']",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "The 'fromkeys()' method creates a dictionary with the keys 'a' and 'b' and assigns them the value 0."
  },
  {
    "id": 17,
    "question": "Which of the following is a valid dictionary comprehension?",
    "options": [
      "{x: x**2 for x in range(3)}",
      "[x: x**2 for x in range(3)]",
      "(x: x**2 for x in range(3))",
      "x: x**2 for x in range(3)"
    ],
    "correctAnswer": 0,
    "explanation": "The correct syntax for dictionary comprehension is '{x: x**2 for x in range(3)}'."
  },
  {
    "id": 18,
    "question": "What is the output of this dictionary comprehension?\n\n{x: x*2 for x in [1, 2, 3]}",
    "options": [
      "{1: 2, 2: 4, 3: 6}",
      "[2, 4, 6]",
      "(1, 2, 3, 6)",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "The dictionary comprehension creates a dictionary where the values are the elements of the list multiplied by 2."
  },
  {
    "id": 19,
    "question": "What will this return?\n\n{k: len(k) for k in ['apple', 'banana']}",
    "options": [
      "{'apple': 5, 'banana': 6}",
      "['apple', 'banana']",
      "[5, 6]",
      "{'a': 5, 'b': 6}"
    ],
    "correctAnswer": 0,
    "explanation": "The dictionary comprehension calculates the length of each string, resulting in {'apple': 5, 'banana': 6}."
  },
  {
    "id": 20,
    "question": "What is a key characteristic of dictionary comprehension?",
    "options": [
      "Requires sorted input",
      "Supports duplicate keys",
      "Creates a new dictionary in one line",
      "Only works with strings"
    ],
    "correctAnswer": 2,
    "explanation": "Dictionary comprehension creates a new dictionary in a single line of code."
  }
];
