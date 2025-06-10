"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BookOpen, Play, ArrowRight, Code2, Target, CheckCircle, Star, TrendingUp } from "lucide-react";

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
    gradient: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50",
    darkBgColor: "dark:bg-blue-950/30",
    textColor: "text-blue-700",
    darkTextColor: "dark:text-blue-300",
    borderColor: "border-blue-200",
    darkBorderColor: "dark:border-blue-800",
    icon: <BookOpen className="w-5 h-5" />
  },
  intermediate: {
    gradient: "from-indigo-600 to-purple-600",
    bgColor: "bg-indigo-50",
    darkBgColor: "dark:bg-indigo-950/30",
    textColor: "text-indigo-700",
    darkTextColor: "dark:text-indigo-300",
    borderColor: "border-indigo-200",
    darkBorderColor: "dark:border-indigo-800",
    icon: <Code2 className="w-5 h-5" />
  },
  advanced: {
    gradient: "from-orange-600 to-red-600",
    bgColor: "bg-orange-50",
    darkBgColor: "dark:bg-orange-950/30",
    textColor: "text-orange-700",
    darkTextColor: "dark:text-orange-300",
    borderColor: "border-orange-200",
    darkBorderColor: "dark:border-orange-800",
    icon: <Target className="w-5 h-5" />
  }
};

const MockTestListPage = () => {
  const params = useParams();
  const level = params?.level as Level;

  if (!LEVELS.includes(level)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Invalid Level</h1>
          <p className="text-gray-600 dark:text-gray-400">Please select a valid difficulty level.</p>
        </div>
      </div>
    );
  }

  const tests = levelTestsMap[level];
  const config = levelConfig[level];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${config.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium mb-4 shadow-sm`}>
            {config.icon}
            {level.charAt(0).toUpperCase() + level.slice(1)} Level
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Python Mock Tests
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Practice with comprehensive mock tests designed to help you master Python and ace your technical interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Test List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                {config.icon}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                  {level} Tests
                </h2>
              </div>

              <div className="space-y-2">
                {tests.map((test, index) => (
                  <Link
                    key={test.id}
                    href={`/mock-tests/python/${level}/${test.id}`}
                    className="group block"
                  >
                    <div className={`p-4 rounded-lg transition-all duration-200 hover:shadow-md border ${config.borderColor} ${config.darkBorderColor} hover:border-current ${config.bgColor} ${config.darkBgColor} hover:bg-gradient-to-r hover:${config.gradient} hover:text-white hover:border-transparent`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-full ${config.textColor} ${config.darkTextColor} group-hover:text-white bg-white dark:bg-gray-700 group-hover:bg-white/20 flex items-center justify-center text-sm font-semibold transition-colors flex-shrink-0`}>
                            {index + 1}
                          </div>
                          <span className={`font-medium ${config.textColor} ${config.darkTextColor} group-hover:text-white transition-colors text-sm`}>
                            Test {index + 1}
                          </span>
                        </div>
                        <ArrowRight className={`w-4 h-4 ${config.textColor} ${config.darkTextColor} group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0`} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              
              {/* Welcome Section */}
              <div className="p-8 text-center border-b border-gray-200 dark:border-gray-700">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${config.gradient} text-white mb-6`}>
                  <Play className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Test Your Skills?
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                  Select any mock test from the sidebar to begin your Python practice session. Each test contains carefully curated questions to enhance your programming skills.
                </p>
              </div>

              {/* Features Grid */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  What You&apos;ll Get
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border ${config.borderColor} ${config.darkBorderColor}`}>
                    <div className={`${config.textColor} ${config.darkTextColor} mb-4`}>
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h5 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>
                      Multiple Choice Questions
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Well-crafted questions covering key Python concepts and programming fundamentals.
                    </p>
                  </div>

                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border ${config.borderColor} ${config.darkBorderColor}`}>
                    <div className={`${config.textColor} ${config.darkTextColor} mb-4`}>
                      <Star className="w-8 h-8" />
                    </div>
                    <h5 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>
                      Instant Feedback
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Get immediate results with detailed explanations for each answer.
                    </p>
                  </div>

                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border ${config.borderColor} ${config.darkBorderColor}`}>
                    <div className={`${config.textColor} ${config.darkTextColor} mb-4`}>
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <h5 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>
                      Progress Tracking
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Monitor your improvement and identify areas for growth.
                    </p>
                  </div>
                </div>

                {/* Pro Tip */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3">
                    <div className="text-blue-600 dark:text-blue-400 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                        💡 Pro Tip
                      </h6>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        For the best learning experience, start with Test 1 and progress sequentially through all tests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTestListPage;