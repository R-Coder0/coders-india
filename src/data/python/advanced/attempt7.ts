export const questions = [
  {
    "id": 1,
    "question": "What is the purpose of logging in Python?",
    "options": [
      "To print output to the console",
      "To record runtime information for debugging and monitoring purposes",
      "To manage user input",
      "To handle errors automatically"
    ],
    "correctAnswer": 1,
    "explanation": "Logging provides a way to track events that occur when software runs, which is essential for debugging and monitoring application behavior in production."
  },
  {
    "id": 2,
    "question": "Which module is used for logging in Python?",
    "options": [
      "sys",
      "os",
      "logging",
      "traceback"
    ],
    "correctAnswer": 2,
    "explanation": "Python's built-in logging module provides a flexible framework for emitting log messages from applications."
  },
  {
    "id": 3,
    "question": "What is the default logging level in Python?",
    "options": [
      "INFO",
      "WARNING",
      "DEBUG",
      "ERROR"
    ],
    "correctAnswer": 1,
    "explanation": "The default level is WARNING, meaning only events of this level and above (ERROR, CRITICAL) will be tracked unless configured otherwise."
  },
  {
    "id": 4,
    "question": "What does the basicConfig() function in the logging module do?",
    "options": [
      "Configures the logging system to send logs to a file",
      "Sets up the basic configuration for logging like log level and format",
      "Creates a new log file",
      "Starts a logging server"
    ],
    "correctAnswer": 1,
    "explanation": "basicConfig() establishes the default handler, formatter, and other basic logging parameters. It should be called before any logging calls."
  },
  {
    "id": 5,
    "question": "Which of the following is the correct way to log an INFO message in Python?",
    "options": [
      "logging.debug('This is an info message')",
      "logging.info('This is an info message')",
      "logging.warning('This is an info message')",
      "logging.log('This is an info message')"
    ],
    "correctAnswer": 1,
    "explanation": "The info() method is specifically for logging informational messages at the INFO level."
  },
  {
    "id": 6,
    "question": "What log level will capture all messages, including DEBUG, INFO, WARNING, ERROR, and CRITICAL?",
    "options": [
      "ERROR",
      "DEBUG",
      "CRITICAL",
      "INFO"
    ],
    "correctAnswer": 1,
    "explanation": "DEBUG is the lowest level and will capture all log messages regardless of their severity."
  },
  {
    "id": 7,
    "question": "Which of the following is NOT a valid log level in Python's logging module?",
    "options": [
      "DEBUG",
      "INFO",
      "VERBOSE",
      "CRITICAL"
    ],
    "correctAnswer": 2,
    "explanation": "Python's logging module defines DEBUG, INFO, WARNING, ERROR, and CRITICAL levels, but not VERBOSE."
  },
  {
    "id": 8,
    "question": "How can you log a message with a custom format in Python?",
    "options": [
      "By using logging.basicConfig() with a format argument",
      "By using logging.setFormat() method",
      "By manually writing a custom log handler",
      "Python doesn't support custom formats"
    ],
    "correctAnswer": 0,
    "explanation": "The format parameter in basicConfig() allows specifying a custom format string using attributes like %(asctime)s, %(levelname)s, etc."
  },
  {
    "id": 9,
    "question": "What is the highest logging level in Python?",
    "options": [
      "DEBUG",
      "INFO",
      "WARNING",
      "CRITICAL"
    ],
    "correctAnswer": 3,
    "explanation": "CRITICAL is the highest level, indicating very serious errors that might prevent the program from continuing to run."
  },
  {
    "id": 10,
    "question": "How do you log an error message in Python?",
    "options": [
      "logging.error('An error occurred')",
      "logging.warning('An error occurred')",
      "logging.info('An error occurred')",
      "logging.critical('An error occurred')"
    ],
    "correctAnswer": 0,
    "explanation": "The error() method logs messages at the ERROR level, indicating serious problems that the application might be able to recover from."
  },
  {
    "id": 11,
    "question": "What does the logging.debug() function do in Python?",
    "options": [
      "It logs informational messages",
      "It logs critical error messages",
      "It logs debugging messages, useful during development",
      "It logs the program termination message"
    ],
    "correctAnswer": 2,
    "explanation": "debug() logs detailed diagnostic information typically used only during development and troubleshooting."
  },
  {
    "id": 12,
    "question": "What does the logging.warning() function do in Python?",
    "options": [
      "It logs messages that are not important",
      "It logs messages when the program has encountered an error",
      "It logs warnings about issues that don't stop the program from running",
      "It logs the program's final output"
    ],
    "correctAnswer": 2,
    "explanation": "warning() indicates something unexpected happened, but the software is still working as expected."
  },
  {
    "id": 13,
    "question": "What will happen if you try to log a message with a level lower than the configured logging level?",
    "options": [
      "The message will still be logged",
      "The message will not be logged",
      "The program will stop executing",
      "An error will be raised"
    ],
    "correctAnswer": 1,
    "explanation": "Log messages are filtered based on their level - only messages with level equal to or higher than the configured level are processed."
  },
  {
    "id": 14,
    "question": "How do you log a message to a file instead of the console?",
    "options": [
      "By setting file as a handler in basicConfig()",
      "By using logging.toFile('filename')",
      "By creating a new FileHandler",
      "Python always logs messages to the console, not a file"
    ],
    "correctAnswer": 2,
    "explanation": "FileHandler is a specialized Handler class that sends logging output to a disk file."
  },
  {
    "id": 15,
    "question": "What is the purpose of logging.FileHandler() in Python?",
    "options": [
      "To create a new log file",
      "To redirect log messages to a specific file",
      "To define the format of log messages in the file",
      "To delete the log file after logging"
    ],
    "correctAnswer": 1,
    "explanation": "FileHandler sends log records to a specified file, allowing persistent storage of log messages."
  },
  {
    "id": 16,
    "question": "Which of the following logging levels is the most appropriate to use for messages that indicate a program is functioning normally?",
    "options": [
      "DEBUG",
      "INFO",
      "WARNING",
      "ERROR"
    ],
    "correctAnswer": 1,
    "explanation": "INFO level is used to confirm that things are working as expected during normal operation."
  },
  {
    "id": 17,
    "question": "What method would you use to add a custom logging handler?",
    "options": [
      "logging.addHandler()",
      "logging.setHandler()",
      "logging.createHandler()",
      "logging.handler()"
    ],
    "correctAnswer": 0,
    "explanation": "addHandler() attaches a handler object to the root logger, allowing log messages to be processed by that handler."
  },
  {
    "id": 18,
    "question": "Which of the following methods is used to configure the logging system in Python?",
    "options": [
      "logging.config()",
      "logging.setConfig()",
      "logging.basicConfig()",
      "logging.setup()"
    ],
    "correctAnswer": 2,
    "explanation": "basicConfig() provides a quick way to configure the logging system with default values."
  },
  {
    "id": 19,
    "question": "What does the logging.exception() method do in Python?",
    "options": [
      "It logs an exception along with the traceback when an exception is caught",
      "It logs a warning about the exception",
      "It logs critical errors related to the exception",
      "It stops the program execution after logging the exception"
    ],
    "correctAnswer": 0,
    "explanation": "exception() logs a message with level ERROR and includes exception information. Should only be called from an exception handler."
  },
  {
    "id": 20,
    "question": "How do you format log messages in Python?",
    "options": [
      "Using logging.setFormat()",
      "Using logging.basicConfig() with a format argument",
      "Using logging.format()",
      "Using logging.setFormatter()"
    ],
    "correctAnswer": 1,
    "explanation": "The format parameter in basicConfig() accepts a format string that defines how log messages should appear."
  }
];