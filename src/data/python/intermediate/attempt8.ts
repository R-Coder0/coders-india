export const questions = [
  {
    "id": 1,
    "question": "What does the open() function do in Python?",
    "options": [
      "Creates a file",
      "Opens a file for reading, writing, or appending",
      "Closes a file",
      "Deletes a file"
    ],
    "correctAnswer": 1,
    "explanation": "The open() function is used to open a file for reading, writing, or appending."
  },
  {
    "id": 2,
    "question": "What is the default mode for the open() function?",
    "options": [
      "'w'",
      "'a'",
      "'r'",
      "'x'"
    ],
    "correctAnswer": 2,
    "explanation": "The default mode for open() is 'r', which stands for reading the file."
  },
  {
    "id": 3,
    "question": "What mode is used to write to a file, creating it if it doesn't exist?",
    "options": [
      "'r'",
      "'x'",
      "'a'",
      "'w'"
    ],
    "correctAnswer": 3,
    "explanation": "'w' mode is used for writing to a file, and it creates the file if it doesn't exist."
  },
  {
    "id": 4,
    "question": "What does the 'a' mode do in open()?",
    "options": [
      "Deletes existing content and writes new content",
      "Appends new data to the end of the file",
      "Reads data from the beginning",
      "Opens file in binary mode"
    ],
    "correctAnswer": 1,
    "explanation": "'a' mode appends new data to the end of the file."
  },
  {
    "id": 5,
    "question": "Which method is used to read the entire contents of a text file?",
    "options": [
      "file.get()",
      "file.fetch()",
      "file.read()",
      "file.input()"
    ],
    "correctAnswer": 2,
    "explanation": "The 'file.read()' method is used to read the entire contents of a text file."
  },
  {
    "id": 6,
    "question": "What does the file.readline() method return?",
    "options": [
      "A list of all lines",
      "The entire file",
      "One line from the file",
      "The file path"
    ],
    "correctAnswer": 2,
    "explanation": "The file.readline() method reads one line from the file."
  },
  {
    "id": 7,
    "question": "Which method is used to write data to a file?",
    "options": [
      "file.save()",
      "file.append()",
      "file.write()",
      "file.insert()"
    ],
    "correctAnswer": 2,
    "explanation": "The 'file.write()' method is used to write data to a file."
  },
  {
    "id": 8,
    "question": "What does the 'x' mode do in the open() function?",
    "options": [
      "Opens file for reading only",
      "Opens file for exclusive creation",
      "Opens file for appending",
      "Opens file in binary"
    ],
    "correctAnswer": 1,
    "explanation": "'x' mode opens the file for exclusive creation, failing if the file already exists."
  },
  {
    "id": 9,
    "question": "What is the benefit of using the with block for file operations?",
    "options": [
      "It improves speed",
      "It keeps file open",
      "It automatically closes the file",
      "It creates new files"
    ],
    "correctAnswer": 2,
    "explanation": "Using the 'with' block ensures that the file is automatically closed after the block is executed."
  },
  {
    "id": 10,
    "question": "Which method is used to close an open file?",
    "options": [
      "stop()",
      "file.close()",
      "file.exit()",
      "file.shutdown()"
    ],
    "correctAnswer": 1,
    "explanation": "The 'file.close()' method is used to close an open file."
  },
  {
    "id": 11,
    "question": "What is the output of file.readlines()?",
    "options": [
      "A dictionary of all lines",
      "A string of all lines",
      "A list of all lines",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "The 'file.readlines()' method returns a list of all lines in the file."
  },
  {
    "id": 12,
    "question": "Which mode is used to open a binary file for reading?",
    "options": [
      "'rb'",
      "'r'",
      "'bw'",
      "'br'"
    ],
    "correctAnswer": 0,
    "explanation": "'rb' mode is used to open a binary file for reading."
  },
  {
    "id": 13,
    "question": "What does with open('file.txt', 'r') as f: do?",
    "options": [
      "Opens file without closing",
      "Opens and automatically closes file",
      "Opens in append mode",
      "Opens file in binary"
    ],
    "correctAnswer": 1,
    "explanation": "Using 'with' ensures that the file is automatically closed after the block is executed."
  },
  {
    "id": 14,
    "question": "What is the file extension for a JSON file?",
    "options": [
      ".js",
      ".txt",
      ".json",
      ".xml"
    ],
    "correctAnswer": 2,
    "explanation": "The file extension for JSON files is '.json'."
  },
  {
    "id": 15,
    "question": "Which module is used for JSON handling in Python?",
    "options": [
      "data",
      "file",
      "json",
      "string"
    ],
    "correctAnswer": 2,
    "explanation": "The 'json' module is used to handle JSON data in Python."
  },
  {
    "id": 16,
    "question": "Which function is used to load JSON from a string?",
    "options": [
      "json.open()",
      "json.read()",
      "json.loads()",
      "json.string()"
    ],
    "correctAnswer": 2,
    "explanation": "The 'json.loads()' function is used to load JSON data from a string."
  },
  {
    "id": 17,
    "question": "What does json.dump() do?",
    "options": [
      "Converts string to JSON",
      "Loads JSON from file",
      "Writes JSON to a file",
      "Clears a JSON file"
    ],
    "correctAnswer": 2,
    "explanation": "The 'json.dump()' function writes JSON data to a file."
  },
  {
    "id": 18,
    "question": "What is the purpose of json.dumps()?",
    "options": [
      "Converts JSON to a Python object",
      "Converts a Python object to a JSON string",
      "Reads a file",
      "Removes JSON file"
    ],
    "correctAnswer": 1,
    "explanation": "The 'json.dumps()' function converts a Python object into a JSON string."
  },
  {
    "id": 19,
    "question": "What is the result of json.loads('{\"name\": \"Alice\"}')?",
    "options": [
      "JSON string",
      "Python dictionary",
      "List",
      "File object"
    ],
    "correctAnswer": 1,
    "explanation": "The 'json.loads()' function converts the JSON string into a Python dictionary."
  },
  {
    "id": 20,
    "question": "What is the extension for CSV files?",
    "options": [
      ".xls",
      ".csv",
      ".data",
      ".xml"
    ],
    "correctAnswer": 1,
    "explanation": "The file extension for CSV files is '.csv'."
  }
];
