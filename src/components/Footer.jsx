import React from "react";
import { Github, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#111111]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Abdelrhman Ahmed. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              target="_blank"
              href="https://github.com/VALKAN00"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/abdelrhman-ahmed-a19216296/"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
