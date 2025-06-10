export const questions = [
  {
    "id": 1,
    "question": "What kind of language is Python?",
    "options": [
      "Interpreted and statically typed",
      "Compiled and dynamically typed",
      "Interpreted and dynamically typed",
      "Compiled and statically typed"
    ],
    "correctAnswer": 2,
    "explanation": "Python is an interpreted language, which means that the code is executed line by line, and it is dynamically typed, meaning variable types are determined at runtime."
  },
  {
    "id": 2,
    "question": "Which of the following is NOT true about Python?",
    "options": [
      "Python is case-sensitive",
      "Python uses indentation for blocks",
      "Python does not support object-oriented programming",
      "Python is a high-level language"
    ],
    "correctAnswer": 2,
    "explanation": "Python supports object-oriented programming, so the statement that Python does not support OOP is incorrect."
  },
  {
    "id": 3,
    "question": "What is the main use of the PEP8 document in Python?",
    "options": [
      "To define Python's error handling",
      "To optimize memory usage",
      "To provide style guidelines for writing Python code",
      "To describe installation procedures for Python"
    ],
    "correctAnswer": 2,
    "explanation": "PEP8 is the Python Enhancement Proposal that provides guidelines on how to write Python code in a consistent style, improving readability."
  },
  {
    "id": 4,
    "question": "Which of the following statements about Python's memory management is true?",
    "options": [
      "Python requires manual memory allocation",
      "Python does not support garbage collection",
      "Python uses reference counting and garbage collection",
      "Python stores all variables in stack memory only"
    ],
    "correctAnswer": 2,
    "explanation": "Python uses both reference counting and garbage collection to manage memory automatically, freeing unused objects."
  },
  {
    "id": 5,
    "question": "What will the following command do? pip install numpy",
    "options": [
      "It will install pip in your system",
      "It will install the Python interpreter",
      "It will install the numpy package using pip",
      "It will update Python"
    ],
    "correctAnswer": 2,
    "explanation": "The command `pip install numpy` installs the numpy package, which is used for numerical computations in Python."
  },
  {
    "id": 6,
    "question": "Which of the following is not a feature of Python?",
    "options": [
      "Portable",
      "Interpreted",
      "Low-level language",
      "Dynamically typed"
    ],
    "correctAnswer": 2,
    "explanation": "Python is a high-level language, not a low-level language. It is portable, interpreted, and dynamically typed."
  },
  {
    "id": 7,
    "question": "Which of the following is true about Python's compilation process?",
    "options": [
      "Python code is compiled to machine code before execution",
      "Python code is directly interpreted without any compilation",
      "Python is first compiled to bytecode, then interpreted",
      "Python compiles code at the time of importing modules only"
    ],
    "correctAnswer": 2,
    "explanation": "Python code is first compiled to bytecode, which is a lower-level representation, and then interpreted by the Python interpreter."
  },
  {
    "id": 8,
    "question": "Which of the following is NOT a valid Python implementation?",
    "options": [
      "CPython",
      "Jython",
      "PyPy",
      "RubyPython"
    ],
    "correctAnswer": 3,
    "explanation": "RubyPython is not a valid implementation of Python. CPython, Jython, and PyPy are all valid implementations."
  },
  {
    "id": 9,
    "question": "What does PEP stand for?",
    "options": [
      "Python Essential Package",
      "Python Enhancement Proposal",
      "Python Execution Plan",
      "Python Encoding Protocol"
    ],
    "correctAnswer": 1,
    "explanation": "PEP stands for Python Enhancement Proposal, which is a design document providing information or proposing changes to Python."
  },
  {
    "id": 10,
    "question": "Why does Python use indentation?",
    "options": [
      "To save space",
      "To reduce compilation time",
      "To improve performance",
      "To define code blocks clearly"
    ],
    "correctAnswer": 3,
    "explanation": "Python uses indentation to define code blocks. This makes the structure of the code visually clear and eliminates the need for braces."
  },
  {
    "id": 11,
    "question": "Which of the following Python files is automatically created after importing a module?",
    "options": [
      ".py",
      ".pyc",
      ".pyo",
      ".pyd"
    ],
    "correctAnswer": 1,
    "explanation": ".pyc files are automatically created to store compiled bytecode, allowing for faster subsequent imports of modules."
  },
  {
    "id": 12,
    "question": "Which of the following tools helps in managing multiple Python environments?",
    "options": [
      "pip",
      "pyenv",
      "interpreter",
      "PEP8"
    ],
    "correctAnswer": 1,
    "explanation": "Pyenv helps in managing multiple versions of Python and their environments, making it easier to switch between them."
  },
  {
    "id": 13,
    "question": "Which of the following will give you the current version of Python in your terminal?",
    "options": [
      "python --install",
      "pip --version",
      "python --version",
      "python.version()"
    ],
    "correctAnswer": 2,
    "explanation": "The command `python --version` will display the version of Python installed on your system."
  },
  {
    "id": 14,
    "question": "What does REPL stand for in Python?",
    "options": [
      "Read-Execute-Prompt-Log",
      "Run-Edit-Print-Load",
      "Read-Evaluate-Print-Loop",
      "Run-Encode-Print-Log"
    ],
    "correctAnswer": 2,
    "explanation": "REPL stands for Read-Evaluate-Print-Loop, a simple interactive environment for Python that reads user input, evaluates it, prints the result, and loops back."
  },
  {
    "id": 15,
    "question": "Which of the following is not true about PIP?",
    "options": [
      "PIP can install external packages",
      "PIP is the official package manager for Python",
      "PIP is used to install Python itself",
      "PIP can be used to uninstall packages"
    ],
    "correctAnswer": 2,
    "explanation": "PIP is the package manager for Python and is used to install and manage packages, but it is not used to install Python itself."
  },
  {
    "id": 16,
    "question": "What is the default encoding for Python source files?",
    "options": [
      "ASCII",
      "UTF-8",
      "ISO-8859-1",
      "Unicode"
    ],
    "correctAnswer": 1,
    "explanation": "The default encoding for Python source files is UTF-8, which supports a wide range of characters from different languages."
  },
  {
    "id": 17,
    "question": "Which of the following is a valid statement about Python's typing system?",
    "options": [
      "Python supports only strong static typing",
      "Python uses weak typing",
      "Python uses dynamic and strong typing",
      "Python uses compile-time type checking"
    ],
    "correctAnswer": 2,
    "explanation": "Python uses dynamic typing, meaning the type of a variable is determined at runtime, and it also supports strong typing to prevent unintended type conversions."
  },
  {
    "id": 18,
    "question": "Which of the following correctly describes Python's philosophy?",
    "options": [
      "\"There should be many ways to do one thing\"",
      "\"Performance over readability\"",
      "\"There should be one—and preferably only one—obvious way to do it\"",
      "\"Errors should never be raised\""
    ],
    "correctAnswer": 2,
    "explanation": "Python's philosophy emphasizes readability and simplicity, with a focus on having one obvious way to do something."
  },
  {
    "id": 19,
    "question": "What is the output of the following command? python import this",
    "options": [
      "Python copyright info",
      "Current Python version",
      "The Zen of Python",
      "List of installed modules"
    ],
    "correctAnswer": 2,
    "explanation": "The command `python import this` outputs 'The Zen of Python', a collection of guiding principles for writing Pythonic code."
  },
  {
    "id": 20,
    "question": "What is the purpose of the __pycache__ directory?",
    "options": [
      "It stores user-created logs",
      "It stores compiled bytecode files",
      "It holds all the pip packages",
      "It stores backup scripts"
    ],
    "correctAnswer": 1,
    "explanation": "__pycache__ stores compiled bytecode files (e.g., .pyc files) that are used to speed up the execution of Python programs by avoiding recompilation."
  }
];
