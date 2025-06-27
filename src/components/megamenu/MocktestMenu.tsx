"use client";

import Image from "next/image";
import Link from "next/link";

export default function MockTestMenu({ 
  onMouseEnter, 
  onMouseLeave,
  onLinkClick 
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick?: () => void;
}) {
  const categories = [
    {
      name: "HTML",
      icon: "/images/languages/html.png",
      description: "Test your HTML knowledge.",
      href: "/mock-tests/html"
    },
    {
      name: "CSS", 
      icon: "/images/languages/css.png",
      description: "Enhance CSS skills with tests.",
      href: "/mock-tests/css"
    },
    {
      name: "JavaScript",
      icon: "/images/languages/js.png", 
      description: "Challenge your JavaScript skills.",
      href: "/mock-tests/javascript"
    },
    {
      name: "React.js",
      icon: "/images/languages/react.png",
      description: "Assess React.js expertise now.",
      href: "/mock-tests/reactjs"
    },
    {
      name: "Python", 
      icon: "/images/languages/python.png",
      description: "Put Python concepts to test.",
      href: "/mock-tests/python"
    },
    {
      name: "jQuery",
      icon: "/images/languages/jquery.png",
      description: "Evaluate your jQuery knowledge.",
      href: "/mock-tests/jquery"
    },
    {
      name: "Node.js",
      icon: "/images/languages/nodejs.png", 
      description: "Test backend skills with Node.",
      href: "/mock-tests/nodejs"
    },
    {
      name: "Express.js",
      icon: "/images/languages/expressjs.png",
      description: "Validate API knowledge today.",
      href: "/mock-tests/expressjs"
    },
    {
      name: "MongoDB",
      icon: "/images/languages/mongodb.png",
      description: "Test database knowledge here.",
      href: "/mock-tests/mongodb"
    },
    {
      name: "MySQL", 
      icon: "/images/languages/mysql.png",
      description: "Prove expertise in MySQL now.",
      href: "/mock-tests/mysql"
    },
    {
      name: "NumPy",
      icon: "/images/languages/numpy.png",
      description: "Test numerical data handling.",
      href: "/mock-tests/numpy"
    },
    {
      name: "Pandas",
      icon: "/images/languages/pandas.png", 
      description: "Analyze data efficiently here.",
      href: "/mock-tests/pandas"
    },
    {
      name: "Bootstrap",
      icon: "/images/languages/bs.png",
      description: "Evaluate responsive design skills.",
      href: "/mock-tests/bootstrap"
    },
    {
      name: "Power bi",
      icon: "/images/languages/bi.png",
      description: "Evaluate responsive design skills.",
      href: "/mock-tests/powerbi"
    },

  ];

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div
      className=" absolute top-full left-0  w-full bg-white shadow-lg z-50 animate-in slide-in-from-top-2 duration-200 "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className=" px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Mock Tests</h2>
        </div>

        {/* Grid - exactly like the image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex items-start space-x-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              onClick={handleLinkClick}
              style={{
                animationDelay: `${index * 30}ms`,
                animation: 'fadeInUp 0.4s ease-out forwards'
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={38}
                  height={38}
                  className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-base mb-1 group-hover:text-blue-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm"
                style={{
                  fontSize: '12px', // 14px
                }}
                >
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom section exactly like image */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1">
              <p className="text-gray-600 text-sm leading-relaxed mb-3 max-w-2xl">
                &quot;Unlock your coding potential! Whether you&apos;re a beginner or leveling up, our platform offers hands-on tutorials, real world assignments, mock tests, and practice questions.&quot;
              </p>
              <Link
                href="/contact"
                className="text-blue-500 hover:text-blue-600 text-sm hover:underline transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Get in touch
              </Link>
            </div>

            <div className="flex space-x-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">300+</p>
                <p className="text-gray-600 text-sm">Completed projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-gray-600 text-sm">Satisfied clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-in-from-top-2 {
          animation: slideIn 0.2s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}