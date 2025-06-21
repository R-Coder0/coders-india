"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export default function MockTestAttemptPage() {
  const params = useParams();
  const { level, testId } = params as { level: string; testId: string };

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  // States for test logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [answerFeedback, setAnswerFeedback] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [flipStage, setFlipStage] = useState<"start" | "half" | "end">("end");
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const formattedTestId = testId.replace(/-/g, "");
        const mod = await import(`@/data/python/${level}/${formattedTestId}`);

        if (!mod.questions) {
          throw new Error(`Questions not found in ${formattedTestId}.ts`);
        }

        setQuestions(mod.questions);
        setSelectedAnswers(new Array(mod.questions.length).fill(-1));
        setAnswerFeedback(new Array(mod.questions.length).fill(""));
      } catch (error) {
        console.error("Loading failed:", error);
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [level, testId]);

  const currentQuestion = questions[currentIndex];
  const previousQuestion = questions[prevIndex];

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = optionIndex;
    setSelectedAnswers(newAnswers);

    const feedback =
      optionIndex === currentQuestion.correctAnswer
        ? "✓ Correct!"
        : `✗ Incorrect. Correct answer: ${String.fromCharCode(
            65 + currentQuestion.correctAnswer
          )}`;
    const newFeedback = [...answerFeedback];
    newFeedback[currentIndex] = feedback;
    setAnswerFeedback(newFeedback);
  };

  // Enhanced flip logic for realistic page flip animation
  const flipDuration = 700; // in ms

  const goToNext = () => {
    if (currentIndex < questions.length - 1 && !isTransitioning) {
      setFlipDirection("next");
      setFlipStage("start");
      setIsTransitioning(true);
      setPrevIndex(currentIndex);
      setTimeout(() => {
        setFlipStage("half");
        // change question index on half flip so it seems like we turn over page
        setTimeout(() => {
          setCurrentIndex((idx) => idx + 1);
          setFlipStage("end");
          setTimeout(() => {
            setIsTransitioning(false);
          }, flipDuration / 3);
        }, flipDuration / 2);
      }, 10); // small delay to trigger animation
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setFlipDirection("prev");
      setFlipStage("start");
      setIsTransitioning(true);
      setPrevIndex(currentIndex);
      setTimeout(() => {
        setFlipStage("half");
        setTimeout(() => {
          setCurrentIndex((idx) => idx - 1);
          setFlipStage("end");
          setTimeout(() => {
            setIsTransitioning(false);
          }, flipDuration / 3);
        }, flipDuration / 2);
      }, 10);
    }
  };

  const calculateScore = () => {
    let score = 0;
    selectedAnswers.forEach((ans, idx) => {
      if (ans === questions[idx]?.correctAnswer) score++;
    });
    return score;
  };

  const handleSubmit = () => {
    if (selectedAnswers.includes(-1)) {
      alert("Please answer all questions before submitting!");
      return;
    }
    setShowResult(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center bg-white rounded-xl shadow-lg p-12 border border-slate-200">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-3 border-slate-300 border-t-slate-600 mb-6"></div>
          <h2 className="text-xl font-semibold text-[#004bac] mb-2">
            Loading Your Test
          </h2>
          <p className="text-slate-500">
            Please wait while we prepare your questions
          </p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white rounded-xl shadow-lg p-12 border border-slate-200">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Test Not Found
          </h2>
          <p className="text-slate-600">
            No questions found for this test. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pb-2.5 mt-6">
      {!showResult ? (
        <>
          {/* Header - Fixed at top */}
          <div className="bg-white shadow-lg border-b border-slate-200 flex-shrink-0 sticky top-0 z-40">
            <div className="container mx-auto px-1 pt-10 pb-4  max-w-6xl">
              <div className="bg-[#004bac] rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">Python Mock Test</h1>
                    <div className="flex items-center space-x-4 text-slate-200">
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium text-black">
                        Level: {level?.charAt(0).toUpperCase() + level?.slice(1)}
                      </span>
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium text-black">
                        Test: {testId}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{currentIndex + 1}</div>
                    <div className="text-slate-200 text-sm">of {questions.length}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div
                    className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Question Area */}
          <div className="container mx-auto px-2 py-4 max-w-6xl">
            <div className="relative    w-full">
              {/* Navigation Buttons - Left and Right */}
              <button
                disabled={currentIndex === 0 || isTransitioning}
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white shadow-lg rounded-full border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center group"
                aria-label="Previous question"
              >
                <svg
                  className="w-5 h-5 text-[#004bac] group-hover:text-slate-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                disabled={currentIndex === questions.length - 1 || isTransitioning}
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white shadow-lg rounded-full border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center group"
                aria-label="Next question"
              >
                <svg
                  className="w-5 h-5 text-slate-600 group-hover:text-slate-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Realistic Flip Page - Fixed Height Container */}
              <div
                className="relative w-full mx-auto cursor-default select-none"
                style={{ height: '600px' }}
                aria-live="polite"
                aria-atomic="true"
              >
                {/* Previous question side (Back of page) */}
                <div
                  aria-hidden={flipStage === "end"}
                  className={`absolute top-0 left-0 w-full bg-white rounded-xl shadow-lg border border-slate-200 px-8 py-6
                    backface-hidden
                    ${
                      flipDirection === "next"
                        ? "origin-left"
                        : "origin-right"
                    }
                    ${
                      flipStage === "start"
                        ? flipDirection === "next"
                          ? "flip-start-next"
                          : "flip-start-prev"
                        : flipStage === "half"
                        ? flipDirection === "next"
                          ? "flip-mid-next"
                          : "flip-mid-prev"
                        : "hidden"
                    }
                  `}
                  style={{ pointerEvents: "none", height: '600px' }}
                >
                  {/* Content: previousQuestion */}
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-[#004bac] rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                      {prevIndex + 1}
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                      Question {prevIndex + 1} of {questions.length}
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-slate-800 leading-relaxed mb-8">
                    {previousQuestion?.question}
                  </h2>

                  <div className="space-y-3 mb-6">
                    {previousQuestion?.options.map((option, idx) => {
                      const isSelected = selectedAnswers[prevIndex] === idx;
                      return (
                        <label
                          key={idx}
                          className={`block p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-sm ${
                            isSelected
                              ? "bg-[#004bac] text-white border-[#004bac]"
                              : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                                isSelected
                                  ? "border-white bg-white text-[#004bac]"
                                  : "border-slate-400"
                              }`}
                            >
                              {String.fromCharCode(65 + idx)}
                            </div>
                            <span className="flex-1 text-base font-medium">
                              {option}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Current question side (Front of page) */}
                <div
                  aria-hidden={flipStage !== "end"}
                  className={`absolute top-0 left-0 w-full bg-white rounded-xl shadow-lg border border-slate-200 px-8 py-6 overflow-y-auto
                    backface-hidden
                    ${
                      flipDirection === "next"
                        ? "origin-left"
                        : "origin-right"
                    }
                    ${
                      flipStage === "end"
                        ? ""
                        : flipDirection === "next"
                        ? "flip-front-next"
                        : "flip-front-prev"
                    }
                  `}
                  style={{ height: '600px' }}
                >
                  {/* Content: currentQuestion */}
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-[#004bac] rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                      {currentIndex + 1}
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                      Question {currentIndex + 1} of {questions.length}
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-slate-800 leading-relaxed mb-8">
                    {currentQuestion?.question}
                  </h2>

                  <div className="space-y-3 mb-6">
                    {currentQuestion?.options.map((option, idx) => {
                      const isSelected = selectedAnswers[currentIndex] === idx;
                      return (
                        <label
                          key={idx}
                          className={`block p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-sm ${
                            isSelected
                              ? "bg-[#004bac] text-white border-[#004bac]"
                              : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-black"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                                isSelected
                                  ? "border-white bg-white text-[#004bac]"
                                  : "border-slate-400 text-black"
                              }`}
                            >
                              {String.fromCharCode(65 + idx)}
                            </div>
                            <span className="flex-1 text-base font-medium">
                              {option}
                            </span>
                          </div>
                          <input
                            type="radio"
                            name={`question-${currentQuestion?.id}`}
                            checked={isSelected}
                            onChange={() => handleSelectOption(idx)}
                            className="sr-only"
                          />
                        </label>
                      );
                    })}
                  </div>

                  {/* Feedback & Explanation */}
                  {answerFeedback[currentIndex] && (
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 mb-6">
                      <div
                        className={`text-base font-semibold mb-3 ${
                          answerFeedback[currentIndex].includes("Correct")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {answerFeedback[currentIndex]}
                      </div>
                      {selectedAnswers[currentIndex] !== -1 && (
                        <div className="text-[#004bac] text-sm leading-relaxed">
                          <strong className="text-slate-800">Explanation:</strong>{" "}
                          {currentQuestion?.explanation}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Submit Button (only on last question and visible only when not transitioning) */}
                  {currentIndex === questions.length - 1 && !isTransitioning && (
                    <div className="border-t border-slate-200 pt-6 bg-white">
                      <div className="text-center">
                        <button
                          onClick={handleSubmit}
                          className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Submit Test
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto">
            {/* Results Card */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2">Test Completed!</h2>
                <p className="text-green-100">
                  Congratulations on finishing the test
                </p>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-slate-50 rounded-full mb-6 border-4 border-slate-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#004bac]">
                        {calculateScore()}
                      </div>
                      <div className="text-sm text-slate-500 font-medium">
                        out of {questions.length}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Your Final Score
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg">
                    You scored{" "}
                    {Math.round((calculateScore() / questions.length) * 100)}%
                    on this test
                  </p>

                  {/* Score Breakdown */}
                  <div className="bg-slate-50 rounded-lg p-6 mb-8 border border-slate-200">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {calculateScore()}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">
                          Correct
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600 mb-1">
                          {questions.length - calculateScore()}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">
                          Incorrect
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#004bac] mb-1">
                          {questions.length}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">
                          Total
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="inline-flex items-center px-8 py-3 bg-[#004bac] text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-sm"
                    onClick={() => {
                      setShowResult(false);
                      setCurrentIndex(0);
                      setSelectedAnswers(new Array(questions.length).fill(-1));
                      setAnswerFeedback(new Array(questions.length).fill(""));
                    }}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Retake Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Perspective container for 3D */
        .perspective-1500 {
          perspective: 1500px;
        }

        /* Hide backface on front and back */
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          border-radius: 1rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          background: white;
          user-select: none;
        }

        /* Transform origins for flip */
        .origin-left {
          transform-origin: left center;
        }
        .origin-right {
          transform-origin: right center;
        }

        /* Flip animation stages for "next" direction */
        .flip-start-next {
          transform: rotateY(0deg);
          transition: transform ${flipDuration}ms cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow:
            inset 0 0 20px rgba(0, 0, 0, 0.1),
            0 8px 20px rgba(0, 0, 0, 0.15);
          z-index: 20;
        }
        .flip-mid-next {
          transform: rotateY(-90deg);
          transition: transform ${flipDuration / 2}ms linear;
          box-shadow:
            inset 0 0 40px rgba(0, 0, 0, 0.25),
            0 12px 24px rgba(0, 0, 0, 0.25);
          z-index: 10;
        }
        .flip-front-next {
          transform: rotateY(90deg);
          transition: transform ${flipDuration / 2}ms linear;
          z-index: 30;
          box-shadow:
            inset 0 0 20px rgba(0, 0, 0, 0.1),
            0 8px 20px rgba(0,0,0,0.1);
        }

        /* Flip animation stages for "prev" direction */
        .flip-start-prev {
          transform: rotateY(0deg);
          transition: transform ${flipDuration}ms cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow:
            inset 0 0 20px rgba(0, 0, 0, 0.1),
            0 8px 20px rgba(0, 0, 0, 0.15);
          z-index: 20;
        }
        .flip-mid-prev {
          transform: rotateY(90deg);
          transition: transform ${flipDuration / 2}ms linear;
          box-shadow:
            inset 0 0 40px rgba(0, 0, 0, 0.25),
            0 12px 24px rgba(0, 0, 0, 0.25);
          z-index: 10;
        }
        .flip-front-prev {
          transform: rotateY(-90deg);
          transition: transform ${flipDuration / 2}ms linear;
          z-index: 30;
          box-shadow:
            inset 0 0 20px rgba(0, 0, 0, 0.1),
            0 8px 20px rgba(0,0,0,0.1);
        }

        /* Utility hidden */
        .hidden {
          display: none !important;
        }
      `}</style>
    </div>
  );
}