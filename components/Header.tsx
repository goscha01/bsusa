import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const programs = [
    { href: '/programs/newcomer-orientation', label: 'Newcomer Orientation' },
    { href: '/programs/career-pathways', label: 'Career Pathways' },
    { href: '/programs/hands-on-trade-training', label: 'Hands-On Trade Training' },
    { href: '/programs/small-business-support', label: 'Small Business Support' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/bsusa-logo.svg"
                alt="BSUSA Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900 leading-none">BSUSA</span>
                <div className="flex flex-col text-xs text-gray-600 leading-tight justify-center">
                  <span>Better Start USA</span>
                  <span>Foundation, Inc.</span>
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary px-2 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary px-2 py-2 text-sm font-medium">
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-primary px-2 py-2 text-sm font-medium inline-flex items-center"
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                aria-haspopup="true"
                aria-expanded={isProgramsOpen}
              >
                Programs
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isProgramsOpen && (
                <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-20">
                  {programs.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/articles" className="text-gray-700 hover:text-primary px-2 py-2 text-sm font-medium">
              Articles
            </Link>
            <Link href="/ways-to-help" className="text-gray-700 hover:text-primary px-2 py-2 text-sm font-medium">
              Ways to Help
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary px-2 py-2 text-sm font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/ways-to-help#donate" className="btn-primary">
              Donate
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link href="/" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Programs</div>
            {programs.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="text-gray-700 hover:text-primary block px-6 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {p.label}
              </Link>
            ))}
            <Link href="/articles" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Articles
            </Link>
            <Link href="/ways-to-help" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Ways to Help
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link href="/ways-to-help#donate" className="btn-primary block text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
