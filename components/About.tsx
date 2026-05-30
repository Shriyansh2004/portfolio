"use client";
import React from "react";
import { motion } from "framer-motion";
import { playClick } from "@/lib/audio";

const focusPoints = [
  "Full Stack Development",
  "Backend Engineering",
  "REST API Development",
  "System Design",
  "Database Design",
  "Cloud-Based Applications",
  "Enterprise Software Development",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-4 md:px-8 bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading as a Minecraft Wooden Sign */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => playClick()}
            className="px-8 py-4 bg-[#7a5c3a] border-[4px] border-t-[#a87c54] border-l-[#a87c54] border-b-[#473521] border-r-[#473521] shadow-2xl [image-rendering:pixelated]"
          >
            <h2 
              className="text-2xl md:text-4xl font-extrabold font-vt323 text-[#ffff55] uppercase"
              style={{ textShadow: "2px 2px 0px #3c2d1b" }}
            >
              [ QUEST BOARD: SPAWN AREA ]
            </h2>
          </motion.div>
          <div className="w-4 h-12 bg-[#5c3a21] border-x-[4px] border-[#3a2515] -mt-1" />
        </div>

        {/* Quest Dialog Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Main Narrative Wooden Scroll Box */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between bg-[#c6a07a] border-[6px] border-t-[#ebd8c5] border-l-[#ebd8c5] border-b-[#7d5635] border-r-[#7d5635] p-6 md:p-8 shadow-2xl relative [image-rendering:pixelated]"
          >
            {/* Corner pixel details */}
            <div className="absolute top-1 left-1 w-2 h-2 bg-[#ebd8c5]" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-[#ebd8c5]" />
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-[#7d5635]" />
            <div className="absolute bottom-1 right-1 w-2 h-2 bg-[#7d5635]" />

            <div className="space-y-6 text-[#2a1b0c] font-vt323 text-lg md:text-xl uppercase">
              <h3 
                className="text-xl md:text-2xl font-bold text-[#ffff55]"
                style={{ textShadow: "2px 2px 0px #7d5635" }}
              >
                Hi, I'm Anubhab Sahoo.
              </h3>
              <p className="leading-relaxed">
                A Full Stack Developer passionate about building scalable web applications and enterprise backend systems.
              </p>
              <p className="leading-relaxed">
                I enjoy creating high-performance applications using Java, Spring Boot, React, Next.js, TypeScript, and modern cloud infrastructures.
              </p>
              <p className="leading-relaxed text-sm text-[#473521]">
                * STAGE OBJECTIVE: BUILD ROBUST AND HIGHLY MAINTAINABLE DIGITAL PRODUCTS BRIDGING FRONTEND AESTHETICS AND SOLID BACKEND PATTERNS.
              </p>
            </div>
            
            <div className="pt-6 border-t-2 border-[#7d5635]/30 mt-6 flex justify-between items-center text-[#2a1b0c] font-vt323 text-sm">
              <span>LOCATION: BHUBANESWAR, IN</span>
              <span className="text-[#ffff55]" style={{ textShadow: "1px 1px 0px #7d5635" }}>REWARD: 999+ XP</span>
            </div>
          </motion.div>

          {/* Quest Objectives Box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#3c2d1b] border-[6px] border-t-[#5c4428] border-l-[#5c4428] border-b-[#1c140c] border-r-[#1c140c] p-6 md:p-8 shadow-2xl relative [image-rendering:pixelated]"
          >
            <h4 
              className="text-lg md:text-xl font-bold text-white mb-6 uppercase tracking-wider font-vt323 text-center"
              style={{ textShadow: "2px 2px 0px #000" }}
            >
              [ QUEST OBJECTIVES ]
            </h4>
            
            <div className="space-y-4">
              {focusPoints.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, x: 5 }}
                  onMouseEnter={() => playClick()}
                  className="flex items-center gap-3 p-3 bg-[#1c140c] border-[3px] border-t-[#3c2d1b] border-l-[#3c2d1b] border-b-[#0c0804] border-r-[#0c0804] text-white font-vt323 text-base md:text-lg uppercase"
                >
                  {/* Custom Pixel Bullet (Yellow block) */}
                  <div className="w-3 h-3 bg-[#ffff55] flex-shrink-0" />
                  <span className="tracking-wide" style={{ textShadow: "1px 1px 0px #000" }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
