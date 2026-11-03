import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LogoLockup } from './Logo';

export const programs = [
  { href: '/programs/newcomer-orientation', label: 'Newcomer Orientation' },
  { href: '/programs/career-pathways', label: 'Career Pathways' },
  { href: '/programs/hands-on-trade-training', label: 'Hands-On Trade Training' },
  { href: '/programs/small-business-support', label: 'Small Business Support' },
];

const links = [
  { href: '/', label: 'Home', match: (p: string) => p === '/' },
  { href: '/about', label: 'About', match: (p: string) => p.startsWith('/about') },
  { href: '/articles', label: 'Articles', match: (p: string) => p.startsWith('/articles') },
  { href: '/ways-to-help', label: 'Ways to Help', match: (p: string) => p.startsWith('/ways-to-help') },
  { href: '/contact', label: 'Contact', match: (p: string) => p.startsWith('/contact') },
];

function navClass(active: boolean) {
  return `text-[15px] font-semibold py-3 border-b-2 transition-colors ${
    active ? 'text-navy border-sunrise' : 'text-[#3A4658] border-transparent hover:text-navy'
  }`;
}

export default function Header() {
  const { pathname } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const programsActive = pathname.startsWith('/programs');
  const close = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white border-b border-line">
      <div className="container-page flex items-center justify-between gap-6 py-3.5">
        <Link href="/" aria-label="BSUSA home">
          <LogoLockup />
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-7">
          <Link href="/" className={navClass(pathname === '/')}>
            Home
          </Link>
          <Link href="/about" className={navClass(pathname.startsWith('/about'))}>
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsProgramsOpen(true)}
            onMouseLeave={() => setIsProgramsOpen(false)}
          >
            <button
              className={`${navClass(programsActive)} inline-flex items-center gap-1`}
              onClick={() => setIsProgramsOpen(!isProgramsOpen)}
              aria-haspopup="true"
              aria-expanded={isProgramsOpen}
            >
              Programs
              <ChevronDown className="w-4 h-4" />
            </button>
            {isProgramsOpen && (
              <div className="absolute left-0 top-full w-72 bg-white border border-line rounded-2xl shadow-lg py-2 z-20">
                {programs.map((p, i) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="flex items-center gap-3 px-4 py-2.5 text-[15px] font-semibold text-ink hover:bg-mist hover:text-navy"
                  >
                    <span className="w-6 h-6 rounded-full bg-sunrise-tint text-sunrise-dark text-xs font-extrabold flex items-center justify-center">
                      {i + 1}
                    </span>
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.slice(2).map((l) => (
            <Link key={l.href} href={l.href} className={navClass(l.match(pathname))}>
              {l.label}
            </Link>
          ))}
          <Link href="/ways-to-help#donate" className="btn-primary ml-1">
            Donate
          </Link>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-navy p-2"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav aria-label="Mobile" className="lg:hidden border-t border-line bg-white">
          <div className="container-page py-3 flex flex-col">
            {links.slice(0, 2).map((l) => (
              <Link key={l.href} href={l.href} onClick={close} className="py-3 text-base font-semibold text-ink hover:text-navy">
                {l.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 eyebrow text-sunrise-dark">Programs</div>
            {programs.map((p) => (
              <Link key={p.href} href={p.href} onClick={close} className="py-2.5 pl-4 text-base font-semibold text-ink hover:text-navy">
                {p.label}
              </Link>
            ))}
            {links.slice(2).map((l) => (
              <Link key={l.href} href={l.href} onClick={close} className="py-3 text-base font-semibold text-ink hover:text-navy">
                {l.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-line">
              <Link href="/ways-to-help#donate" onClick={close} className="btn-primary w-full">
                Donate
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
