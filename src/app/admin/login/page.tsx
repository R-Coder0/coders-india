'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Lock, 
  Mail, 
  BookOpen, 
  LayoutDashboard,
  User,
  Shield,
  Eye,
  EyeOff,
} from 'lucide-react';
import { useAdminContext } from '@/app/admin/adminContext';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { loginAdmin } = useAdminContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/admin/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.token) {
        loginAdmin(data.token); // Set the JWT token in localStorage and context
        router.push('/admin/dashboard'); // Redirect to the dashboard
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Invalid credentials');
      } else {
        setError('Invalid credentials');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-800 relative">
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <img
          src="/api/placeholder/1000/1000"
          alt="Education Admin Portal"
          className="object-cover w-full h-full relative z-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-12 text-white">
          <BookOpen size={80} className="mb-6" />
          <h1 className="text-4xl font-bold mb-4">Education Portal</h1>
          <p className="text-xl text-center max-w-md">
            Manage your educational institution with our comprehensive admin
            dashboard.
          </p>
          <div className="mt-12 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <LayoutDashboard size={24} />
              <span className="text-lg">Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <User size={24} />
              <span className="text-lg">Student Management</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield size={24} />
              <span className="text-lg">Secure Administration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-700 p-4 rounded-full">
                <BookOpen size={32} color="white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Admin Portal</h2>
            <p className="text-gray-500 mt-2">
              Sign in to access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              {error && (
                <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {error}
                </div>
              )}

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border text-black border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="admin@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full text-black pl-10 pr-10 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff
                        size={18}
                        className="text-gray-400 hover:text-gray-500"
                      />
                    ) : (
                      <Eye
                        size={18}
                        className="text-gray-400 hover:text-gray-500"
                      />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  loading ? "opacity-80 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  "Sign in"
                )}
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
  