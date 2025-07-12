export const questions = [
  {
    id: 1,
    question: "Which attribute returns the number of dimensions in a NumPy array?",
    options: ["ndim", "shape", "size", "dtype"],
    correctAnswer: 0,
    explanation: "`ndim` returns the number of dimensions of a NumPy array."
  },
  {
    id: 2,
    question: "What does the shape attribute of a NumPy array return?",
    options: [
      "Number of elements",
      "Dimensions of the array",
      "Type of elements",
      "Memory size of array"
    ],
    correctAnswer: 1,
    explanation: "`shape` returns a tuple representing the dimensions of the array."
  },
  {
    id: 3,
    question: "Which attribute gives the total number of elements in the array?",
    options: ["size", "shape", "ndim", "len"],
    correctAnswer: 0,
    explanation: "`size` returns the total number of elements in the array."
  },
  {
    id: 4,
    question: "What does dtype attribute represent?",
    options: [
      "Data structure",
      "Data type of array elements",
      "Array dimension",
      "None"
    ],
    correctAnswer: 1,
    explanation: "`dtype` tells the data type of elements in the array (e.g., int32, float64)."
  },
  {
    id: 5,
    question: "What is the output of arr.shape for arr = np.array([[1, 2], [3, 4], [5, 6]])?",
    options: ["(3, 2)", "(2, 3)", "(6,)", "(3,)"],
    correctAnswer: 0,
    explanation: "The array has 3 rows and 2 columns → shape is (3, 2)."
  },
  {
    id: 6,
    question: "What is the result of arr.itemsize if arr = np.array([1, 2, 3], dtype='int32')?",
    options: ["8", "4", "2", "16"],
    correctAnswer: 1,
    explanation: "`itemsize` gives the size in bytes of each element. For int32, it is 4 bytes."
  },
  {
    id: 7,
    question: "Which of the following can be used to get the memory size of each item in an array?",
    options: ["itemcount", "size", "itemsize", "shape"],
    correctAnswer: 2,
    explanation: "`itemsize` returns the memory size (in bytes) of a single element."
  },
  {
    id: 8,
    question: "How do you find the number of elements in a 2D array arr?",
    options: ["arr.shape", "arr.ndim", "arr.dtype", "arr.size"],
    correctAnswer: 3,
    explanation: "`arr.size` gives the total number of elements in the array regardless of dimensions."
  },
  {
    id: 9,
    question: "Which property gives the tuple of dimensions of the array?",
    options: ["dtype", "ndim", "shape", "size"],
    correctAnswer: 2,
    explanation: "`shape` returns a tuple of array dimensions like (rows, columns)."
  },
  {
    id: 10,
    question: "If arr = np.array([[1,2,3],[4,5,6]]), what is arr.ndim?",
    options: ["2", "3", "1", "6"],
    correctAnswer: 0,
    explanation: "This is a 2D array with 2 rows and 3 columns, so ndim is 2."
  },
  {
    id: 11,
    question: "Which of the following shows the type of elements in a NumPy array?",
    options: ["arr.shape", "arr.ndim", "arr.dtype", "arr.size"],
    correctAnswer: 2,
    explanation: "`arr.dtype` gives the data type of array elements."
  },
  {
    id: 12,
    question: "What is returned by arr.size if arr is a 3x4 array?",
    options: ["12", "(3, 4)", "3", "4"],
    correctAnswer: 0,
    explanation: "A 3x4 array has 12 elements → 3 * 4 = 12."
  },
  {
    id: 13,
    question: "What does arr.reshape(-1) do?",
    options: ["Reshape to 1D", "Reverse array", "Flatten array", "None of these"],
    correctAnswer: 2,
    explanation: "Using `-1` in reshape flattens the array into 1D."
  },
  {
    id: 14,
    question: "If arr is a 2D array, what does arr.T return?",
    options: [
      "Same array",
      "Array with values doubled",
      "Transposed array",
      "Inverted array"
    ],
    correctAnswer: 2,
    explanation: "`arr.T` returns the transpose of the array (rows become columns)."
  },
  {
    id: 15,
    question: "What is returned by arr.ndim for arr = np.array([[[1], [2]], [[3], [4]]])?",
    options: ["2", "3", "4", "1"],
    correctAnswer: 1,
    explanation: "This is a 3D array → one level of nested arrays inside nested arrays → ndim = 3."
  }
];
