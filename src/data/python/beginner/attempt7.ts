export const questions = [
  {
    "id": 1,
    "question": "What is the main difference between a Python list and an array from the array module?",
    "options": [
      "Lists store only integers",
      "Arrays store elements of the same data type",
      "Lists are faster than arrays",
      "Arrays can store different types"
    ],
    "correctAnswer": 1,
    "explanation": "Arrays store elements of the same data type, unlike lists which can store different types."
  },
  {
    "id": 2,
    "question": "Which typecode is used to create an array of unsigned integers in Python?",
    "options": [
      "'f'",
      "'i'",
      "'d'",
      "'I'"
    ],
    "correctAnswer": 3,
    "explanation": "The typecode 'I' is used to create an array of unsigned integers."
  },
  {
    "id": 3,
    "question": "Which of these functions will raise an error if the value is not present in the array?",
    "options": [
      "pop()",
      "insert()",
      "append()",
      "remove()"
    ],
    "correctAnswer": 3,
    "explanation": "The 'remove()' function raises a KeyError if the value is not present in the array."
  },
  {
    "id": 4,
    "question": "How do you reverse the elements of a Python array in-place?",
    "options": [
      "reverse(arr)",
      "arr.reversed()",
      "arr[::-1]",
      "arr.reverse()"
    ],
    "correctAnswer": 3,
    "explanation": "The 'reverse()' method reverses the elements of the array in-place."
  },
  {
    "id": 5,
    "question": "Which method extends a Python array with another iterable?",
    "options": [
      "add()",
      "extend()",
      "push()",
      "update()"
    ],
    "correctAnswer": 1,
    "explanation": "The 'extend()' method adds elements from another iterable to the array."
  },
  {
    "id": 6,
    "question": "What will be the output of the following code?\n\nImport array\na = array.array('i', [1, 2, 3])\na[1] = 10\nprint(a)",
    "options": [
      "array('i', [1, 10, 3])",
      "array('i', [1, 2, 3])",
      "Error",
      "[1, 10, 3]"
    ],
    "correctAnswer": 0,
    "explanation": "The code modifies the second element in the array and prints array('i', [1, 10, 3])."
  },
  {
    "id": 7,
    "question": "Which method returns the index of the first occurrence of a value in an array?",
    "options": [
      "find()",
      "locate()",
      "search()",
      "index()"
    ],
    "correctAnswer": 3,
    "explanation": "The 'index()' method returns the index of the first occurrence of a specified value in the array."
  },
  {
    "id": 8,
    "question": "How do you create a copy of an array a without affecting the original?",
    "options": [
      "b = a",
      "b = a.clone()",
      "b = array.array(a)",
      "b = array.array(a.typecode, a)"
    ],
    "correctAnswer": 3,
    "explanation": "You can create a copy of the array using 'array.array(a.typecode, a)' to avoid modifying the original."
  },
  {
    "id": 9,
    "question": "Which of the following is NOT true about arrays created with the array module?",
    "options": [
      "They are type-restricted",
      "They are less memory-efficient than lists",
      "They support most list operations",
      "They are homogeneous"
    ],
    "correctAnswer": 1,
    "explanation": "Arrays are more memory-efficient than lists because they store elements of the same data type."
  },
  {
    "id": 10,
    "question": "What does the following code return?\n\nimport array\na = array.array('i', [1, 2, 3])\nprint(a.itemsize)",
    "options": [
      "1",
      "Size of the array",
      "Memory size of each item in bytes",
      "Number of elements in array"
    ],
    "correctAnswer": 2,
    "explanation": "The 'itemsize' attribute returns the memory size of each item in the array in bytes."
  },
  {
    "id": 11,
    "question": "Which array method inserts an element at a specific index?",
    "options": [
      "add()",
      "push()",
      "place()",
      "insert()"
    ],
    "correctAnswer": 3,
    "explanation": "The 'insert()' method inserts an element at a specified index in the array."
  },
  {
    "id": 12,
    "question": "What is the result of the expression\n\narray.array('i', [1, 2]) + array.array('i', [3, 4])?",
    "options": [
      "array.array('i', [1, 2, 3, 4])",
      "[1, 2, 3, 4]",
      "Error",
      "(1, 2, 3, 4)"
    ],
    "correctAnswer": 0,
    "explanation": "The '+' operator concatenates two arrays, so the result is 'array.array('i', [1, 2, 3, 4])'."
  },
  {
    "id": 13,
    "question": "Which of these typecodes is used for a double-precision float?",
    "options": [
      "'f'",
      "'d'",
      "'l'",
      "'e'"
    ],
    "correctAnswer": 1,
    "explanation": "The typecode 'd' is used for double-precision floats in arrays."
  },
  {
    "id": 14,
    "question": "How can you remove the element at index 2 in a Python array?",
    "options": [
      "arr.remove(2)",
      "del arr[2]",
      "arr.pop(2)",
      "Both B and C"
    ],
    "correctAnswer": 3,
    "explanation": "Both 'del arr[2]' and 'arr.pop(2)' can be used to remove the element at index 2 in an array."
  },
  {
    "id": 15,
    "question": "Which method converts an array to a byte string?",
    "options": [
      "tobytes()",
      "tostring()",
      "asbytes()",
      "getbytes()"
    ],
    "correctAnswer": 0,
    "explanation": "The 'tobytes()' method converts an array to a byte string."
  },
  {
    "id": 16,
    "question": "What does a.count(x) do in a Python array?",
    "options": [
      "Counts how many arrays are in list a",
      "Counts how many times x appears in array a",
      "Returns index of x",
      "Removes all x from array"
    ],
    "correctAnswer": 1,
    "explanation": "The 'count()' method returns how many times x appears in the array."
  },
  {
    "id": 17,
    "question": "What is the output of this code?\n\nimport array\na = array.array('i', [1, 2, 3])\nprint(a[3])",
    "options": [
      "3",
      "IndexError",
      "None",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "Index 3 is out of range, so an 'IndexError' is raised."
  },
  {
    "id": 18,
    "question": "Which typecode represents a signed long integer?",
    "options": [
      "'l'",
      "'i'",
      "'h'",
      "'L'"
    ],
    "correctAnswer": 0,
    "explanation": "The typecode 'l' is used for signed long integers in arrays."
  },
  {
    "id": 19,
    "question": "Which of the following can you use to iterate through a Python array?",
    "options": [
      "range()",
      "for loop",
      "while loop",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "You can iterate through a Python array using a 'for' loop, 'while' loop, or 'range()'."
  },
  {
    "id": 20,
    "question": "Which method allows you to read values into an array from a file object?",
    "options": [
      "read()",
      "load()",
      "fromfile()",
      "fileinput()"
    ],
    "correctAnswer": 2,
    "explanation": "The 'fromfile()' method allows reading values into an array from a file object."
  }
];
