"use client";

import { SetStateAction, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/app/globals.css";
import {
  Laptop,
  Brain,
  BookOpenCheck,
  FileBadge,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Code2,
  Globe,
  Layers3,
  Atom,
  Cpu,
  Database,
  Smartphone,
  Terminal,
  GitBranch,
  Server,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { finalCta } from "@/data/Cta";
import { pythonSection } from "@/data/python";
import { roadmapSteps } from "@/data/roadmapSteps";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  interface Counters {
    learners: number;
    questionsSolved: number;
    mockTests: number;
    returnRate: number;
  }
  // In your component:
  const [counters, setCounters] = useState<Counters>({
    learners: 0,
    questionsSolved: 0,
    mockTests: 0,
    returnRate: 0,
  });
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animate counters on component mount
  useEffect(() => {
    const targetValues: Counters = {
      learners: 2500,
      questionsSolved: 12000,
      mockTests: 5000,
      returnRate: 87,
    };

    const duration = 2000;
    const frameDuration = 20;
    const steps = duration / frameDuration;

    const increments = Object.entries(targetValues).reduce(
      (acc, [key, value]) => {
        acc[key as keyof Counters] = value / steps;
        return acc;
      },
      {} as Record<keyof Counters, number>
    );


    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      setCounters((prevCounters) => {
        const newCounters = { ...prevCounters };

        (Object.keys(targetValues) as Array<keyof Counters>).forEach((key) => {
          if (frame < steps) {
            newCounters[key] = Math.round(increments[key] * frame);
          } else {
            newCounters[key] = targetValues[key];
          }
        });

        return newCounters;
      });

      if (frame >= steps) {
        clearInterval(interval);
      }
    }, frameDuration);

    return () => clearInterval(interval);
  }, []);

  const [activeFilter, setActiveFilter] = useState("all");

  const allTopics = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "HTML & CSS",
      lessons: "25+ Lessons",
      badge: "Popular",
      badgeColor: "bg-green-500",
      iconBg: "bg-pink-600",
      progress: 75,
      level: "beginner",
      category: "frontend",
    },
    {
      icon: <Code2 className="w-8 h-8 text-white" />,
      title: "JavaScript",
      lessons: "35+ Lessons",
      badge: "Hot",
      badgeColor: "bg-red-500",
      iconBg: "bg-yellow-500",
      progress: 90,
      level: "beginner",
      category: "frontend",
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Python",
      lessons: "40+ Lessons",
      badge: "Beginner",
      badgeColor: "bg-blue-500",
      iconBg: "bg-green-500",
      progress: 85,
      level: "beginner",
      category: "backend",
    },
    {
      icon: <Layers3 className="w-8 h-8 text-white" />,
      title: "PHP + MySQL",
      lessons: "20+ Lessons",
      badge: "Backend",
      badgeColor: "bg-purple-500",
      iconBg: "bg-blue-500",
      progress: 65,
      level: "intermediate",
      category: "backend",
    },
    {
      icon: <Atom className="w-8 h-8 text-white" />,
      title: "React JS",
      lessons: "28+ Lessons",
      badge: "Frontend",
      badgeColor: "bg-pink-500",
      iconBg: "bg-sky-400",
      progress: 80,
      level: "intermediate",
      category: "frontend",
      trending: true,
    },
    {
      icon: <Laptop className="w-8 h-8 text-white" />,
      title: "Java",
      lessons: "30+ Lessons",
      badge: "Enterprise",
      badgeColor: "bg-amber-500",
      iconBg: "bg-indigo-500",
      progress: 70,
      level: "advanced",
      category: "backend",
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "C++",
      lessons: "22+ Lessons",
      badge: "Advanced",
      badgeColor: "bg-[#004bac]",
      iconBg: "bg-gray-600",
      progress: 60,
      level: "advanced",
      category: "backend",
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Node.js",
      lessons: "26+ Lessons",
      badge: "Trending",
      badgeColor: "bg-green-500",
      iconBg: "bg-emerald-500",
      progress: 88,
      level: "intermediate",
      category: "backend",
      trending: true,
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Flutter",
      lessons: "18+ Lessons",
      badge: "Mobile",
      badgeColor: "bg-sky-500",
      iconBg: "bg-blue-400",
      progress: 72,
      level: "intermediate",
      category: "mobile",
      trending: true,
    },
    {
      icon: <Terminal className="w-8 h-8 text-white" />,
      title: "TypeScript",
      lessons: "24+ Lessons",
      badge: "Frontend",
      badgeColor: "bg-blue-500",
      iconBg: "bg-[#004bac]",
      progress: 82,
      level: "intermediate",
      category: "frontend",
    },
    {
      icon: <GitBranch className="w-8 h-8 text-white" />,
      title: "Git & GitHub",
      lessons: "15+ Lessons",
      badge: "Essential",
      badgeColor: "bg-orange-500",
      iconBg: "bg-gray-700",
      progress: 95,
      level: "beginner",
      category: "tools",
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: "Docker & Kubernetes",
      lessons: "20+ Lessons",
      badge: "DevOps",
      badgeColor: "bg-blue-500",
      iconBg: "bg-blue-700",
      progress: 68,
      level: "advanced",
      category: "devops",
      trending: true,
    },
  ];

  const filterTopics = (filter: SetStateAction<string>) => {
    setActiveFilter(filter);
  };

  const filteredTopics = allTopics.filter((topic) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "beginner") return topic.level === "beginner";
    if (activeFilter === "advanced") return topic.level === "advanced";
    if (activeFilter === "trending") return topic.trending;
    if (activeFilter === "frontend") return topic.category === "frontend";
    if (activeFilter === "backend") return topic.category === "backend";
    return true;
  });

  const features = [
    {
      icon: <Laptop className="w-10 h-10 text-primary" />,
      title: "Interactive Coding Experience",
      desc: "Build real projects directly in your browser with instant feedback and expert guidance.",
    },
    {
      icon: <Brain className="w-10 h-10 text-primary" />,
      title: "Personalized Learning Paths",
      desc: "AI-powered roadmaps tailored to your skill level and career goals.",
    },
    {
      icon: <BookOpenCheck className="w-10 h-10 text-primary" />,
      title: "Interview Preparation",
      desc: "Master technical interviews with our industry-aligned mock tests and challenges.",
    },
    {
      icon: <FileBadge className="w-10 h-10 text-primary" />,
      title: "Real-world Projects",
      desc: "Build portfolio-worthy applications with our guided assignments across various tech stacks.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Industry Mentors",
      desc: "Learn from professionals with experience at top tech companies who know what it takes to succeed.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Recognized Certifications",
      desc: "Earn credentials valued by employers to showcase your skills and expertise.",
    },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen transition-all duration-300 mt-[80px]">
      {/* ----------------------Hero---------------------- */}
      <section className=" bg-background text-foreground ">
        <div className="container mx-auto px-4 py-2 md:py-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Left section */}
            <div
              className="w-full lg:w-1/2 text-center lg:text-left"
              data-aos="fade-right"
            >
              <p className="font-bold mb-2 text-[15px] xl:text-[17px]">
                Hey there,
              </p>
              <h1
                className="text-[2.25rem] lg:text-[3rem] font-bold mb-2 text-[#004bac]"
                style={{
                  lineHeight: 1,
                }}
              >
                From Hello World To Hello success
              </h1>
              <h2
                className="[font-family:var(--font-rubik)]"
                style={{
                  fontSize: "18px",
                  letterSpacing: 1,
                  marginBottom: 5,
                  textAlign: "left",
                }}
              >
                Start Coding with Confidence – Learn by Doing
              </h2>
              <p className="text-lg pb-3 mb-6 font-medium">
                Ready to kickstart your coding journey or take your skills to the next level? Our platform is built for learners at every stage — with easy-to-follow tutorials, real-world assignments, mock tests, and practical coding challenges. Learn, practice, and grow all in one place. Turn your passion for coding into real expertise — get started today!̉
              </p>
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-3 pr-12 border-2 border-[#dfe1e5] rounded-md outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 h-full bg-[#333F48] text-white px-4 rounded-r-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right section - Images */}
            <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
              {/* Main instructor image */}
              <div className="relative z-10">
                <Image
                  src="/hero.png"
                  alt="Professional instructor"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

              {/* Floating student image with laptop   */}
              <div
                className="absolute top-1/4 -left-8 lg:-left-20 z-20 w-40 lg:w-64 rounded-lg shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <Image
                  src="/images/Hero.jpg"
                  alt="Student with laptop"
                  width={320}
                  height={213}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

              {/* 500+ Tutorials badge */}
              <div
                className="absolute bottom-10 right-0 lg:-right-6 p-4 rounded-lg shadow-lg z-20 small"
                data-aos="zoom-in"
                data-aos-delay="500"
                style={{}}
              >
                <p className="text-4xl font-bold">120+</p>
                <p className="text-lg font-medium">TUTORIALS</p>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-6 right-10 text-yellow-400 text-4xl"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                ✨
              </div>
              <div
                className="absolute bottom-20 -left-8 text-orange-300 text-4xl"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                ✨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------About ---------------------- */}
      <section className="py-16 px-4 container">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Right side counters */}
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Learners Enrolled */}
              <div
                className="border-b-2 border-[#004bca] rounded-lg p-6 shadow-sm relative z-10 overflow-hidden"
                style={{
                  backgroundImage: `url('/images/c3.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "200px",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-white font-medium mb-2">Learners Enrolled</h3>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-3">
                    {counters.learners}+
                  </div>
                  <p className="text-white text-sm">
                    Thousands of students and professionals trust Coders India to upgrade their skills.
                  </p>
                </div>
              </div>

              {/* Practice Questions Solved */}
              <div
                className="border-b-2 border-[#004bca] rounded-lg p-6 shadow-sm relative z-10 overflow-hidden"
                style={{
                  backgroundImage: `url('/images/c1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "200px",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-white font-medium mb-2">Practice Questions Solved</h3>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-3">
                    {counters.questionsSolved}+
                  </div>
                  <p className="text-white text-sm">
                    Boost your coding confidence with our extensive problem-solving practice bank.
                  </p>
                </div>
              </div>

              {/* Mock Tests Attempted */}
              <div
                className="border-b-2 border-[#004bca] rounded-lg p-6 shadow-sm relative z-10 overflow-hidden"
                style={{
                  backgroundImage: `url('/images/c2.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "200px",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-white font-medium mb-2">Mock Tests Attempted</h3>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-3">
                    {counters.mockTests}+
                  </div>
                  <p className="text-white text-sm">
                    Prepare for job interviews and exams with industry-relevant mock tests.
                  </p>
                </div>
              </div>

              {/* Repeat Learners */}
              <div
                className="border-b-2 border-[#004bca] rounded-lg p-6 shadow-sm relative z-10 overflow-hidden"
                style={{
                  backgroundImage: `url('/images/c4.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "200px",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-white font-medium mb-2">Repeat Learners</h3>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-3">
                    {counters.returnRate}%
                  </div>
                  <p className="text-white text-sm">
                    Most learners return for more — a true reflection of our platform’s value.
                  </p>
                </div>
              </div>
            </div>

            {/* Left side content */}
            <div className="lg:w-1/2">
              <div className="inline-block mb-2 rounded-full bg-primary/10 py-1">
                <span className="flex items-center text-sm font-medium text-primary">
                  <Sparkles className="mr-1 h-4 w-4" />
                  Start Your Developer Journey with Coders India
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-[#004bac]">Learn. Code. Succeed.</span> Build Real Skills with Practical Learning
              </h2>

              <p className="mb-8">
                Coders India is your go-to learning platform for coding, development, and tech skills.
                Whether you&apos;re a beginner or an experienced developer, our platform offers step-by-step tutorials,
                hands-on projects, mock tests, and interview prep — everything you need to grow as a software professional.
                Join thousands of learners and transform your potential into real-world expertise.
              </p>

              <button className="bg-[#004bac] hover:bg-transparent border border-[#004bac] hover:text-[#004bac] text-white px-6 py-3 rounded-sm flex items-center font-medium transition-colors">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Why Choose Section ---------------------- */}
      <section
        className="bg-gradient-to-b from-background to-background/95 text-foreground pt-2 pb-4 px-4 container"
        data-aos="fade-up"
      >
        <div
          className="container mx-auto text-left md:text-center"
          data-aos="zoom-in"
        >
          <div
            className="inline-block mb-2 rounded-full bg-primary/10 py-1"
            data-aos="fade-right"
          >
            <span className="flex items-start md:items-center text-sm font-medium text-primary">
              <Sparkles className="mr-1 h-4 w-4" />
              Your coding journey starts here
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-[#004bac]"
            data-aos="fade-up"
          >
            Why Choose Coders India?
          </h2>

          <p
            className="max-w-2xl mx-auto mb-4 text-lg text-center font-poppins"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We combine cutting-edge technology, expert mentorship, and hands-on
            projects to transform you into a confident, job-ready developer.
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {features.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border bg-card p-8 shadow-md transition-all duration-300 ${hoveredCard === index
                  ? "transform -translate-y-2 shadow-xl border-primary/20"
                  : ""
                  }`}
                data-aos="zoom-in-up"
                data-aos-delay={`${index * 100}`}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-5 inline-flex items-center justify-center rounded-lg bg-[#004bac] text-white p-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-center-important">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- Tutorial ---------------------- */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-11 px-4 relative overflow-hidden">
        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 dark:bg-pink-900 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-200 dark:bg-purple-900 rounded-full opacity-10 blur-xl"></div>

        <div className="container mx-auto text-left md:text-center relative z-10">
          <div
            className="inline-block mb-2 p-1 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-full"
            data-aos="fade-down"
          >
            <span className="px-4 py-1 bg-gradient-to-r from-[#004bac] to-purple-600 text-white rounded-full text-sm font-medium">
              Level Up Your Skills
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-300 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Explore Top Topics
          </h2>

          <p
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Dive into the most in-demand coding languages and frameworks to
            supercharge your skills and build amazing projects.
          </p>

          {/* Filter tabs */}
          <div
            className="flex flex-wrap justify-center mb-10 gap-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <button
              className="px-4 py-2 bg-[#004bac] text-white rounded-full text-sm font-medium"
              onClick={() => filterTopics("all")}
            >
              All Topics
            </button>
            <button
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-white"
              onClick={() => filterTopics("beginner")}
            >
              Beginner
            </button>
            <button
              className="px-4 py-2 text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => filterTopics("advanced")}
            >
              Advanced
            </button>
            <button
              className="px-4 py-2 text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => filterTopics("trending")}
            >
              Trending
            </button>
            <button
              className="px-4 py-2 text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => filterTopics("frontend")}
            >
              Frontend
            </button>
            <button
              className="px-4 py-2 text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => filterTopics("backend")}
            >
              Backend
            </button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {filteredTopics.map((topic, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left group relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-100 dark:to-gray-800/50 opacity-50"></div>

                {/* Badge */}
                {topic.badge && (
                  <div
                    className={`absolute top-4 right-4 ${topic.badgeColor} text-white text-xs px-2 py-1 rounded-full font-medium`}
                  >
                    {topic.badge}
                  </div>
                )}

                <div className="mb-6 relative">
                  <div
                    className={`rounded-full ${topic.iconBg} p-3 inline-flex items-center justify-center shadow-lg mb-4`}
                  >
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {topic.lessons}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${topic.progress}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 text-sm px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-xl transition-all">
                    Start Learning
                  </button>
                  <span className="text-sm text-gray-500 font-medium">
                    {topic.progress}% Match
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12" data-aos="fade-up" data-aos-delay="300">
            <button className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:shadow-lg transition-all hover:bg-gray-50 dark:hover:bg-gray-700 text-white">
              View All {filteredTopics.length}+ Topics
            </button>
          </div>
        </div>
      </section>
      {/* ---------------------- Python Section ---------------------- */}
      <section className="py-16 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={pythonSection.iconImage}
                alt="Python Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-yellow-300">
                {pythonSection.title}
              </h2>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-medium">
              {pythonSection.subtitle}
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {pythonSection.description}
            </p>

            {/* NEW: Key Benefits List */}
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>Beginner to Advanced Python concepts covered</li>
              <li>Real-world problem solving using DSA</li>
              <li>Interactive mock tests and coding practice</li>
              <li>Assignments with expert review and feedback</li>
              <li>Ideal for placements, interviews, and competitive exams</li>
            </ul>

            {/* NEW: Testimonial-style highlight */}
            <blockquote className="italic text-sm text-gray-500 dark:text-gray-400 border-l-4 pl-4 border-blue-500 mb-6">
              “The Python DSA track helped me crack top tech interviews with confidence. Highly recommend!”
            </blockquote>

            {/* NEW: Supporting CTA paragraph */}
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Whether you&apos;re preparing for job interviews, internships, or simply building strong programming foundations — our Python + DSA course is structured to give you clarity, confidence, and coding power.
            </p>

            <button className="px-6 py-3 bg-[#004bac] hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-all">
              {pythonSection.buttonText}
            </button>
          </div>

          {/* Right Image */}
          <div data-aos="fade-up" data-aos-delay="200">
            <Image
              src={pythonSection.image}
              alt="Python DSA Code Screenshot"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ---------------------- Roadmap Section ---------------------- */}
      <section className="pt-10 pb-4 bg-gradient-to-b from-white via-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right: Image */}
          <div className="w-full hidden md:flex justify-center" data-aos="fade-left">
            <Image
              src="/images/banner.png" // ⬅️ Your uploaded image
              alt="Learning Roadmap"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl object-contain"
            />
          </div>
          {/* Left: Timeline */}
          <div>
            {/* Heading */}
            <div className="text-left mb-12" data-aos="fade-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-yellow-300 mb-4">
                Your Learning Journey
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
                Step-by-step guidance to become a job-ready developer with
                Coders India.
              </p>
            </div>

            <div className="relative border-l-2 border-blue-300 dark:border-yellow-400 ml-6">
              {roadmapSteps.map((step, index) => (
                <div
                  key={index}
                  className="mb-12 ml-6 relative"
                  data-aos="fade-up"
                  data-aos-delay={step.delay}
                >
                  {/* Circle */}
                  <div className="absolute -left-6 top-1 w-12 h-12 bg-blue-600 dark:bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="pl-8">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------- Testimonials Section ---------------------- */}
      <section className="pt-4 pb-10 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-yellow-300 mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from the successful developers who started their journey with
              us!
            </p>
          </div>

          {/* Testimonials Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {testimonials.map((student, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition hover:shadow-2xl"
              >
                <Image
                  src={student.image}
                  alt={student.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {student.name}
                </h3>
                <p className="text-sm text-blue-600 dark:text-yellow-300 font-medium mb-2">
                  {student.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {student.review}
                </p>
                <div className="flex gap-1">
                  {/* Stars */}
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------------------- CTA Section ---------------------- */}
      <section className="py-10 bg-[#004bac] text-center px-4">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            {finalCta.title}
          </h2>

          {/* Subtext */}
          <p className="text-lg mb-8 text-white/80">{finalCta.subtitle}</p>

          {/* Button */}
          <Link href={finalCta.link}>
            <button className="px-8 py-4 bg-white hover:bg-gray-100 text-[#004bac] font-semibold text-lg rounded-full transition">
              {finalCta.buttonText}
            </button>
          </Link>
        </div>
      </section>
      {/* ---------------------- FAQs Section ---------------------- */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-yellow-300 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Find answers to common queries about Coders India.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-blue-600 dark:text-yellow-400">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
