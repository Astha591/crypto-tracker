import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22a10 10 0 100-20 10 10 0 000 20zm0-15v5l-4.08 2.05 4.08-7.05z"/>
              </svg>
              <span className="ml-2 text-xl font-bold">CryptoInsight</span>
            </Link>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/" className="text-primary font-medium">Dashboard</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium">Markets</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium">Subscriptions</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium">Learn</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <span className="sr-only">User account</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </a>
            <Button className="bg-primary text-white shadow-sm hover:bg-primary/90">Sign Up</Button>
            <button 
              type="button" 
              className="md:hidden text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-primary">Dashboard</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Markets</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Subscriptions</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Learn</Link>
          </div>
        </div>
      )}
    </header>
  );
}
