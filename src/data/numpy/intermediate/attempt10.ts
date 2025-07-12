export const questions = [
  {
    id: 1,
    question: "What does boolean masking do in NumPy?",
    options: [
      "Sorts the array",
      "Filters elements using a condition",
      "Converts data type",
      "Saves an array to file"
    ],
    correctAnswer: 1,
    explanation: "Boolean masking filters elements based on a condition, returning only those that satisfy it."
  },
  {
    id: 2,
    question: "Which of the following applies a mask to extract only even numbers from array `arr`?",
    options: [
      "arr[arr % 2 == 0]",
      "arr[::2]",
      "arr[2]",
      "arr[arr > 2]"
    ],
    correctAnswer: 0,
    explanation: "`arr[arr % 2 == 0]` returns all even numbers in the array."
  },
  {
    id: 3,
    question: "Which function can be used to conditionally select values in a NumPy array?",
    options: [
      "np.choose()",
      "np.where()",
      "np.searchsorted()",
      "np.fill()"
    ],
    correctAnswer: 1,
    explanation: "`np.where()` allows conditional selection or indexing based on a condition."
  },
  {
    id: 4,
    question: "What does broadcasting allow in NumPy?",
    options: [
      "Iterating over arrays",
      "Automatic expansion of arrays for operations",
      "Reading files",
      "Copying arrays"
    ],
    correctAnswer: 1,
    explanation: "Broadcasting allows arrays of different shapes to be used together in arithmetic operations."
  },
  {
    id: 5,
    question: "Which of the following follows broadcasting rules for adding a (3,1) array to a (3,4) array?",
    options: ["Yes", "No", "Only for integers", "Only for 1D arrays"],
    correctAnswer: 0,
    explanation: "Broadcasting works when one of the dimensions is 1, so (3,1) and (3,4) are compatible."
  },
  {
    id: 6,
    question: "What is the shape result of broadcasting a (3,1) and (1,4) array?",
    options: ["(3,4)", "(1,1)", "(4,3)", "(3,)"],
    correctAnswer: 0,
    explanation: "Broadcasting (3,1) and (1,4) results in shape (3,4)."
  },
  {
    id: 7,
    question: "Which of the following correctly uses np.where()?",
    options: [
      "np.where(condition, x, y)",
      "np.where(x, y, condition)",
      "np.where(condition)",
      "np.where(x > 2, condition)"
    ],
    correctAnswer: 0,
    explanation: "`np.where(condition, x, y)` selects elements from `x` or `y` based on the condition."
  },
  {
    id: 8,
    question: "What is returned by np.where(condition)?",
    options: [
      "Indices of elements satisfying condition",
      "Modified array",
      "Shape of array",
      "Condition value"
    ],
    correctAnswer: 0,
    explanation: "When called with a single condition, `np.where()` returns the indices where the condition is True."
  },
  {
    id: 9,
    question: "Which statement about masking is TRUE?",
    options: [
      "Masking can only be used with 1D arrays",
      "Masking results in a copy",
      "Masking changes array shape",
      "Masking does not support conditions"
    ],
    correctAnswer: 1,
    explanation: "Masking returns a new array with values satisfying the condition (a copy, not a view)."
  },
  {
    id: 10,
    question: "What does np.select() allow?",
    options: [
      "Single condition choice",
      "Multiple condition-result pairs",
      "File operations",
      "Data reshaping"
    ],
    correctAnswer: 1,
    explanation: "`np.select()` handles multiple conditions and their corresponding outputs."
  },
  {
    id: 11,
    question: "Which of the following is NOT a valid condition for broadcasting two arrays?",
    options: [
      "Dimensions are equal",
      "One of the dimensions is 1",
      "Shapes are incompatible",
      "Arrays have same number of elements"
    ],
    correctAnswer: 2,
    explanation: "Broadcasting fails if the shapes are incompatible and don't follow the broadcasting rules."
  },
  {
    id: 12,
    question: "What will `np.where(arr > 0, 1, -1)` return?",
    options: [
      "1s and -1s based on condition",
      "All 1s",
      "All -1s",
      "Original array"
    ],
    correctAnswer: 0,
    explanation: "This returns 1 where the condition `arr > 0` is True, else -1."
  },
  {
    id: 13,
    question: "How does NumPy broadcast a scalar to an array?",
    options: [
      "Ignores scalar",
      "Repeats scalar to match array shape",
      "Adds to diagonal only",
      "Truncates array"
    ],
    correctAnswer: 1,
    explanation: "NumPy replicates the scalar value across all elements to match the shape of the array."
  },
  {
    id: 14,
    question: "What happens if broadcasting rules fail?",
    options: [
      "Silent error",
      "Array with zeros",
      "ValueError is raised",
      "Truncated array"
    ],
    correctAnswer: 2,
    explanation: "NumPy throws a `ValueError` if arrays cannot be broadcasted to a common shape."
  },
  {
    id: 15,
    question: "Which is a common use case for np.select()?",
    options: [
      "Load files",
      "Replace multiple conditions with results",
      "Find unique values",
      "Matrix inversion"
    ],
    correctAnswer: 1,
    explanation: "`np.select()` is commonly used when multiple conditions need to map to specific result values."
  }
];
