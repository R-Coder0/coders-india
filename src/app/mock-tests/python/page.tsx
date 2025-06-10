/* eslint-disable @next/next/no-img-element */
"use client";
// import { useEffect } from 'react';
import {
  BookOpenCheck,
  Brain,
  Rocket,
  ArrowRight,
  Code,
  Trophy,
  Zap,
} from "lucide-react";
import { useRouter } from 'next/navigation';

const levels = [
  {
    name: "Beginner",
    description:
      "Start your Python journey with basic concepts, syntax, variables, and simple programs.",
    longDescription: "Perfect for newcomers to programming",
    icon: <BookOpenCheck className="w-10 h-10 text-blue-600" />,
    slug: "beginner",
    gradient: "from-blue-600 to-blue-500",
    bgGradient: "from-blue-50 to-blue-100",
    hoverGradient: "hover:from-blue-700 hover:to-blue-600",
    shadowColor: "shadow-blue-200",
    borderColor: "border-blue-200",
    textColor: "text-blue-900",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bg1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233B82F6'/%3E%3Cstop offset='100%25' style='stop-color:%232563EB'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23bg1)'/%3E%3Cg opacity='0.2'%3E%3Ccircle cx='100' cy='100' r='40' fill='white'/%3E%3Ccircle cx='300' cy='200' r='30' fill='white'/%3E%3Crect x='200' y='50' width='60' height='60' rx='10' fill='white'/%3E%3C/g%3E%3Ctext x='200' y='160' text-anchor='middle' fill='white' font-size='32' font-weight='bold'%3E{ }%3C/text%3E%3C/svg%3E",
    features: [
      "Variables & Data Types",
      "Control Structures",
      "Basic Functions",
      "Simple Projects",
    ],
  },
  {
    name: "Intermediate",
    description:
      "Enhance your Python skills with functions, OOP, file handling, and data structures.",
    longDescription: "Build complex applications with confidence",
    icon: <Brain className="w-10 h-10 text-indigo-600" />,
    slug: "intermediate",
    gradient: "from-indigo-600 to-indigo-500",
    bgGradient: "from-indigo-50 to-indigo-100",
    hoverGradient: "hover:from-indigo-700 hover:to-indigo-600",
    shadowColor: "shadow-indigo-200",
    borderColor: "border-indigo-200",
    textColor: "text-indigo-900",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366F1'/%3E%3Cstop offset='100%25' style='stop-color:%234F46E5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23bg2)'/%3E%3Cg opacity='0.2'%3E%3Cpolygon points='150,80 200,50 250,80 250,130 200,160 150,130' fill='white'/%3E%3Ccircle cx='100' cy='200' r='35' fill='white'/%3E%3Crect x='280' y='180' width='50' height='50' rx='8' fill='white'/%3E%3C/g%3E%3Ctext x='200' y='160' text-anchor='middle' fill='white' font-size='28' font-weight='bold'%3Eclass%3C/text%3E%3C/svg%3E",
    features: [
      "Object-Oriented Programming",
      "Exception Handling",
      "File Operations",
      "Data Structures",
    ],
  },
  {
    name: "Advanced",
    description:
      "Master Python with decorators, generators, async programming, and performance optimization.",
    longDescription: "Become a Python expert and mentor others",
    icon: <Rocket className="w-10 h-10 text-purple-600" />,
    slug: "advanced",
    gradient: "from-purple-600 to-purple-500",
    bgGradient: "from-purple-50 to-purple-100",
    hoverGradient: "hover:from-purple-700 hover:to-purple-600",
    shadowColor: "shadow-purple-200",
    borderColor: "border-purple-200",
    textColor: "text-purple-900",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bg3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%239333EA'/%3E%3Cstop offset='100%25' style='stop-color:%237C3AED'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23bg3)'/%3E%3Cg opacity='0.2'%3E%3Cpath d='M150,100 L200,70 L250,100 L280,150 L250,200 L200,230 L150,200 L120,150 Z' fill='white'/%3E%3Ccircle cx='320' cy='80' r='15' fill='white'/%3E%3Ccircle cx='80' cy='220' r='25' fill='white'/%3E%3C/g%3E%3Ctext x='200' y='160' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3E@decorator%3C/text%3E%3C/svg%3E",
    features: [
      "Decorators & Generators",
      "Async Programming",
      "Performance Optimization",
      "Design Patterns",
    ],
  },
];

const PythonMockTestLevels = () => {
  const router = useRouter();

  const handleLevelClick = (slug: string) => {
    router.push(`/mock-tests/python/${slug}`);
  };

  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Code className="w-4 h-4" />
            Python Mastery Path
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
          style={{
            textAlign: "center"
          }}
          >
            Choose Your Level
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Embark on your Python journey with our comprehensive mock tests
            designed for every skill level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {levels.map((level, index) => (
            <div
              key={level.slug}
              onClick={() => handleLevelClick(level.slug)}
              className={`group relative bg-white border-2 ${level.borderColor} rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${level.shadowColor} h-[520px] cursor-pointer`}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={level.image}
                  alt={`${level.name} level illustration`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Icon overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg group-hover:bg-white transition-all duration-300">
                  {level.icon}
                </div>

                {/* Level indicator */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <span className="text-gray-800 text-sm font-semibold">
                    Level {index + 1}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 h-[calc(520px-192px)] flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className={`text-2xl font-bold ${level.textColor} group-hover:text-blue-700 transition-colors duration-300`}>
                    {level.name}
                  </h2>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>

                <p className="text-gray-600 text-sm mb-2 flex-shrink-0">
                  {level.description}
                </p>

                <p className="text-gray-500 text-xs mb-4 flex-shrink-0">
                  {level.longDescription}
                </p>

                {/* Features List */}
                <div className="flex-grow">
                  <h4 className="text-gray-800 font-semibold text-sm mb-3 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    What you&apos;ll learn:
                  </h4>
                  <ul className="space-y-2">
                    {level.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 text-xs flex items-center gap-2"
                      >
                        <Zap className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${level.gradient} text-white px-6 py-3 rounded-lg text-sm font-semibold group-hover:shadow-lg transition-all duration-300 ${level.hoverGradient}`}
                  >
                    Start Testing
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Subtle hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PythonMockTestLevels;