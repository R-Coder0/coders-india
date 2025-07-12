export const questions = [
  {
    id: 1,
    question: "What is the result of np.array([1,2,3]) + np.array([4,5,6])?",
    options: ["[5,7,9]", "[4,5,6]", "Error", "[1,2,3]"],
    correctAnswer: 0,
    explanation: "NumPy performs element-wise addition for arrays of the same shape, resulting in [5, 7, 9]."
  },
  {
    id: 2,
    question: "Which of the following performs element-wise subtraction on NumPy arrays?",
    options: ["np.add()", "np.subtract()", "np.multiply()", "np.divide()"],
    correctAnswer: 1,
    explanation: "The `np.subtract()` function performs element-wise subtraction."
  },
  {
    id: 3,
    question: "Which function calculates the sum of all elements in an array?",
    options: ["np.mean()", "np.sum()", "np.std()", "np.var()"],
    correctAnswer: 1,
    explanation: "`np.sum()` returns the sum of all array elements."
  },
  {
    id: 4,
    question: "How does broadcasting work when adding arr1.shape=(3,1) and arr2.shape=(1,4)?",
    options: [
      "Raises error",
      "Resulting shape is (3,4)",
      "Resulting shape is (4,3)",
      "No operation"
    ],
    correctAnswer: 1,
    explanation: "Broadcasting expands arr1 to (3,4) and arr2 to (3,4), so the result has shape (3,4)."
  },
  {
    id: 5,
    question: "Which function computes the average of array elements?",
    options: ["np.sum()", "np.average()", "np.median()", "np.var()"],
    correctAnswer: 1,
    explanation: "`np.average()` returns the mean (average) value of array elements."
  },
  {
    id: 6,
    question: "What does np.std(arr) calculate?",
    options: ["Mean", "Variance", "Standard deviation", "Median"],
    correctAnswer: 2,
    explanation: "`np.std()` calculates the standard deviation of the array elements."
  },
  {
    id: 7,
    question: "Which comparison returns a boolean array for arr > 5?",
    options: ["arr >> 5", "arr > 5", "np.equal(arr,5)", "arr >=5"],
    correctAnswer: 1,
    explanation: "`arr > 5` returns a boolean array where each value indicates if the condition is met."
  },
  {
    id: 8,
    question: "How do you find the maximum value in an array arr?",
    options: ["np.sum(arr)", "np.mean(arr)", "np.max(arr)", "np.min(arr)"],
    correctAnswer: 2,
    explanation: "`np.max()` returns the maximum value in the array."
  },
  {
    id: 9,
    question: "What is the result of np.array([1,2,3])*2?",
    options: ["[1,2,3,1,2,3]", "[2,4,6]", "Error", "[1,2,3]"],
    correctAnswer: 1,
    explanation: "This performs element-wise multiplication by 2 → [2, 4, 6]."
  },
  {
    id: 10,
    question: "Which function calculates the median of an array?",
    options: ["np.mean()", "np.std()", "np.median()", "np.sum()"],
    correctAnswer: 2,
    explanation: "`np.median()` returns the median (middle) value of the array."
  },
  {
    id: 11,
    question: "What does arr[arr > 3] return?",
    options: ["Elements equal to 3", "Elements less than 3", "Elements greater than 3", "None"],
    correctAnswer: 2,
    explanation: "This is Boolean indexing, selecting elements greater than 3."
  },
  {
    id: 12,
    question: "Which aggregation gives the average of elements?",
    options: ["np.sum()", "np.prod()", "np.mean()", "np.std()"],
    correctAnswer: 2,
    explanation: "`np.mean()` calculates the average of array elements."
  },
  {
    id: 13,
    question: "How to calculate element-wise multiplication of two arrays?",
    options: ["arr1 * arr2", "arr1 + arr2", "arr1 - arr2", "arr1 / arr2"],
    correctAnswer: 0,
    explanation: "`arr1 * arr2` performs element-wise multiplication."
  },
  {
    id: 14,
    question: "Which of the following is true about broadcasting?",
    options: [
      "Arrays must have the same shape",
      "Arrays are automatically reshaped to compatible shapes",
      "Only works with 1D arrays",
      "Broadcasting is not supported in NumPy"
    ],
    correctAnswer: 1,
    explanation: "Broadcasting allows NumPy to perform operations on arrays of different shapes by expanding dimensions."
  },
  {
    id: 15,
    question: "What does np.all(arr1 == arr2) do?",
    options: [
      "Returns element-wise comparison",
      "Returns True if all elements are equal",
      "Returns False always",
      "Raises error"
    ],
    correctAnswer: 1,
    explanation: "`np.all(arr1 == arr2)` returns True only if every element in both arrays is equal."
  }
];
