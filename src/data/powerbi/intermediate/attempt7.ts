export const questions = [
  {
    "id": 1,
    "question": "What does os.listdir() return?",
    "options": [
      "List of Python functions",
      "List of installed packages",
      "List of files and folders in the current directory",
      "List of modules in a package"
    ],
    "correctAnswer": 2,
    "explanation": "The os.listdir() function returns a list of files and folders in the current directory."
  },
  {
    "id": 2,
    "question": "Which method is used to remove a file using the os module?",
    "options": [
      "os.remove()",
      "os.delete()",
      "os.rmdir()",
      "os.rmfile()"
    ],
    "correctAnswer": 0,
    "explanation": "The os.remove() method is used to remove a file in Python."
  },
  {
    "id": 3,
    "question": "What is the extension of a Python module file?",
    "options": [
      ".txt",
      ".mod",
      ".pym",
      ".py"
    ],
    "correctAnswer": 3,
    "explanation": "Python module files have the '.py' extension."
  },
  {
    "id": 4,
    "question": "What command is used to uninstall a package using pip?",
    "options": [
      "pip delete",
      "pip uninstall",
      "pip remove",
      "pip off"
    ],
    "correctAnswer": 1,
    "explanation": "The command to uninstall a package using pip is 'pip uninstall'."
  },
  {
    "id": 5,
    "question": "Which of the following are standard Python modules?",
    "options": [
      "numpy",
      "pandas",
      "math",
      "requests"
    ],
    "correctAnswer": 2,
    "explanation": "The 'math' module is a standard Python module. numpy, pandas, and requests are third-party modules."
  },
  {
    "id": 6,
    "question": "What is the purpose of __init__.py in a package?",
    "options": [
      "It runs first",
      "It lists functions",
      "It indicates that the directory is a Python package",
      "It compiles the package"
    ],
    "correctAnswer": 2,
    "explanation": "__init__.py indicates that the directory is a Python package."
  },
  {
    "id": 7,
    "question": "What is printed?\n\n  import math\n  print(math.pi)",
    "options": [
      "3.14",
      "3.14159...",
      "pi",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "The value of math.pi is 3.14159..., which is printed."
  },
  {
    "id": 8,
    "question": "Which module can be used to interact with system arguments?",
    "options": [
      "sys",
      "os",
      "subprocess",
      "string"
    ],
    "correctAnswer": 0,
    "explanation": "The sys module can be used to interact with system arguments."
  },
  {
    "id": 9,
    "question": "What will pip show requests do?",
    "options": [
      "Show contents of the requests package",
      "Display installed info of requests package",
      "Open the requests documentation",
      "Run the requests module"
    ],
    "correctAnswer": 1,
    "explanation": "The 'pip show requests' command displays installed information of the requests package."
  },
  {
    "id": 10,
    "question": "Which symbol is used to access a module’s attribute or method?",
    "options": [
      ":",
      "->",
      ".",
      "::"
    ],
    "correctAnswer": 2,
    "explanation": "The '.' symbol is used to access a module's attribute or method."
  },
  {
    "id": 11,
    "question": "Can a module contain both variables and functions?",
    "options": [
      "No, only one",
      "Yes",
      "Only if imported",
      "Only in packages"
    ],
    "correctAnswer": 1,
    "explanation": "Yes, a module can contain both variables and functions."
  },
  {
    "id": 12,
    "question": "How do you import all functions from a module?",
    "options": [
      "import module:*",
      "from module import *",
      "include all module",
      "from module all"
    ],
    "correctAnswer": 1,
    "explanation": "The correct syntax to import all functions from a module is 'from module import *'."
  },
  {
    "id": 13,
    "question": "What command upgrades an existing package using pip?",
    "options": [
      "pip reinstall",
      "pip upgrade",
      "pip install --upgrade",
      "pip re-install"
    ],
    "correctAnswer": 2,
    "explanation": "The command 'pip install --upgrade' is used to upgrade an existing package using pip."
  },
  {
    "id": 14,
    "question": "Can modules be reused in multiple programs?",
    "options": [
      "Yes",
      "No",
      "Only in the same folder",
      "Only if built-in"
    ],
    "correctAnswer": 0,
    "explanation": "Yes, modules can be reused in multiple programs."
  },
  {
    "id": 15,
    "question": "Which command searches for packages on PyPI?",
    "options": [
      "pip list",
      "pip show",
      "pip find",
      "pip search"
    ],
    "correctAnswer": 3,
    "explanation": "The command 'pip search' is used to search for packages on PyPI."
  },
  {
    "id": 16,
    "question": "What is the PyPI full form?",
    "options": [
      "Python Primary Index",
      "Python Program Installer",
      "Python Package Index",
      "Python Plugin Interface"
    ],
    "correctAnswer": 2,
    "explanation": "PyPI stands for Python Package Index, which is the official repository for third-party Python packages."
  },
  {
    "id": 17,
    "question": "How can you find the location of an installed module?",
    "options": [
      "pip locate",
      "module.loc()",
      "pip show <module>",
      "os.module_path()"
    ],
    "correctAnswer": 2,
    "explanation": "'pip show <module>' will display the location and other details of the installed module."
  },
  {
    "id": 18,
    "question": "What will happen if you import a module that is already imported?",
    "options": [
      "It will re-run",
      "It will throw an error",
      "It will be skipped silently",
      "It will be loaded from cache"
    ],
    "correctAnswer": 3,
    "explanation": "If a module is already imported, it will be loaded from cache and not re-imported."
  },
  {
    "id": 19,
    "question": "What is the main purpose of the subprocess module?",
    "options": [
      "File handling",
      "Package management",
      "Running system-level commands",
      "Networking"
    ],
    "correctAnswer": 2,
    "explanation": "The subprocess module is used to run system-level commands."
  },
  {
    "id": 20,
    "question": "Can packages contain sub-packages?",
    "options": [
      "No",
      "Only one level",
      "Yes",
      "Only with pip"
    ],
    "correctAnswer": 2,
    "explanation": "Yes, packages can contain sub-packages, creating a hierarchy of modules."
  }
];
