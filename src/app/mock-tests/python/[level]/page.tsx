"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BookOpen, Play, ArrowRight, Code2, Target } from "lucide-react";

const beginnerTests = [
  { id: "attempt1", title: "Python Basics Mock Test 1" },
  { id: "attempt2", title: "Python Basics Mock Test 2" },
  { id: "attempt3", title: "Python Basics Mock Test 3" },
  { id: "attempt4", title: "Python Basics Mock Test 4" },
  { id: "attempt5", title: "Python Basics Mock Test 5" },
  { id: "attempt6", title: "Python Basics Mock Test 6" },
  { id: "attempt7", title: "Python Basics Mock Test 7" },
  { id: "attempt8", title: "Python Basics Mock Test 8" },
  { id: "attempt9", title: "Python Basics Mock Test 9" },
  { id: "attempt10", title: "Python Basics Mock Test 10" },
];

const intermediateTests = [
  { id: "attempt1", title: "Python Basics Mock Test 1" },
  { id: "attempt2", title: "Python Basics Mock Test 2" },
  { id: "attempt3", title: "Python Basics Mock Test 3" },
  { id: "attempt4", title: "Python Basics Mock Test 4" },
  { id: "attempt5", title: "Python Basics Mock Test 5" },
  { id: "attempt6", title: "Python Basics Mock Test 6" },
  { id: "attempt7", title: "Python Basics Mock Test 7" },
  { id: "attempt8", title: "Python Basics Mock Test 8" },
  { id: "attempt9", title: "Python Basics Mock Test 9" },
  { id: "attempt10", title: "Python Basics Mock Test 10" },
];

const advancedTests = [
  { id: "attempt1", title: "Python Basics Mock Test 1" },
  { id: "attempt2", title: "Python Basics Mock Test 2" },
  { id: "attempt3", title: "Python Basics Mock Test 3" },
  { id: "attempt4", title: "Python Basics Mock Test 4" },
  { id: "attempt5", title: "Python Basics Mock Test 5" },
  { id: "attempt6", title: "Python Basics Mock Test 6" },
  { id: "attempt7", title: "Python Basics Mock Test 7" },
  { id: "attempt8", title: "Python Basics Mock Test 8" },
  { id: "attempt9", title: "Python Basics Mock Test 9" },
  { id: "attempt10", title: "Python Basics Mock Test 10" },
];

const LEVELS = ["beginner", "intermediate", "advanced"] as const;
type Level = typeof LEVELS[number];

const levelTestsMap: Record<Level, { id: string; title: string }[]> = {
  beginner: beginnerTests,
  intermediate: intermediateTests,
  advanced: advancedTests,
};

const levelConfig = {
  beginner: {
    gradient: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50",
    darkBgColor: "dark:bg-blue-900/20",
    textColor: "text-blue-600",
    darkTextColor: "dark:text-blue-400",
    icon: <BookOpen className="w-5 h-5" />
  },
  intermediate: {
    gradient: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-50",
    darkBgColor: "dark:bg-purple-900/20",
    textColor: "text-purple-600",
    darkTextColor: "dark:text-purple-400",
    icon: <Code2 className="w-5 h-5" />
  },
  advanced: {
    gradient: "from-orange-500 to-red-400",
    bgColor: "bg-orange-50",
    darkBgColor: "dark:bg-orange-900/20",
    textColor: "text-orange-600",
    darkTextColor: "dark:text-orange-400",
    icon: <Target className="w-5 h-5" />
  }
};

const MockTestListPage = () => {
  const params = useParams();
  const level = params?.level as Level;

  if (!LEVELS.includes(level)) {
    return <div>Invalid level</div>;
  }

  const tests = levelTestsMap[level];
  const config = levelConfig[level];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800">
      <div className="p-6 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${config.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
            {config.icon}
            {level.charAt(0).toUpperCase() + level.slice(1)} Level
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Python Mock Tests
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose any mock test to start your Python practice and prepare for interviews effectively.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <nav className="w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sticky top-6 h-fit">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white capitalize flex items-center gap-3">
              {config.icon}
              {level} Mock Tests
            </h2>

            <div className="space-y-2">
              {tests.map((test, index) => (
                <Link
                  key={test.id}
                  href={`/mock-tests/python/${level}/${test.id}`}
                  className="group block"
                >
                  <div className={`p-4 rounded-xl transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-current ${config.bgColor} ${config.darkBgColor} hover:bg-gradient-to-r hover:${config.gradient} hover:text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${config.textColor} ${config.darkTextColor} group-hover:text-white bg-white dark:bg-gray-700 group-hover:bg-white/20 flex items-center justify-center text-sm font-bold transition-colors`}>
                          {index + 1}
                        </div>
                        <span className={`font-medium ${config.textColor} ${config.darkTextColor} group-hover:text-white transition-colors`}>
                          {test.title}
                        </span>
                      </div>
                      <ArrowRight className={`w-4 h-4 ${config.textColor} ${config.darkTextColor} group-hover:text-white group-hover:translate-x-1 transition-all`} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 h-fit">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${config.gradient} text-white mb-6`}>
                  <Play className="w-8 h-8" />
                </div>
                
                <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                  Select a Mock Test
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Choose any mock test from the sidebar to start your Python practice session. 
                  Each test is designed to help you prepare for interviews and improve your coding skills.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border border-gray-200 dark:border-gray-600`}>
                    <div className={`w-12 h-12 ${config.textColor} ${config.darkTextColor} mx-auto mb-4`}>
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>Multiple Choice</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Test your knowledge with carefully crafted questions
                    </p>
                  </div>

                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border border-gray-200 dark:border-gray-600`}>
                    <div className={`w-12 h-12 ${config.textColor} ${config.darkTextColor} mx-auto mb-4`}>
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>Instant Results</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Get immediate feedback and detailed explanations
                    </p>
                  </div>

                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border border-gray-200 dark:border-gray-600`}>
                    <div className={`w-12 h-12 ${config.textColor} ${config.darkTextColor} mx-auto mb-4`}>
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                      </svg>
                    </div>
                    <h3 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>Track Progress</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Monitor your improvement over time
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    💡 Pro Tip
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Start with Test 1 and work your way through sequentially for the best learning experience.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MockTestListPage;