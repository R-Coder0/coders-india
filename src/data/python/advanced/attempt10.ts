export const questions = [
  // Networking Questions
  {
    "id": 1,
    "question": "What function is used to specify the maximum number of connections that a server can handle at once?",
    "options": [
      "listen()",
      "accept()",
      "bind()",
      "connect()"
    ],
    "correctAnswer": 0,
    "explanation": "The listen() method takes a backlog parameter that specifies the maximum number of queued connections."
  },
  {
    "id": 2,
    "question": "How does a server know when to stop listening for incoming connections in a simple Python socket program?",
    "options": [
      "The server stops listening after a specified number of connections.",
      "The server continues listening until an exception occurs.",
      "The server stops listening after receiving a specific type of message from the client.",
      "The server listens indefinitely until manually interrupted."
    ],
    "correctAnswer": 3,
    "explanation": "Basic server implementations typically run in an infinite loop (while True) until manually stopped or an unhandled exception occurs."
  },
  {
    "id": 3,
    "question": "Which of the following methods in the Python socket module is used to specify the type of socket (e.g., TCP or UDP)?",
    "options": [
      "socket.type()",
      "socket.SOCK_STREAM()",
      "socket.socket()",
      "socket.AF_INET()"
    ],
    "correctAnswer": 2,
    "explanation": "socket.socket() takes parameters like socket.AF_INET and socket.SOCK_STREAM to specify the address family and socket type."
  },
  {
    "id": 4,
    "question": "In a server-client application, how would you send data from the client to the server using a socket?",
    "options": [
      "By using the server.send() function",
      "By using the client.send() function",
      "By using the client.receive() function",
      "By using the client.connect() function"
    ],
    "correctAnswer": 1,
    "explanation": "After establishing a connection, the client uses send() on its socket object to transmit data to the server."
  },
  {
    "id": 5,
    "question": "What type of socket is typically used for a server to send data over a network in a simple client-server application in Python?",
    "options": [
      "SOCK_DGRAM",
      "SOCK_STREAM",
      "SOCK_RAW",
      "SOCK_SEQPACKET"
    ],
    "correctAnswer": 1,
    "explanation": "SOCK_STREAM provides sequenced, reliable, two-way connection-based byte streams (TCP). SOCK_DGRAM is for UDP."

  // Unit Testing Questions
  },
  {
    "id": 6,
    "question": "What is the primary purpose of unit testing?",
    "options": [
      "To test the overall functionality of the software",
      "To test individual components or units of code for correctness",
      "To test the user interface",
      "To ensure the software works on all devices"
    ],
    "correctAnswer": 1,
    "explanation": "Unit testing focuses on verifying the smallest testable parts (units) of an application in isolation."
  },
  {
    "id": 7,
    "question": "Which module is used in Python for writing unit tests?",
    "options": [
      "test",
      "unittest",
      "pytest",
      "assert"
    ],
    "correctAnswer": 1,
    "explanation": "unittest is Python's built-in testing framework, though pytest is a popular third-party alternative."
  },
  {
    "id": 8,
    "question": "What is the function used to run all the test cases in a test suite?",
    "options": [
      "run_tests()",
      "unittest.main()",
      "test_suite()",
      "execute_tests()"
    ],
    "correctAnswer": 1,
    "explanation": "unittest.main() provides a command-line interface to run all test cases in a module."
  },
  {
    "id": 9,
    "question": "In unit testing, what is typically tested?",
    "options": [
      "The integration of modules",
      "The interactions between systems",
      "A single unit or function of the code",
      "The user interface components"
    ],
    "correctAnswer": 2,
    "explanation": "Unit tests verify individual functions/methods in isolation from dependencies."
  },
  {
    "id": 10,
    "question": "Which of the following is NOT a valid assertion method in Python's unittest module?",
    "options": [
      "assertEqual()",
      "assertNotEqual()",
      "assertTrue()",
      "assertMatch()"
    ],
    "correctAnswer": 3,
    "explanation": "assertMatch() doesn't exist in unittest. The closest is assertRegex()."
  },
  {
    "id": 11,
    "question": "What does the setUp() method do in unit testing?",
    "options": [
      "It runs before each test method to set up any state required for the tests.",
      "It runs after all test methods are completed.",
      "It resets the test environment after each test case.",
      "It sets up the final test result."
    ],
    "correctAnswer": 0,
    "explanation": "setUp() prepares the test fixture - objects and resources needed for testing."
  },
  {
    "id": 12,
    "question": "What does the tearDown() method do in unit testing?",
    "options": [
      "It sets up the test environment before each test case.",
      "It runs after each test method to clean up the test environment.",
      "It initializes all test cases.",
      "It validates the results after each test case."
    ],
    "correctAnswer": 1,
    "explanation": "tearDown() releases resources allocated in setUp(), like closing files or database connections."
  },
  {
    "id": 13,
    "question": "What is a test suite in unit testing?",
    "options": [
      "A collection of test cases to be executed together",
      "A single test case",
      "A method for cleaning up the test environment",
      "A set of assertions to be used in test cases"
    ],
    "correctAnswer": 0,
    "explanation": "Test suites group related test cases for organized execution and reporting."
  },
  {
    "id": 14,
    "question": "What is the output of a test case if an assertion fails in Python's unittest module?",
    "options": [
      "Test case passes",
      "Test case is skipped",
      "Test case fails with an error message",
      "The program terminates"
    ],
    "correctAnswer": 2,
    "explanation": "Failed assertions raise AssertionError which unittest reports as test failures with details."
  },
  {
    "id": 15,
    "question": "What is the correct way to create a unit test in Python?",
    "options": [
      "By defining a function that starts with test_",
      "By subclassing unittest.TestCase and defining methods that start with test_",
      "By using the unittest.create() method",
      "By writing a separate script to test the modules"
    ],
    "correctAnswer": 1,
    "explanation": "Test classes inherit from unittest.TestCase with test_* methods containing assertions."
  },
  {
    "id": 16,
    "question": "In test-driven development (TDD), when do you write tests?",
    "options": [
      "After implementing the code",
      "Before implementing the code",
      "At the same time as the code",
      "Only when the code is completely done"
    ],
    "correctAnswer": 1,
    "explanation": "TDD follows red-green-refactor: write failing tests first, then implement to pass them."
  },
  {
    "id": 17,
    "question": "What is the first step in test-driven development (TDD)?",
    "options": [
      "Write the code",
      "Write a failing test",
      "Run the tests",
      "Refactor the code"
    ],
    "correctAnswer": 1,
    "explanation": "Start by writing a test that defines a function/module that doesn't exist yet (red phase)."
  },
  {
    "id": 18,
    "question": "After writing the test in TDD, what is the next step?",
    "options": [
      "Refactor the code",
      "Write more tests",
      "Implement just enough code to make the test pass",
      "Submit the code"
    ],
    "correctAnswer": 2,
    "explanation": "Write minimal implementation to pass the test (green phase), then refactor if needed."
  },
  {
    "id": 19,
    "question": "In TDD, after making the test pass, what is the next step?",
    "options": [
      "Refactor the code to improve it while keeping the tests passing",
      "Ignore the results and write new code",
      "Remove all test cases",
      "Write the final report"
    ],
    "correctAnswer": 0,
    "explanation": "Refactoring improves code structure without changing behavior (tests should still pass)."
  },
  {
    "id": 20,
    "question": "What does the principle of \"red, green, refactor\" mean in TDD?",
    "options": [
      "Write a failing test (red), make it pass (green), then refactor the code",
      "Write all tests first, then execute them",
      "Refactor the code and test it in one step",
      "Write code until it passes all tests, then move on"
    ],
    "correctAnswer": 0,
    "explanation": "This cycle ensures tests drive development while maintaining clean, working code."
  }
];