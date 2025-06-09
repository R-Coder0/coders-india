'use client';
import { AdminProvider } from './adminContext';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import TopBar from '@/components/admin/TopBar';
import Sidebar from '@/components/admin/Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';

  return (
    <AdminProvider>
      {!isLoginPage ? (
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden ml-20 lg:ml-64">
            <TopBar />
            <main >
              {children}
            </main>
          </div>
        </div>
      ) : (
        <div >
          <main>{children}</main>
        </div>
      )}
    </AdminProvider>
  );
}