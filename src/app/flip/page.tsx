"use client";
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const mcqs = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },
  {
    id: 3,
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
];

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isFlipping, setIsFlipping] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const flipRef = useRef(null);

  const currentQuestion = mcqs[currentQuestionIndex];
  const totalQuestions = mcqs.length;

  useEffect(() => {
    if (currentQuestionIndex === totalQuestions) {
      setShowScore(true);
    }
  }, [currentQuestionIndex, totalQuestions]);

  const handleAnswerSelect = (answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
  };

  const handleNextQuestion = () => {
    if (userAnswers[currentQuestion.id] === undefined) return;
    setIsFlipping(true);

    // Timing matches animation duration: 700ms
    setTimeout(() => {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsFlipping(false);
    }, 700);
  };

  const calculateScore = () => {
    let score = 0;
    mcqs.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  return (
    <>
      <Head>
        <title>MCQ Challenge - Curved Page Flip</title>
        <meta name="description" content="Curved page flip MCQ using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-6">
        <div className="max-w-4xl w-full px-6">
          <header className="text-center mb-12">
            <h1 className="text-[48px] font-extrabold text-gray-900 leading-tight mb-3 select-none">
              MCQ Challenge
            </h1>
            {!showScore && (
              <p className="text-gray-500 text-lg select-none">
                Question {Math.min(currentQuestionIndex + 1, totalQuestions)} of {totalQuestions}
              </p>
            )}
          </header>

          <div
            ref={flipRef}
            className={`relative perspective-1500 mx-auto max-w-2xl 
              ${isFlipping ? 'flip-animation' : ''}
              rounded-xl shadow-lg bg-gray-50
              `}
            style={{ minHeight: '320px' }}
          >
            {!showScore ? (
              <>
                {/* Front page - current question */}
                <div className="page front bg-white rounded-xl p-10 select-none">
                  <p className="text-xl font-semibold text-gray-800 mb-8 leading-relaxed">
                    {currentQuestion?.question}
                  </p>
                  <ul className="space-y-4">
                    {currentQuestion?.options.map((option) => (
                      <li key={option}>
                        <label
                          htmlFor={`q${currentQuestion?.id}-option-${option}`}
                          className={`block cursor-pointer rounded-lg border px-4 py-3 transition 
                          select-none
                          ${
                            userAnswers[currentQuestion?.id] === option
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-gray-300 hover:border-gray-500'
                          }
                          `}
                        >
                          <input
                            type="radio"
                            id={`q${currentQuestion?.id}-option-${option}`}
                            name={`question-${currentQuestion?.id}`}
                            value={option}
                            checked={userAnswers[currentQuestion?.id] === option}
                            onChange={() => handleAnswerSelect(option)}
                            className="hidden"
                            disabled={isFlipping}
                          />
                          <span className="ml-2">{option}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Back page - next question or empty */}
                <div className="page back bg-white rounded-xl p-10 select-none">
                  {currentQuestionIndex + 1 < totalQuestions ? (
                    <>
                      <p className="text-xl font-semibold text-gray-800 mb-8 leading-relaxed">
                        {mcqs[currentQuestionIndex + 1].question}
                      </p>
                      <ul className="space-y-4 opacity-50 pointer-events-none">
                        {mcqs[currentQuestionIndex + 1].options.map((option) => (
                          <li key={option}>
                            <div
                              className="block rounded-lg border border-gray-300 px-4 py-3 text-gray-400"
                            >
                              <span className="ml-2">{option}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-400 text-2xl font-medium">
                        End of questions
                      </p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="p-16 text-gray-700 text-center select-text">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Your Score: {calculateScore()} / {totalQuestions}
                </h2>
                <p className="text-lg max-w-md mx-auto leading-relaxed">
                  Thank you for completing the challenge! You can reload the page to try again.
                </p>
              </div>
            )}
          </div>

          {!showScore && (
            <div className="mt-10 flex justify-end max-w-2xl mx-auto">
              <button
                onClick={handleNextQuestion}
                disabled={
                  userAnswers[currentQuestion?.id] === undefined || isFlipping
                }
                className={`px-6 py-3 rounded-xl font-semibold text-white focus:outline-none focus:ring-4 focus:ring-blue-400
                  ${
                    userAnswers[currentQuestion?.id] === undefined || isFlipping
                      ? 'bg-blue-300 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                  }
                `}
                aria-label="Next Question"
              >
                {currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          )}
        </div>

        <style jsx>{`
          .perspective-1500 {
            perspective: 1500px;
          }
          .page {
            backface-visibility: hidden;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 1rem;
          }
          .front {
            z-index: 2;
            box-shadow:
              inset 0 0 80px rgba(255, 255, 255, 0.6),
              0 15px 30px rgba(0,0,0,0.12),
              0 5px 10px rgba(0,0,0,0.05);
            transform-origin: left center;
          }
          .back {
            box-shadow:
              inset 0 0 100px rgba(255, 255, 255, 0.7),
              0 15px 30px rgba(0,0,0,0.12),
              0 5px 10px rgba(0,0,0,0.05);
            transform-origin: left center;
            transform: rotateY(180deg);
            filter: brightness(0.95);
            z-index: 1;
          }

          .flip-animation {
            animation: pageFlip 0.7s forwards cubic-bezier(0.4, 0, 0.2, 1);
          }

          @keyframes pageFlip {
            0% {
              transform-style: preserve-3d;
              transform-origin: left center;
              transform: rotateY(0deg) rotateZ(0deg) skewY(0deg);
              box-shadow:
                inset 0 0 80px rgba(255, 255, 255, 0.6),
                0 15px 30px rgba(0,0,0,0.12),
                0 5px 10px rgba(0,0,0,0.05);
            }
            50% {
              transform-style: preserve-3d;
              transform-origin: left center;
              transform: rotateY(-90deg) rotateZ(-4deg) skewY(5deg);
              box-shadow:
                inset 0 0 25px rgba(255, 255, 255, 0.9),
                5px 0 15px rgba(0,0,0,0.2);
            }
            100% {
              transform-style: preserve-3d;
              transform-origin: left center;
              transform: rotateY(-180deg) rotateZ(0deg) skewY(0deg);
              box-shadow:
                inset 0 0 80px rgba(255, 255, 255, 0.6),
                0 15px 30px rgba(0,0,0,0.12),
                0 5px 10px rgba(0,0,0,0.05);
            }
          }
        `}</style>
      </main>
    </>
  );
}

