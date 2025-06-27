export const questions = [
  {
    "id": 1,
    "question": "What is the output?\n\nif None:\n    print('Yes')\nelse:\n    print('No')",
    "options": [
      "Yes",
      "No",
      "None",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "None is treated as False in conditions, so the 'else' block is executed and 'No' is printed."
  },
  {
    "id": 2,
    "question": "What will this code print?\n\nx = 10\nif x > 5:\n    print('A')\nelif x > 2:\n    print('B')\nelse:\n    print('C')",
    "options": [
      "A",
      "B",
      "C",
      "A and B"
    ],
    "correctAnswer": 0,
    "explanation": "Only the first matching block in if-elif-else is executed, so 'A' is printed."
  },
  {
    "id": 3,
    "question": "What is the output?\n\nfor i in range(3):\n    print(i, end=', ')\nelse:\n    print('Done')",
    "options": [
      "0, 1, 2, Done",
      "Done",
      "0 1 2",
      "0, 1, 2"
    ],
    "correctAnswer": 0,
    "explanation": "The else of a for loop runs after normal completion, so 'Done' is printed after the loop finishes."
  },
  {
    "id": 4,
    "question": "What is the output of the following?\n\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1\nelse:\n    print('Done')",
    "options": [
      "0 1 2",
      "0 1 2 Done",
      "Done",
      "Infinite loop"
    ],
    "correctAnswer": 1,
    "explanation": "The while loop runs until count reaches 3, then prints 'Done' from the else block."
  },
  {
    "id": 5,
    "question": "What will this print?\n\nx = 5\nif x == 5:\n    pass\nprint('Hello')",
    "options": [
      "Error",
      "Hello",
      "Nothing",
      "pass"
    ],
    "correctAnswer": 1,
    "explanation": "The 'pass' statement does nothing, so 'Hello' is printed."
  },
  {
    "id": 6,
    "question": "Choose the correct syntax:",
    "options": [
      "if x == 5 then:",
      "if x = 5:",
      "if (x == 5)",
      "if x == 5:"
    ],
    "correctAnswer": 3,
    "explanation": "The correct syntax for an if statement is 'if x == 5:'."
  },
  {
    "id": 7,
    "question": "What is the result?\n\nfor i in range(1, 10, 3):\n    print(i, end=' ')",
    "options": [
      "1 4 7",
      "1 2 3 4",
      "1 3 6 9",
      "1 4 7 10"
    ],
    "correctAnswer": 0,
    "explanation": "Start = 1, step = 3, stop before 10, so the result is '1 4 7'."
  },
  {
    "id": 8,
    "question": "What does break do?",
    "options": [
      "Exits entire program",
      "Continues next iteration",
      "Exits current loop",
      "Skips current block"
    ],
    "correctAnswer": 2,
    "explanation": "The 'break' statement exits the current loop."
  },
  {
    "id": 9,
    "question": "What does this code do?\n\nx = 10\nwhile x:\n    print(x)\n    x -= 2",
    "options": [
      "Infinite loop",
      "Prints 10, 8, 6, 4, 2",
      "Prints 10, 8, 6, 4, 2, 0",
      "Syntax error"
    ],
    "correctAnswer": 2,
    "explanation": "The loop runs while x is not zero, printing 10, 8, 6, 4, 2, 0."
  },
  {
    "id": 10,
    "question": "What does this print?\n\nfor i in range(3):\n    for j in range(2):\n        if i == 1:\n            break\n        print(i, j)",
    "options": [
      "All combinations of i and j",
      "Only i = 1",
      "Partial nested loop",
      "Skips entire outer loop"
    ],
    "correctAnswer": 2,
    "explanation": "The 'break' only exits the inner loop when i == 1, so it prints '0 0', '0 1'."
  },
  {
    "id": 11,
    "question": "What is the output?\n\nfor i in range(3):\n    continue\n    print('Hello')",
    "options": [
      "Hello Hello Hello",
      "Nothing",
      "Error",
      "continue"
    ],
    "correctAnswer": 1,
    "explanation": "The 'continue' statement skips the print() statement, so nothing is printed."
  },
  {
    "id": 12,
    "question": "What is else used for in loops?",
    "options": [
      "Executes if loop is not entered",
      "Executes only if loop breaks",
      "Executes when loop completes normally",
      "Executes when condition is false"
    ],
    "correctAnswer": 2,
    "explanation": "The 'else' block in loops executes after the loop completes normally (not via a 'break')."
  },
  {
    "id": 13,
    "question": "What is the output?\n\nx = [0]\nif x:\n    print('True')\nelse:\n    print('False')",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "Non-empty lists are considered True in Python, so 'True' is printed."
  },
  {
    "id": 14,
    "question": "Which is an invalid loop?",
    "options": [
      "for x in range(5):",
      "while True:",
      "while x => 0:",
      "for i in 'abc':"
    ],
    "correctAnswer": 2,
    "explanation": "The operator '=>' is invalid. Use '>=' instead."
  },
  {
    "id": 15,
    "question": "What does this print?\n\nx = 0\nwhile x < 3:\n    x += 1\n    if x == 2:\n        continue\n    print(x)",
    "options": [
      "1 2 3",
      "1 3",
      "2 3",
      "1 2"
    ],
    "correctAnswer": 1,
    "explanation": "The 'continue' statement skips the print when x equals 2, so it prints '1 3'."
  },
  {
    "id": 16,
    "question": "Output of:\n\nfor i in range(5):\n    if i == 2:\n        break\n    print(i)",
    "options": [
      "0 1 2",
      "0 1",
      "0",
      "1 2"
    ],
    "correctAnswer": 1,
    "explanation": "The 'break' exits the loop when i equals 2, so the output is '0 1'."
  },
  {
    "id": 17,
    "question": "What is pass used for?",
    "options": [
      "Terminate loop",
      "Skip next iteration",
      "Placeholder",
      "Exit function"
    ],
    "correctAnswer": 2,
    "explanation": "The 'pass' statement is a placeholder that does nothing."
  },
  {
    "id": 18,
    "question": "Can an else be used with while?",
    "options": [
      "No",
      "Only with if",
      "Yes",
      "Syntax error"
    ],
    "correctAnswer": 2,
    "explanation": "An 'else' can be used with a while loop and executes when the loop completes normally."
  },
  {
    "id": 19,
    "question": "Which loop is best when number of iterations is known?",
    "options": [
      "while",
      "do-while",
      "for",
      "if"
    ],
    "correctAnswer": 2,
    "explanation": "The 'for' loop is best when the number of iterations is known."
  },
  {
    "id": 20,
    "question": "What is the output?\n\nx = 1\nwhile x < 10:\n    if x % 2 == 0:\n        print(x)\n    x += 1",
    "options": [
      "Even numbers 1 to 10",
      "2 4 6 8",
      "1 3 5 7",
      "All numbers"
    ],
    "correctAnswer": 1,
    "explanation": "The loop prints the even numbers 2, 4, 6, and 8."
  }
];
