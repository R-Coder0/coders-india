export const questions = [
 {
    "id": 1,
    "question": "Which of the following is a mutable data type?",
    "options": ["tuple", "list", "string", "frozen set"],
    "correctAnswer": 1,
    "explanation": "Lists are mutable, meaning they can be changed after creation."
  },
  {
    "id": 2,
    "question": "What is the output of the following code?\nx = [1, 2, 3]\nx.append([4, 5])\nprint(x)",
    "options": ["[1, 2, 3, 4, 5]", "[1, 2, 3, [4, 5]]", "[1, 2, 3, (4, 5)]", "SyntaxError"],
    "correctAnswer": 1,
    "explanation": "append() adds the list as a single element at the end."
  },
  {
    "id": 3,
    "question": "Which of the following collection types is unordered?",
    "options": ["list", "tuple", "set", "string"],
    "correctAnswer": 2,
    "explanation": "Sets are unordered and do not preserve element order."
  },
  {
    "id": 4,
    "question": "What does the dict.get('key', default) method do?",
    "options": [
      "Deletes the key if present, otherwise returns default",
      "Updates the dictionary with default",
      "Returns value for key if key is in dictionary, else default",
      "Adds the key to the dictionary with default value"
    ],
    "correctAnswer": 2,
    "explanation": "get() fetches the value for a key or returns the default if not found."
  },
  {
    "id": 5,
    "question": "Which collection allows duplicate elements?",
    "options": ["set", "dict", "tuple", "All of the above"],
    "correctAnswer": 2,
    "explanation": "Tuples can contain duplicate values, unlike sets or dict keys."
  },
  {
    "id": 6,
    "question": "Which method is used to add an item to a set?",
    "options": ["add()", "append()", "insert()", "extend()"],
    "correctAnswer": 0,
    "explanation": "The add() method is used to insert items into a set."
  },
  {
    "id": 7,
    "question": "What will be the output of the following code?\nmy_dict = {'a': 1, 'b': 2}\nprint(my_dict['c'])",
    "options": ["None", "0", "KeyError", "'c'"],
    "correctAnswer": 2,
    "explanation": "Accessing a missing key directly raises a KeyError."
  },
  {
    "id": 8,
    "question": "Which of the following is an immutable collection in Python?",
    "options": ["list", "set", "tuple", "dictionary"],
    "correctAnswer": 2,
    "explanation": "Tuples are immutable—they cannot be changed after creation."
  },
  {
    "id": 9,
    "question": "Which function can convert a list to a set?",
    "options": ["set()", "dict()", "tuple()", "list()"],
    "correctAnswer": 0,
    "explanation": "set() constructs a set from the list, removing duplicates."
  },
  {
    "id": 10,
    "question": "What is the result of len({1: 'a', 2: 'b', 3: 'c'})?",
    "options": ["3", "2", "1", "0"],
    "correctAnswer": 0,
    "explanation": "There are 3 key-value pairs, so length is 3."
  },
  {
    "id": 11,
    "question": "Which of the following methods removes all items from a list?",
    "options": ["remove()", "clear()", "pop()", "delete()"],
    "correctAnswer": 1,
    "explanation": "clear() empties the list entirely."
  },
  {
    "id": 12,
    "question": "What is the output of the following code?\na = (1, 2, 3)\na[0] = 10",
    "options": ["(10, 2, 3)", "[10, 2, 3]", "TypeError", "No output"],
    "correctAnswer": 2,
    "explanation": "Tuples are immutable; assignment to an index raises a TypeError."
  },
  {
    "id": 13,
    "question": "Which of the following will create an empty dictionary?",
    "options": ["{}", "dict()", "[]", "Both A and B"],
    "correctAnswer": 3,
    "explanation": "Both {} and dict() create an empty dictionary."
  },
  {
    "id": 14,
    "question": "What is the main difference between a list and a tuple?",
    "options": [
      "Tuples are unordered",
      "Lists are immutable",
      "Tuples are immutable",
      "Lists can contain only integers"
    ],
    "correctAnswer": 2,
    "explanation": "Tuples cannot be modified after creation, unlike lists."
  },
  {
    "id": 15,
    "question": "What is the output of the following code?\ns = {1, 2, 2, 3, 4}\nprint(len(s))",
    "options": ["5", "4", "3", "Error"],
    "correctAnswer": 1,
    "explanation": "Sets do not allow duplicates, so only 4 unique items remain."
  },
  {
    "id": 16,
    "question": "Which of the following can be used as keys in a dictionary?",
    "options": ["list", "set", "tuple", "dict"],
    "correctAnswer": 2,
    "explanation": "Only immutable types like tuples can be used as dict keys."
  },
  {
    "id": 17,
    "question": "Which method is used to get all the keys from a dictionary?",
    "options": ["keys()", "getkeys()", "all_keys()", "dict_keys()"],
    "correctAnswer": 0,
    "explanation": "The keys() method returns a view of all the dictionary’s keys."
  },
  {
    "id": 18,
    "question": "Which of these data types is not a built-in collection in Python?",
    "options": ["list", "map", "tuple", "set"],
    "correctAnswer": 1,
    "explanation": "map is a built-in function, not a collection type."
  },
  {
    "id": 19,
    "question": "What is the output of the following code?\nmy_list = [1, 2, 3]\nprint(my_list * 2)",
    "options": ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3, 2]", "Error"],
    "correctAnswer": 0,
    "explanation": "Multiplying a list with an integer replicates the list contents."
  },
  {
    "id": 20,
    "question": "Which of the following is used to remove a specific item from a dictionary?",
    "options": ["del", "pop()", "remove()", "Both A and B"],
    "correctAnswer": 3,
    "explanation": "del and pop() can be used to remove a specific key from a dictionary."
  }
];