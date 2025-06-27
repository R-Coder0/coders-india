export const questions = [
  {
    "id": 1,
    "question": "What does the term 'encapsulation' refer to in Python?",
    "options": [
      "Hiding the implementation details of a class and only exposing the necessary parts",
      "Reusing the code in multiple classes",
      "Overloading operators in a class",
      "Allowing classes to inherit from multiple parent classes"
    ],
    "correctAnswer": 0,
    "explanation": "Encapsulation is the bundling of data with the methods that operate on that data, while restricting direct access to some of an object's components."
  },
  {
    "id": 2,
    "question": "Which of the following is used to define a private variable in Python?",
    "options": [
      "# symbol",
      "_ (single underscore)",
      "__ (double underscore)",
      "private keyword"
    ],
    "correctAnswer": 2,
    "explanation": "Double underscore prefix (__) triggers name mangling, making the attribute harder to access directly from outside the class."
  },
  {
    "id": 3,
    "question": "What will happen if you try to access a private variable directly outside of its class in Python?",
    "options": [
      "The program will throw an error",
      "The variable will be set to None",
      "It will not be accessible, but no error is thrown",
      "The private variable is automatically converted to a public variable"
    ],
    "correctAnswer": 0,
    "explanation": "Python will raise an AttributeError when trying to access name-mangled (private) attributes directly from outside the class."
  },
  {
    "id": 4,
    "question": "How do you access a private variable in Python?",
    "options": [
      "Using the class name directly",
      "Using a method in the class to get the value",
      "By using the __private syntax",
      "By directly accessing it with a dot operator"
    ],
    "correctAnswer": 1,
    "explanation": "The proper way is through getter methods or properties that provide controlled access to private attributes."
  },
  {
    "id": 5,
    "question": "What is the advantage of encapsulation in Python?",
    "options": [
      "It increases the size of the program",
      "It helps in hiding the internal workings of an object",
      "It makes the code more readable",
      "It allows you to override methods easily"
    ],
    "correctAnswer": 1,
    "explanation": "Encapsulation protects an object's internal state from unintended interference and misuse by external code."
  },
  {
    "id": 6,
    "question": "What is the default access level for class variables and methods in Python?",
    "options": [
      "Private",
      "Protected",
      "Public",
      "None of the above"
    ],
    "correctAnswer": 2,
    "explanation": "Python follows a 'we are all consenting adults' philosophy where all members are public by default."
  },
  {
    "id": 7,
    "question": "Which of the following is used to make a class variable protected in Python?",
    "options": [
      "_variable_name",
      "__variable_name",
      "variable_name",
      "protected_variable"
    ],
    "correctAnswer": 0,
    "explanation": "Single underscore prefix is a convention indicating 'protected' access (shouldn't be accessed outside class/subclasses)."
  },
  {
    "id": 8,
    "question": "How can you make an attribute read-only in Python?",
    "options": [
      "By declaring it as final",
      "By using the @property decorator",
      "By using private keyword",
      "By making it public"
    ],
    "correctAnswer": 1,
    "explanation": "The @property decorator allows creating read-only properties by defining only a getter method."
  },
  {
    "id": 9,
    "question": "What is polymorphism in Python?",
    "options": [
      "The ability to inherit from multiple classes",
      "The ability to change the value of a variable",
      "The ability to perform different actions based on the object type",
      "The ability to overload methods and operators"
    ],
    "correctAnswer": 2,
    "explanation": "Polymorphism allows objects of different classes to be treated as objects of a common superclass while exhibiting different behaviors."
  },
  {
    "id": 10,
    "question": "What is method overriding in Python?",
    "options": [
      "Defining a new method in the child class with the same name as a method in the parent class",
      "Overloading the method with multiple definitions",
      "Changing the name of a method",
      "Modifying the signature of the method"
    ],
    "correctAnswer": 0,
    "explanation": "Method overriding allows a child class to provide a specific implementation of a method already defined in its parent class."
  },
  {
    "id": 11,
    "question": "Which of the following is an example of polymorphism in Python?",
    "options": [
      "Changing the implementation of a method in the parent class",
      "Using multiple classes that have different methods for the same operation",
      "Using inheritance in Python",
      "Accessing private variables from the parent class"
    ],
    "correctAnswer": 1,
    "explanation": "Polymorphism is demonstrated when different classes implement the same method name with different behaviors (e.g., speak() in Animal, Dog, Cat classes)."
  },
  {
    "id": 12,
    "question": "What is operator overloading in Python?",
    "options": [
      "Using different types of operators",
      "Defining multiple methods in a class",
      "Redefining the behavior of existing operators for user-defined classes",
      "Overriding parent class methods"
    ],
    "correctAnswer": 2,
    "explanation": "Operator overloading allows classes to define their own behavior for built-in operators (e.g., +, -, *) through special methods like __add__."
  },
  {
    "id": 13,
    "question": "What is the output of the following code?",
    "code": "class Animal:\n    def speak(self):\n        return \"Animal speaks\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Dog barks\"\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Cat meows\"\n\na = Animal()\nd = Dog()\nc = Cat()\n\nprint(a.speak())\nprint(d.speak())\nprint(c.speak())",
    "options": [
      "Animal speaks, Dog barks, Cat meows",
      "Dog barks, Cat meows, Animal speaks",
      "None, Dog barks, Cat meows",
      "Animal speaks, None, None"
    ],
    "correctAnswer": 0,
    "explanation": "This demonstrates polymorphism - each object's speak() method produces different output based on its actual type."
  },
  {
    "id": 14,
    "question": "Which of the following is true about polymorphism in Python?",
    "options": [
      "Polymorphism is not supported in Python",
      "Polymorphism allows different objects to respond to the same method in different ways",
      "Polymorphism is achieved by inheritance only",
      "Polymorphism is the same as method overriding"
    ],
    "correctAnswer": 1,
    "explanation": "Polymorphism enables objects of different classes to be used interchangeably through a common interface while maintaining their specific behaviors."
  },
  {
    "id": 15,
    "question": "What is method overloading in Python?",
    "options": [
      "Defining multiple methods with the same name and different parameters",
      "Defining methods with the same name in the parent class",
      "Overloading operators in the class",
      "Python does not support method overloading"
    ],
    "correctAnswer": 3,
    "explanation": "Python doesn't support traditional method overloading (same name, different parameters) - the last defined method overwrites previous ones."
  },
  {
    "id": 16,
    "question": "What is the key feature of polymorphism in object-oriented programming?",
    "options": [
      "Multiple classes with the same method",
      "One class can inherit from another class",
      "Objects of different types can be treated as instances of the same class",
      "Multiple methods can be defined in the same class"
    ],
    "correctAnswer": 2,
    "explanation": "Polymorphism's core concept is that objects of different classes can be used through a common interface while maintaining their specific behaviors."
  },
  {
    "id": 17,
    "question": "How does polymorphism benefit code?",
    "options": [
      "It increases the program execution speed",
      "It allows for more efficient error handling",
      "It enables objects to be treated generically, reducing complexity and increasing flexibility",
      "It reduces the need for inheritance"
    ],
    "correctAnswer": 2,
    "explanation": "Polymorphism simplifies code by allowing generic treatment of objects while preserving their specific behaviors."
  },
  {
    "id": 18,
    "question": "In polymorphism, which of the following allows the same function to behave differently for different objects?",
    "options": [
      "Method overloading",
      "Method overriding",
      "Inheritance",
      "Encapsulation"
    ],
    "correctAnswer": 1,
    "explanation": "Method overriding is the mechanism that enables polymorphic behavior by allowing subclasses to provide specific implementations of inherited methods."
  },
  {
    "id": 19,
    "question": "What is abstraction in Python?",
    "options": [
      "Hiding the internal implementation of an object",
      "Making the object accessible to only one class",
      "Defining methods that don't contain logic",
      "The ability to perform multiple actions in one line of code"
    ],
    "correctAnswer": 0,
    "explanation": "Abstraction focuses on exposing only relevant features while hiding unnecessary implementation details from the user."
  },
  {
    "id": 20,
    "question": "Which of the following is used to implement abstraction in Python?",
    "options": [
      "Using abstract class",
      "Using abstract methods",
      "Using interfaces",
      "Both A and B"
    ],
    "correctAnswer": 3,
    "explanation": "Python implements abstraction through abstract base classes (ABC module) and abstract methods that define interfaces without implementation."
  }
];