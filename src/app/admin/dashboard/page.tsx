"use client";
import { useEffect, useState } from "react";
import { Users, BookOpen, ShieldCheck, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const [userCount, setUserCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/users/auth/all");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUserCount(data.length);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-white via-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users Card */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex items-center justify-between hover:shadow-xl transition">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Total Students
            </h2>
            <p className="text-3xl font-bold text-blue-600 dark:text-yellow-400 mt-2">
              {loading ? "Loading..." : userCount}
            </p>
          </div>
          <Users className="w-12 h-12 text-blue-500 dark:text-yellow-300" />
        </div>

        {/* Placeholder Cards for Future Metrics */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex items-center justify-between hover:shadow-xl transition">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Total Courses
            </h2>
            <p className="text-3xl font-bold text-purple-600 dark:text-yellow-400 mt-2">
              12
            </p>
          </div>
          <BookOpen className="w-12 h-12 text-purple-500 dark:text-yellow-300" />
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex items-center justify-between hover:shadow-xl transition">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Active Subscriptions
            </h2>
            <p className="text-3xl font-bold text-green-600 dark:text-yellow-400 mt-2">
              48
            </p>
          </div>
          <ShieldCheck className="w-12 h-12 text-green-500 dark:text-yellow-300" />
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex items-center justify-between hover:shadow-xl transition">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Monthly Visitors
            </h2>
            <p className="text-3xl font-bold text-pink-600 dark:text-yellow-400 mt-2">
              1.2K
            </p>
          </div>
          <TrendingUp className="w-12 h-12 text-pink-500 dark:text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
