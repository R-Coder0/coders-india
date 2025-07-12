export const questions = [
  {
    id: 1,
    question: "What is the primary object in NumPy used for handling arrays?",
    options: ["list", "dictionary", "ndarray", "matrix"],
    correctAnswer: 2,
    explanation: "NumPy’s core data structure is `ndarray`, which represents multidimensional arrays."
  },
  {
    id: 2,
    question: "Which function is used to create an array from a regular Python list?",
    options: ["numpy.create()", "numpy.array()", "numpy.make_array()", "numpy.from_list()"],
    correctAnswer: 1,
    explanation: "The `numpy.array()` function is used to convert a regular Python list into a NumPy array."
  },
  {
    id: 3,
    question: "What is the output of np.zeros((2, 3))?",
    options: [
      "A 1D array with 2 zeros",
      "A 3x2 array of ones",
      "A 2x3 array of zeros",
      "An error"
    ],
    correctAnswer: 2,
    explanation: "`np.zeros((2, 3))` creates a 2x3 array filled with zeros."
  },
  {
    id: 4,
    question: "Which of the following functions creates an identity matrix?",
    options: ["np.ones()", "np.eye()", "np.identity()", "np.diag()"],
    correctAnswer: 1,
    explanation: "`np.eye()` creates an identity matrix with ones on the diagonal and zeros elsewhere."
  },
  {
    id: 5,
    question: "What does np.linspace(0, 1, 5) return?",
    options: [
      "Array from 0 to 1 with step size 1",
      "Array with 5 values from 0 to 1 equally spaced",
      "Error due to float values",
      "Array of 5 zeros"
    ],
    correctAnswer: 1,
    explanation: "`np.linspace(0, 1, 5)` generates 5 evenly spaced values between 0 and 1."
  },
  {
    id: 6,
    question: "What is the default data type of elements in np.ones(3)?",
    options: ["int", "float", "bool", "complex"],
    correctAnswer: 1,
    explanation: "The default data type of `np.ones()` is float."
  },
  {
    id: 7,
    question: "Which attribute of a NumPy array returns the number of dimensions?",
    options: [".length", ".dimensions", ".ndim", ".shape"],
    correctAnswer: 2,
    explanation: "`ndim` returns the number of dimensions (axes) in a NumPy array."
  },
  {
    id: 8,
    question: "What is the shape of the array created by np.arange(6).reshape(2, 3)?",
    options: ["(6,)", "(3, 2)", "(2, 3)", "(1, 6)"],
    correctAnswer: 2,
    explanation: "`np.arange(6).reshape(2, 3)` creates a 2x3 array."
  },
  {
    id: 9,
    question: "What does np.arange(3, 10, 2) produce?",
    options: [
      "[3, 4, 5, 6, 7, 8, 9]",
      "[3, 5, 7, 9]",
      "[3, 6, 9, 12]",
      "[3, 5, 8]"
    ],
    correctAnswer: 1,
    explanation: "`np.arange(3, 10, 2)` creates a range starting from 3 to 9 with step 2."
  },
  {
    id: 10,
    question: "Which of the following best describes np.array([[1, 2], [3, 4]])?",
    options: ["1D array", "3D array", "2D array", "Jagged array"],
    correctAnswer: 2,
    explanation: "It’s a 2D array with 2 rows and 2 columns."
  },
  {
    id: 11,
    question: "Which NumPy function is used to create an array with a specific number of equally spaced elements between two numbers?",
    options: ["np.arange()", "np.linspace()", "np.random()", "np.equalspace()"],
    correctAnswer: 1,
    explanation: "`np.linspace()` returns evenly spaced values over a specified range."
  },
  {
    id: 12,
    question: "What will be the result of np.eye(3)?",
    options: [
      "3x3 array with all elements 1",
      "3x3 array with diagonal elements 1 and others 0",
      "3x3 array with random elements",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "`np.eye(3)` returns a 3x3 identity matrix with ones on the diagonal."
  },
  {
    id: 13,
    question: "Which of the following can be used to create a 1D NumPy array?",
    options: [
      "np.array([1, 2, 3])",
      "np.array((1, 2, 3))",
      "Both A and B",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Both lists and tuples can be passed to `np.array()` to create a 1D array."
  },
  {
    id: 14,
    question: "Which function creates an array filled with a specified constant value?",
    options: ["np.full()", "np.constant()", "np.fill()", "np.repeat()"],
    correctAnswer: 0,
    explanation: "`np.full(shape, value)` creates an array of given shape filled with the specified value."
  },
  {
    id: 15,
    question: "What is the default starting value of np.arange(n)?",
    options: ["1", "0", "Undefined", "n"],
    correctAnswer: 1,
    explanation: "`np.arange(n)` by default starts from 0 if no starting value is provided."
  }
];
