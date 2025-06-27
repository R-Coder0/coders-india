export const questions = [
  {
    "id": 1,
    "question": "What is the output of the following code?\n\nprint(2 ** 3 ** 2)",
    "options": [
      "512",
      "64",
      "256",
      "36"
    ],
    "correctAnswer": 0,
    "explanation": "Exponentiation is right-to-left, so it's 2 ** (3 ** 2) → 2 ** 9 → 512."
  },
  {
    "id": 2,
    "question": "What is the result of this expression?\n\n5 + 3 * 2",
    "options": [
      "16",
      "11",
      "13",
      "10"
    ],
    "correctAnswer": 1,
    "explanation": "Multiplication has higher precedence than addition, so the result is 5 + (3 * 2) = 11."
  },
  {
    "id": 3,
    "question": "Which of the following evaluates to True?",
    "options": [
      "10 == '10'",
      "'abc' < 'ABC'",
      "True and False",
      "10 != '10'"
    ],
    "correctAnswer": 3,
    "explanation": "10 != '10' evaluates to True because an integer 10 is not equal to the string '10'."
  },
  {
    "id": 4,
    "question": "What is the result of 10 // 3?",
    "options": [
      "3.33",
      "3",
      "3.0",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "// is integer division, so 10 // 3 equals 3."
  },
  {
    "id": 5,
    "question": "Which operator is used for identity comparison?",
    "options": [
      "==",
      "is",
      ":=",
      "!="
    ],
    "correctAnswer": 1,
    "explanation": "The 'is' operator is used for identity comparison to check if two variables refer to the same object in memory."
  },
  {
    "id": 6,
    "question": "What does this expression return?\n\nTrue + False + True",
    "options": [
      "True",
      "2",
      "1",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "True is 1 and False is 0 → 1 + 0 + 1 = 2."
  },
  {
    "id": 7,
    "question": "Which of these is a logical operator?",
    "options": [
      "&",
      "|",
      "not",
      "~"
    ],
    "correctAnswer": 2,
    "explanation": "In Python, 'not', 'and', and 'or' are logical operators."
  },
  {
    "id": 8,
    "question": "What will 5 & 3 return?",
    "options": [
      "1",
      "3",
      "7",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "Bitwise AND of 0101 & 0011 → 0001 → 1."
  },
  {
    "id": 9,
    "question": "What will this return?\n\n5 << 1",
    "options": [
      "10",
      "2",
      "0",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Left shift multiplies by 2: 5 * 2 = 10."
  },
  {
    "id": 10,
    "question": "What is the output of:\n\nx = 5\nx += 3\nprint(x)",
    "options": [
      "5",
      "3",
      "8",
      "Error"
    ],
    "correctAnswer": 2,
    "explanation": "The '+=' operator adds 3 to the value of x, so the result is 8."
  },
  {
    "id": 11,
    "question": "What is the output of this comparison?\n\n[1, 2] == [1, 2]",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "The '==' operator compares the content of the lists, so it evaluates to True."
  },
  {
    "id": 12,
    "question": "Which of the following statements is false?",
    "options": [
      "and returns the first falsy value or the last value",
      "or returns the first truthy value",
      "not returns True if operand is falsy",
      "not can return integers"
    ],
    "correctAnswer": 3,
    "explanation": "The 'not' operator always returns a Boolean value, not integers."
  },
  {
    "id": 13,
    "question": "What does the expression '5' + 5 return?",
    "options": [
      "10",
      "'55'",
      "Error",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "You cannot add a string and an integer directly. It will raise a TypeError."
  },
  {
    "id": 14,
    "question": "What does 7 % -3 return?",
    "options": [
      "1",
      "-1",
      "2",
      "-2"
    ],
    "correctAnswer": 3,
    "explanation": "Python’s modulo result has the same sign as the divisor, so 7 % -3 returns -2."
  },
  {
    "id": 15,
    "question": "Which operator is used for floor division?",
    "options": [
      "%",
      "//",
      "/",
      "\\"
    ],
    "correctAnswer": 1,
    "explanation": "The '//' operator is used for floor division in Python."
  },
  {
    "id": 16,
    "question": "What is the output?\n\na = 10\nb = 20\nprint(a > 5 and b < 30)",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "Both conditions are true, so the result is True."
  },
  {
    "id": 17,
    "question": "What will this return?\n\nnot 0",
    "options": [
      "0",
      "1",
      "True",
      "False"
    ],
    "correctAnswer": 2,
    "explanation": "0 is falsy, so 'not' inverts it to True."
  },
  {
    "id": 18,
    "question": "Which is not a comparison operator?",
    "options": [
      "!=",
      ">=",
      "<>",
      "is"
    ],
    "correctAnswer": 2,
    "explanation": "<> is invalid in Python 3. Use != instead."
  },
  {
    "id": 19,
    "question": "What does this return?\n\n1 < 2 < 3",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "Chained comparisons are allowed in Python, so 1 < 2 < 3 evaluates to True."
  },
  {
    "id": 20,
    "question": "What is the result of:\n\n(4 > 2) + (3 == 3) + (2 < 1)",
    "options": [
      "1",
      "2",
      "3",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "True (1) + True (1) + False (0) = 2."
  }
];
