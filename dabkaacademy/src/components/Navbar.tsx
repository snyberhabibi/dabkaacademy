"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/checkout", label: "Course" },
  { href: "/classes", label: "Pop-Up Classes" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/95 backdrop-blur-md border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo variant="light" size="md" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#71717a] hover:text-[#1a1a1a] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#CE1126] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[#1a1a1a] border-2 border-[#e5e7eb] hover:border-[#1a1a1a] transition-all duration-200 hover:shadow-[0_0_20px_rgba(26,26,26,0.1)]"
            >
              Login
            </Link>
            <Link
              href="/checkout"
              className="px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[#fafafa] bg-[#CE1126] hover:bg-[#CE1126]/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(206,17,38,0.4)] hover:translate-y-[-2px]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 group"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-[#fafafa]/98 backdrop-blur-lg border-b border-[#e5e7eb] transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-lg font-bold uppercase tracking-wider text-[#71717a] hover:text-[#1a1a1a] hover:bg-[#e5e7eb]/50 transition-all duration-200 border-l-2 border-transparent hover:border-[#CE1126]"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="pt-6 mt-4 border-t border-[#e5e7eb] space-y-3">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-3 text-center text-base font-bold uppercase tracking-wider text-[#1a1a1a] border-2 border-[#e5e7eb] hover:border-[#1a1a1a] transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="/checkout"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-3 text-center text-base font-bold uppercase tracking-wider text-[#fafafa] bg-[#CE1126] hover:bg-[#CE1126]/90 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-20 bg-black/30 -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
