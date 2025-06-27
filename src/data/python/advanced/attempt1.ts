export const questions = [
  {
    "id": 1,
    "question": "Which of the following is not a principle of OOP?",
    "options": [
      "Inheritance",
      "Polymorphism",
      "Compilation",
      "Encapsulation"
    ],
    "correctAnswer": 2,
    "explanation": "The four main principles of OOP are encapsulation, abstraction, inheritance, and polymorphism. Compilation is a process of converting code to machine language, not an OOP principle."
  },
  {
    "id": 2,
    "question": "What is the main purpose of Object-Oriented Programming?",
    "options": [
      "To write code faster",
      "To organize code around objects and data",
      "To use only built-in functions",
      "To avoid writing classes"
    ],
    "correctAnswer": 1,
    "explanation": "OOP focuses on organizing software design around objects and data rather than functions and logic, making code more modular and reusable."
  },
  {
    "id": 3,
    "question": "What is inheritance in Python?",
    "options": [
      "Assigning variables",
      "Sharing common code between classes",
      "Encrypting class properties",
      "Creating infinite loops"
    ],
    "correctAnswer": 1,
    "explanation": "Inheritance allows a class to inherit attributes and methods from another class, promoting code reuse and establishing relationships between classes."
  },
  {
    "id": 4,
    "question": "What is polymorphism?",
    "options": [
      "Creating multiple objects",
      "Using different functions for different data types",
      "One function behaving differently depending on the object",
      "Hiding data from users"
    ],
    "correctAnswer": 2,
    "explanation": "Polymorphism allows methods to do different things based on the object that calls them, often through method overriding or method overloading."
  },
  {
    "id": 5,
    "question": "What does encapsulation mean?",
    "options": [
      "Making variables global",
      "Hiding internal state and requiring access through methods",
      "Using loops inside classes",
      "Accessing private methods directly"
    ],
    "correctAnswer": 1,
    "explanation": "Encapsulation is about bundling data with methods that operate on that data and restricting direct access to some of an object's components."
  },
  {
    "id": 6,
    "question": "Which keyword is used to define a class in Python?",
    "options": [
      "function",
      "def",
      "object",
      "class"
    ],
    "correctAnswer": 3,
    "explanation": "The 'class' keyword is used to define a new class in Python, followed by the class name and a colon."
  },
  {
    "id": 7,
    "question": "Which of the following creates an object in Python?",
    "options": [
      "obj = class()",
      "obj = new Class()",
      "obj = Class()",
      "create obj Class"
    ],
    "correctAnswer": 2,
    "explanation": "In Python, objects are created by calling the class name as if it were a function (e.g., Class()). The 'new' keyword is not used in Python."
  },
  {
    "id": 8,
    "question": "Which of the following is the constructor method in Python?",
    "options": [
      "constructor()",
      "init()",
      "__start__()",
      "__init__()"
    ],
    "correctAnswer": 3,
    "explanation": "The __init__() method is Python's constructor that is automatically called when an object is instantiated."
  },
  {
    "id": 9,
    "question": "What will __init__() do when an object is created?",
    "options": [
      "Delete the object",
      "Assign memory",
      "Initialize the object's attributes",
      "Compile the code"
    ],
    "correctAnswer": 2,
    "explanation": "The __init__() method initializes the object's attributes and is called immediately after the object is created."
  },
  {
    "id": 10,
    "question": "What is the output of the following code?\nclass Test:\n    def __init__(self):\n        print(\"Constructor called\")\n\nt = Test()",
    "options": [
      "Constructor not called",
      "Constructor called",
      "Syntax Error",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "When t = Test() is executed, the __init__() method is called automatically, printing 'Constructor called'."
  },
  {
    "id": 11,
    "question": "What does the self keyword refer to inside a class?",
    "options": [
      "The class name",
      "The object being created",
      "A global variable",
      "A static method"
    ],
    "correctAnswer": 1,
    "explanation": "The 'self' parameter refers to the current instance of the class and is used to access variables and methods associated with that object."
  },
  {
    "id": 12,
    "question": "If __init__() is not defined, what happens?",
    "options": [
      "The object can't be created",
      "An error occurs",
      "Python uses a default constructor",
      "The class will be ignored"
    ],
    "correctAnswer": 2,
    "explanation": "Python provides a default constructor if __init__() is not defined, which does nothing but allows object creation."
  },
  {
    "id": 13,
    "question": "Which is the correct way to define a class with one property?",
    "options": [
      "class A: self.name = ''",
      "def A(self): self.name = ''",
      "class A:\n def __init__(self):\n self.name = ''",
      "new A(self.name)"
    ],
    "correctAnswer": 2,
    "explanation": "The correct syntax includes defining the class with the 'class' keyword and initializing attributes in the __init__ method."
  },
  {
    "id": 14,
    "question": "What will this code output?\nclass A:\n    def __init__(self, x):\n        self.x = x\n\nobj = A(5)\nprint(obj.x)",
    "options": [
      "5",
      "x",
      "None",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "The code creates an object with attribute x set to 5, then prints obj.x, which outputs 5."
  },
  {
    "id": 15,
    "question": "Which of the following best defines a class?",
    "options": [
      "An object of a function",
      "A blueprint for creating objects",
      "A block of conditional statements",
      "A single line of code"
    ],
    "correctAnswer": 1,
    "explanation": "A class is a blueprint or template for creating objects that defines their properties and behaviors."
  },
  {
    "id": 16,
    "question": "How many objects can you create from a class?",
    "options": [
      "Only 1",
      "2",
      "As many as needed",
      "Depends on memory size"
    ],
    "correctAnswer": 2,
    "explanation": "You can create multiple instances (objects) from a single class, limited only by system resources."
  },
  {
    "id": 17,
    "question": "Which function is automatically called when an object is created?",
    "options": [
      "main()",
      "start()",
      "__init__()",
      "object()"
    ],
    "correctAnswer": 2,
    "explanation": "The __init__() method is automatically called when an object is instantiated from a class."
  },
  {
    "id": 18,
    "question": "What is the correct way to access an object's attribute in Python?",
    "options": [
      "object->attribute",
      "object.attribute",
      "object::attribute",
      "attribute.object"
    ],
    "correctAnswer": 1,
    "explanation": "In Python, object attributes are accessed using dot notation: object.attribute."
  },
  {
    "id": 19,
    "question": "What happens if required arguments are not passed to __init__()?",
    "options": [
      "Default values are used",
      "Python assigns None",
      "TypeError is raised",
      "Object is created without attributes"
    ],
    "correctAnswer": 2,
    "explanation": "If required arguments are missing when creating an object, Python raises a TypeError."
  },
  {
    "id": 20,
    "question": "Which OOP concept allows one class to use properties of another?",
    "options": [
      "Encapsulation",
      "Inheritance",
      "Abstraction",
      "Constructor"
    ],
    "correctAnswer": 1,
    "explanation": "Inheritance enables a class to inherit attributes and methods from another class, creating a parent-child relationship."
  }
];