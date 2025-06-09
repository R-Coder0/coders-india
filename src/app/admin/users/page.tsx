"use client";
import React, { useEffect, useState } from "react";
import {
  FiEdit,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiUsers,
  FiSearch,
} from "react-icons/fi";

type User = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

const AdminUsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const usersPerPage = 20;

  // Mock data for demonstration since API might not be available
  const mockUsers: User[] = Array.from({ length: 85 }, (_, i) => ({
    _id: `user_${i + 1}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `+1 (555) ${String(Math.floor(Math.random() * 900) + 100)}-${String(
      Math.floor(Math.random() * 9000) + 1000
    )}`,
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)
    ).toISOString(),
    updatedAt: new Date().toISOString(),
  }));

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Try to fetch from API, fallback to mock data
        try {
          const res = await fetch("http://localhost:8000/api/users/auth/all");
          if (!res.ok) throw new Error("API not available");
          const data = await res.json();
          setUsers(data);
        } catch {
          // Use mock data when API is not available
          setUsers(mockUsers);
        }
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (id: string) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user._id !== id));
    }
  };

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm)
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <FiUsers className="text-xl text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  User Management System
                </h1>
                <p className="text-gray-600">
                  Total Users: {filteredUsers.length} | Page {currentPage} of{" "}
                  {totalPages}
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none w-64 text-black"
              />
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-white border-2 border-gray-300 rounded-lg p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 text-lg">Loading users...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-6">
            <p className="text-red-800 font-medium text-center">{error}</p>
          </div>
        )}

        {/* Data Table */}
        {!loading && !error && (
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border-2 border-gray-400 px-4 py-4 text-left font-semibold text-sm uppercase">
                      Sr. No.
                    </th>
                    <th className="border-2 border-gray-400 px-4 py-4 text-left font-semibold text-sm uppercase">
                      Name
                    </th>
                    <th className="border-2 border-gray-400 px-4 py-4 text-left font-semibold text-sm uppercase">
                      Email Address
                    </th>
                    <th className="border-2 border-gray-400 px-4 py-4 text-left font-semibold text-sm uppercase">
                      Phone Number
                    </th>
                    <th className="border-2 border-gray-400 px-4 py-4 text-left font-semibold text-sm uppercase">
                      Registration Date
                    </th>
                    <th className="border-2 border-gray-400 px-4 py-4 text-center font-semibold text-sm uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="border-2 border-gray-300 py-12 text-center"
                      >
                        <div className="flex flex-col items-center">
                          <FiUsers className="text-4xl text-gray-400 mb-4" />
                          <p className="text-gray-500 text-lg font-medium">
                            {searchTerm
                              ? "No users found matching your search"
                              : "No users found"}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    currentUsers.map((user, index) => (
                      <tr
                        key={user._id}
                        className={`hover:bg-blue-50 ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="border-2 border-gray-300 px-4 py-3 text-center font-medium text-gray-700">
                          {startIndex + index + 1}
                        </td>
                        <td className="border-2 border-gray-300 px-4 py-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm mr-3">
                              {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-800">
                                {user.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                ID: {user._id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-2 border-gray-300 px-4 py-3 text-gray-700">
                          {user.email}
                        </td>
                        <td className="border-2 border-gray-300 px-4 py-3 text-gray-700">
                          {user.phone}
                        </td>
                        <td className="border-2 border-gray-300 px-4 py-3 text-gray-700">
                          {formatDate(user.createdAt)}
                        </td>
                        <td className="border-2 border-gray-300 px-4 py-3">
                          <div className="flex items-center justify-center space-x-2">
                            <button
                              onClick={() => handleDelete(user._id)}
                              className="flex items-center px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded border-2 border-red-700 transition-colors"
                              title="Delete user"
                            >
                              <FiTrash2 className="mr-1" />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            {totalPages > 1 && (
              <div className="bg-gray-100 border-t-2 border-gray-300 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700 font-medium">
                    Showing {startIndex + 1} to{" "}
                    {Math.min(endIndex, filteredUsers.length)} of{" "}
                    {filteredUsers.length} total users
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={goToPrevPage}
                      disabled={currentPage === 1}
                      className={`flex items-center px-4 py-2 text-sm font-semibold border-2 rounded transition-colors ${
                        currentPage === 1
                          ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                          : "bg-white text-gray-700 border-gray-400 hover:bg-gray-50"
                      }`}
                    >
                      <FiChevronLeft className="mr-1" />
                      Previous
                    </button>

                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-2 bg-blue-600 text-white font-semibold border-2 border-blue-700 rounded">
                        {currentPage}
                      </span>
                      <span className="text-gray-600">of {totalPages}</span>
                    </div>

                    <button
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      className={`flex items-center px-4 py-2 text-sm font-semibold border-2 rounded transition-colors ${
                        currentPage === totalPages
                          ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                          : "bg-blue-600 text-white border-blue-700 hover:bg-blue-700"
                      }`}
                    >
                      Next
                      <FiChevronRight className="ml-1" />
                    </button>

                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUsersPage;
