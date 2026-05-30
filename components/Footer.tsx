"use client";
import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black py-12 px-4 md:px-8 border-t border-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold text-white font-display tracking-tight">Anubhab Sahoo</h4>
          <p className="text-xs md:text-sm text-neutral-500 mt-1">
            © {new Date().getFullYear()} Anubhab Sahoo. All rights reserved.
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500 font-medium">
          <Link href="#home" className="hover:text-white transition-colors">Home</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
          <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-300 animate-none"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-cyan-400 hover:border-cyan-800/30 transition-all duration-300 animate-none"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-850 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
