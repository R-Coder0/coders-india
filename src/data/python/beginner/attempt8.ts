export const questions = [
  {
    "id": 1,
    "question": "What is the data type of this object in Python?\ndata = []",
    "options": ["dict", "set", "tuple", "list"],
    "correctAnswer": 3,
    "explanation": "An empty pair of square brackets creates a list in Python."
  },
  {
    "id": 2,
    "question": "Which of the following creates an empty list correctly?",
    "options": ["list = ()", "list = {}", "list = set()", "list = []"],
    "correctAnswer": 3,
    "explanation": "Square brackets are the correct syntax for an empty list."
  },
  {
    "id": 3,
    "question": "What will be the output of this code?\ncolors = ['red', 'green', 'blue']\nprint(colors[-2])",
    "options": ["red", "green", "blue", "Error"],
    "correctAnswer": 1,
    "explanation": "Negative indices count from the end, so -2 gives 'green'."
  },
  {
    "id": 4,
    "question": "What happens when you access an index that doesn't exist in a list?",
    "options": ["Returns None", "Returns False", "Returns the last item", "Raises IndexError"],
    "correctAnswer": 3,
    "explanation": "Accessing an out-of-bounds index raises an IndexError."
  },
  {
    "id": 5,
    "question": "Which statement correctly changes the first item in this list?\nnums = [3, 6, 9]",
    "options": ["nums[0] = 0", "nums(0) = 0", "nums[1] = 0", "nums[0:1] = 0"],
    "correctAnswer": 0,
    "explanation": "nums[0] = 0 replaces the first item with 0."
  },
  {
    "id": 6,
    "question": "How can you replace multiple items in a list slice?",
    "options": ["You can't", "Use append()", "Assign a new list to a slice", "Use remove()"],
    "correctAnswer": 2,
    "explanation": "Assigning a new list to a slice updates that range."
  },
  {
    "id": 7,
    "question": "What will this code do?\na = [1, 2]\na.insert(1, 100)",
    "options": ["Add 100 at the beginning", "Replace index 1 with 100", "Add 100 after 2", "Insert 100 at index 1"],
    "correctAnswer": 3,
    "explanation": "insert(index, value) inserts at the specified index, shifting existing items."
  },
  {
    "id": 8,
    "question": "Which method would you use to combine two lists element-wise?",
    "options": ["append()", "merge()", "add()", "None (use + operator or extend())"],
    "correctAnswer": 3,
    "explanation": "Python lists don't have merge or add methods. Use + or extend()."
  },
  {
    "id": 9,
    "question": "What will be the result of this code?\nx = [1, 2, 3]\nx.clear()\nprint(x)",
    "options": ["[1, 2, 3]", "[]", "None", "Error"],
    "correctAnswer": 1,
    "explanation": "clear() removes all items from the list, resulting in an empty list."
  },
  {
    "id": 10,
    "question": "What does the del statement do with lists?",
    "options": ["Removes items by value", "Deletes the list variable completely", "Clears the list", "Sorts the list"],
    "correctAnswer": 1,
    "explanation": "del list_name deletes the entire list variable."
  },
 {
    "id": 11,
    "question": "What is the output of the following?\nnames = ['Ana', 'Ben', 'Cara']\nfor name in names:\n    print(name, end=' ')",
    "options": ["Ana\\nBen\\nCara", "Ana Ben Cara", "'Ana' 'Ben' 'Cara'", "Error"],
    "correctAnswer": 1,
    "explanation": "The 'end' argument in print keeps everything on one line, separated by spaces."
  },
  {
    "id": 12,
    "question": "Which loop is typically used to iterate over list indices and values at the same time?",
    "options": ["while", "for", "for with range()", "for with enumerate()"],
    "correctAnswer": 3,
    "explanation": "enumerate() allows access to both index and value while looping."
  },
  {
    "id": 13,
    "question": "What is the result of sorted([3, 1, 2])?",
    "options": ["[3, 2, 1]", "[1, 2, 3]", "None", "Error"],
    "correctAnswer": 1,
    "explanation": "sorted() returns a new list with elements in ascending order."
  },
  {
    "id": 14,
    "question": "Which method is used to count how many times an item appears in a list?",
    "options": ["total()", "count()", "find()", "index()"],
    "correctAnswer": 1,
    "explanation": "The count() method returns the number of occurrences of a value."
  },
  {
    "id": 15,
    "question": "What will mylist.index('a') return if 'a' is in the list multiple times?",
    "options": ["List of all positions", "Last occurrence", "First occurrence", "Error"],
    "correctAnswer": 2,
    "explanation": "index() always returns the index of the first match."
  },
  {
    "id": 16,
    "question": "What does mylist.copy() do?",
    "options": ["Copies a list to clipboard", "Returns a reference to the original list", "Makes a new independent list", "Makes the list immutable"],
    "correctAnswer": 2,
    "explanation": "copy() creates a shallow copy, meaning a new list object."
  },
  {
    "id": 17,
    "question": "What does the reverse() method do?",
    "options": ["Returns a reversed list", "Replaces elements with reverse", "Sorts in descending order", "Reverses the list in-place"],
    "correctAnswer": 3,
    "explanation": "reverse() changes the list order in-place, modifying the original list."
  },
  {
    "id": 18,
    "question": "What does list1 + list2 do?",
    "options": ["Merges both lists into a new one", "Replaces elements of list1", "Extends list1 with elements of list2 in-place", "Adds their values element-wise"],
    "correctAnswer": 0,
    "explanation": "Using the + operator returns a new list with elements from both."
  },
  {
    "id": 19,
    "question": "What will be the output of this code?\nletters = ['a', 'b', 'c']\nletters *= 2\nprint(letters)",
    "options": ["['a', 'b', 'c']", "['a', 'b', 'c', 'a', 'b', 'c']", "['aa', 'bb', 'cc']", "Error"],
    "correctAnswer": 1,
    "explanation": "Using *= with a list replicates its contents that many times."
  },
  {
    "id": 20,
    "question": "What does the list() function do when passed a string as an argument?",
    "options": ["Converts string to a list of characters", "Returns the same string", "Converts it to ASCII values", "Raises TypeError"],
    "correctAnswer": 0,
    "explanation": "Passing a string to list() splits it into a list of characters."
  }
];
