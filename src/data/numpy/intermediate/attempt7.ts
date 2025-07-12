export const questions = [
  {
    id: 1,
    question: "What does np.random.rand(3, 2) generate?",
    options: [
      "A 3x2 array of integers",
      "A 3x2 array of random floats in [0, 1)",
      "A 3x2 array of normal distribution",
      "A 3x2 array of ones"
    ],
    correctAnswer: 1,
    explanation: "`np.random.rand(3, 2)` generates a 3x2 array of random float values in the range [0, 1)."
  },
  {
    id: 2,
    question: "What is the purpose of np.random.seed(42)?",
    options: [
      "Generates random integers",
      "Sets the seed for reproducibility",
      "Shuffles the array",
      "Selects random elements"
    ],
    correctAnswer: 1,
    explanation: "`np.random.seed(42)` sets the random seed, ensuring reproducible results across runs."
  },
  {
    id: 3,
    question: "What does np.random.randint(1, 10, size=5) return?",
    options: [
      "5 integers from 1 to 10 inclusive",
      "5 integers from 1 to 9",
      "10 integers from 1 to 5",
      "5 floats between 1 and 10"
    ],
    correctAnswer: 1,
    explanation: "`np.random.randint(1, 10, size=5)` returns 5 integers from 1 up to (but not including) 10."
  },
  {
    id: 4,
    question: "Which function generates samples from the standard normal distribution?",
    options: [
      "np.random.rand()",
      "np.random.randint()",
      "np.random.randn()",
      "np.random.uniform()"
    ],
    correctAnswer: 2,
    explanation: "`np.random.randn()` generates random samples from a standard normal distribution."
  },
  {
    id: 5,
    question: "What does np.random.choice([1, 2, 3], size=2) do?",
    options: [
      "Chooses 2 elements randomly from the list",
      "Creates a 2D array",
      "Returns 2 random integers",
      "Shuffles the array"
    ],
    correctAnswer: 0,
    explanation: "`np.random.choice()` randomly selects specified number of elements from a given list or array."
  },
  {
    id: 6,
    question: "What happens when you set the same seed twice before generating numbers?",
    options: ["Error", "Different results", "Same results", "Numbers are shuffled"],
    correctAnswer: 2,
    explanation: "Setting the same seed will generate the same sequence of random numbers."
  },
  {
    id: 7,
    question: "What is the purpose of np.random.shuffle(arr)?",
    options: [
      "Randomly sorts array",
      "Shuffles the array in place",
      "Returns a new shuffled array",
      "Deletes elements randomly"
    ],
    correctAnswer: 1,
    explanation: "`np.random.shuffle()` shuffles the elements of the array in place."
  },
  {
    id: 8,
    question: "Which function is best to generate random float values in [0, 1)?",
    options: [
      "np.random.rand()",
      "np.random.randn()",
      "np.random.randint()",
      "np.random.choice()"
    ],
    correctAnswer: 0,
    explanation: "`np.random.rand()` generates uniform float values in the range [0, 1)."
  },
  {
    id: 9,
    question: "How do you ensure reproducibility in random operations?",
    options: [
      "Use np.random.rand()",
      "Use np.random.seed()",
      "Use np.random.shuffle()",
      "Use np.random.randint()"
    ],
    correctAnswer: 1,
    explanation: "To make random results reproducible, `np.random.seed()` should be set."
  },
  {
    id: 10,
    question: "What distribution does np.random.randn() follow?",
    options: [
      "Uniform distribution",
      "Binomial distribution",
      "Normal distribution",
      "Poisson distribution"
    ],
    correctAnswer: 2,
    explanation: "`np.random.randn()` generates samples from a standard normal distribution (mean=0, std=1)."
  },
  {
    id: 11,
    question: "Which method randomly picks one item from an array?",
    options: [
      "np.random.seed()",
      "np.random.choice()",
      "np.random.shuffle()",
      "np.random.randint()"
    ],
    correctAnswer: 1,
    explanation: "`np.random.choice()` can be used to randomly select one item if no `size` is given."
  },
  {
    id: 12,
    question: "What is the default behavior of np.random.choice with no size or replace?",
    options: [
      "Chooses one item randomly",
      "Returns the full array",
      "Throws an error",
      "Creates an empty array"
    ],
    correctAnswer: 0,
    explanation: "`np.random.choice()` without `size` selects one random item."
  },
  {
    id: 13,
    question: "What does np.random.randint(0, 5, size=(2,2)) produce?",
    options: [
      "A 1D array of 2 integers",
      "A 2x2 array of integers [0,4]",
      "A 5x5 array",
      "A 2x2 array of floats"
    ],
    correctAnswer: 1,
    explanation: "This returns a 2x2 array of integers from 0 to 4."
  },
  {
    id: 14,
    question: "What is the range of values from np.random.rand()?",
    options: ["[0, 1)", "(0, 1]", "[0, 10)", "(1, ∞)"],
    correctAnswer: 0,
    explanation: "`np.random.rand()` generates floats in the half-open interval [0.0, 1.0)."
  },
  {
    id: 15,
    question: "Which of the following modifies the original array?",
    options: [
      "np.random.choice()",
      "np.random.randint()",
      "np.random.shuffle()",
      "np.random.randn()"
    ],
    correctAnswer: 2,
    explanation: "`np.random.shuffle()` shuffles the array in place, modifying the original array."
  }
];
