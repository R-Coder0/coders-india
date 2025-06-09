'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AuthModal from './AuthModal' // Make sure to create this component

interface User {
  _id: string
  name: string
  email: string
  token: string
}

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    const userData = localStorage.getItem('user')
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData) as User
        if (parsedUser.name && parsedUser.email) {
          setUser(parsedUser)
        } else {
          throw new Error('Invalid user data')
        }
      } catch (err) {
        console.error('Error parsing user data', err)
        localStorage.removeItem('user')
      }
    }
  }, [])

  const isDark = resolvedTheme === 'dark'

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setShowDropdown(false)
    setIsOpen(false)
    router.push('/')
  }

  return (
    <>
      {/* Top Navbar */}
      <nav className={`block md:hidden fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        mounted ? (isDark ? 'bg-black text-white' : 'bg-white text-black') : ''
      } border-b shadow-sm p-4`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              {mounted && (
                <>
                  {isDark ? (
                    <Image src="/logo.png" alt="Coders India" width={200} height={100} />
                  ) : (
                    <Image src="/black_logo.png" alt="Coders India Black" width={200} height={100} />
                  )}
                </>
              )}
            </div>
          </Link>

          {/* Toggle Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded hover:bg-muted transition">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[70vw] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${mounted ? (isDark ? 'bg-black text-white' : 'bg-white text-black') : ''}`}
      >
        <ul className="p-6 pt-20 space-y-4 text-base font-medium">
          {[
            'Home', 'Tutorials', 'Mock Tests', 'Interview Qs',
            'Practice', 'Assignments', 'Internships', 'Certifications', 'About'
          ].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 rounded hover:bg-muted transition"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Auth Button */}
          {user ? (
            <>
              <li>
                <button
                  onClick={() => {
                    setShowDropdown(!showDropdown)
                    setIsOpen(false)
                  }}
                  className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  {user.name.charAt(0).toUpperCase()}
                </button>
              </li>
              {showDropdown && (
                <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <li>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => {
                        setShowDropdown(false)
                        setIsOpen(false)
                      }}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </li>
                </div>
              )}
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  setShowAuthModal(true)
                  setIsOpen(false)
                }}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition"
              >
                Login
              </button>
            </li>
          )}

          {/* Theme Toggle */}
          {mounted && (
            <li className="flex items-center gap-3 pt-4 border-t border-border">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-lg px-3 py-1 rounded hover:bg-muted transition"
              >
                {isDark ? '🌞' : '🌙'}
              </button>
              <span className="text-sm">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
            </li>
          )}
        </ul>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        show={showAuthModal}
        onClose={() => {
          setShowAuthModal(false)
        }}
        isDark={isDark}
        onLoginSuccess={(userData) => {
          localStorage.setItem('user', JSON.stringify(userData))
          setUser(userData)
        }}
      />
    </>
  )
}