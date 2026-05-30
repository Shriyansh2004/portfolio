"use client";
import React from "react";
import { motion } from "framer-motion";
import { playClick } from "@/lib/audio";

interface ProjectItem {
  title: string;
  biome: string;
  biomeColor: string;
  borderTheme: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  tech: string[];
  features: string[];
  iconSvg: React.ReactNode;
}

const projects: ProjectItem[] = [
  {
    title: "E-COMMERCE SYSTEM",
    biome: "FOREST BIOME",
    biomeColor: "text-[#55ff55]",
    borderTheme: "hover:border-[#5c8e32] hover:shadow-[0_0_15px_rgba(92,142,50,0.25)]",
    badgeBg: "bg-[#5c8e32]/35 border-[#5c8e32]",
    badgeText: "text-[#d8f3dc]",
    description: "A WORLD-CLASS FULL-STACK SHOPPING PLATFORM SUPPORTING PRODUCT COMPILING AND DYNAMIC CUSTOMER CARTS.",
    tech: ["NEXT.JS", "SPRING BOOT", "MYSQL"],
    features: ["SECURE AUTH", "PRODUCT CORE", "CART SYSTEM", "STRIPE API"],
    iconSvg: (
      // Oak Sapling
      <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
        <path d="M7 14h2v2H7zM5 12h6v2H5zm-1-4h8v4H4zm1-3h6v3H5z" fill="#5c8e32" />
        <path d="M7 6h2v6H7zm-2 2h6v1H5z" fill="#866043" />
        <path d="M6 3h4v2H6z" fill="#a7c957" />
      </svg>
    )
  },
  {
    title: "JOB PORTAL ENGINE",
    biome: "DIAMOND CAVE",
    biomeColor: "text-[#55ffff]",
    borderTheme: "hover:border-[#33e3e3] hover:shadow-[0_0_15px_rgba(51,227,227,0.25)]",
    badgeBg: "bg-[#33e3e3]/20 border-[#33e3e3]",
    badgeText: "text-[#33e3e3]",
    description: "AN ENTERPRISE-GRADE RECRUITMENT DATABASE MATCHING TALENT CHUNKS WITH ACTIVE EMPLOYER MISSIONS.",
    tech: ["REACT", "SPRING BOOT", "POSTGRESQL"],
    features: ["USER SESSIONS", "JOB LISTINGS", "RESUME LOOT", "DASHBOARD"],
    iconSvg: (
      // Diamond Block
      <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
        <path d="M0 0h16v16H0z" fill="#33e3e3" />
        <path d="M1 1h14v14H1z" fill="#00aaaa" />
        <path d="M3 3h10v10H3z" fill="#d8f3f3" />
        <path d="M5 5h6v6H5z" fill="#33e3e3" />
      </svg>
    )
  },
  {
    title: "REAL-TIME MESSENGER",
    biome: "NETHER REALM",
    biomeColor: "text-[#ff5555]",
    borderTheme: "hover:border-[#a30000] hover:shadow-[0_0_15px_rgba(163,0,0,0.3)]",
    badgeBg: "bg-[#a30000]/25 border-[#a30000]",
    badgeText: "text-[#ff7777]",
    description: "A DYNAMIC MULTIPLAYER CHAT TERMINAL SECURED BY WEBSOCKET PIPELINES AND INSTANT TELEMETRY.",
    tech: ["NEXT.JS", "SPRING BOOT", "WEBSOCKETS"],
    features: ["LIVE CHAT", "PRESENCE BEAM", "NOTIFICATIONS", "EMOJI BLOCK"],
    iconSvg: (
      // Nether Portal / Fire block
      <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
        <path d="M1 1h14v14H1z" fill="#2c003e" />
        <path d="M3 3h10v10H3z" fill="#aa00ff" />
        <path d="M5 5h6v6H5z" fill="#e0aaff" />
        <path d="M2 2l12 12" stroke="#d400d4" strokeWidth="1" />
      </svg>
    )
  },
  {
    title: "PORTFOLIO CMS",
    biome: "THE END",
    biomeColor: "text-[#ff55ff]",
    borderTheme: "hover:border-[#aa00ff] hover:shadow-[0_0_15px_rgba(170,0,255,0.25)]",
    badgeBg: "bg-[#aa00ff]/20 border-[#aa00ff]",
    badgeText: "text-[#ff77ff]",
    description: "AN INTEGRATED ADMINISTRATIVE CONSOLE SUPPORTING CONTENT EDITING AND REAL-TIME WORLD ANALYTICS.",
    tech: ["NEXT.JS", "SPRING BOOT", "MONGODB"],
    features: ["DYNAMICS", "ADMIN PANEL", "ANALYTICS", "VISITOR LOGS"],
    iconSvg: (
      // Eye of Ender
      <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
        <circle cx="8" cy="8" r="6" fill="#0f4c5c" />
        <circle cx="8" cy="8" r="3" fill="#a7c957" />
        <circle cx="8" cy="8" r="1.5" fill="#f4f1de" />
        <path d="M2 8h12" stroke="#a7c957" strokeWidth="1.5" />
      </svg>
    )
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-24 px-4 md:px-8 bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
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
              [ ADVENTURE MAP: BIOMES ]
            </h2>
          </motion.div>
          <div className="w-4 h-12 bg-[#5c3a21] border-x-[4px] border-[#3a2515] -mt-1" />
        </div>

        {/* Projects Loot Chest Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => playClick()}
              className={`flex flex-col justify-between p-6 bg-[#2e2e2e]/95 border-[4px] border-t-[#5c5c5c] border-l-[#5c5c5c] border-b-[#1c1c1c] border-r-[#1c1c1c] shadow-2xl transition-all duration-200 relative [image-rendering:pixelated] ${proj.borderTheme}`}
            >
              {/* Voxel corner indicators */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-[#5c5c5c]" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#5c5c5c]" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 bg-[#1c1c1c]" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-[#1c1c1c]" />

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#3c3c3c] pb-4">
                  <div className="flex items-center gap-3">
                    {/* Loot slot */}
                    <div className="w-14 h-14 bg-[#8b8b8b] border-[3px] border-t-[#3f3f3f] border-l-[#3f3f3f] border-b-[#dfdfdf] border-r-[#dfdfdf] flex items-center justify-center">
                      {proj.iconSvg}
                    </div>
                    <div>
                      <h3 
                        className="text-xl font-bold text-white font-vt323 uppercase"
                        style={{ textShadow: "1px 1px 0px #000" }}
                      >
                        {proj.title}
                      </h3>
                      <span className={`text-xs font-vt323 uppercase font-semibold ${proj.biomeColor}`}>
                        {proj.biome}
                      </span>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 text-xs border font-vt323 uppercase ${proj.badgeBg} ${proj.badgeText}`}>
                    ACTIVE
                  </span>
                </div>

                <p 
                  className="text-sm md:text-base text-neutral-300 font-vt323 leading-relaxed uppercase"
                  style={{ textShadow: "1px 1px 0px #000" }}
                >
                  {proj.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-1">
                  <span className="text-xs font-vt323 text-[#ffff55] uppercase block">* BIOME OBJECTIVES:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {proj.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-xs text-neutral-400 font-vt323 uppercase">
                        <div className="w-2 h-2 bg-[#ffff55]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#3c3c3c] flex flex-wrap gap-2 items-center justify-between">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 border text-xs font-vt323 bg-[#111] border-[#5c5c5c] text-[#33e3e3] uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Loot chest details button */}
                <span 
                  onClick={() => playClick()}
                  className="text-xs font-vt323 uppercase text-[#ffff55] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  style={{ textShadow: "1px 1px 0px #000" }}
                >
                  [ OPEN LOOT ]
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
