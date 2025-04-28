'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === 'dark'

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

          {/* Login Button */}
          <li>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition"
            >
              Login
            </Link>
          </li>

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
    </>
  )
}
