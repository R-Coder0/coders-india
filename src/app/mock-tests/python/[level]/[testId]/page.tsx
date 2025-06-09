"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
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

  // page.tsx में useEffect को अपडेट करें
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        // Hyphens को पूरी तरह हटाएँ
        const formattedTestId = testId.replace(/-/g, '');
        const mod = await import(`@/data/python/${level}/${formattedTestId}`);
        
        // एक्सपोर्टेड वेरिएबल को सही नाम से चेक करें
        if (!mod.questions) {
          throw new Error(`Questions not found in ${formattedTestId}.ts`);
        }
        
        setQuestions(mod.questions);
        setSelectedAnswers(new Array(mod.questions.length).fill(-1));
      } catch (error) {
        console.error("Loading failed:", error);
        // Debugging के लिए पाथ प्रिंट करें
        console.log("Trying to load:", `@/data/python/${level}/${testId.replace(/-/g, '')}`);
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [level, testId]);

  // Rest of your test logic like handleSelectOption, goToNext, calculateScore same as before

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-indigo-500 border-t-transparent mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Loading Your Test...</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Preparing questions for you</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-red-200 dark:border-red-800">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Test Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400">No questions found for this test. Please try again later.</p>
        </div>
      </div>
    );
  }

  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 mt-[20px]">
      {!showResult ? (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Python Mock Test</h1>
                  <div className="flex items-center space-x-4 text-indigo-100">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      Level: {level.charAt(0).toUpperCase() + level.slice(1)}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      Test: {testId}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{currentIndex + 1}</div>
                  <div className="text-indigo-200 text-sm">of {questions.length}</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className="bg-white h-3 rounded-full transition-all duration-500 ease-out shadow-lg"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-indigo-200 mt-1">
                <span>Progress</span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 mb-8 overflow-hidden">
            <div className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {currentIndex + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white leading-relaxed">
                    {currentQuestion.question}
                  </h2>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-4">
                {currentQuestion.options.map((option, idx) => (
                  <label
                    key={idx}
                    className={`group block p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                      selectedAnswers[currentIndex] === idx
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-indigo-500 shadow-lg transform scale-[1.02]"
                        : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedAnswers[currentIndex] === idx
                          ? "border-white bg-white"
                          : "border-gray-400 dark:border-gray-500 group-hover:border-indigo-400"
                      }`}>
                        {selectedAnswers[currentIndex] === idx && (
                          <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                        )}
                      </div>
                      <span className={`font-medium ${
                        selectedAnswers[currentIndex] === idx
                          ? "text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }`}>
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      <span className={`flex-1 ${
                        selectedAnswers[currentIndex] === idx
                          ? "text-white"
                          : "text-gray-800 dark:text-gray-200"
                      }`}>
                        {option}
                      </span>
                    </div>
                    <input
                      type="radio"
                      name={`question-${currentQuestion.id}`}
                      checked={selectedAnswers[currentIndex] === idx}
                      onChange={() => handleSelectOption(idx)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex justify-between items-center">
              <button
                disabled={currentIndex === 0}
                onClick={goToPrevious}
                className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span>Question</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  {currentIndex + 1} / {questions.length}
                </span>
              </div>

              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={goToNext}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Submit Test
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto">
            {/* Results Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold mb-2">Test Completed!</h2>
                <p className="text-green-100 text-lg">Congratulations on finishing the test</p>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-full mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                        {calculateScore()}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        out of {questions.length}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Your Final Score
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    You scored {Math.round((calculateScore() / questions.length) * 100)}% on this test
                  </p>

                  {/* Score Analysis */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 mb-8">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {calculateScore()}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Correct</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                          {questions.length - calculateScore()}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Incorrect</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                          {questions.length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Total</div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                    onClick={() => {
                      setShowResult(false);
                      setCurrentIndex(0);
                      setSelectedAnswers(new Array(questions.length).fill(-1));
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Retake Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}