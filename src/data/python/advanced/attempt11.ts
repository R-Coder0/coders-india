export const questions = [
  {
    "id": 1,
    "question": "Which of the following is the best practice in TDD?",
    "options": [
      "Write long, detailed test cases at the start",
      "Write tests that are small, fast, and easy to maintain",
      "Skip writing tests for small changes",
      "Focus only on writing the code, not tests"
    ],
    "correctAnswer": 1,
    "explanation": "TDD emphasizes small, focused tests that run quickly and are easy to understand and maintain."
  },
  {
    "id": 2,
    "question": "What does the assertEqual() method in unittest check?",
    "options": [
      "That two values are different",
      "That two values are equal",
      "That one value is greater than the other",
      "That a value is not None"
    ],
    "correctAnswer": 1,
    "explanation": "assertEqual(a, b) verifies that a == b, failing the test if they're not equal."
  },
  {
    "id": 3,
    "question": "Which of the following test result codes means a test passed successfully?",
    "options": [
      ". (dot)",
      "F (failure)",
      "E (error)",
      "S (skipped)"
    ],
    "correctAnswer": 0,
    "explanation": "unittest displays a dot (.) for each passing test, F for failures, E for errors, and S for skipped tests."
  },
  {
    "id": 4,
    "question": "How do you execute unit tests in Python?",
    "options": [
      "Using the run() function",
      "Using the python -m unittest command",
      "Using the unittest keyword",
      "Using execute_tests()"
    ],
    "correctAnswer": 1,
    "explanation": "The standard way to run tests is via command line with 'python -m unittest' or by calling unittest.main()."
  },
  {
    "id": 5,
    "question": "What is Test-Driven Development (TDD)?",
    "options": [
      "A software development process where code is written before tests",
      "A testing methodology that uses only manual testing",
      "A development approach where tests are written before code",
      "A way to test only completed code"
    ],
    "correctAnswer": 2,
    "explanation": "TDD follows the red-green-refactor cycle: write failing tests first, then implement code to pass them."
  },
  {
    "id": 6,
    "question": "What happens if a test case fails in unittest?",
    "options": [
      "The whole test suite fails",
      "An error message is displayed for the failed test",
      "The test case is skipped automatically",
      "It moves to the next test case without any output"
    ],
    "correctAnswer": 1,
    "explanation": "Failed tests show detailed error messages while allowing other tests to continue running."
  },
  {
    "id": 7,
    "question": "Which of the following methods is used to run all the tests in a module with unittest?",
    "options": [
      "unittest.run()",
      "unittest.main()",
      "unittest.execute()",
      "run_all_tests()"
    ],
    "correctAnswer": 1,
    "explanation": "unittest.main() provides a command-line interface to discover and run all test cases in a module."
  },
  {
    "id": 8,
    "question": "In the context of unit testing, what is mocking?",
    "options": [
      "Replacing a function or object with a mock version for testing purposes",
      "Writing tests that simulate real user inputs",
      "Writing tests for the user interface",
      "Writing complex integration tests"
    ],
    "correctAnswer": 0,
    "explanation": "Mock objects simulate real objects' behavior for isolated testing of components."
  },
  {
    "id": 9,
    "question": "What is the purpose of the assertTrue() method in unit testing?",
    "options": [
      "To check if a condition is False",
      "To check if two values are equal",
      "To check if a condition is True",
      "To compare two values for inequality"
    ],
    "correctAnswer": 2,
    "explanation": "assertTrue(x) verifies that x evaluates to True in a boolean context."
  },
  {
    "id": 10,
    "question": "Which method is used to skip a test in unittest?",
    "options": [
      "skipTest()",
      "ignoreTest()",
      "skip()",
      "bypass()"
    ],
    "correctAnswer": 0,
    "explanation": "self.skipTest(reason) or @unittest.skip decorator marks tests to be skipped."
  },
  {
    "id": 11,
    "question": "Which of the following best describes the goal of writing unit tests?",
    "options": [
      "To improve code performance",
      "To test small parts of the code to ensure they work as expected",
      "To automate all testing for large systems",
      "To test user interfaces"
    ],
    "correctAnswer": 1,
    "explanation": "Unit tests verify individual components in isolation from dependencies."
  },
  {
    "id": 12,
    "question": "How can you assert that two values are not equal in Python's unittest module?",
    "options": [
      "assertNotEqual()",
      "assertInequal()",
      "assertDifferent()",
      "assertFalse()"
    ],
    "correctAnswer": 0,
    "explanation": "assertNotEqual(a, b) checks that a != b, failing if they are equal."
  },
  {
    "id": 13,
    "question": "What is the role of the TestCase class in unit testing?",
    "options": [
      "It provides methods for setting up and tearing down test environments.",
      "It provides methods to define and execute test cases.",
      "It helps in creating complex mock objects.",
      "It checks if the code works across different platforms."
    ],
    "correctAnswer": 1,
    "explanation": "TestCase is the base class containing test methods and assertion utilities."
  },
  {
    "id": 14,
    "question": "Which of the following best describes the Test-First principle of TDD?",
    "options": [
      "Write tests only after implementing the code.",
      "Write tests before writing the code and make them pass.",
      "Write tests while coding to ensure faster results.",
      "Write all tests after coding is completed."
    ],
    "correctAnswer": 1,
    "explanation": "TDD requires writing failing tests first, then implementing just enough code to pass them."
  },
  {
    "id": 15,
    "question": "What is a common challenge when writing unit tests for code that interacts with external systems (e.g., databases or APIs)?",
    "options": [
      "It's difficult to ensure tests are not dependent on the network or external services.",
      "It takes a long time to manually test interactions.",
      "It's easy to handle as external systems are well-supported by unittest.",
      "All external interactions can be tested using mock libraries."
    ],
    "correctAnswer": 0,
    "explanation": "External dependencies make tests slow and unreliable, hence the need for mocking."
  },
  {
    "id": 16,
    "question": "How do you indicate that a test case is expected to fail in unittest?",
    "options": [
      "Use @expectedFailure decorator",
      "Use @skipTest() decorator",
      "Write an assertFail() condition",
      "Write the test without assertions"
    ],
    "correctAnswer": 0,
    "explanation": "@unittest.expectedFailure marks tests that are known to fail (e.g., for not-yet-fixed bugs)."
  },
  {
    "id": 17,
    "question": "Which of the following is an advantage of using Test-Driven Development (TDD)?",
    "options": [
      "Faster development due to fewer test cases",
      "More tests that ensure the code is correct and free of bugs",
      "Easier debugging due to absence of code",
      "Lower code complexity"
    ],
    "correctAnswer": 1,
    "explanation": "TDD produces comprehensive test coverage and helps catch bugs early."
  },
  {
    "id": 18,
    "question": "How would you group tests in Python's unittest module?",
    "options": [
      "By organizing tests in separate files",
      "By using test suites",
      "By writing functions inside the setUp() method",
      "By using the group() function"
    ],
    "correctAnswer": 1,
    "explanation": "TestSuite objects collect related test cases for organized execution."
  },
  {
    "id": 19,
    "question": "What is the purpose of the assertIn() method in unit testing?",
    "options": [
      "To check if a value is not present in a sequence",
      "To check if two values are equal",
      "To check if a value is present in a sequence",
      "To check if a value is True"
    ],
    "correctAnswer": 2,
    "explanation": "assertIn(a, b) verifies that a is in b (where b is a container)."
  },
  {
    "id": 20,
    "question": "What does TDD stand for?",
    "options": [
      "Test Defined Development",
      "Time Driven Development",
      "Test-Driven Development",
      "Task-Driven Development"
    ],
    "correctAnswer": 2,
    "explanation": "TDD stands for Test-Driven Development, a software development methodology."
  }
];