"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BookOpen, Play, ArrowRight, Code2, Target, CheckCircle, Star, TrendingUp } from "lucide-react";

const powerBITests = [
  { id: "attempt1", title: "Power BI Basics Mock Test 1" },
  { id: "attempt2", title: "Power BI Basics Mock Test 2" },
  { id: "attempt3", title: "Power BI Basics Mock Test 3" },
  { id: "attempt4", title: "Power BI Basics Mock Test 4" },
  { id: "attempt5", title: "Power BI Basics Mock Test 5" },
  { id: "attempt6", title: "Power BI Basics Mock Test 6" },
  { id: "attempt7", title: "Power BI Basics Mock Test 7" },
  { id: "attempt8", title: "Power BI Basics Mock Test 8" },
];

const LEVELS = ["intermediate"] as const;
type Level = typeof LEVELS[number];

const levelTestsMap: Record<Level, { id: string; title: string }[]> = {
  intermediate: powerBITests,
};

const levelConfig = {
  intermediate: {
    gradient: "from-indigo-600 to-purple-600",
    bgColor: "bg-indigo-50",
    darkBgColor: "dark:bg-indigo-950/30",
    textColor: "text-indigo-700",
    darkTextColor: "dark:text-indigo-300",
    borderColor: "border-indigo-200",
    darkBorderColor: "dark:border-indigo-800",
    icon: <Code2 className="w-5 h-5" />
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
            We're currently preparing more Power BI test levels. Check back soon!
          </p>
          <Link 
            href="/mock-tests/power-bi/intermediate" 
            className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${config.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium mb-4 shadow-sm`}>
            {config.icon}
            Power BI Tests
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Power BI Mock Tests
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Practice with comprehensive mock tests designed to help you master Power BI and ace your data analytics interviews.
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
                  Power BI Tests
                </h2>
              </div>

              <div className="space-y-2">
                {tests.map((test, index) => (
                  <Link
                    key={test.id}
                    href={`/mock-tests/powerbi/${level}/${test.id}`}
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
                  Ready to Test Your Power BI Skills?
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                  Select any mock test from the sidebar to begin your Power BI practice session. Each test contains carefully curated questions covering DAX, data modeling, visualization, and more.
                </p>
              </div>

              {/* Features Grid */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  What You'll Learn
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border ${config.borderColor} ${config.darkBorderColor}`}>
                    <div className={`${config.textColor} ${config.darkTextColor} mb-4`}>
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h5 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>
                      DAX Formulas
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Master essential DAX functions and calculations used in real-world Power BI projects.
                    </p>
                  </div>

                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border ${config.borderColor} ${config.darkBorderColor}`}>
                    <div className={`${config.textColor} ${config.darkTextColor} mb-4`}>
                      <Star className="w-8 h-8" />
                    </div>
                    <h5 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>
                      Data Modeling
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Understand relationships, star schemas, and optimal data modeling techniques.
                    </p>
                  </div>

                  <div className={`${config.bgColor} ${config.darkBgColor} p-6 rounded-xl border ${config.borderColor} ${config.darkBorderColor}`}>
                    <div className={`${config.textColor} ${config.darkTextColor} mb-4`}>
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <h5 className={`font-semibold mb-2 ${config.textColor} ${config.darkTextColor}`}>
                      Visualization Best Practices
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Learn to create effective, insightful visualizations that tell compelling data stories.
                    </p>
                  </div>
                </div>

                {/* Coming Soon Notice */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <div className="flex items-start gap-3">
                    <div className="text-purple-600 dark:text-purple-400 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">
                        🚀 Coming Soon
                      </h6>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        We're working on beginner and advanced Power BI test levels with more specialized content. Stay tuned!
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