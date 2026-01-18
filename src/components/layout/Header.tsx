'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neutral-light/10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between max-w-[1200px]">
        {/* 로고 */}
        <Link href="/" className="text-xl font-bold text-primary">
          Portfolio
        </Link>

        {/* 데스크톱 네비게이션 */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform duration-200 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-opacity duration-200 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform duration-200 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-neutral-light/10 transition-all duration-200 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block text-foreground/80 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
