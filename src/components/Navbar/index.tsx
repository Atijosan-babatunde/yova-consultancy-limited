"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../Ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  // { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo/logonew.png"
            alt="logo"
            width={60}
            height={20}
            className="w-[31px]"
          />
          <span className="text-[#0A3D62] font-bold text-xl">YOVA TECH</span>
        </Link>


        {/* Center: Navigation - hidden on mobile */}
        <div className="hidden md:flex space-x-10 font-medium text-gray-700 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-[#F1170c] text-[#0A3D62]"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: Single Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button variant="blue" size="default">
              Book a Consultation
            </Button>
          </Link>
        </div>



        {/* Mobile menu button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-[#0A3D62] hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-6 pb-4 space-y-2 font-medium text-gray-700">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:bg-indigo-100 transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <Button variant="blue" size="default">
              Book a Consultation
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}