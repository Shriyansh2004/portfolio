"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { playClick } from "@/lib/audio";

const diamondBlockSvg = (
  <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
    <path d="M0 0h16v16H0z" fill="#33e3e3" />
    <path d="M1 1h14v14H1z" fill="#00aaaa" />
    <path d="M3 3h10v10H3z" fill="#d8f3f3" />
    <path d="M5 5h6v6H5z" fill="#33e3e3" />
  </svg>
);

const emeraldBlockSvg = (
  <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
    <path d="M0 0h16v16H0z" fill="#55ff55" />
    <path d="M1 1h14v14H1z" fill="#00aa00" />
    <path d="M3 3h10v10H3z" fill="#d8ffd8" />
    <path d="M5 5h6v6H5z" fill="#55ff55" />
  </svg>
);

const goldBlockSvg = (
  <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
    <path d="M0 0h16v16H0z" fill="#ffff55" />
    <path d="M1 1h14v14H1z" fill="#aaaa00" />
    <path d="M3 3h10v10H3z" fill="#ffffd8" />
    <path d="M5 5h6v6H5z" fill="#ffff55" />
  </svg>
);

const enchantedBookSvg = (
  <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
    <path d="M2 1h11v12H2z" fill="#aa00ff" />
    <path d="M3 2h9v10H3z" fill="#ff77ff" />
    <path d="M4 4h7v1H4zm0 2h7v1H4zm0 2h5v1H4z" fill="#ffffff" />
    <path d="M1 2h1v12H1z" fill="#5c00a3" />
  </svg>
);

const techItems = [
  { name: "Java", icon: enchantedBookSvg },
  { name: "Spring Boot", icon: goldBlockSvg },
  { name: "Next.js", icon: diamondBlockSvg },
  { name: "React", icon: diamondBlockSvg },
  { name: "TypeScript", icon: emeraldBlockSvg },
  { name: "PostgreSQL", icon: goldBlockSvg },
  { name: "MongoDB", icon: emeraldBlockSvg },
  { name: "Docker", icon: diamondBlockSvg },
  { name: "Git", icon: goldBlockSvg },
  { name: "REST APIs", icon: enchantedBookSvg },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="relative w-full py-24 bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center justify-center">
        
        {/* Section Wooden Header */}
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
              [ TREASURE VAULT: RESOURCE STACKS ]
            </h2>
          </motion.div>
          <div className="w-4 h-12 bg-[#5c3a21] border-x-[4px] border-[#3a2515] -mt-1" />
        </div>

        {/* Custom styled Infinite Moving Cards */}
        <div className="w-full py-4 pointer-events-auto">
          <InfiniteMovingCards 
            items={techItems} 
            direction="left" 
            speed="normal"
            className="[&_li]:bg-[#222222] [&_li]:border-[4px] [&_li]:border-t-[#555555] [&_li]:border-l-[#555555] [&_li]:border-b-[#111111] [&_li]:border-r-[#111111] [&_li]:font-vt323 [&_li]:text-xl [&_li]:uppercase [&_li]:text-white [&_li]:rounded-none [&_li]:shadow-xl [&_li]:[image-rendering:pixelated]"
          />
        </div>
      </div>
    </section>
  );
}
