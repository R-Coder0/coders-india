export const questions = [
  {
    id: 1,
    question: "What is the output of the expression arr[-1] for a 1D array arr = np.array([10, 20, 30, 40])?",
    options: ["10", "30", "40", "Error"],
    correctAnswer: 2,
    explanation: "Negative indexing starts from the end. So arr[-1] gives the last element, which is 40."
  },
  {
    id: 2,
    question: "What does arr[1:3] return for arr = np.array([5, 10, 15, 20])?",
    options: ["[10, 15]", "[5, 10]", "[15, 20]", "[10, 15, 20]"],
    correctAnswer: 0,
    explanation: "arr[1:3] slices from index 1 up to (but not including) index 3 → [10, 15]."
  },
  {
    id: 3,
    question: "Given arr = np.array([[1, 2], [3, 4], [5, 6]]), what is arr[1]?",
    options: ["[1, 2]", "[3, 4]", "[5, 6]", "[2, 4]"],
    correctAnswer: 1,
    explanation: "arr[1] accesses the second row → [3, 4]."
  },
  {
    id: 4,
    question: "What is the result of slicing arr[:, 1] where arr = np.array([[10, 20], [30, 40], [50, 60]])?",
    options: ["[10, 30, 50]", "[20, 40, 60]", "[20, 30]", "Error"],
    correctAnswer: 1,
    explanation: "arr[:, 1] selects all rows and the second column → [20, 40, 60]."
  },
  {
    id: 5,
    question: "In fancy indexing, what is the output of arr[[0, 2]] for arr = np.array([10, 20, 30, 40])?",
    options: ["[10, 30]", "[20, 40]", "[0, 2]", "[30, 10]"],
    correctAnswer: 0,
    explanation: "Fancy indexing selects values at specific indices → arr[[0, 2]] = [10, 30]."
  },
  {
    id: 6,
    question: "What does negative indexing arr[-2] return for arr = np.array([100, 200, 300, 400])?",
    options: ["200", "300", "400", "100"],
    correctAnswer: 1,
    explanation: "arr[-2] gives the second last element → 300."
  },
  {
    id: 7,
    question: "Which expression correctly slices the last two columns of a 2D array arr?",
    options: ["arr[:, -2:]", "arr[-2:, :]", "arr[-2:-1, :]", "arr[:, :2]"],
    correctAnswer: 0,
    explanation: "arr[:, -2:] slices all rows and last two columns."
  },
  {
    id: 8,
    question: "Given arr = np.array([5, 10, 15, 20, 25]), what does arr[arr > 15] return?",
    options: ["[15, 20, 25]", "[20, 25]", "[10, 15]", "[5, 10]"],
    correctAnswer: 1,
    explanation: "Boolean indexing selects elements greater than 15 → [20, 25]."
  },
  {
    id: 9,
    question: "Which of the following is true about Boolean indexing?",
    options: [
      "You can only use it on 1D arrays",
      "It returns indices instead of values",
      "It returns a new array with values where the condition is True",
      "It modifies the original array in place"
    ],
    correctAnswer: 2,
    explanation: "Boolean indexing returns a new array with values that satisfy the condition."
  },
  {
    id: 10,
    question: "What is the result of arr[::2] for arr = np.array([0, 1, 2, 3, 4, 5])?",
    options: ["[1, 3, 5]", "[0, 1, 2]", "[0, 2, 4]", "[2, 4, 6]"],
    correctAnswer: 2,
    explanation: "The slice arr[::2] takes every second element starting from index 0 → [0, 2, 4]."
  },
  {
    id: 11,
    question: "How do you reverse a 1D array arr using slicing?",
    options: ["arr[::-1]", "arr[:1]", "arr.reverse()", "arr[-1:0]"],
    correctAnswer: 0,
    explanation: "The slice arr[::-1] reverses the array."
  },
  {
    id: 12,
    question: "What is the output of arr[1:4:2] for arr = np.array([10, 20, 30, 40, 50])?",
    options: ["[20, 30, 40]", "[20, 40]", "[30, 50]", "[10, 20]"],
    correctAnswer: 1,
    explanation: "arr[1:4:2] selects every 2nd element from index 1 to 3 → [20, 40]."
  },
  {
    id: 13,
    question: "What will arr[[True, False, True, False]] return if arr = np.array([1, 2, 3, 4])?",
    options: ["[2, 4]", "[1, 3]", "[True, False]", "Error"],
    correctAnswer: 1,
    explanation: "Boolean list [True, False, True, False] selects elements at positions 0 and 2 → [1, 3]."
  },
  {
    id: 14,
    question: "Which slicing returns the third row in a 3x3 array arr?",
    options: ["arr[:, 2]", "arr[2, :]", "arr[2]", "Both B and C"],
    correctAnswer: 3,
    explanation: "Both arr[2, :] and arr[2] access the third row."
  },
  {
    id: 15,
    question: "What does arr[-3:] return for arr = np.array([10, 20, 30, 40, 50])?",
    options: ["[10, 20, 30]", "[30, 40, 50]", "[20, 30, 40]", "[50]"],
    correctAnswer: 1,
    explanation: "arr[-3:] slices the last three elements → [30, 40, 50]."
  }
];
