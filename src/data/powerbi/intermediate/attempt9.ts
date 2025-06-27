export const questions = [
  {
    "id": 1,
    "question": "Which module is used to handle CSV files in Python?",
    "options": [
      "csv",
      "xlsx",
      "excel",
      "table"
    ],
    "correctAnswer": 0,
    "explanation": "The 'csv' module is used to handle CSV files in Python."
  },
  {
    "id": 2,
    "question": "Which method is used to write rows to a CSV file?",
    "options": [
      "writer.write()",
      "writer.insertrow()",
      "writer.writerow()",
      "csv.write()"
    ],
    "correctAnswer": 2,
    "explanation": "The 'writer.writerow()' method is used to write rows to a CSV file."
  },
  {
    "id": 3,
    "question": "What does the csv.reader() function do?",
    "options": [
      "Reads a JSON file",
      "Reads rows from a CSV file",
      "Writes rows to a CSV file",
      "Creates a CSV file"
    ],
    "correctAnswer": 1,
    "explanation": "The csv.reader() function is used to read rows from a CSV file."
  },
  {
    "id": 4,
    "question": "Which delimiter is used by default in CSV files?",
    "options": [
      "Tab",
      "Space",
      "Semicolon",
      "Comma"
    ],
    "correctAnswer": 3,
    "explanation": "The default delimiter used in CSV files is a comma."
  },
  {
    "id": 5,
    "question": "How do you open a CSV file for writing?",
    "options": [
      "open('file.csv', 'r')",
      "open('file.csv', 'x')",
      "open('file.csv', 'w')",
      "open('file.csv', 'a')"
    ],
    "correctAnswer": 2,
    "explanation": "To open a CSV file for writing, use 'open('file.csv', 'w')'."
  },
  {
    "id": 6,
    "question": "What does newline='' do when opening a CSV file in Python?",
    "options": [
      "Adds a blank line",
      "Skips first row",
      "Prevents extra blank lines",
      "Ignores delimiter"
    ],
    "correctAnswer": 2,
    "explanation": "The 'newline='' argument prevents extra blank lines when reading/writing a CSV file."
  },
  {
    "id": 7,
    "question": "Which Python library is commonly used for Excel file handling?",
    "options": [
      "openpyxl",
      "xlsx",
      "pyexcel",
      "xlreader"
    ],
    "correctAnswer": 0,
    "explanation": "'openpyxl' is the most commonly used library for handling Excel files in Python."
  },
  {
    "id": 8,
    "question": "What is the file extension for Excel files handled by openpyxl?",
    "options": [
      ".xls",
      ".csv",
      ".xlsx",
      ".txt"
    ],
    "correctAnswer": 2,
    "explanation": "Excel files handled by openpyxl have the '.xlsx' extension."
  },
  {
    "id": 9,
    "question": "How do you load a workbook using openpyxl?",
    "options": [
      "load_sheet()",
      "Workbook.load()",
      "open()",
      "load_workbook()"
    ],
    "correctAnswer": 3,
    "explanation": "The 'load_workbook()' function is used to load an Excel workbook in openpyxl."
  },
  {
    "id": 10,
    "question": "Which method is used to access a sheet in an Excel workbook?",
    "options": [
      "get_sheet()",
      "workbook.sheet_by_index()",
      "workbook.active or workbook[sheet_name]",
      "sheet.load()"
    ],
    "correctAnswer": 2,
    "explanation": "To access a sheet in a workbook, use 'workbook.active' or 'workbook[sheet_name]'."
  },
  {
    "id": 11,
    "question": "What does sheet['A1'].value return?",
    "options": [
      "The formula in cell A1",
      "The format of cell A1",
      "The value in cell A1",
      "The address of cell A1"
    ],
    "correctAnswer": 2,
    "explanation": "sheet['A1'].value returns the value stored in cell A1 of the Excel sheet."
  },
  {
    "id": 12,
    "question": "How do you create a new Excel file using openpyxl?",
    "options": [
      "Workbook()",
      "create_excel()",
      "ExcelFile()",
      "load_workbook()"
    ],
    "correctAnswer": 0,
    "explanation": "The 'Workbook()' function is used to create a new Excel file using openpyxl."
  },
  {
    "id": 13,
    "question": "Which method saves an Excel workbook in openpyxl?",
    "options": [
      "write()",
      "save()",
      "store()",
      "export()"
    ],
    "correctAnswer": 1,
    "explanation": "The 'save()' method is used to save an Excel workbook in openpyxl."
  },
  {
    "id": 14,
    "question": "What is the use of write() in file handling?",
    "options": [
      "Opens a file",
      "Reads file content",
      "Appends to a file",
      "Writes content to a file"
    ],
    "correctAnswer": 3,
    "explanation": "The 'write()' method is used to write content to a file in Python."
  },
  {
    "id": 15,
    "question": "What happens if you open a non-existing file in 'r' mode?",
    "options": [
      "It creates the file",
      "It throws FileNotFoundError",
      "It returns None",
      "It creates an empty string"
    ],
    "correctAnswer": 1,
    "explanation": "If you open a non-existing file in 'r' mode, it throws a FileNotFoundError."
  },
  {
    "id": 16,
    "question": "Which method reads a file line-by-line in a loop?",
    "options": [
      "read()",
      "readline()",
      "readlines()",
      "for line in file"
    ],
    "correctAnswer": 3,
    "explanation": "Using 'for line in file' reads the file line-by-line in a loop."
  },
  {
    "id": 17,
    "question": "How can you delete a file in Python?",
    "options": [
      "file.delete()",
      "os.remove()",
      "remove.file()",
      "os.delete()"
    ],
    "correctAnswer": 1,
    "explanation": "The 'os.remove()' method is used to delete a file in Python."
  },
  {
    "id": 18,
    "question": "What does json.load(f) do?",
    "options": [
      "Reads a string",
      "Writes JSON",
      "Reads JSON data from a file object",
      "Loads a module"
    ],
    "correctAnswer": 2,
    "explanation": "The 'json.load(f)' function reads JSON data from a file object."
  },
  {
    "id": 19,
    "question": "What type of data is handled by the json module?",
    "options": [
      "XML",
      "Binary",
      "Plain text",
      "Structured key-value data"
    ],
    "correctAnswer": 3,
    "explanation": "The 'json' module handles structured key-value data, which is the format of JSON."
  },
  {
    "id": 20,
    "question": "What is a file pointer in file handling?",
    "options": [
      "The first character of the file",
      "A tool to rename files",
      "A reference to the current file location",
      "A binary file"
    ],
    "correctAnswer": 2,
    "explanation": "A file pointer is a reference to the current location within an open file."
  }
];
