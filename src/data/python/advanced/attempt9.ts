export const questions = [
  // Threading Questions
  {
    "id": 1,
    "question": "In Python, what is a deadlock?",
    "options": [
      "A situation where all threads are running and working correctly",
      "A situation where two or more threads are blocked indefinitely waiting for each other",
      "A situation where a thread terminates prematurely",
      "A situation where threads fail to acquire the required resources"
    ],
    "correctAnswer": 1,
    "explanation": "Deadlock occurs when threads are stuck waiting for resources held by each other in a cyclic dependency, preventing any progress."
  },
  {
    "id": 2,
    "question": "How can you prevent a deadlock situation in Python?",
    "options": [
      "By using semaphores to limit resource usage",
      "By using multiple locks in an unpredictable order",
      "By ensuring threads acquire locks in the same order every time",
      "By terminating threads after a fixed time period"
    ],
    "correctAnswer": 2,
    "explanation": "Consistent lock ordering prevents circular wait conditions where each thread holds a resource needed by another."
  },
  {
    "id": 3,
    "question": "Which of the following is a Python function used to start a new thread?",
    "options": [
      "start_thread()",
      "Thread.start()",
      "run_thread()",
      "begin()"
    ],
    "correctAnswer": 1,
    "explanation": "The start() method of a Thread object begins thread execution by invoking the run() method in a new thread."
  },
  {
    "id": 4,
    "question": "What is the purpose of threading.Event() in Python?",
    "options": [
      "To allow threads to wait for an event to occur before proceeding",
      "To initiate multi-threading in Python",
      "To terminate threads after they are completed",
      "To manage multiple processes in a thread"
    ],
    "correctAnswer": 0,
    "explanation": "Event objects provide simple thread communication - one thread signals an event while others wait for it."
  },
  {
    "id": 5,
    "question": "Which method is used to release a lock in Python after a thread is done with the shared resource?",
    "options": [
      "release()",
      "unlock()",
      "exit()",
      "end()"
    ],
    "correctAnswer": 0,
    "explanation": "Lock.release() must be called to free the lock after Lock.acquire(), typically in a try-finally block."

  // Networking Questions
  },
  {
    "id": 6,
    "question": "Which of the following is the main protocol used for communication between devices on the internet?",
    "options": [
      "HTTP",
      "FTP",
      "TCP/IP",
      "SMTP"
    ],
    "correctAnswer": 2,
    "explanation": "TCP/IP is the fundamental communication protocol suite that forms the backbone of internet communications."
  },
  {
    "id": 7,
    "question": "What is a socket in networking?",
    "options": [
      "A type of networking hardware",
      "A software interface used to connect to the internet",
      "An endpoint for sending or receiving data over a network",
      "A firewall to protect network data"
    ],
    "correctAnswer": 2,
    "explanation": "Sockets provide bidirectional communication endpoints consisting of an IP address and port number."
  },
  {
    "id": 8,
    "question": "Which of the following Python modules is used for implementing socket programming?",
    "options": [
      "os",
      "socket",
      "sys",
      "network"
    ],
    "correctAnswer": 1,
    "explanation": "The socket module provides low-level networking interfaces following the BSD socket API."
  },
  {
    "id": 9,
    "question": "In socket programming, which of the following is used to create a new socket object?",
    "options": [
      "socket.create()",
      "socket.connect()",
      "socket.socket()",
      "socket.new()"
    ],
    "correctAnswer": 2,
    "explanation": "socket.socket() creates a new socket with parameters like socket.AF_INET and socket.SOCK_STREAM."
  },
  {
    "id": 10,
    "question": "What is the default port for HTTP communication?",
    "options": [
      "21",
      "80",
      "443",
      "22"
    ],
    "correctAnswer": 1,
    "explanation": "Port 80 is the standard port for unencrypted HTTP traffic, while 443 is used for HTTPS."
  },
  {
    "id": 11,
    "question": "Which of the following is the correct way to bind a socket to an address and port in Python?",
    "options": [
      "socket.bind(address, port)",
      "socket.bind(port, address)",
      "bind(socket, address)",
      "socket.address(port)"
    ],
    "correctAnswer": 0,
    "explanation": "bind() takes a tuple of (host, port) where host can be an empty string for all interfaces."
  },
  {
    "id": 12,
    "question": "What function is used to establish a connection to a remote server using a socket?",
    "options": [
      "connect()",
      "bind()",
      "listen()",
      "accept()"
    ],
    "correctAnswer": 0,
    "explanation": "connect() initiates a TCP connection to a remote (host, port) address tuple."
  },
  {
    "id": 13,
    "question": "What is the function used to listen for incoming connections on a server socket?",
    "options": [
      "listen()",
      "connect()",
      "accept()",
      "start()"
    ],
    "correctAnswer": 0,
    "explanation": "listen() enables a server to accept connections, with a backlog parameter for queuing."
  },
  {
    "id": 14,
    "question": "In Python socket programming, which function is used by the server to accept an incoming connection?",
    "options": [
      "accept()",
      "connect()",
      "listen()",
      "bind()"
    ],
    "correctAnswer": 0,
    "explanation": "accept() returns a new socket object for the connection and the client address."
  },
  {
    "id": 15,
    "question": "Which of the following is the function used by the server to send data to the client?",
    "options": [
      "send()",
      "recv()",
      "write()",
      "transmit()"
    ],
    "correctAnswer": 0,
    "explanation": "send() transmits data through a connected socket (TCP). For UDP, use sendto()."
  },
  {
    "id": 16,
    "question": "What function is used by a client socket to receive data from the server?",
    "options": [
      "send()",
      "recv()",
      "accept()",
      "listen()"
    ],
    "correctAnswer": 1,
    "explanation": "recv() reads data from the socket, with a parameter for maximum bytes to receive."
  },
  {
    "id": 17,
    "question": "What is the primary difference between TCP and UDP in network communication?",
    "options": [
      "TCP is connectionless, while UDP is connection-oriented.",
      "TCP is used for sending data to a specific address, while UDP is for broadcast communication.",
      "TCP guarantees the delivery of data, while UDP does not.",
      "TCP is faster than UDP."
    ],
    "correctAnswer": 2,
    "explanation": "TCP provides reliable, ordered delivery with error checking; UDP is lightweight but unreliable."
  },
  {
    "id": 18,
    "question": "Which of the following methods is used by a client to close a socket after communication?",
    "options": [
      "socket.close()",
      "socket.terminate()",
      "socket.end()",
      "socket.disconnect()"
    ],
    "correctAnswer": 0,
    "explanation": "close() releases the socket resources. Modern code should use context managers (with statements)."
  },
  {
    "id": 19,
    "question": "What is the purpose of the socket.recv() method in Python?",
    "options": [
      "To send data to the connected client",
      "To receive data from a connected client",
      "To accept a connection from a client",
      "To bind a socket to an address"
    ],
    "correctAnswer": 1,
    "explanation": "recv() reads incoming data from a connected socket, blocking by default until data arrives."
  },
  {
    "id": 20,
    "question": "In a simple client-server application, which of the following is true about the server?",
    "options": [
      "The server waits for a connection from the client before sending data.",
      "The server sends data to the client without waiting for a connection.",
      "The server must always be started before the client.",
      "The server cannot send data until it accepts the client's connection."
    ],
    "correctAnswer": 0,
    "explanation": "Servers typically bind, listen, then accept connections before any data exchange occurs."
  }
];