"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AuthModal from "./AuthModal";
import MockTestMenu from "./megamenu/MocktestMenu";

interface User {
  _id: string;
  name: string;
  email: string;
  token: string;
}

export default function DesktopNavbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null); // For delay on mouseleave
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData) as User;
        if (parsedUser.name && parsedUser.email) {
          setUser(parsedUser);
        } else {
          throw new Error("Invalid user data");
        }
      } catch (err) {
        console.error("Error parsing user data", err);
        localStorage.removeItem("user");
      }
    }
       // Cleanup timeout on unmount
    return () => {
      if (menuTimeout) clearTimeout(menuTimeout);
    };
  }, []);

  const isDark = resolvedTheme === "dark";

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowDropdown(false);
    router.push("/");
  };
  // Add these handlers
  // Add these handlers
  const handleMenuEnter = () => {
    if (menuTimeout) clearTimeout(menuTimeout)
    setShowMegaMenu(true)
  }

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setShowMegaMenu(false);
    }, 300); // 300ms delay before hiding
    setMenuTimeout(timeout);
  };

  return (
    <>
      <nav
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          mounted
            ? isDark
              ? "bg-black text-white"
              : "bg-white text-black"
            : ""
        } shadow-lg`}
      >
        <div className="max-w-9xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              {mounted && (
                <>
                  {isDark ? (
                    <Image
                      src="/logo.png"
                      alt="Coders India"
                      width={170}
                      height={100}
                    />
                  ) : (
                    <Image
                      src="/black_logo.png"
                      alt="Coders India Black"
                      width={170}
                      height={100}
                    />
                  )}
                </>
              )}
            </div>
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-6 text-sm font-medium">
            {[
              "Home",
              "Tutorials",
              "Mock Tests",
              "Interview Qs",
              "Practice",
              "Assignments",
              "Internships",
              "Certifications",
              "About",
            ].map((item) => (
 <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-primary transition-colors relative"
                onMouseEnter={() =>
                  item === 'Mock Tests' && setShowMegaMenu(true)
                }
                onMouseLeave={() => item === 'Mock Tests' && handleMenuLeave()}
              >
                {item}
                {item === 'Mock Tests' && showMegaMenu && (
                  <div className="absolute bottom-0 left-0 w-full h-2"></div>
                )}
              </Link>
            ))}
            {showMegaMenu && (
              <MockTestMenu
                onMouseEnter={handleMenuEnter}
                onMouseLeave={handleMenuLeave}
              />
            )}
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {!mounted ? null : isDark ? "🌞" : "🌙"}
            </button>

            {/* Auth Button */}
            {user ? (
              <div className="relative ml-2">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  {user.name.charAt(0).toUpperCase()}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setShowDropdown(false)}
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="ml-2 px-4 py-1.5 bg-blue-400 text-white rounded hover:bg-primary/90 transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      <AuthModal
        show={showAuthModal}
        onClose={() => {
          setShowAuthModal(false);
        }}
        isDark={isDark}
        onLoginSuccess={(userData) => {
          localStorage.setItem("user", JSON.stringify(userData));
          setUser(userData);
        }}
      />
    </>
  );
}
