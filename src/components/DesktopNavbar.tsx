'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function DesktopNavbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === 'dark'

  return (
    <nav className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
      mounted ? (isDark ? 'bg-black text-white' : 'bg-white text-black') : ''
    } shadow-lg`}>
      <div className="max-w-9xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            {mounted && (
              <>
                {isDark ? (
                  <Image src="/logo.png" alt="Coders India" width={170} height={100} />
                ) : (
                  <Image src="/black_logo.png" alt="Coders India Black" width={170} height={100} />
                )}
              </>
            )}
          </div>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {['Home', 'Tutorials', 'Mock Tests', 'Interview Qs', 'Practice', 'Assignments', 'Internships', 'Certifications', 'About'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {!mounted ? null : isDark ? '🌞' : '🌙'}
          </button>

          {/* Login Button */}
          <Link
            href="/login"
            className="ml-2 px-4 py-1.5 bg-blue-400 text-white rounded hover:bg-primary/90 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
