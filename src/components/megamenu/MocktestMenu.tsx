"use client";

import Image from "next/image";
import Link from "next/link";

export default function MockTestMenu({ onMouseEnter, onMouseLeave }: {
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  const categories = [
    {
      name: "HTML",
      icon: "/images/languages/html.png",
      items: ["HTML Interview"],
    },
    {
      name: "Node.js",
      icon: "/images/languages/nodejs.png",
      items: ["Node.js Interview"],
    },
    {
      name: "CSS",
      icon: "/images/languages/css.png",
      items: ["CSS Interview"],
    },
    {
      name: "Express.js",
      icon: "/images/languages/expressjs.png",
      items: ["Express Interview"],
    },
    {
      name: "JavaScript",
      icon: "/images/languages/js.png",
      items: ["JS Interview Questions"],
    },
    {
      name: "MongoDB",
      icon: "/images/languages/mongodb.png",
      items: ["MongoDB Interview"],
    },
    {
      name: "React.js",
      icon: "/images/languages/react.png",
      items: ["React Interview"],
    },
    {
      name: "MySQL",
      icon: "/images/languages/mysql.png",
      items: ["MySQL Interview"],
    },
    {
      name: "NumPy",
      icon: "/images/languages/numpy.png",
      items: ["NumPy Interview"],
    },
    {
      name: "Python",
      icon: "/images/languages/python.png",
      items: ["put python concept to test"],
    },
    {
      name: "Pandas",
      icon: "/images/languages/pandas.png",
      items: ["Pandas Interview"],
    },
    {
      name: "BootStrap",
      icon: "/images/languages/bs.png",
      items: ["Evaluate Responsive Design Skill"],
    },
  ];

  // Function to split text after 2 words
  const formatItemText = (text: string) => {
    const words = text.split(' ');
    if (words.length <= 2) return text;
    return (
      <>
        {words.slice(0, 2).join(' ')}<br />
        {words.slice(2).join(' ')}
      </>
    );
  };

  return (
    <div
      className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50 p-6"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-8xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Interview Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
          {categories.map((category) => (
            <div key={category.name} className="mb-4">
              <Link
                href={`/mock-tests/${category.name.toLowerCase()}`}
                className="group" // Added group class for hover effects
              >
                <div className="flex items-center mb-2 p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="relative mr-2 transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0px_25px_10px_-15px_rgba(5,5,5,0.2)]">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={40}
                      height={40}
                      className="w-11 h-11 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                      {category.name}
                    </h3>
                    <p className="text-[0.8rem] text-gray-600 dark:text-gray-400">
                      {formatItemText(category.items[0])}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                "Unlock your coding potential! Whether you're a beginner or
                leveling up, our platform offers hands-on tutorials, real world
                assignments, mock tests, and practice questions."
              </p>
              <Link
                href="/contact"
                className="text-blue-500 hover:underline text-sm"
              >
                Get in touch
              </Link>
            </div>

            <div className="flex space-x-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  300+
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Completed projects
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  100%
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Satisfied clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}