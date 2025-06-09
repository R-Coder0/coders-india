import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" pt-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Address Section */}
        <div className="flex flex-col mb-6">
          {/* <div className="mb-4">
            <Image src="/geeksforgeeks-logo.png" alt="GeeksforGeeks Logo" width={220} height={60} />
          </div> */}
          
          <div className="mb-3">
            <div className="flex items-start mb-2">
              <div className="mt-1 mr-2">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="green">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <strong>Corporate & Communications Address:</strong>
                <p>A-143, 7th Floor, Sovereign Corporate Tower, Sector- 136, Noida, Uttar Pradesh (201305)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-2">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="green">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <strong>Registered Address:</strong>
                <p>A 061, Tower K, Gulshan Vivante Apartment, Sector 137, Noida, Gautam Buddh Nagar, Uttar Pradesh, 201305</p>
              </div>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-2 mb-4">
            <Link href="#" className="bg-gray-500 rounded-full p-2 hover:bg-gray-600">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M18.05 17.2H15.2V13.5C15.2 12.47 15.18 11.12 13.73 11.12C12.26 11.12 12.04 12.27 12.04 13.47V17.2H9.19V8.2H11.93V9.42H11.97C12.33 8.72 13.22 7.99 14.6 7.99C17.49 7.99 18.05 9.88 18.05 12.3V17.2ZM7.12 6.98C6.36 6.98 5.74 6.36 5.74 5.6C5.74 4.85 6.36 4.22 7.12 4.22C7.88 4.22 8.5 4.85 8.5 5.6C8.5 6.36 7.88 6.98 7.12 6.98ZM8.55 17.2H5.7V8.2H8.55V17.2ZM19.08 2H4.92C3.86 2 3 2.84 3 3.88V18.12C3 19.16 3.86 20 4.92 20H19.08C20.14 20 21 19.16 21 18.12V3.88C21 2.84 20.14 2 19.08 2Z"/>
              </svg>
            </Link>
            <Link href="#" className="bg-gray-500 rounded-full p-2 hover:bg-gray-600">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M12 2.2C6.6 2.2 2.2 6.6 2.2 12C2.2 16.47 5.23 20.22 9.36 21.5V14.74H7.15V12H9.36V9.97C9.36 7.5 10.67 6.3 12.86 6.3C13.91 6.3 14.99 6.5 14.99 6.5V8.64H13.81C12.65 8.64 12.26 9.28 12.26 9.94V12H14.88L14.43 14.74H12.26V21.5C16.39 20.22 19.42 16.47 19.42 12C19.42 6.6 15.02 2.2 12 2.2Z"/>
              </svg>
            </Link>
            <Link href="#" className="bg-gray-500 rounded-full p-2 hover:bg-gray-600">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15ZM18.5 6.75C18.5 7.44 17.94 8 17.25 8C16.56 8 16 7.44 16 6.75C16 6.06 16.56 5.5 17.25 5.5C17.94 5.5 18.5 6.06 18.5 6.75ZM21.92 8.01C21.85 6.46 21.54 5.09 20.38 3.94C19.23 2.79 17.86 2.48 16.31 2.4C14.71 2.31 9.29 2.31 7.69 2.4C6.14 2.47 4.77 2.78 3.62 3.93C2.47 5.08 2.16 6.45 2.08 8C1.99 9.6 1.99 15.02 2.08 16.62C2.15 18.17 2.46 19.54 3.62 20.69C4.77 21.84 6.14 22.15 7.69 22.23C9.29 22.32 14.71 22.32 16.31 22.23C17.86 22.16 19.23 21.85 20.38 20.69C21.53 19.54 21.84 18.17 21.92 16.62C22.01 15.02 22.01 9.6 21.92 8.01ZM19.82 18.3C19.52 19.15 18.87 19.8 18.01 20.11C16.73 20.56 13.84 20.45 12 20.45C10.16 20.45 7.27 20.55 6 20.11C5.15 19.81 4.5 19.16 4.19 18.3C3.74 17.02 3.85 14.13 3.85 12.29C3.85 10.45 3.75 7.56 4.19 6.29C4.49 5.44 5.14 4.79 6 4.48C7.28 4.03 10.17 4.14 12.01 4.14C13.85 4.14 16.74 4.04 18.01 4.48C18.86 4.78 19.51 5.43 19.82 6.29C20.27 7.57 20.16 10.46 20.16 12.3C20.16 14.14 20.27 17.03 19.82 18.3Z"/>
              </svg>
            </Link>
            <Link href="#" className="bg-gray-500 rounded-full p-2 hover:bg-gray-600">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/>
              </svg>
            </Link>
            <Link href="#" className="bg-gray-500 rounded-full p-2 hover:bg-gray-600">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M21.58 7.19C21.36 6.39 20.73 5.76 19.93 5.54C18.5 5.17 12 5.17 12 5.17C12 5.17 5.5 5.17 4.07 5.54C3.27 5.76 2.64 6.39 2.42 7.19C2.05 8.62 2.05 11.78 2.05 11.78C2.05 11.78 2.05 14.94 2.42 16.37C2.64 17.17 3.27 17.8 4.07 18.02C5.5 18.39 12 18.39 12 18.39C12 18.39 18.5 18.39 19.93 18.02C20.73 17.8 21.36 17.17 21.58 16.37C21.95 14.94 21.95 11.78 21.95 11.78C21.95 11.78 21.95 8.62 21.58 7.19ZM9.86 14.77V8.79L15.66 11.78L9.86 14.77Z"/>
              </svg>
            </Link>
          </div>
          
          <div className="mt-4">
            <Link href="#" className="inline-block py-2 px-6 bg-blue-900 text-white font-medium rounded">
              Advertise with us
            </Link>
          </div>
        </div>
        
        {/* Menu Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Company Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Company</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Legal</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">In Media</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">GfG Corporate Solution</Link></li>
              <li><Link href="#">Placement Training Program</Link></li>
            </ul>
          </div>
          
          {/* Explore Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Explore</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">Job-A-Thon Hiring Challenge</Link></li>
              <li><Link href="#">GfG Weekly Contest</Link></li>
              <li><Link href="#">Offline Classroom Program</Link></li>
              <li><Link href="#">DSA in JAVA/C++</Link></li>
              <li><Link href="#">Master System Design</Link></li>
              <li><Link href="#">Master CP</Link></li>
              <li><Link href="#">GeeksforGeeks Videos</Link></li>
            </ul>
          </div>
          
          {/* Languages Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Languages</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">Python</Link></li>
              <li><Link href="#">Java</Link></li>
              <li><Link href="#">C++</Link></li>
              <li><Link href="#">PHP</Link></li>
              <li><Link href="#">GoLang</Link></li>
              <li><Link href="#">SQL</Link></li>
              <li><Link href="#">R Language</Link></li>
              <li><Link href="#">Android Tutorial</Link></li>
            </ul>
          </div>
          
          {/* DSA Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">DSA</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">Data Structures</Link></li>
              <li><Link href="#">Algorithms</Link></li>
              <li><Link href="#">DSA for Beginners</Link></li>
              <li><Link href="#">Basic DSA Problems</Link></li>
              <li><Link href="#">DSA Roadmap</Link></li>
              <li><Link href="#">Top Interview Questions</Link></li>
              <li><Link href="#">Competitive Programming</Link></li>
            </ul>
          </div>
          
          {/* Data Science & ML Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Data Science & ML</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">Data Science With Python</Link></li>
              <li><Link href="#">Data Science For Beginner</Link></li>
              <li><Link href="#">Machine Learning</Link></li>
              <li><Link href="#">ML Maths</Link></li>
              <li><Link href="#">Data Visualisation</Link></li>
              <li><Link href="#">Pandas</Link></li>
              <li><Link href="#">NumPy</Link></li>
              <li><Link href="#">NLP</Link></li>
              <li><Link href="#">Deep Learning</Link></li>
            </ul>
          </div>
          
          {/* Web Technologies Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Web Technologies</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">HTML</Link></li>
              <li><Link href="#">CSS</Link></li>
              <li><Link href="#">JavaScript</Link></li>
              <li><Link href="#">TypeScript</Link></li>
              <li><Link href="#">ReactJS</Link></li>
              <li><Link href="#">NextJS</Link></li>
              <li><Link href="#">NodeJs</Link></li>
              <li><Link href="#">Bootstrap</Link></li>
              <li><Link href="#">Tailwind CSS</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Second Row of Category Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
          {/* Python Tutorial Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Python Tutorial</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">Python Programming Examples</Link></li>
              <li><Link href="#">Django Tutorial</Link></li>
              <li><Link href="#">Python Projects</Link></li>
              <li><Link href="#">Python Tkinter</Link></li>
              <li><Link href="#">Web Scraping</Link></li>
              <li><Link href="#">OpenCV Tutorial</Link></li>
              <li><Link href="#">Python Interview Question</Link></li>
            </ul>
          </div>
          
          {/* Computer Science Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Computer Science</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">GATE CS Notes</Link></li>
              <li><Link href="#">Operating Systems</Link></li>
              <li><Link href="#">Computer Network</Link></li>
              <li><Link href="#">Database Management System</Link></li>
              <li><Link href="#">Software Engineering</Link></li>
              <li><Link href="#">Digital Logic Design</Link></li>
              <li><Link href="#">Engineering Maths</Link></li>
            </ul>
          </div>
          
          {/* DevOps Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">DevOps</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">Git</Link></li>
              <li><Link href="#">AWS</Link></li>
              <li><Link href="#">Docker</Link></li>
              <li><Link href="#">Kubernetes</Link></li>
              <li><Link href="#">Azure</Link></li>
              <li><Link href="#">GCP</Link></li>
              <li><Link href="#">DevOps Roadmap</Link></li>
            </ul>
          </div>
          
          {/* System Design Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">System Design</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">High Level Design</Link></li>
              <li><Link href="#">Low Level Design</Link></li>
              <li><Link href="#">UML Diagrams</Link></li>
              <li><Link href="#">Interview Guide</Link></li>
              <li><Link href="#">Design Patterns</Link></li>
              <li><Link href="#">OOAD</Link></li>
              <li><Link href="#">System Design Bootcamp</Link></li>
              <li><Link href="#">Interview Questions</Link></li>
            </ul>
          </div>
          
          {/* School Subjects Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">School Subjects</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">Mathematics</Link></li>
              <li><Link href="#">Physics</Link></li>
              <li><Link href="#">Chemistry</Link></li>
              <li><Link href="#">Biology</Link></li>
              <li><Link href="#">Social Science</Link></li>
              <li><Link href="#">English Grammar</Link></li>
            </ul>
          </div>
          
          {/* Databases Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Databases</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">SQL</Link></li>
              <li><Link href="#">MySQL</Link></li>
              <li><Link href="#">PostgreSQL</Link></li>
              <li><Link href="#">PL/SQL</Link></li>
              <li><Link href="#">MongoDB</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Third Row of Category Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
          {/* Preparation Corner Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Preparation Corner</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">Company-Wise Recruitment Process</Link></li>
              <li><Link href="#">Aptitude Preparation</Link></li>
              <li><Link href="#">Puzzles</Link></li>
              <li><Link href="#">Company-Wise Preparation</Link></li>
            </ul>
          </div>
          
          {/* More Tutorials Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">More Tutorials</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">Software Development</Link></li>
              <li><Link href="#">Software Testing</Link></li>
              <li><Link href="#">Product Management</Link></li>
              <li><Link href="#">Project Management</Link></li>
              <li><Link href="#">Linux</Link></li>
              <li><Link href="#">Excel</Link></li>
              <li><Link href="#">All Cheat Sheets</Link></li>
            </ul>
          </div>
          
          {/* Machine Learning/Data Science Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Machine Learning/Data Science</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">Complete Machine Learning & Data Science Program - [LIVE]</Link></li>
              <li><Link href="#">Data Analytics Training using Excel, SQL, Python & PowerBI - [LIVE]</Link></li>
              <li><Link href="#">Data Science Training Program - [LIVE]</Link></li>
              <li><Link href="#">Data Science Course with IBM Certification</Link></li>
            </ul>
          </div>
          
          {/* Programming Languages Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Programming Languages</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">C Programming with Data Structures</Link></li>
              <li><Link href="#">C++ Programming Course</Link></li>
              <li><Link href="#">Java Programming Course</Link></li>
              <li><Link href="#">Python Full Course</Link></li>
            </ul>
          </div>
          
          {/* Clouds/Devops Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">Clouds/Devops</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">DevOps Engineering</Link></li>
              <li><Link href="#">AWS Solutions Architect Certification</Link></li>
              <li><Link href="#">Salesforce Certified Administrator Course</Link></li>
            </ul>
          </div>
          
          {/* GATE 2026 Section */}
          <div>
            <h4 className="text-green-600 font-semibold mb-2">GATE 2026</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="#">GATE CS Rank Booster</Link></li>
              <li><Link href="#">GATE DA Rank Booster</Link></li>
              <li><Link href="#">GATE CS & IT Course - 2026</Link></li>
              <li><Link href="#">GATE DA Course 2026</Link></li>
              <li><Link href="#">GATE Rank Predictor</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 py-4 text-sm text-gray-600">
          @GeeksforGeeks, Sanchhaya Education Private Limited, All rights reserved
        </div>
      </div>
    </footer>
  );
}