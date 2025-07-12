export const questions = [
  {
    id: 1,
    question: "Which function saves a NumPy array to a binary file?",
    options: ["np.save()", "np.savetxt()", "np.load()", "np.read()"],
    correctAnswer: 0,
    explanation: "`np.save()` saves a NumPy array to a binary `.npy` file."
  },
  {
    id: 2,
    question: "What is the default file extension used by np.save()?",
    options: [".txt", ".npy", ".csv", ".bin"],
    correctAnswer: 1,
    explanation: "`np.save()` uses the `.npy` extension by default for binary storage."
  },
  {
    id: 3,
    question: "Which function loads arrays saved with np.save()?",
    options: ["np.open()", "np.read()", "np.load()", "np.import()"],
    correctAnswer: 2,
    explanation: "`np.load()` is used to load `.npy` files created by `np.save()`."
  },
  {
    id: 4,
    question: "What does np.savetxt('file.txt', arr) do?",
    options: [
      "Saves array in binary format",
      "Loads text file",
      "Saves array in text format",
      "Compresses file"
    ],
    correctAnswer: 2,
    explanation: "`np.savetxt()` writes a NumPy array to a text file using a specified format."
  },
  {
    id: 5,
    question: "What data format does np.loadtxt() expect?",
    options: ["Binary", "Pickled", "Text", "JSON"],
    correctAnswer: 2,
    explanation: "`np.loadtxt()` reads arrays from text files with numeric data."
  },
  {
    id: 6,
    question: "Which file extension is commonly used with np.savetxt()?",
    options: [".npy", ".txt", ".json", ".pkl"],
    correctAnswer: 1,
    explanation: "The `.txt` extension is commonly used for text files created with `np.savetxt()`."
  },
  {
    id: 7,
    question: "What does np.load('file.npy') return?",
    options: ["A string", "A NumPy array", "A list", "A text document"],
    correctAnswer: 1,
    explanation: "`np.load()` loads `.npy` files and returns the stored NumPy array."
  },
  {
    id: 8,
    question: "Which of the following saves an array in text format with custom delimiter?",
    options: [
      "np.savetxt('file.txt', arr, delimiter=',')",
      "np.save('file.txt', arr)",
      "np.write('file.txt', arr)",
      "np.dump('file.txt', arr)"
    ],
    correctAnswer: 0,
    explanation: "`np.savetxt()` allows specifying a delimiter to control formatting."
  },
  {
    id: 9,
    question: "What must you ensure when loading a text file with np.loadtxt()?",
    options: [
      "File must be binary",
      "Data must be numeric and formatted",
      "File must be compressed",
      "File must have .npy extension"
    ],
    correctAnswer: 1,
    explanation: "`np.loadtxt()` expects a properly formatted numeric text file."
  },
  {
    id: 10,
    question: "What does np.save() write to disk?",
    options: [
      "Compressed file",
      "Binary file of array",
      "Raw text file",
      "Executable"
    ],
    correctAnswer: 1,
    explanation: "`np.save()` writes the binary representation of the NumPy array."
  },
  {
    id: 11,
    question: "Which function loads a text file into a NumPy array?",
    options: ["np.open()", "np.loadtxt()", "np.read()", "np.import()"],
    correctAnswer: 1,
    explanation: "`np.loadtxt()` reads a text file and returns the data as a NumPy array."
  },
  {
    id: 12,
    question: "What happens if the text file contains non-numeric data when using np.loadtxt()?",
    options: [
      "Parses normally",
      "Raises an error",
      "Ignores non-numeric values",
      "Converts to zero"
    ],
    correctAnswer: 1,
    explanation: "`np.loadtxt()` will raise an error if it encounters non-numeric data."
  },
  {
    id: 13,
    question: "What is a key difference between np.save and np.savetxt?",
    options: [
      "save is for strings",
      "save stores binary, savetxt stores text",
      "savetxt stores binary",
      "No difference"
    ],
    correctAnswer: 1,
    explanation: "`np.save()` stores binary `.npy`, `np.savetxt()` stores human-readable text."
  },
  {
    id: 14,
    question: "Which function is suitable for high-performance saving/loading?",
    options: ["np.savetxt()", "np.read()", "np.save()", "np.write()"],
    correctAnswer: 2,
    explanation: "`np.save()` is faster and more efficient for large numerical data."
  },
  {
    id: 15,
    question: "What is required for np.savetxt() to write a 2D array properly?",
    options: [
      "List format",
      "Uniform shape and numeric values",
      "File must be .npy",
      "No headers allowed"
    ],
    correctAnswer: 1,
    explanation: "The array must be 2D with consistent shape and numeric data to use `np.savetxt()`."
  }
];
