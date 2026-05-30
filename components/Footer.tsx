"use client";
import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { playClick } from "@/lib/audio";

export default function Footer() {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#151515] py-12 px-4 md:px-8 border-t-[6px] border-[#222] relative overflow-hidden [image-rendering:pixelated]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 font-vt323 uppercase text-lg text-neutral-400">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-white tracking-wide uppercase" style={{ textShadow: "1px 1px 0px #000" }}>ANUBHAB SAHOO</h4>
          <p className="text-sm text-neutral-500 mt-1">
            © {new Date().getFullYear()} ANUBHAB SAHOO. ALL RIGS SECURED.
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="#home" onClick={() => playClick()} className="hover:text-[#ffff55] transition-colors">[ HOME ]</Link>
          <Link href="#about" onClick={() => playClick()} className="hover:text-[#ffff55] transition-colors">[ ABOUT ]</Link>
          <Link href="#skills" onClick={() => playClick()} className="hover:text-[#ffff55] transition-colors">[ SKILLS ]</Link>
          <Link href="#experience" onClick={() => playClick()} className="hover:text-[#ffff55] transition-colors">[ EXP ]</Link>
          <Link href="#projects" onClick={() => playClick()} className="hover:text-[#ffff55] transition-colors">[ PROJECTS ]</Link>
          <Link href="#contact" onClick={() => playClick()} className="hover:text-[#ffff55] transition-colors">[ CONTACT ]</Link>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => playClick()}
          className="bg-[#8b8b8b] border-[3px] border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#3f3f3f] border-r-[#3f3f3f] text-white p-2.5 shadow-[2px_2px_0px_#000] hover:bg-[#9c9c9c] active:translate-y-[1px] active:shadow-none cursor-pointer"
        >
          <ArrowUp size={20} className="filter drop-shadow-[1px_1px_0px_#000]" />
        </button>
      </div>
    </footer>
  );
}
