export const questions = [
  {
    "id": 1,
    "question": "What is the purpose of the super() function in inheritance?",
    "options": [
      "It calls a method from the child class",
      "It calls a method from the parent class",
      "It calls the __init__ method of the child class",
      "It replaces the method in the parent class with the child class method"
    ],
    "correctAnswer": 1,
    "explanation": "The super() function allows a child class to access and call methods from its parent class, enabling method extension rather than complete overriding."
  },
  {
    "id": 2,
    "question": "What will be the output of the following code?",
    "code": "class Animal:\n    def speak(self):\n        print(\"Animal speaks\")\n\nclass Dog(Animal):\n    def speak(self):\n        print(\"Dog barks\")\n\ndog = Dog()\ndog.speak()",
    "options": [
      "Animal speaks",
      "Dog barks",
      "None",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "The Dog class overrides the speak() method from Animal, so calling speak() on a Dog instance executes the child class's version."
  },
  {
    "id": 3,
    "question": "What is the output of the following code?",
    "code": "class A:\n    def method(self):\n        return \"Class A method\"\n\nclass B(A):\n    def method(self):\n        return \"Class B method\"\n\nb = B()\nprint(b.method())",
    "options": [
      "Class A method",
      "Class B method",
      "Class A method Class B method",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "Class B overrides the method() from Class A, so the child class's implementation takes precedence when called on a B instance."
  },
  {
    "id": 4,
    "question": "Which of the following inheritance types is demonstrated in the following code?",
    "code": "class Animal:\n    pass\n\nclass Dog(Animal):\n    pass\n\nclass Cat(Animal):\n    pass",
    "options": [
      "Single Inheritance",
      "Hierarchical Inheritance",
      "MultiLevel Inheritance",
      "Multiple Inheritance"
    ],
    "correctAnswer": 1,
    "explanation": "This shows hierarchical inheritance where both Dog and Cat inherit from the same parent class (Animal)."
  },
  {
    "id": 5,
    "question": "What is the purpose of inheritance in object-oriented programming (OOP)?",
    "options": [
      "To modify the object's properties directly",
      "To enable code reuse and create relationships between classes",
      "To improve the performance of the program",
      "To execute code inside the parent class only"
    ],
    "correctAnswer": 1,
    "explanation": "Inheritance promotes code reuse and establishes logical relationships between classes through parent-child hierarchies."
  },
  {
    "id": 6,
    "question": "Can a child class access the private attributes of the parent class?",
    "options": [
      "Yes, if they are inherited directly",
      "No, private attributes cannot be accessed directly",
      "Yes, private attributes can be accessed using the super() function",
      "Yes, only if the private attribute is explicitly made public"
    ],
    "correctAnswer": 1,
    "explanation": "Private attributes (prefixed with double underscore __) are name-mangled and not directly accessible by child classes."
  },
  {
    "id": 7,
    "question": "Which of the following is not a type of inheritance in Python?",
    "options": [
      "Single Inheritance",
      "Multiple Inheritance",
      "Circular Inheritance",
      "Hierarchical Inheritance"
    ],
    "correctAnswer": 2,
    "explanation": "Circular inheritance (where classes inherit from each other in a loop) is not supported in Python as it creates unresolvable method resolution paths."
  },
  {
    "id": 8,
    "question": "Can a child class modify the attributes of the parent class?",
    "options": [
      "Yes, but only in multiple inheritance",
      "No, child classes cannot modify parent class attributes",
      "Yes, child classes can modify parent class attributes directly",
      "Yes, but only if the child class has a method to do so"
    ],
    "correctAnswer": 3,
    "explanation": "Child classes can modify inherited attributes through methods (including property decorators) but not directly modify class-level attributes of the parent."
  },
  {
    "id": 9,
    "question": "In Python, which keyword is used to call a method from the parent class?",
    "options": [
      "parent()",
      "super()",
      "base()",
      "parent_class()"
    ],
    "correctAnswer": 1,
    "explanation": "The super() function provides a proxy object to access parent class methods and attributes."
  },
  {
    "id": 10,
    "question": "What will the following code print?",
    "code": "class A:\n    def __init__(self):\n        print(\"Class A constructor\")\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        print(\"Class B constructor\")\n\nb = B()",
    "options": [
      "Class A constructor Class B constructor",
      "Class B constructor Class A constructor",
      "Class A constructor",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "super().__init__() calls the parent constructor first, then executes the child constructor's code."
  },
  {
    "id": 11,
    "question": "What does method overriding allow you to do in Python?",
    "options": [
      "Modify the method of a parent class inside the child class",
      "Prevent the parent class method from being called",
      "Overload a method with the same name and parameters",
      "Use the method without modification"
    ],
    "correctAnswer": 0,
    "explanation": "Method overriding lets child classes provide their own implementation of inherited methods while maintaining the same method signature."
  },
  {
    "id": 12,
    "question": "What is a key difference between multiple and hierarchical inheritance?",
    "options": [
      "Multiple inheritance involves multiple parent classes, while hierarchical inheritance involves multiple child classes inheriting from a single parent class.",
      "Hierarchical inheritance involves multiple parent classes, while multiple inheritance involves only one parent class.",
      "Both inheritance types are the same.",
      "Hierarchical inheritance does not allow method overriding, while multiple inheritance does."
    ],
    "correctAnswer": 0,
    "explanation": "Multiple inheritance combines features from several parents into one child class, while hierarchical inheritance creates a tree-like structure with one parent and multiple children."
  },
  {
    "id": 13,
    "question": "In multiple inheritance, if both parent classes have a method with the same name, which one gets called?",
    "options": [
      "The method from the parent class defined first",
      "The method from the parent class defined last",
      "Python raises an error",
      "The method from the class that is inherited last"
    ],
    "correctAnswer": 3,
    "explanation": "Python follows Method Resolution Order (MRO) which prioritizes the last inherited class in case of naming conflicts."
  },
  {
    "id": 14,
    "question": "Which method is called when a new object is created in a class?",
    "options": [
      "__new__",
      "__init__",
      "__create__",
      "__start__"
    ],
    "correctAnswer": 1,
    "explanation": "__init__ is the initializer method that gets called automatically when instantiating a class (after __new__ creates the instance)."
  },
  {
    "id": 15,
    "question": "Which inheritance type is used when a class inherits from two or more classes?",
    "options": [
      "Single Inheritance",
      "Multiple Inheritance",
      "Hierarchical Inheritance",
      "MultiLevel Inheritance"
    ],
    "correctAnswer": 1,
    "explanation": "Multiple inheritance allows a class to derive from multiple base classes simultaneously."
  },
  {
    "id": 16,
    "question": "What is the output of the following code?",
    "code": "class Parent:\n    def method(self):\n        return \"Parent method\"\n\nclass Child(Parent):\n    def method(self):\n        return \"Child method\"\n\nchild = Child()\nprint(child.method())",
    "options": [
      "Parent method",
      "Child method",
      "Error",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "The child class's overridden method takes precedence over the parent's version when called on a child instance."
  },
  {
    "id": 17,
    "question": "What is the key feature of hierarchical inheritance?",
    "options": [
      "One class can inherit from multiple parent classes",
      "One class inherits from one parent class, but multiple classes can inherit from it",
      "A class can inherit from itself",
      "All child classes inherit from the same class"
    ],
    "correctAnswer": 1,
    "explanation": "Hierarchical inheritance creates a branching structure where one parent class has multiple child classes."
  },
  {
    "id": 18,
    "question": "Which function is used in Python to call the method of the parent class inside a child class?",
    "options": [
      "call_super()",
      "super()",
      "parent()",
      "base_method()"
    ],
    "correctAnswer": 1,
    "explanation": "super() is the standard way to delegate method calls to parent classes in Python's inheritance hierarchy."
  },
  {
    "id": 19,
    "question": "What happens when we call a method from the parent class in multiple inheritance?",
    "options": [
      "The method is ignored",
      "It calls the method from the parent class that is inherited last",
      "It calls the method from the parent class inherited first",
      "It raises an error"
    ],
    "correctAnswer": 2,
    "explanation": "Python's MRO processes parent classes left-to-right, so the first matching method in the inheritance list gets called."
  },
  {
    "id": 20,
    "question": "Which of the following best describes inheritance?",
    "options": [
      "A way to modify the behavior of a method",
      "A way to avoid duplication of code",
      "A method for handling errors",
      "A way to limit the scope of methods"
    ],
    "correctAnswer": 1,
    "explanation": "The primary purpose of inheritance is code reuse - allowing child classes to leverage and extend functionality from parent classes without duplication."
  }
];