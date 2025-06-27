export const questions = [
  {
    "id": 1,
    "question": "Which of the following log level constants is used to log the most severe messages?",
    "options": [
      "INFO",
      "DEBUG",
      "ERROR",
      "CRITICAL"
    ],
    "correctAnswer": 3,
    "explanation": "CRITICAL is the highest logging level (level 50) used for very serious errors that might prevent the program from continuing."
  },
  {
    "id": 2,
    "question": "What is the default format of log messages in Python?",
    "options": [
      "Only the message",
      "The message with the timestamp",
      "The message with the level name",
      "A timestamp, log level, and message"
    ],
    "correctAnswer": 3,
    "explanation": "The default format includes the level name, logger name, and message (e.g., 'WARNING:root:Message')."
  },
  {
    "id": 3,
    "question": "How can you stop logging messages from being printed to the console?",
    "options": [
      "By calling logging.stop()",
      "By setting the log level to CRITICAL",
      "By removing all handlers from the logger",
      "By setting the handler to None"
    ],
    "correctAnswer": 2,
    "explanation": "Removing all handlers (logger.handlers = []) stops console output while maintaining the logging configuration."
  },
  {
    "id": 4,
    "question": "What is the correct syntax to log a message with an exception in Python?",
    "options": [
      "logging.error('Error message', exc_info=True)",
      "logging.exception('Error message')",
      "logging.log('Error message', exception=True)",
      "logging.debug('Error message', exception=True)"
    ],
    "correctAnswer": 0,
    "explanation": "exc_info=True includes the exception information in the log message."
  },
  {
    "id": 5,
    "question": "Which of the following logging levels will capture only critical issues in your Python program?",
    "options": [
      "INFO",
      "DEBUG",
      "WARNING",
      "CRITICAL"
    ],
    "correctAnswer": 3,
    "explanation": "Setting level=logging.CRITICAL will log only CRITICAL level messages."
  },
  {
    "id": 6,
    "question": "What is the main difference between multi-processing and multi-threading in Python?",
    "options": [
      "Multi-threading runs multiple processes at once, while multi-processing runs multiple threads.",
      "Multi-threading uses multiple CPU cores, while multi-processing uses a single CPU core.",
      "Multi-threading runs in a single process using multiple threads, while multi-processing uses multiple processes to run parallel tasks.",
      "There is no difference between multi-processing and multi-threading."
    ],
    "correctAnswer": 2,
    "explanation": "Threads share the same memory space while processes have separate memory spaces."
  },
  {
    "id": 7,
    "question": "What is a key advantage of multi-threading over multi-processing?",
    "options": [
      "Multi-threading can run on multiple CPU cores simultaneously.",
      "Multi-threading uses less memory than multi-processing.",
      "Multi-threading can easily access shared memory between threads.",
      "Multi-threading does not require any synchronization mechanisms."
    ],
    "correctAnswer": 2,
    "explanation": "Threads can directly access shared variables in the same process memory space."
  },
  {
    "id": 8,
    "question": "Which Python module is used to implement multi-threading?",
    "options": [
      "threading",
      "multiprocessing",
      "asyncio",
      "concurrent.futures"
    ],
    "correctAnswer": 0,
    "explanation": "The threading module provides the Thread class for creating and managing threads."
  },
  {
    "id": 9,
    "question": "In Python, which function is used to create a thread?",
    "options": [
      "Thread()",
      "start()",
      "run()",
      "createThread()"
    ],
    "correctAnswer": 0,
    "explanation": "Thread() constructor creates a new thread object."
  },
  {
    "id": 10,
    "question": "What method must be called to begin the execution of a thread?",
    "options": [
      "start()",
      "run()",
      "execute()",
      "begin()"
    ],
    "correctAnswer": 0,
    "explanation": "start() initiates the thread's activity by calling run() in a new thread."
  },
  {
    "id": 11,
    "question": "What is the default behavior of a thread after it is started?",
    "options": [
      "It runs a function assigned to it and then terminates.",
      "It runs in a continuous loop until manually terminated.",
      "It automatically synchronizes with the main thread.",
      "It runs indefinitely unless it encounters an error."
    ],
    "correctAnswer": 0,
    "explanation": "Threads execute their target function to completion then terminate."
  },
  {
    "id": 12,
    "question": "Which of the following is the correct way to define a custom thread in Python?",
    "options": [
      "By inheriting from the Thread class and overriding the run() method",
      "By defining a new function inside the Thread class",
      "By calling the createThread() method",
      "By defining a new class and using start() directly"
    ],
    "correctAnswer": 0,
    "explanation": "Subclassing Thread and overriding run() allows custom thread behavior."
  },
  {
    "id": 13,
    "question": "What is a thread synchronization mechanism used in Python to avoid conflicts between threads accessing shared resources?",
    "options": [
      "Semaphore",
      "Threading",
      "Lock",
      "Event"
    ],
    "correctAnswer": 2,
    "explanation": "Lock objects provide exclusive access to shared resources."
  },
  {
    "id": 14,
    "question": "Which of the following statements is true about thread synchronization?",
    "options": [
      "Synchronization is unnecessary if threads do not share data.",
      "Synchronization ensures that multiple threads can run concurrently without affecting shared data.",
      "Synchronization is required for every thread, even if they are independent.",
      "Synchronization increases the execution speed of threads."
    ],
    "correctAnswer": 1,
    "explanation": "Synchronization coordinates access to shared resources between threads."
  },
  {
    "id": 15,
    "question": "What is a potential problem that occurs when multiple threads try to access the same shared resource without synchronization?",
    "options": [
      "Memory leak",
      "Race condition",
      "Deadlock",
      "Thread starvation"
    ],
    "correctAnswer": 1,
    "explanation": "Race conditions occur when threads access shared data concurrently leading to unpredictable results."
  },
  {
    "id": 16,
    "question": "Which of the following is a method used to acquire a lock in Python's threading module?",
    "options": [
      "lock.get()",
      "lock.acquire()",
      "lock.lock()",
      "lock.run()"
    ],
    "correctAnswer": 1,
    "explanation": "acquire() obtains the lock, blocking if necessary."
  },
  {
    "id": 17,
    "question": "What happens if a thread tries to acquire a lock that is already acquired by another thread?",
    "options": [
      "The thread will continue execution without waiting.",
      "The thread will raise a DeadlockError.",
      "The thread will block until the lock is released by the other thread.",
      "The thread will automatically give up after a timeout."
    ],
    "correctAnswer": 2,
    "explanation": "By default, acquire() blocks until the lock becomes available."
  },
  {
    "id": 18,
    "question": "What is the function of the threading.Lock() class in Python?",
    "options": [
      "It allows for non-blocking access to shared resources.",
      "It enables synchronization between threads to prevent data conflicts.",
      "It executes threads in a sequential order.",
      "It increases the priority of threads to improve execution speed."
    ],
    "correctAnswer": 1,
    "explanation": "Locks enforce mutual exclusion for shared resources."
  },
  {
    "id": 19,
    "question": "Which of the following Python functions can be used to wait for a thread to finish its execution?",
    "options": [
      "join()",
      "wait()",
      "terminate()",
      "close()"
    ],
    "correctAnswer": 0,
    "explanation": "join() blocks until the thread completes."
  },
  {
    "id": 20,
    "question": "Which of the following methods can be used to check if a thread is still alive?",
    "options": [
      "is_alive()",
      "is_running()",
      "alive()",
      "running()"
    ],
    "correctAnswer": 0,
    "explanation": "is_alive() returns True if the thread is executing."
  }
];