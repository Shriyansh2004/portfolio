"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { BackgroundBeams } from "./ui/background-beams";
import { SparklesCore } from "./ui/sparkles";
import { ArrowUpRight, Download, Send } from "lucide-react";
import Link from "next/link";

const roles = [
  "Software Developer",
  "Full Stack Developer",
  "Electrical Engineer",
  "SCADA Enthusiast",
  "Automation Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black py-20 px-4 md:px-8"
    >
      {/* Background Beams and Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#00f0ff" />
      <Spotlight className="top-10 right-0 md:right-20" fill="#0072ff" />
      <BackgroundBeams />

      {/* Particle Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
        <SparklesCore
          id="hero-sparkles"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          particleColor="#00f0ff"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-8 mt-12 md:mt-20">
        {/* Profile Avatar Placeholder with Neon Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[2px] bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(6,182,212,0.3)] group"
        >
          <div className="w-full h-full rounded-full bg-neutral-950 overflow-hidden flex items-center justify-center relative">
            {/* Styled vector graphics representation of a tech developer / electrical engineer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/40 to-indigo-950/40 group-hover:scale-115 transition-transform duration-500" />
            <svg
              className="w-16 h-16 md:w-20 md:h-20 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            {/* Visual circuit grid overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        </motion.div>

        {/* Hello Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight font-display bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent"
        >
          Anubhab Sahoo
        </motion.h1>

        {/* Animated Role Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-10 md:h-14 flex items-center justify-center text-xl md:text-3xl font-semibold text-neutral-400"
        >
          <span className="mr-2">I am a</span>
          <div className="relative inline-block text-left overflow-hidden min-w-[200px] md:min-w-[320px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-x-0 font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent block"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl text-base md:text-xl text-neutral-400 leading-relaxed font-sans"
        >
          "Building intelligent software and automation solutions that bridge engineering and technology."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 z-20"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-pointer"
          >
            Contact Me <Send size={18} />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/60 text-white font-semibold hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 backdrop-blur-md cursor-pointer group"
          >
            Download Resume <Download size={18} className="group-hover:translate-y-[1px] transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </section>
  );
}
