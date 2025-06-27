export const questions = [
  {
    "id": 1,
    "question": "What is the purpose of abstract classes in Python?",
    "options": [
      "To define methods that must be implemented in a child class",
      "To prevent inheritance from a class",
      "To implement multiple inheritance",
      "To allow for class overloading"
    ],
    "correctAnswer": 0,
    "explanation": "Abstract classes serve as blueprints for other classes, requiring child classes to implement their abstract methods while optionally providing some implementation themselves."
  },
  {
    "id": 2,
    "question": "What is the function of the abc module in Python?",
    "options": [
      "To handle abstract base classes",
      "To define concrete methods in abstract classes",
      "To manage multiple inheritance",
      "To handle exceptions"
    ],
    "correctAnswer": 0,
    "explanation": "The abc (Abstract Base Class) module provides the infrastructure for defining abstract base classes in Python using the ABC metaclass and @abstractmethod decorator."
  },
  {
    "id": 3,
    "question": "Which of the following can be defined in an abstract class in Python?",
    "options": [
      "Only abstract methods",
      "Only concrete methods",
      "Both abstract and concrete methods",
      "No methods"
    ],
    "correctAnswer": 2,
    "explanation": "Abstract classes can contain both abstract methods (without implementation) and concrete methods (with implementation) that child classes can use or override."
  },
  {
    "id": 4,
    "question": "What is the outcome if an abstract method is not implemented in a child class?",
    "options": [
      "The program will work fine",
      "The child class will become abstract automatically",
      "It will raise an error when trying to instantiate the child class",
      "The child class will be considered as the base class"
    ],
    "correctAnswer": 2,
    "explanation": "Python will raise a TypeError when attempting to instantiate a child class that hasn't implemented all required abstract methods from its parent abstract class."
  },
  {
    "id": 5,
    "question": "What will be the output of the following code?",
    "code": "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def area(self):\n        return 3.14 * 5 * 5\n\ncircle = Circle()\nprint(circle.area())",
    "options": [
      "None",
      "3.14 * 5 * 5",
      "78.5",
      "Error"
    ],
    "correctAnswer": 2,
    "explanation": "The code correctly implements the abstract area() method in the Circle class, calculating the area of a circle with radius 5 (3.14 × 5² = 78.5)."
  },
  {
    "id": 6,
    "question": "How is abstraction different from encapsulation?",
    "options": [
      "Abstraction is about hiding complexity, while encapsulation is about bundling data and methods together",
      "Abstraction hides data, and encapsulation reveals data",
      "Encapsulation is not a concept in OOP, while abstraction is",
      "There is no difference; they are the same concept"
    ],
    "correctAnswer": 0,
    "explanation": "Abstraction focuses on exposing only essential features while hiding implementation details, whereas encapsulation bundles data and methods that operate on that data while restricting direct access."
  },
  {
    "id": 7,
    "question": "What happens if a child class doesn't implement all abstract methods?",
    "options": [
      "The child class is considered abstract",
      "The program will run with a warning",
      "The child class will automatically implement the abstract methods",
      "The program will throw an error"
    ],
    "correctAnswer": 0,
    "explanation": "A child class that doesn't implement all abstract methods remains abstract and cannot be instantiated until all abstract methods are implemented."
  },
  {
    "id": 8,
    "question": "What is an abstract method?",
    "options": [
      "A method with no implementation in the base class",
      "A method that can only be used inside the base class",
      "A method that is defined with the abstract keyword",
      "A method that can't be overridden in subclasses"
    ],
    "correctAnswer": 0,
    "explanation": "An abstract method declares an interface without providing implementation, forcing child classes to provide their own specific implementation."
  },
  {
    "id": 9,
    "question": "Which of the following is true about abstract classes in Python?",
    "options": [
      "You can instantiate an abstract class",
      "Abstract classes must implement all methods in the child class",
      "Abstract classes cannot have regular methods",
      "Abstract classes cannot be subclassed"
    ],
    "correctAnswer": 1,
    "explanation": "Abstract classes define a contract that concrete subclasses must fulfill by implementing all abstract methods, though they can also provide partial implementation."
  },
  {
    "id": 10,
    "question": "Why do we use abstraction in Python?",
    "options": [
      "To make a class reusable",
      "To reduce code complexity and hide implementation details",
      "To prevent inheritance",
      "To define classes that do not require implementation"
    ],
    "correctAnswer": 1,
    "explanation": "Abstraction helps manage complexity by focusing on what an object does rather than how it does it, making code more maintainable and modular."
  },
  {
    "id": 11,
    "question": "What is profiling in Python?",
    "options": [
      "A way to check the syntax of the code",
      "A method to track memory usage of variables",
      "A process to analyze the performance of the code",
      "A technique to speed up code execution"
    ],
    "correctAnswer": 2,
    "explanation": "Profiling measures the space (memory) or time complexity of a program, identifying which parts of the code consume the most resources."
  },
  {
    "id": 12,
    "question": "Which of the following Python modules is commonly used for profiling code performance?",
    "options": [
      "time",
      "profile",
      "logging",
      "threading"
    ],
    "correctAnswer": 1,
    "explanation": "The profile module (and its C-optimized version cProfile) provides deterministic profiling of Python programs, measuring function call frequency and duration."
  },
  {
    "id": 13,
    "question": "What is the purpose of the cProfile module in Python?",
    "options": [
      "It helps to convert Python code to machine code",
      "It profiles Python programs to monitor execution time and call statistics",
      "It enables multi-threading support for Python",
      "It optimizes memory usage"
    ],
    "correctAnswer": 1,
    "explanation": "cProfile collects detailed statistics about function calls including how many times they were called and how long each call took, helping identify performance bottlenecks."
  },
  {
    "id": 14,
    "question": "Which of the following can help you identify bottlenecks in your Python code?",
    "options": [
      "Using the time module",
      "Using the profile module",
      "Writing code without any functions",
      "Both A and B"
    ],
    "correctAnswer": 3,
    "explanation": "Both the time module (for basic timing) and profile/cProfile modules (for detailed analysis) are valuable tools for performance analysis."
  },
  {
    "id": 15,
    "question": "In Python, what does the timeit module do?",
    "options": [
      "It measures the execution time of small code snippets",
      "It profiles memory usage of variables",
      "It measures the time a function is called",
      "It optimizes the performance automatically"
    ],
    "correctAnswer": 0,
    "explanation": "timeit provides a simple way to time small bits of Python code, avoiding common measurement pitfalls by disabling garbage collection and running multiple iterations."
  },
  {
    "id": 16,
    "question": "What is the main objective of optimization in Python?",
    "options": [
      "To make the code run slower",
      "To reduce memory consumption and increase speed",
      "To convert Python code to lower-level languages",
      "To make code more readable"
    ],
    "correctAnswer": 1,
    "explanation": "Optimization aims to improve program efficiency by reducing resource usage (memory) and execution time while maintaining correctness."
  },
  {
    "id": 17,
    "question": "Which of the following is an example of an optimization technique?",
    "options": [
      "Avoiding the use of built-in functions",
      "Using recursion for all tasks",
      "Using list comprehensions instead of loops",
      "Avoiding the use of variables"
    ],
    "correctAnswer": 2,
    "explanation": "List comprehensions are often faster than equivalent for-loops because their iteration is performed in C rather than Python bytecode."
  },
  {
    "id": 18,
    "question": "What is the purpose of memoization in Python?",
    "options": [
      "To speed up function calls by storing the results of expensive function calls",
      "To reduce the size of data structures",
      "To store variables in memory for future access",
      "To increase the recursion depth limit"
    ],
    "correctAnswer": 0,
    "explanation": "Memoization caches function results so repeated calls with the same inputs return instantly, trading memory for computation time."
  },
  {
    "id": 19,
    "question": "In Python, which of the following is responsible for automatic memory management?",
    "options": [
      "Python interpreter",
      "Garbage collector",
      "Operating system",
      "User-defined memory manager"
    ],
    "correctAnswer": 1,
    "explanation": "Python's garbage collector automatically reclaims memory occupied by objects that are no longer in use, primarily using reference counting."
  },
  {
    "id": 20,
    "question": "What is garbage collection in Python?",
    "options": [
      "A process of collecting data from variables and clearing them",
      "A way to store variables in memory",
      "The process of automatically cleaning up unused objects to free memory",
      "A function that manually clears the memory of variables"
    ],
    "correctAnswer": 2,
    "explanation": "Garbage collection identifies and removes objects that are no longer referenced by the program, preventing memory leaks and efficiently managing memory."
  }
];