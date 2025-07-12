export const questions = [
  {
    id: 1,
    question: "Which function changes the shape of an array without changing its data?",
    options: ["np.flatten()", "np.reshape()", "np.split()", "np.hstack()"],
    correctAnswer: 1,
    explanation: "`np.reshape()` changes the shape of an array while keeping the data intact."
  },
  {
    id: 2,
    question: "What does arr.flatten() do?",
    options: ["Transposes arr", "Converts arr to 1D array", "Reshapes arr to (1,1)", "Reverses arr"],
    correctAnswer: 1,
    explanation: "`arr.flatten()` returns a copy of the array collapsed into one dimension."
  },
  {
    id: 3,
    question: "Which attribute gives a transposed view of a NumPy array?",
    options: ["arr.shape", "arr.size", "arr.T", "arr.dtype"],
    correctAnswer: 2,
    explanation: "`arr.T` gives the transposed view of the array."
  },
  {
    id: 4,
    question: "Which function combines two arrays vertically?",
    options: ["np.hstack()", "np.vstack()", "np.split()", "np.transpose()"],
    correctAnswer: 1,
    explanation: "`np.vstack()` stacks arrays in sequence vertically (row-wise)."
  },
  {
    id: 5,
    question: "What does np.hstack((arr1, arr2)) do?",
    options: ["Stacks arrays horizontally", "Stacks arrays vertically", "Reshapes arrays", "Splits arrays"],
    correctAnswer: 0,
    explanation: "`np.hstack()` stacks arrays in sequence horizontally (column-wise)."
  },
  {
    id: 6,
    question: "Which function splits an array into multiple sub-arrays?",
    options: ["np.vstack()", "np.hstack()", "np.split()", "np.flatten()"],
    correctAnswer: 2,
    explanation: "`np.split()` splits an array into multiple sub-arrays."
  },
  {
    id: 7,
    question: "Which function merges arrays along a new axis?",
    options: ["np.stack()", "np.split()", "np.reshape()", "np.flatten()"],
    correctAnswer: 0,
    explanation: "`np.stack()` joins a sequence of arrays along a new axis."
  },
  {
    id: 8,
    question: "What does np.concatenate((arr1, arr2), axis=0) do?",
    options: [
      "Stacks arr1 and arr2 along columns",
      "Concatenates arr1 and arr2 along rows",
      "Flattens arr1 and arr2",
      "Reshapes arr1"
    ],
    correctAnswer: 1,
    explanation: "`np.concatenate()` joins arrays along an existing axis (rows in this case)."
  },
  {
    id: 9,
    question: "What is the result of arr.T on a 2D array?",
    options: ["Flattens arr", "Transposes arr", "Reshapes arr", "Deletes arr"],
    correctAnswer: 1,
    explanation: "`arr.T` returns the transpose of the 2D array."
  },
  {
    id: 10,
    question: "How do you split arr into 3 equal parts?",
    options: ["np.divide(arr, 3)", "np.split(arr, 3)", "arr.reshape(3)", "np.hstack(arr,3)"],
    correctAnswer: 1,
    explanation: "`np.split(arr, 3)` splits an array into 3 equal parts (if divisible)."
  },
  {
    id: 11,
    question: "Which function stacks arrays in sequence vertically?",
    options: ["np.vstack()", "np.hstack()", "np.concatenate()", "np.reshape()"],
    correctAnswer: 0,
    explanation: "`np.vstack()` stacks arrays one on top of the other (row-wise)."
  },
  {
    id: 12,
    question: "Which function reshapes a 1D array into 2D?",
    options: ["np.reshape()", "np.flatten()", "np.split()", "np.transpose()"],
    correctAnswer: 0,
    explanation: "`np.reshape()` is used to convert 1D arrays into 2D shapes."
  },
  {
    id: 13,
    question: "What is the purpose of arr.reshape(-1)?",
    options: ["Creates reversed array", "Flattens arr", "Expands dimensions", "Deletes arr"],
    correctAnswer: 1,
    explanation: "`arr.reshape(-1)` flattens the array into one dimension."
  },
  {
    id: 14,
    question: "Which function joins arrays along an existing axis?",
    options: ["np.concatenate()", "np.split()", "np.flatten()", "np.expand_dims()"],
    correctAnswer: 0,
    explanation: "`np.concatenate()` is used to join arrays along an existing axis."
  },
  {
    id: 15,
    question: "Which function expands the shape of an array by inserting a new axis?",
    options: ["np.expand_dims()", "np.flatten()", "np.reshape()", "np.split()"],
    correctAnswer: 0,
    explanation: "`np.expand_dims()` adds a new axis to the array at the specified position."
  }
];
