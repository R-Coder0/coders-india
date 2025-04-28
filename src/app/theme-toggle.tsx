"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  console.log("Current theme:", theme); // 🚨 Debugging line

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full relative"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* Sun Icon */}
      <FaSun
        className="absolute h-5 w-5 transition-all duration-300 
                   transform rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
      />
      {/* Moon Icon */}
      <FaMoon
        className="absolute h-5 w-5 transition-all duration-300 
                   transform rotate-90 scale-0 dark:rotate-0 dark:scale-100"
      />
    </Button>
  );
}