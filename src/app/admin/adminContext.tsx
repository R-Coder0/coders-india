"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AdminContextProps {
  adminToken: string | null;
  loginAdmin: (token: string) => void;
  logoutAdmin: () => void;
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

// Custom hook to use the Admin Context
export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdminContext must be used within an AdminProvider");
  }
  return context;
};

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [adminToken, setAdminToken] = useState<string | null>(null);
  const router = useRouter();

  // Check for token in localStorage when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      setAdminToken(token); // Persist token after refresh
    } else {
      setAdminToken(null);
    }
  }, []); // Only run once when the component mounts

  const loginAdmin = (token: string) => {
    localStorage.setItem("admin_token", token); // Store token in localStorage
    setAdminToken(token); // Set token in state
  };

  const logoutAdmin = () => {
    localStorage.removeItem("admin_token"); // Remove token from localStorage
    setAdminToken(null); // Clear state
    router.push("/admin/login"); // Redirect to login page
  };

  return (
    <AdminContext.Provider value={{ adminToken, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
