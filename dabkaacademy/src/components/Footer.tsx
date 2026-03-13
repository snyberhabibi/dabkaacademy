"use client";

import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  const courseLinks = [
    { label: "Course", href: "/course" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
  ];

  const classesLinks = [
    { label: "Upcoming", href: "/classes/upcoming" },
    { label: "Locations", href: "/classes/locations" },
    { label: "Private Events", href: "/classes/private-events" },
  ];

  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ];

  return (
    <footer className="bg-[#141414] text-[#fafafa] border-t border-[#27272a]">
      {/* Newsletter Section */}
      <div className="border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Join the Movement
              </h3>
              <p className="mt-2 text-[#71717a] text-sm md:text-base">
                Get exclusive updates on new classes, cultural events, and community gatherings.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 lg:w-80 px-5 py-4 bg-[#27272a] border border-[#27272a] text-[#fafafa] placeholder-[#71717a] focus:outline-none focus:border-[#e63946] transition-colors font-medium"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#e63946] text-[#fafafa] font-black uppercase tracking-wider hover:bg-[#d62839] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                  Dabka<span className="text-[#e63946]">.</span>
                </h2>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter -mt-2">
                  Academy
                </h2>
              </div>
              <p className="text-[#71717a] text-sm leading-relaxed max-w-xs">
                Preserving Palestinian heritage through the art of Dabka.
                Every step carries the rhythm of our ancestors, every movement tells our story.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4 mt-2">
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-12 h-12 flex items-center justify-center bg-[#27272a] hover:bg-[#e63946] transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-[#fafafa]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a
                  href="#"
                  aria-label="TikTok"
                  className="w-12 h-12 flex items-center justify-center bg-[#27272a] hover:bg-[#e63946] transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-[#fafafa]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-12 h-12 flex items-center justify-center bg-[#27272a] hover:bg-[#e63946] transition-colors group"
                >
                  <svg
                    className="w-5 h-5 text-[#fafafa]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Course Links */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#71717a] mb-6">
                  Course
                </h4>
                <ul className="space-y-4">
                  {courseLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#fafafa] hover:text-[#e63946] transition-colors font-medium text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Classes Links */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#71717a] mb-6">
                  Classes
                </h4>
                <ul className="space-y-4">
                  {classesLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#fafafa] hover:text-[#e63946] transition-colors font-medium text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#71717a] mb-6">
                  Company
                </h4>
                <ul className="space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#fafafa] hover:text-[#e63946] transition-colors font-medium text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto px-6 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[#71717a] text-xs font-medium">
              &copy; {currentYear} Dabka Academy. All rights reserved.
            </p>
            <p className="text-[#71717a] text-xs font-medium">
              Made with love for Palestine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
