export const questions = [
  {
    id: 1,
    question: "What is a module in Python?",
    options: [
      "A folder containing Python files",
      "A single Python file containing functions, classes, or variables",
      "A built-in function",
      "A command line tool"
    ],
    correctAnswer: 1,
    explanation: "A module in Python is a single file containing Python definitions and statements (functions, classes, or variables)."
  },
  {
    id: 2,
    question: "Why should you use modules in Python?",
    options: [
      "To make code longer",
      "To combine all code into one file",
      "To organize and reuse code efficiently",
      "To increase program size"
    ],
    correctAnswer: 2,
    explanation: "Modules help organize code into logical units, promote code reuse, and make maintenance easier."
  },
  {
    id: 3,
    question: "Which keyword is used to include a module in Python?",
    options: [
      "include",
      "import",
      "use",
      "module"
    ],
    correctAnswer: 1,
    explanation: "The 'import' keyword is used to include and use modules in Python."
  },
  {
    id: 4,
    question: "What is the difference between a script and a module?",
    options: [
      "Script cannot be run; module can",
      "Script is used for import; module is not",
      "Script is intended to be run; module is intended to be imported",
      "There is no difference"
    ],
    correctAnswer: 2,
    explanation: "A script is meant to be executed directly, while a module is designed to be imported and used by other code."
  },
  {
    id: 5,
    question: "What does __name__ == \"__main__\" signify?",
    options: [
      "The file is being imported",
      "The file is part of a package",
      "The file is being run directly",
      "The file contains global variables"
    ],
    correctAnswer: 2,
    explanation: "This condition is true when the Python file is executed directly, not when it's imported as a module."
  },
  {
    id: 6,
    question: "Which method is used to list all attributes and methods of a module?",
    options: [
      "inspect()",
      "dir()",
      "list()",
      "help()"
    ],
    correctAnswer: 1,
    explanation: "The dir() function returns a list of names in the current local scope or a list of attributes of an object."
  },
  {
    id: 7,
    question: "How do you import a specific function from a module?",
    options: [
      "import math.sqrt",
      "from math import sqrt",
      "using math.sqrt",
      "import from math sqrt"
    ],
    correctAnswer: 1,
    explanation: "The 'from module import name' syntax imports specific names from a module directly into the current namespace."
  },
  {
    id: 8,
    question: "What is the purpose of 'as' in import statements?",
    options: [
      "It renames the module for use",
      "It skips importing the module",
      "It runs the module",
      "It loads an alias for Python"
    ],
    correctAnswer: 0,
    explanation: "The 'as' keyword creates an alias for the imported module or name, allowing you to refer to it by a different name."
  },
  {
    id: 9,
    question: "What happens if a module is not found?",
    options: [
      "It is automatically created",
      "Python downloads it",
      "ModuleNotFoundError is raised",
      "Nothing happens"
    ],
    correctAnswer: 2,
    explanation: "When Python cannot find a module you're trying to import, it raises a ModuleNotFoundError."
  },
  {
    id: 10,
    question: "Which file allows Python to recognize a folder as a package?",
    options: [
      "setup.py",
      "main.py",
      "__main__.py",
      "__init__.py"
    ],
    correctAnswer: 3,
    explanation: "The __init__.py file (even if empty) tells Python that the directory should be treated as a package."
  },
  {
    id: 11,
    question: "What is a package in Python?",
    options: [
      "A single file containing classes",
      "A collection of related Python modules in a directory",
      "A zip archive",
      "A list of dependencies"
    ],
    correctAnswer: 1,
    explanation: "A package is a way of organizing related Python modules into a directory hierarchy."
  },
  {
    id: 12,
    question: "How do you import a module from a package?",
    options: [
      "import package",
      "import package.module",
      "include package.module",
      "from package: module"
    ],
    correctAnswer: 1,
    explanation: "You can import a module from a package using dot notation: import package.module."
  },
  {
    id: 13,
    question: "What does the pip command do?",
    options: [
      "Compiles Python code",
      "Installs Python modules and packages",
      "Converts Python to Java",
      "Deletes modules"
    ],
    correctAnswer: 1,
    explanation: "pip is the package installer for Python, used to install and manage software packages."
  },
  {
    id: 14,
    question: "What is the default package manager for Python?",
    options: [
      "apt",
      "pip",
      "brew",
      "conda"
    ],
    correctAnswer: 1,
    explanation: "pip is the standard package manager that comes with Python installations."
  },
  {
    id: 15,
    question: "Which command installs a package using pip?",
    options: [
      "install pip package_name",
      "pip get package_name",
      "pip install package_name",
      "setup install package_name"
    ],
    correctAnswer: 2,
    explanation: "The correct command to install a package is 'pip install package_name'."
  },
  {
    id: 16,
    question: "How can you see all installed packages with pip?",
    options: [
      "pip show",
      "pip packages",
      "pip list",
      "pip status"
    ],
    correctAnswer: 2,
    explanation: "'pip list' shows all installed Python packages in the current environment."
  },
  {
    id: 17,
    question: "Which of the following is a third-party module?",
    options: [
      "math",
      "os",
      "random",
      "requests"
    ],
    correctAnswer: 3,
    explanation: "The requests module is a popular third-party HTTP library, not part of Python's standard library."
  },
  {
    id: 18,
    question: "Which module is used to interact with the operating system in Python?",
    options: [
      "sys",
      "os",
      "io",
      "subprocess"
    ],
    correctAnswer: 1,
    explanation: "The os module provides a way of using operating system dependent functionality."
  },
  {
    id: 19,
    question: "What does os.getcwd() do?",
    options: [
      "Returns system version",
      "Returns current working directory",
      "Gets all installed packages",
      "Changes working directory"
    ],
    correctAnswer: 1,
    explanation: "os.getcwd() returns a string representing the current working directory."
  },
  {
    id: 20,
    question: "How do you change the current directory using the os module?",
    options: [
      "os.current()",
      "os.go()",
      "os.chdir()",
      "os.change()"
    ],
    correctAnswer: 2,
    explanation: "os.chdir(path) changes the current working directory to the specified path."
  }
];