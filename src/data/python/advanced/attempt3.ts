export const questions = [
  {
    "id": 1,
    "question": "What is inheritance in Python?",
    "options": [
      "A way to modify the behavior of an existing class",
      "A method for defining class methods",
      "A feature that allows one class to derive properties from another",
      "A type of data structure"
    ],
    "correctAnswer": 2,
    "explanation": "Inheritance enables a class (child) to inherit attributes and methods from another class (parent), promoting code reuse and hierarchical relationships."
  },
  {
    "id": 2,
    "question": "What is Single Inheritance in Python?",
    "options": [
      "When a class inherits from multiple parent classes",
      "When a class inherits from one parent class",
      "When a class inherits from itself",
      "When a class inherits multiple times from the same class"
    ],
    "correctAnswer": 1,
    "explanation": "Single inheritance means a child class inherits from exactly one parent class, forming a simple parent-child relationship."
  },
  {
    "id": 3,
    "question": "Which of the following statements is true about Multiple Inheritance?",
    "options": [
      "A child class can inherit from only one parent class",
      "A child class can inherit from two or more parent classes",
      "Only one child class can inherit from multiple parent classes",
      "Python does not support multiple inheritance"
    ],
    "correctAnswer": 1,
    "explanation": "Python supports multiple inheritance where a class can inherit attributes and methods from multiple parent classes."
  },
  {
    "id": 4,
    "question": "What is the output of the following code?",
    "code": "class Animal:\n    def speak(self):\n        return \"Animal speaks\"\n\nclass Dog(Animal):\n    pass\n\ndog = Dog()\nprint(dog.speak())",
    "options": [
      "Animal speaks",
      "Dog barks",
      "None",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "Since Dog inherits from Animal without overriding speak(), it uses the parent class's method."
  },
  {
    "id": 5,
    "question": "What does multi-level inheritance mean in Python?",
    "options": [
      "A class inherits from multiple parent classes",
      "A class inherits from a subclass",
      "A class has multiple constructors",
      "A class inherits from itself"
    ],
    "correctAnswer": 1,
    "explanation": "Multi-level inheritance involves a chain of inheritance (e.g., Grandchild → Child → Parent)."
  },
  {
    "id": 6,
    "question": "Which type of inheritance is illustrated in the following example?",
    "code": "class Parent:\n    pass\n\nclass Child(Parent):\n    pass\n\nclass Grandchild(Child):\n    pass",
    "options": [
      "Single Inheritance",
      "Multiple Inheritance",
      "MultiLevel Inheritance",
      "Hierarchical Inheritance"
    ],
    "correctAnswer": 2,
    "explanation": "This demonstrates multi-level inheritance with three generations of classes."
  },
  {
    "id": 7,
    "question": "In which inheritance type does a subclass inherit from more than one class?",
    "options": [
      "Single Inheritance",
      "Multiple Inheritance",
      "MultiLevel Inheritance",
      "Hierarchical Inheritance"
    ],
    "correctAnswer": 1,
    "explanation": "Multiple inheritance allows a class to inherit from multiple base classes simultaneously."
  },
  {
    "id": 8,
    "question": "Which type of inheritance allows multiple classes to share the same parent class?",
    "options": [
      "Single Inheritance",
      "MultiLevel Inheritance",
      "Hierarchical Inheritance",
      "Multiple Inheritance"
    ],
    "correctAnswer": 2,
    "explanation": "Hierarchical inheritance occurs when multiple child classes inherit from a single parent class."
  },
  {
    "id": 9,
    "question": "What will the following code output?",
    "code": "class Animal:\n    def sound(self):\n        return \"Animal makes a sound\"\n\nclass Dog(Animal):\n    def sound(self):\n        return \"Dog barks\"\n\nclass Cat(Dog):\n    pass\n\ncat = Cat()\nprint(cat.sound())",
    "options": [
      "Dog barks",
      "Cat meows",
      "Animal makes a sound",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "Cat inherits from Dog, which overrides Animal's sound() method, so 'Dog barks' is returned."
  },
  {
    "id": 10,
    "question": "What will happen if a class inherits from multiple classes in Python?",
    "options": [
      "It will cause a syntax error",
      "It will only inherit from the first parent class",
      "It will inherit from all the parent classes",
      "It will inherit from the last parent class only"
    ],
    "correctAnswer": 2,
    "explanation": "In multiple inheritance, the child class inherits attributes and methods from all parent classes."
  },
  {
    "id": 11,
    "question": "What is a child class in the context of inheritance?",
    "options": [
      "A class that is used to create instances",
      "A class that does not inherit any methods",
      "A class that inherits properties and methods from another class",
      "A class that is not allowed to inherit from another class"
    ],
    "correctAnswer": 2,
    "explanation": "A child class (subclass) derives attributes and methods from its parent class(es)."
  },
  {
    "id": 12,
    "question": "What is the advantage of inheritance in Python?",
    "options": [
      "It reduces the memory usage",
      "It allows code reuse and modification of behavior",
      "It simplifies the debugging process",
      "It speeds up the execution of code"
    ],
    "correctAnswer": 1,
    "explanation": "Inheritance promotes code reuse and enables extending/modifying parent class behavior without changing the parent."
  },
  {
    "id": 13,
    "question": "What will happen if a method is called from a child class, but it is not defined there?",
    "options": [
      "It will throw an error",
      "Python will search for the method in the parent class",
      "The method will be ignored",
      "It will print a default value"
    ],
    "correctAnswer": 1,
    "explanation": "Python follows method resolution order (MRO) to find the method in parent classes if not found in the child."
  },
  {
    "id": 14,
    "question": "How does Python determine the method resolution order (MRO) in multiple inheritance?",
    "options": [
      "It uses the class names in alphabetical order",
      "It uses the order of inheritance in the code",
      "It uses a depth-first search strategy",
      "It uses a left-to-right approach based on the class declaration order"
    ],
    "correctAnswer": 3,
    "explanation": "Python uses C3 linearization algorithm for MRO, which follows left-to-right declaration order while maintaining monotonicity."
  },
  {
    "id": 15,
    "question": "In hierarchical inheritance, how many child classes can inherit from a single parent class?",
    "options": [
      "Only one",
      "Multiple classes",
      "Only two",
      "No child class can inherit"
    ],
    "correctAnswer": 1,
    "explanation": "Hierarchical inheritance allows one parent class to have multiple child classes."
  },
  {
    "id": 16,
    "question": "What is the concept of method overriding in inheritance?",
    "options": [
      "A method in the child class that calls the parent class method",
      "A method in the child class that has the same name as a method in the parent class",
      "A method that is automatically inherited by the child class",
      "A method that calls itself recursively"
    ],
    "correctAnswer": 1,
    "explanation": "Method overriding occurs when a child class provides its own implementation of a method already defined in the parent class."
  },
  {
    "id": 17,
    "question": "In the case of method overriding, what happens if the super() function is used?",
    "options": [
      "It overrides all methods in the parent class",
      "It calls the method from the parent class",
      "It calls the method from the child class",
      "It throws an error"
    ],
    "correctAnswer": 1,
    "explanation": "super() allows access to the parent class's methods, enabling extension rather than complete overriding."
  },
  {
    "id": 18,
    "question": "What type of inheritance is illustrated in the following example?",
    "code": "class Animal:\n    pass\n\nclass Dog(Animal):\n    pass\n\nclass Puppy(Dog):\n    pass",
    "options": [
      "Single Inheritance",
      "MultiLevel Inheritance",
      "Hierarchical Inheritance",
      "Multiple Inheritance"
    ],
    "correctAnswer": 1,
    "explanation": "This shows multi-level inheritance with Animal → Dog → Puppy chain."
  },
  {
    "id": 19,
    "question": "In which inheritance type does a child class inherit properties from both parent classes?",
    "options": [
      "Single Inheritance",
      "MultiLevel Inheritance",
      "Hierarchical Inheritance",
      "Multiple Inheritance"
    ],
    "correctAnswer": 3,
    "explanation": "Multiple inheritance enables combining features from multiple parent classes into one child class."
  },
  {
    "id": 20,
    "question": "Which of the following best describes the problem of ambiguity in multiple inheritance?",
    "options": [
      "A child class cannot inherit from more than one parent class",
      "A method in the child class may override methods from both parent classes, creating confusion",
      "A child class inherits only the methods from one parent class",
      "The class hierarchy is unclear, and inheritance does not work properly"
    ],
    "correctAnswer": 1,
    "explanation": "The diamond problem occurs when parent classes have methods with the same name, making it ambiguous which version the child should inherit."
  }
];