export const questions = [
  {
    "id": 1,
    "question": "What is the output of the following program?\ni = 2 \nif i == 2:\n    i+=1\nfor j in range(i):\n    pass\n    break\n    i+=1\nprint(i)",
    "options": ["3", "1", "Infinite loop", "2"],
    "correctAnswer": 0,
    "explanation": "The if statement increments i to 3. The loop runs once (break exits immediately), but doesn't change i."
  },
  {
    "id": 2,
    "question": "What would be the output of the following program?\nn = 8\nwhile n>=0:\n    n-=2\n    if n%2 == 0:\n        continue\n    print(n,end=\" \")\nelse:\n    print(\"Exec\",end=\" \")",
    "options": ["Exec", "4 6 8 2 0", "4 6 8 2 0 Exec", "No Output"],
    "correctAnswer": 0,
    "explanation": "The continue skips print() for even numbers. The else executes after loop completion."
  },
  {
    "id": 3,
    "question": "Which of the following code snippet is accessing the instance variables not class variables?",
    "options": [
      "Using self in the classes\nclass flow:\n    def __init__(self,name,id):\n        self.name = name\n        self.id = id\ns = flow(\"Test\",3)\nprint(s.name)",
      "Using getattr() function\nclass flow:\n    name = \"Test!\"\n    id = 3\ns = flow()\nprint(getattr(s, 'name'))"
    ],
    "correctAnswer": 0,
    "explanation": "Option A uses instance variables (self.name), while Option B accesses class variables."
  },
  {
    "id": 4,
    "question": "What would be the output of the following program?\nclass A:\n    def __init__(self,x,y):\n        self.x = x\n        self.y = y\n    def __str__(self):\n        return 1\n    def __eq__(self,other):\n        return self.x * self.y == other.x * other.y\nobj1 = A(9,8)\nobj2 = A(8,9)\nprint(obj1 == obj2)",
    "options": ["False", "1", "True", "Error"],
    "correctAnswer": 2,
    "explanation": "The __eq__ method compares products (9*8 == 8*9), which are equal (72 == 72)."
  },
  {
    "id": 5,
    "question": "What would be the output of the following program?\nclass Football:\n    final_res = \"lose\"\n    def __init__(self,name,score):\n        self.name = name\n        self.score = score\n        self.final_res = \"lose\"\n    def cal(self,winning_score):\n        if self.score > winning_score:\n            self.final_score = \"win\"\nmatch = Football(\"Juventus\",3)\nmatch.cal(2)\nprint(Football.final_res,match.final_res)",
    "options": ["lose lose", "lose win", "win lose", "win win"],
    "correctAnswer": 0,
    "explanation": "The class variable final_res remains 'lose'. The instance variable final_res is never changed (final_score is set instead)."
  },
  {
    "id": 6,
    "question": "Which of the following statements is incorrect about the following code?\nclass People():\n    def __init__(self,name):\n        self.name = name\n    def namePrint(self):\n        print(self.name)\nperson1 = People(\"Rohit\")\nperson2 = People(\"Aman\")\nperson1.namePrint()",
    "options": [
      "person1 and person2 are two different instances of the People class",
      "The __init__ method is used to set initial values for attributes",
      "'self' is not needed in def namePrint(self):",
      "person2 has a different value for 'name' than person1"
    ],
    "correctAnswer": 2,
    "explanation": "self is required in instance methods to access instance attributes."
  },
  {
    "id": 7,
    "question": "What would be the output of the following snippet?\nclass A:\n    def __init__(self,a=1):\n        self.a = a\nclass B(A):\n    def __init__(self,b=2):\n        super().__init__()\n        self.b = b\ndef main():\n    obj = B()\n    print(obj.a,obj.b)\nmain()",
    "options": ["1 1", "Error, wrongly invoked constructors", "1 2", "Runs with no output"],
    "correctAnswer": 2,
    "explanation": "super() calls A's __init__ setting a=1 (default), then B sets b=2."
  },
  {
    "id": 8,
    "question": "What would be the output of the following snippet?\nfunc = lambda x : x**1/2 * 2\na = []\ntst = [1,9,17,29,54,16,4,0]\ntst = [x for x in tst if x <=16]\nfor i in range(len(tst)):\n    a.append(func(tst[i]))\nprint(a)",
    "options": [
      "[1.0, 9.0, 16.0, 4.0, 0.0]",
      "[1.0, 9.0, 17.0, 29.0, 54.0, 16.0, 4.0, 0.0]",
      "[1.0, 9.0, 16.0, 4.0]",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "The lambda calculates (x^1)/2*2 = x. The list comprehension filters numbers ≤16."
  },
  {
    "id": 9,
    "question": "What would be the output of the following snippet?\ndef func():\n    global value\n    value = \"Local\"\nvalue = \"Global\"\nfunc()\nprint(value)",
    "options": ["Local", "Global", "None", "Error"],
    "correctAnswer": 0,
    "explanation": "The global keyword modifies the global variable 'value' inside the function."
  },
  {
    "id": 10,
    "question": "Which of the following statements are used in exception handling in python?",
    "options": ["Try", "Except", "Finally", "All of the above"],
    "correctAnswer": 3,
    "explanation": "Python uses try-except-finally blocks for exception handling."
  },
  {
    "id": 11,
    "question": "Which will be the datatype of the var in the below code snippet?\nvar = 10\nprint(type(var))\nvar = \"Hello\"\nprint(type(var))",
    "options": ["str and int", "int and int", "str and str", "int and str"],
    "correctAnswer": 3,
    "explanation": "Python is dynamically typed - var changes from int to str."
  },
  {
    "id": 12,
    "question": "What will be the output of the following Python code?\nmy_list1 = [1,2,3]\nmy_list2 = [4,5,6]\n[i*j for i in my_list1 for j in my_list2]",
    "options": [
      "[4, 8, 12, 5, 10, 15, 6, 12,18]",
      "[4, 10,18]",
      "[4, 5, 6, 8, 10, 12,12, 15, 18]",
      "[18, 12, 6, 15, 10, 5, 12, 8, 4]"
    ],
    "correctAnswer": 2,
    "explanation": "Nested list comprehension produces all combinations (1*4, 1*5,...,3*6)."
  },
  {
    "id": 13,
    "question": "Write the list comprehension to pick out only negative integers from a given list?",
    "options": [
      "[i<0 in List]",
      "[i for i<0 in List]",
      "[i in List for i<0]",
      "[i for i in List if i<0]"
    ],
    "correctAnswer": 3,
    "explanation": "Correct syntax is [item for item in iterable if condition]."
  },
  {
    "id": 14,
    "question": "What will be the output of the following code snippet?\nclass Animal:\n    def speak(self):\n        print(\"Animal speaks\")\nclass Dog(Animal):\n    def speak(self):\n        print(\"Dog barks\")\nobj = Dog()\nobj.speak()",
    "options": ["Animal Speaks", "Dog Speaks", "Dog barks", "Animal barks"],
    "correctAnswer": 2,
    "explanation": "Method overriding causes Dog's speak() to be called instead of Animal's."
  },
  {
    "id": 15,
    "question": "What is method overloading?",
    "options": [
      "The ability to define multiple methods with the same name but different parameters",
      "The ability to use a single method for multiple purposes",
      "The process of inheriting properties and behaviors from a parent class",
      "The process of restricting access to an object's components"
    ],
    "correctAnswer": 0,
    "explanation": "Python doesn't natively support overloading, but the concept refers to same-name methods with different signatures."
  },
  {
    "id": 16,
    "question": "What is an abstract class in OOP?",
    "options": [
      "A class that cannot have any methods or properties",
      "A class that cannot be instantiated and is meant to be subclassed",
      "A class that contains only static methods",
      "A class that implements all of its methods"
    ],
    "correctAnswer": 1,
    "explanation": "Abstract classes define interfaces that concrete subclasses must implement."
  },
  {
    "id": 17,
    "question": "What will be the output of the following code?\nclass A:\n    def method(self):\n        print(\"A's method\")\nclass B(A):\n    def method(self):\n        print(\"B's method\")\nclass C(B):\n    def method(self):\n        super().method()\nobj = C()\nobj.method()",
    "options": ["A's method", "B's method", "C's method", "Error"],
    "correctAnswer": 1,
    "explanation": "super() in C calls B's method(), not A's (due to method resolution order)."
  },
  {
    "id": 18,
    "question": "What will be the output of the following code?\nclass A:\n    var = \"A\"\n    def __init__(self):\n        self.var = \"A\"\n    def Class_A_Method(self):\n        self.var = \"I am also available in class A\"\nclass B(A):\n    var = \"I am here\"\n    def __init__(self):\n        super().__init__()\n        self.name = \"Python\"\n    def Class_B_Method(self):\n        self.var = \"I am in class B\"\nobj = B()\nprint(obj.var)",
    "options": [
      "\"A\"",
      "\"B\"",
      "\"I am here\"",
      "\"I am also available in class A\""
    ],
    "correctAnswer": 0,
    "explanation": "super().__init__() sets instance var to \"A\", overriding the class variable."
  },
  {
    "id": 19,
    "question": "What will be the output of the following code?\nclass A:\n    def __init__(self):\n        self._private = \"A's private\"\n    def get_private(self):\n        return self._private\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self._private = \"B's private\"\nobj = B()\nprint(obj.get_private())",
    "options": ["A's private", "B's private", "Error", "None"],
    "correctAnswer": 1,
    "explanation": "B's __init__ overrides the _private attribute after calling super().__init__()."
  },
  {
    "id": 20,
    "question": "Which of the following is a feature of polymorphism?",
    "options": [
      "Methods in a parent class are automatically available to its subclasses",
      "Objects can be processed differently depending on their data type or class",
      "A class can only have one method with a given name",
      "An object's state is hidden from other objects"
    ],
    "correctAnswer": 1,
    "explanation": "Polymorphism allows different classes to respond to the same method call differently."
  }
];