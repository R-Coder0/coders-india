// components/NavbarWrapper.tsx

'use client'; // Mark this as a client component

import { usePathname } from 'next/navigation';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';

export default function NavbarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin'); // Check if route is admin

  return (
    <>
      {/* Only show navbars for non-admin routes */}
      {!isAdminRoute && (
        <>
          <DesktopNavbar />
          <MobileNavbar />
        </>
      )}

      {children}

      {/* Only show footer for non-admin routes */}
      {!isAdminRoute && <Footer />}
    </>
  );
}
