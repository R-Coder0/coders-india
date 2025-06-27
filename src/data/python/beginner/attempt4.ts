export const questions = [
  {
    "id": 1,
    "question": "What is the output?\n\ns = 'Python'\nprint(s[-1])",
    "options": [
      "P",
      "n",
      "o",
      "h"
    ],
    "correctAnswer": 1,
    "explanation": "Negative index -1 returns the last character, which is 'n'."
  },
  {
    "id": 2,
    "question": "What does this return?\n\n'abc' * 2",
    "options": [
      "abcabc",
      "abc",
      "abc2",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "String repetition using '*' results in 'abcabc'."
  },
  {
    "id": 3,
    "question": "What is the result of this?\n\ns = 'Python'\nprint(s[::2])",
    "options": [
      "Pyth",
      "Pto",
      "yhn",
      "Error"
    ],
    "correctAnswer": 1,
    "explanation": "The slice [::2] returns every second character, which is 'Pto'."
  },
  {
    "id": 4,
    "question": "What is the output?\n\nprint('Py' + 'thon')",
    "options": [
      "Python",
      "Py thon",
      "Error",
      "Py+thon"
    ],
    "correctAnswer": 0,
    "explanation": "String concatenation with '+' results in 'Python'."
  },
  {
    "id": 5,
    "question": "Which of the following is immutable?",
    "options": [
      "List",
      "Dictionary",
      "Set",
      "String"
    ],
    "correctAnswer": 3,
    "explanation": "Strings are immutable, meaning their value cannot be changed after creation."
  },
  {
    "id": 6,
    "question": "What does s.capitalize() do?",
    "options": [
      "Capitalizes every word",
      "Converts all to uppercase",
      "Capitalizes first character",
      "No effect"
    ],
    "correctAnswer": 2,
    "explanation": "The 'capitalize()' method capitalizes the first character of the string."
  },
  {
    "id": 7,
    "question": "What is the result of:\n\ns = 'Data'\nprint(s.find('a'))",
    "options": [
      "1",
      "2",
      "0",
      "-1"
    ],
    "correctAnswer": 0,
    "explanation": "The 'find()' method returns the index of the first occurrence of 'a', which is 1."
  },
  {
    "id": 8,
    "question": "Which method checks if all characters are digits?",
    "options": [
      "isdigit()",
      "isnumber()",
      "hasdigit()",
      "finddigit()"
    ],
    "correctAnswer": 0,
    "explanation": "The 'isdigit()' method checks if all characters in the string are digits."
  },
  {
    "id": 9,
    "question": "What is the output?\n\ns = ' Hello '\nprint(s.strip())",
    "options": [
      "Hello",
      "' Hello '",
      "'Hello '",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "The 'strip()' method removes leading and trailing whitespace, so the result is 'Hello'."
  },
  {
    "id": 10,
    "question": "What will this print?\n\ns = 'Python'\nprint(s[1:4])",
    "options": [
      "yth",
      "ytho",
      "ythn",
      "ythn"
    ],
    "correctAnswer": 0,
    "explanation": "Slicing from index 1 to 3 (4 not included) gives 'yth'."
  },
  {
    "id": 11,
    "question": "What is the result of:\n\n'Hello'.replace('l', 'L', 1)",
    "options": [
      "HeLLo",
      "HeLlo",
      "HeLLl",
      "HeLLL"
    ],
    "correctAnswer": 1,
    "explanation": "The replace() method replaces only the first occurrence of 'l' with 'L', resulting in 'HeLlo'."
  },
  {
    "id": 12,
    "question": "Which one returns True?\n\n'123abc'.isalnum()",
    "options": [
      "True",
      "False",
      "Error",
      "Depends on Python version"
    ],
    "correctAnswer": 0,
    "explanation": "The isalnum() method returns True if the string is alphanumeric."
  },
  {
    "id": 13,
    "question": "What is the output?\n\nprint('python'.upper().isupper())",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "The 'upper()' method converts the string to uppercase, and 'isupper()' checks if the string is in uppercase, which returns True."
  },
  {
    "id": 14,
    "question": "What is the result of:\n\ns = 'abcde'\nprint(s[::-1])",
    "options": [
      "edcba",
      "abcde",
      "error",
      "abc"
    ],
    "correctAnswer": 0,
    "explanation": "The slice[::-1] reverses the string, so the result is 'edcba'."
  },
  {
    "id": 15,
    "question": "What will this return?\n\n''.join(['a', 'b', 'c'])",
    "options": [
      "a b c",
      "abc",
      "['a', 'b', 'c']",
      "a+b+c"
    ],
    "correctAnswer": 1,
    "explanation": "The join() method joins the elements of the list with an empty string, resulting in 'abc'."
  },
  {
    "id": 16,
    "question": "What is the output?\n\ns = 'hello world'\nprint(s.title())",
    "options": [
      "Hello World",
      "HELLO WORLD",
      "Hello world",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "The 'title()' method capitalizes the first letter of each word, resulting in 'Hello World'."
  },
  {
    "id": 17,
    "question": "Which one is not a valid string method?",
    "options": [
      "startswith()",
      "ends()",
      "isdigit()",
      "find()"
    ],
    "correctAnswer": 1,
    "explanation": "The 'ends()' method is not a valid string method in Python."
  },
  {
    "id": 18,
    "question": "How are strings stored in memory?",
    "options": [
      "As mutable sequences",
      "As linked lists",
      "As immutable sequences",
      "As arrays"
    ],
    "correctAnswer": 2,
    "explanation": "Strings in Python are immutable sequences, meaning they cannot be modified after creation."
  },
  {
    "id": 19,
    "question": "What does s.count('a') return?\n\ns = 'banana'",
    "options": [
      "2",
      "3",
      "1",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "The count() method returns the number of occurrences of 'a' in 'banana', which is 3."
  },
  {
    "id": 20,
    "question": "What does this output?\n\nprint('ab' in 'abc')",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "The 'in' operator checks if 'ab' is a substring of 'abc', which is True."
  }
];
