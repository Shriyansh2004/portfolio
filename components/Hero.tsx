"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { playClick } from "@/lib/audio";
import ResumeViewer from "@/components/ResumeViewer";

const roles = [
  "FULL STACK DEVELOPER",
  "JAVA BACKEND ENGINEER",
  "SPRING BOOT DEVELOPER",
  "NEXT.JS DEVELOPER",
  "SOFTWARE ENGINEER",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleCloseResume = useCallback(() => setIsResumeOpen(false), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = () => {
    playClick();
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent py-20 px-4 md:px-8 pointer-events-none"
    >
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-6 mt-12 pointer-events-auto">
        {/* Profile Avatar with Minecraft Nameplate look */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-28 h-28 md:w-36 md:h-36 p-[3px] bg-[#8f8f8f] border-[4px] border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#3f3f3f] border-r-[#3f3f3f] shadow-lg group [image-rendering:pixelated]"
        >
          <div className="w-full h-full bg-[#1e1e1e] border-[3px] border-t-[#3f3f3f] border-l-[#3f3f3f] border-b-[#dfdfdf] border-r-[#dfdfdf] relative overflow-hidden">
            <Image
              src="/profile.png"
              alt="Anubhab Sahoo"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px] pointer-events-none" />
          </div>
        </motion.div>

        {/* Hello Status Effect Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-black/75 border-2 border-[#5c8e32] text-[#5c8e32] font-vt323 text-sm tracking-widest uppercase shadow-[2px_2px_0px_#000]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5c8e32] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5c8e32]"></span>
          </span>
          OPEN TO OPPORTUNITIES
        </motion.div>

        {/* Name with voxel gray drop shadow */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-7xl font-extrabold tracking-wide font-vt323 text-white uppercase"
          style={{ textShadow: "4px 4px 0px #3f3f3f" }}
        >
          ANUBHAB SAHOO
        </motion.h1>

        {/* Animated Minecraft Role Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-10 md:h-12 flex items-center justify-center text-lg md:text-2xl font-vt323 text-neutral-300 uppercase"
        >
          <span className="mr-2 text-neutral-400">I am a Java Full Stack Developer </span>
          <div className="relative inline-block text-left overflow-hidden min-w-[200px] md:min-w-[320px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-x-0 font-bold text-[#33e3e3] block"
                style={{ textShadow: "2px 2px 0px #005c5c" }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl text-base md:text-lg text-neutral-300 leading-relaxed font-vt323 uppercase"
          style={{ textShadow: "1px 1px 0px #000" }}
        >
          Building scalable applications from frontend interfaces to enterprise backend systems.
        </motion.p>

        {/* Minecraft GUI Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-4 z-20"
        >
          <button
            onClick={handleScrollToProjects}
            onMouseEnter={() => playClick()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5c8e32] border-[3px] border-t-[#a7c957] border-l-[#a7c957] border-b-[#38661b] border-r-[#38661b] text-white font-vt323 text-lg px-8 py-3 uppercase shadow-[3px_3px_0px_#000] hover:bg-[#6ba03c] active:translate-y-[2px] active:shadow-none cursor-pointer transition-all duration-100"
          >
            View Projects <ArrowUpRight size={18} />
          </button>
          <button
            onClick={() => {
              playClick();
              setIsResumeOpen(true);
            }}
            onMouseEnter={() => playClick()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8b8b8b] border-[3px] border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#3f3f3f] border-r-[#3f3f3f] text-white font-vt323 text-lg px-8 py-3 uppercase shadow-[3px_3px_0px_#000] hover:bg-[#9c9c9c] active:translate-y-[2px] active:shadow-none cursor-pointer transition-all duration-100 group"
          >
            View Resume <FileText size={18} className="group-hover:scale-110 transition-transform" />
          </button>
          <a
            href="/resume.pdf"
            download="ANUBHAB_SAHOO_cv.pdf"
            onClick={() => playClick()}
            onMouseEnter={() => playClick()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8b8b8b] border-[3px] border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#3f3f3f] border-r-[#3f3f3f] text-white font-vt323 text-lg px-8 py-3 uppercase shadow-[3px_3px_0px_#000] hover:bg-[#9c9c9c] active:translate-y-[2px] active:shadow-none cursor-pointer transition-all duration-100 group"
          >
            Download Resume <Download size={18} className="group-hover:translate-y-[1px] transition-transform" />
          </a>
        </motion.div>
      </div>

      <ResumeViewer isOpen={isResumeOpen} onClose={handleCloseResume} />

      {/* Retro border bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#3f3f3f]" />
    </section>
  );
}
