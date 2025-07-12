export const questions = [
  {
    id: 1,
    question: "Which function calculates the square root element-wise in NumPy?",
    options: ["np.exp()", "np.sqrt()", "np.log()", "np.sin()"],
    correctAnswer: 1,
    explanation: "`np.sqrt()` computes the square root of each element in the array."
  },
  {
    id: 2,
    question: "What does np.exp(arr) compute?",
    options: ["Natural logarithm", "Base-10 logarithm", "Exponential (e^arr)", "Square root"],
    correctAnswer: 2,
    explanation: "`np.exp(arr)` computes e raised to the power of each element in `arr`."
  },
  {
    id: 3,
    question: "Which function computes the natural logarithm of array elements?",
    options: ["np.exp()", "np.log()", "np.log10()", "np.sqrt()"],
    correctAnswer: 1,
    explanation: "`np.log()` computes the natural logarithm (base e) of each element."
  },
  {
    id: 4,
    question: "Which of the following is a trigonometric function in NumPy?",
    options: ["np.sin()", "np.mean()", "np.sqrt()", "np.exp()"],
    correctAnswer: 0,
    explanation: "`np.sin()` is used to compute the sine of each element in the array."
  },
  {
    id: 5,
    question: "What does np.median(arr) return?",
    options: ["Sum of arr", "Mean of arr", "Median value of arr", "Maximum of arr"],
    correctAnswer: 2,
    explanation: "`np.median()` returns the median (middle) value of the array."
  },
  {
    id: 6,
    question: "Which function calculates variance of array elements?",
    options: ["np.var()", "np.mean()", "np.std()", "np.sum()"],
    correctAnswer: 0,
    explanation: "`np.var()` computes the variance of the array."
  },
  {
    id: 7,
    question: "Which function returns correlation coefficients matrix for input arrays?",
    options: ["np.corrcoef()", "np.var()", "np.sum()", "np.min()"],
    correctAnswer: 0,
    explanation: "`np.corrcoef()` returns the Pearson correlation coefficients between arrays."
  },
  {
    id: 8,
    question: "What does np.std(arr) calculate?",
    options: ["Median", "Standard deviation", "Mean", "Mode"],
    correctAnswer: 1,
    explanation: "`np.std()` calculates the standard deviation of the array elements."
  },
  {
    id: 9,
    question: "Which function computes the cosine of elements?",
    options: ["np.sin()", "np.tan()", "np.cos()", "np.exp()"],
    correctAnswer: 2,
    explanation: "`np.cos()` computes the cosine of each element in radians."
  },
  {
    id: 10,
    question: "Which of these calculates mean of array elements?",
    options: ["np.var()", "np.mean()", "np.median()", "np.std()"],
    correctAnswer: 1,
    explanation: "`np.mean()` returns the average of all the values in the array."
  },
  {
    id: 11,
    question: "What is np.tan() used for?",
    options: ["Sine calculation", "Cosine calculation", "Tangent calculation", "Exponential calculation"],
    correctAnswer: 2,
    explanation: "`np.tan()` is used to calculate the tangent of each element in radians."
  },
  {
    id: 12,
    question: "Which function calculates base-10 logarithm in NumPy?",
    options: ["np.log()", "np.log2()", "np.log10()", "np.exp()"],
    correctAnswer: 2,
    explanation: "`np.log10()` calculates the logarithm base 10 of each element."
  },
  {
    id: 13,
    question: "Which function finds the minimum element in an array?",
    options: ["np.min()", "np.max()", "np.mean()", "np.var()"],
    correctAnswer: 0,
    explanation: "`np.min()` returns the smallest value in the array."
  },
  {
    id: 14,
    question: "Which function finds the maximum element in an array?",
    options: ["np.min()", "np.max()", "np.mean()", "np.var()"],
    correctAnswer: 1,
    explanation: "`np.max()` returns the largest value in the array."
  },
  {
    id: 15,
    question: "What does np.ptp(arr) return?",
    options: ["Product of arr", "Range of values (max-min)", "Sum of arr", "Standard deviation"],
    correctAnswer: 1,
    explanation: "`np.ptp()` returns the range of values in the array (max - min)."
  }
];
