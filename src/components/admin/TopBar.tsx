'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminContext } from '@/app/admin/adminContext';
import { 
  User, 
  LogOut, 
  Settings, 
  Bell, 
  Search, 
  BookOpen, 
  ChevronDown,
  HelpCircle
} from 'lucide-react';

export default function TopBar() {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const notificationsRef = useRef<HTMLDivElement | null>(null);
  const { adminToken, logoutAdmin } = useAdminContext();
  const router = useRouter();

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: { target: any; }) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

//   if (!adminToken) {
//     router.push('/admin/login'); // Redirect to login page if no token found
//     return null;
//   }

  const handleLogout = () => {
    logoutAdmin();
    router.push('/admin/login'); // Redirect to login page after logout
  };

  const notifications = [
    { id: 1, title: 'New student registered', time: '2 minutes ago', unread: true },
    { id: 2, title: 'Course update available', time: '1 hour ago', unread: true },
    { id: 3, title: 'System maintenance scheduled', time: 'Yesterday', unread: false },
  ];

  return (
    <header className="bg-white shadow-md z-40 relative">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Left side - Logo and Search */}
        <div className="flex items-center space-x-4">
          {/* <div className="flex items-center">
            <div className="hidden sm:flex items-center mr-2">
              <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
                <BookOpen size={16} className="text-white" />
              </div>
            </div>
            <div className="text-xl font-bold text-blue-800">EduAdmin</div>
          </div>
           */}
          <div className="hidden md:flex relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1.5 text-sm rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-48 lg:w-64"
            />
          </div>
        </div>
        
        {/* Right side - Notifications and Profile */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button 
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Notifications"
            >
              <Bell size={20} className="text-gray-600" />
              {notifications.filter(n => n.unread).length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                <div className="px-4 py-2 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">Notifications</h3>
                    <span className="text-xs text-blue-600 font-medium cursor-pointer hover:text-blue-800">
                      Mark all as read
                    </span>
                  </div>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <a
                        key={notification.id}
                        href="#"
                        className={`block px-4 py-3 hover:bg-gray-50 ${notification.unread ? 'bg-blue-50/50' : ''}`}
                      >
                        <div className="flex items-start">
                          <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${notification.unread ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                          <div className="ml-3">
                            <p className={`text-sm ${notification.unread ? 'font-medium text-gray-800' : 'text-gray-600'}`}>
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="py-6 text-center">
                      <p className="text-gray-500 text-sm">No notifications</p>
                    </div>
                  )}
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <a href="#" className="text-sm text-blue-600 font-medium hover:text-blue-800 block text-center">
                    View all notifications
                  </a>
                </div>
              </div>
            )}
          </div>
          
          {/* Help */}
          <button 
            className="hidden sm:flex p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Help"
          >
            <HelpCircle size={20} className="text-gray-600" />
          </button>
          
          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none rounded-full pl-2 pr-1 py-1 hover:bg-gray-100"
              aria-expanded={profileDropdownOpen}
              aria-haspopup="true"
            >
              <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white font-medium">
                A
              </div>
              <span className="hidden md:inline-block text-sm font-medium text-gray-700">Admin</span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500 truncate">admin@example.com</p>
                </div>
                
                <a 
                  href="#" 
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                >
                  <User size={16} className="mr-2 text-gray-500" />
                  My Profile
                </a>
                
                <a 
                  href="#" 
                  className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                >
                  <Settings size={16} className="mr-2 text-gray-500" />
                  Account Settings
                </a>
                
                <div className="border-t border-gray-100 mt-1"></div>
                
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}