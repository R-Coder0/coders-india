export type RoadmapStep = {
  title: string;
  description: string;
  icon: string;
  delay: number;
};

export const roadmapSteps: RoadmapStep[] = [
  {
    title: "Learn Fundamentals",
    description: "Start with basics like Python, JavaScript, HTML/CSS. Build strong logical thinking.",
    icon: "/images/languages/expressjs.png",
    delay: 0,
  },
  {
    title: "Build Real-World Projects",
    description: "Apply your knowledge by building mini and major real-world projects.",
    icon: "/images/languages/bs.png",
    delay: 100,
  },
  {
    title: "Master DSA & System Design",
    description: "Crack coding interviews by mastering Data Structures, Algorithms, and System Design concepts.",
    icon: "/images/languages/css.png",
    delay: 200,
  },
  {
    title: "Ace Top Company Interviews",
    description: "Get placement-ready with mock interviews, resume building, and 1:1 mentorship support.",
    icon: "/images/languages/visual-studio-code.png",
    delay: 300,
  },
];
