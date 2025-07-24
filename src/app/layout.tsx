import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'User Management Dashboard',
  description: 'A simple user management dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="nav">
          <div className="nav-content">
            <Link href="/" className="nav-brand">User Dashboard</Link>
            <div className="nav-links">
              <Link href="/users" className="nav-link">Users</Link>
              <Link href="/users/create" className="nav-link">Create User</Link>
            </div>
          </div>
        </nav>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}