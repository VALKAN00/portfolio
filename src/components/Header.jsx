import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Header() {
  const navLinks = ["Home", "About", "Education", "Experience", "Offers", "Projects", "Skills", "Certificates", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#111111]/30 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand Name */}
          <a
            href="#home"
            className="text-3xl font-bold text-white tracking-tighter"
          >
            Abdelrhman.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:bg-slate-700 hover:text-white px-5 py-3 text-base font-medium text-center"
          >
            {link}
          </a>
        ))}
      </div>
    </header>
  );
}
