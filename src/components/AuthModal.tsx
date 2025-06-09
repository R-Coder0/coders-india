  'use client'

  import { useState } from 'react'
  import axios from 'axios'
  import { motion, AnimatePresence } from 'framer-motion'

  interface AuthModalProps {
    show: boolean
    onClose: () => void
    isDark: boolean
    onLoginSuccess: (user: any) => void
  }

  interface User {
    _id: string
    name: string
    email: string
    token: string
  }

  export default function AuthModal({ show, onClose, isDark, onLoginSuccess }: AuthModalProps) {
    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState('')

    // Form states
    const [loginData, setLoginData] = useState({
      email: '',
      password: ''
    })
    
    const [signupData, setSignupData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    })
  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/auth/login', loginData);
      const userData = {
        _id: response.data._id,
        name: response.data.name,
        email: response.data.email,
        token: response.data.token
      };

      // Save in localStorage
      localStorage.setItem("userInfo", JSON.stringify(userData));

      // Global event trigger
      window.dispatchEvent(new CustomEvent('login-success', { detail: userData }));

      onLoginSuccess(userData);
      onClose();
      setError('');
    } catch (err) {
      setError((err as any).response?.data?.message || 'Login failed');
    }
  };


    const handleSignup = async (e: { preventDefault: () => void }) => {
      e.preventDefault()
      if (signupData.password !== signupData.confirmPassword) {
        setError('Passwords do not match')
        return
      }
      try {
        const response = await axios.post('http://localhost:8000/api/users/auth/signup', signupData)
        const userData = {
          _id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          token: response.data.token
        }
        onLoginSuccess(userData)
        onClose()
        setError('')
      } catch (err) {
        setError((err as any).response?.data?.message || 'Signup failed')
      }
    }

    const toggleAuthMode = () => {
      setIsLogin(!isLogin)
      setError('')
    }

    return (
      <AnimatePresence>
        {show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-xl p-8 w-full max-w-md ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-2xl`}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-2xl font-bold mb-6 text-center">
                {isLogin ? 'Welcome back!' : 'Create an account'}
              </h2>

              {error && (
                <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md text-sm">
                  {error}
                </div>
              )}

              {isLogin ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">Password</label>
                    <input
                      type="password"
                      className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Login
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={signupData.name}
                      onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={signupData.email}
                      onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={signupData.phone}
                      onChange={(e) => setSignupData({...signupData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">Password</label>
                    <input
                      type="password"
                      className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={signupData.password}
                      onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">Confirm Password</label>
                    <input
                      type="password"
                      className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Sign Up
                  </button>
                </form>
              )}

              <div className="mt-6 text-center text-sm">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button
                  onClick={toggleAuthMode}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {isLogin ? 'Sign up' : 'Login'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    )
  }