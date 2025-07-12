export const questions = [
  {
    id: 1,
    question: "What does np.dot(A, B) compute?",
    options: [
      "Element-wise multiplication",
      "Cross product",
      "Matrix product",
      "Inverse of A"
    ],
    correctAnswer: 2,
    explanation: "`np.dot()` computes the dot product, which is a matrix product for 2D arrays."
  },
  {
    id: 2,
    question: "Which function is used for matrix multiplication in NumPy?",
    options: ["np.dot()", "np.multiply()", "np.matmul()", "np.cross()"],
    correctAnswer: 2,
    explanation: "`np.matmul()` is used specifically for matrix multiplication."
  },
  {
    id: 3,
    question: "What does np.matmul(A, B) return?",
    options: [
      "Element-wise multiplication",
      "Matrix product",
      "Hadamard product",
      "Transpose of matrix"
    ],
    correctAnswer: 1,
    explanation: "`np.matmul(A, B)` returns the matrix product of A and B."
  },
  {
    id: 4,
    question: "What does np.linalg.inv(A) compute?",
    options: ["Determinant", "Transpose", "Inverse of A", "Eigenvalues"],
    correctAnswer: 2,
    explanation: "`np.linalg.inv()` returns the inverse of a square matrix."
  },
  {
    id: 5,
    question: "Which function returns the transpose of a matrix?",
    options: ["np.transpose()", "np.inverse()", "np.dot()", "np.det()"],
    correctAnswer: 0,
    explanation: "`np.transpose()` or `A.T` provides the transpose of matrix A."
  },
  {
    id: 6,
    question: "What is the result of np.transpose(A)?",
    options: [
      "Inverse of A",
      "Transpose of A",
      "Determinant of A",
      "Identity matrix"
    ],
    correctAnswer: 1,
    explanation: "`np.transpose(A)` swaps rows and columns, returning the transpose."
  },
  {
    id: 7,
    question: "What does np.linalg.det(A) return?",
    options: ["Dot product", "Inverse matrix", "Determinant", "Transpose"],
    correctAnswer: 2,
    explanation: "`np.linalg.det()` computes the determinant of a matrix."
  },
  {
    id: 8,
    question: "What is required for a matrix to be invertible?",
    options: [
      "Square and determinant ≠ 0",
      "All elements must be positive",
      "Diagonal matrix",
      "Random values"
    ],
    correctAnswer: 0,
    explanation: "A matrix must be square and have a non-zero determinant to be invertible."
  },
  {
    id: 9,
    question: "Which function returns eigenvalues and eigenvectors?",
    options: [
      "np.linalg.det()",
      "np.linalg.inv()",
      "np.linalg.eig()",
      "np.matmul()"
    ],
    correctAnswer: 2,
    explanation: "`np.linalg.eig()` returns a tuple containing eigenvalues and eigenvectors."
  },
  {
    id: 10,
    question: "Which function computes the matrix inverse?",
    options: [
      "np.linalg.inv()",
      "np.transpose()",
      "np.matmul()",
      "np.eig()"
    ],
    correctAnswer: 0,
    explanation: "`np.linalg.inv()` is used to compute the inverse of a square matrix."
  },
  {
    id: 11,
    question: "What does np.dot(a, b) return for 1D arrays?",
    options: [
      "Element-wise product",
      "Inner product",
      "Outer product",
      "Cross product"
    ],
    correctAnswer: 1,
    explanation: "For 1D arrays, `np.dot()` returns the inner (scalar) product."
  },
  {
    id: 12,
    question: "What is the shape of np.matmul(A, B) if A is (2,3) and B is (3,4)?",
    options: ["(3,3)", "(2,4)", "(2,3)", "(3,4)"],
    correctAnswer: 1,
    explanation: "Matrix multiplication of (2,3) × (3,4) results in shape (2,4)."
  },
  {
    id: 13,
    question: "What does np.linalg.eig(A) return?",
    options: [
      "Only eigenvalues",
      "Only eigenvectors",
      "A tuple of eigenvalues and eigenvectors",
      "Determinant"
    ],
    correctAnswer: 2,
    explanation: "`np.linalg.eig()` returns both eigenvalues and eigenvectors as a tuple."
  },
  {
    id: 14,
    question: "What is the result of np.dot(A, A.T)?",
    options: [
      "Diagonal matrix",
      "Inverse",
      "Symmetric matrix",
      "Identity matrix"
    ],
    correctAnswer: 2,
    explanation: "The product of a matrix and its transpose (`A @ A.T`) results in a symmetric matrix."
  },
  {
    id: 15,
    question: "Which function computes the determinant of a matrix?",
    options: [
      "np.linalg.inv()",
      "np.dot()",
      "np.linalg.det()",
      "np.matmul()"
    ],
    correctAnswer: 2,
    explanation: "`np.linalg.det()` computes the determinant of a square matrix."
  }
];
