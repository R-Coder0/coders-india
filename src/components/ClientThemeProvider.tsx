"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
// import { SessionProvider } from "next-auth/react";

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevents mismatches until mounted on client

  return (
    // <SessionProvider>
      <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        {children}
      </ThemeProvider>
    // </SessionProvider>
  );
}
