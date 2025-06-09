'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAdminContext } from '@/app/admin/adminContext';
import { 
  LayoutDashboard, 
  LogOut, 
  Menu, 
  ChevronLeft,
  Settings, 
  Users, 
  BookOpen,
  BarChart2,
  Calendar,
  HelpCircle
} from 'lucide-react';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { adminToken, logoutAdmin } = useAdminContext();  
  const pathname = usePathname();
  const router = useRouter();

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

// //   Ensure redirect if adminToken is not available
//   useEffect(() => {
//     if (!adminToken) {
//       router.push("/admin/login");
//     }
//   }, [adminToken, router]);

  const handleLogout = async () => {
    // Call the backend API to logout
    const response = await fetch('http://localhost:8000/api/admin/auth/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.message === 'Logout successful') {
      logoutAdmin(); // Clear the token in context and localStorage
      router.push('/admin/login'); // Redirect to login page after logout
    }
  };

  const isActive = (path: string) => {
    return pathname?.startsWith(path) ?? false;
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: <Users size={20} />, label: 'Students', path: '/admin/users' },
    { icon: <BookOpen size={20} />, label: 'Courses', path: '/admin/courses' },
    { icon: <Calendar size={20} />, label: 'Schedule', path: '/admin/schedule' },
    { icon: <BarChart2 size={20} />, label: 'Reports', path: '/admin/reports' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/admin/settings' },
    { icon: <HelpCircle size={20} />, label: 'Help', path: '/admin/help' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full z-30 flex flex-col ${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-blue-900 to-blue-800 text-white transition-all duration-300 shadow-xl`}>
      {/* Logo and Toggle Header */}
      <div className="p-4 flex items-center justify-between border-b border-blue-700/50">
        {sidebarOpen ? (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <BookOpen size={20} className="text-blue-800" />
            </div>
            <h1 className="text-xl font-bold">EduAdmin</h1>
          </div>
        ) : (
          <div className="w-10 h-10 mx-auto bg-white rounded-lg flex items-center justify-center">
            <BookOpen size={22} className="text-blue-800" />
          </div>
        )}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1.5 rounded-md hover:bg-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* User Profile Section */}
      <div className={`mt-2 px-4 py-3 border-b border-blue-700/50 ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Admin User</span>
            <span className="text-xs text-blue-300">Administrator</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-grow p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-transparent">
        <div className={`${sidebarOpen ? 'mb-3 px-3 text-xs font-semibold text-blue-300 uppercase' : 'sr-only'}`}>
          Main Menu
        </div>
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.path} 
                className={`flex items-center p-2.5 rounded-lg ${isActive(item.path) 
                  ? 'bg-blue-700/70 text-white font-medium' 
                  : 'text-blue-100 hover:bg-blue-700/50'} ${sidebarOpen ? 'justify-start' : 'justify-center'} transition-all duration-150`}
              >
                <div className={`${isActive(item.path) ? 'text-white' : 'text-blue-300'}`}>
                  {item.icon}
                </div>
                {sidebarOpen && <span className="ml-3 text-sm">{item.label}</span>}
                {!sidebarOpen && (
                  <span className="sr-only">{item.label}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="p-4 border-t border-blue-700/50">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center p-2.5 rounded-lg text-red-300 hover:bg-red-500/20 hover:text-red-200 ${sidebarOpen ? 'justify-start' : 'justify-center'} transition-all duration-150`}
          aria-label="Logout"
        >
          <LogOut size={20} />
          {sidebarOpen && <span className="ml-3 text-sm font-medium">Logout</span>}
        </button>
      </div>
      
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20" 
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
