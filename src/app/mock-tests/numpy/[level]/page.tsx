"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Play, ArrowRight, CheckCircle, Star, TrendingUp } from "lucide-react";

const numpyTests = [
  { id: "attempt1", title: "NumPy Intermediate Mock Test 1" },
  { id: "attempt2", title: "NumPy Intermediate Mock Test 2" },
  { id: "attempt3", title: "NumPy Intermediate Mock Test 3" },
  { id: "attempt4", title: "NumPy Intermediate Mock Test 4" },
  { id: "attempt5", title: "NumPy Intermediate Mock Test 5" },
  { id: "attempt6", title: "NumPy Intermediate Mock Test 6" },
  { id: "attempt7", title: "NumPy Intermediate Mock Test 7" },
  { id: "attempt8", title: "NumPy Intermediate Mock Test 8" },
  { id: "attempt9", title: "NumPy Intermediate Mock Test 9" },
  { id: "attempt10", title: "NumPy Intermediate Mock Test 10" },
];

const LEVELS = ["intermediate"] as const;
type Level = typeof LEVELS[number];

const levelTestsMap: Record<Level, { id: string; title: string }[]> = {
  intermediate: numpyTests,
};

const levelConfig = {
  intermediate: {
    gradient: "from-orange-600 to-orange-500",
    bgColor: "bg-orange-50",
    darkBgColor: "dark:bg-orange-950/30",
    textColor: "text-orange-700",
    darkTextColor: "dark:text-orange-300",
    borderColor: "border-orange-200",
    darkBorderColor: "dark:border-orange-800",
    icon: <TrendingUp className="w-5 h-5" />
  }
};

const MockTestListPage = () => {
  const params = useParams();
  const level = params?.level as Level;

  if (!LEVELS.includes(level)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Coming Soon</h1>
          <p className="text-gray-600 dark:text-gray-400">
            We&apos;re currently preparing more NumPy test levels. Check back soon!
          </p>
          <Link 
            href="/mock-tests/numpy/intermediate" 
            className="mt-4 inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Go to Available Tests
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const tests = levelTestsMap[level];
  const config = levelConfig[level];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 mt-10  ">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${config.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium mb-4 shadow-sm`}>
            {config.icon}
            NumPy Tests
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            NumPy Mock Tests
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Practice with comprehensive mock tests designed to help you master NumPy and excel in data science interviews.
          </p>
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              Note: Currently only intermediate level tests are available. Beginner and advanced levels coming soon!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Test List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                {config.icon}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  NumPy Tests
                </h2>
              </div>

              <div className="space-y-2">
                {tests.map((test, index) => (
                  <Link
                    key={test.id}
                    href={`/mock-tests/numpy/${level}/${test.id}`}
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
                  Ready to Test Your NumPy Skills?
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                  Select any mock test from the sidebar to begin your NumPy practice session. Each test contains carefully curated questions covering broadcasting, linear algebra, array manipulation, and more.
                </p>
              </div>

              {/* Features Grid */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  What You&apos;ll Learn
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border ${config.borderColor} ${config.darkBorderColor}`}>
                    <div className={`${config.textColor} ${config.darkTextColor} mb-4`}>
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h5 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>
                      Broadcasting Rules
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Master NumPy broadcasting concepts and apply them to complex array operations efficiently.
                    </p>
                  </div>

                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border ${config.borderColor} ${config.darkBorderColor}`}>
                    <div className={`${config.textColor} ${config.darkTextColor} mb-4`}>
                      <Star className="w-8 h-8" />
                    </div>
                    <h5 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>
                      Linear Algebra
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Learn matrix operations, eigenvalues, and essential linear algebra functions for data science.
                    </p>
                  </div>

                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border ${config.borderColor} ${config.darkBorderColor}`}>
                    <div className={`${config.textColor} ${config.darkTextColor} mb-4`}>
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <h5 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>
                      Statistical Functions
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Understand statistical operations, aggregations, and data analysis techniques with NumPy.
                    </p>
                  </div>
                </div>

                {/* Coming Soon Notice */}
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
                  <div className="flex items-start gap-3">
                    <div className="text-orange-600 dark:text-orange-400 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">
                        🚀 Coming Soon
                      </h6>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        We&apos;re working on beginner and advanced NumPy test levels with more specialized content. Stay tuned!
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