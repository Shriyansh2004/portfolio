"use client";
import React from "react";
import { motion } from "framer-motion";
import { playClick } from "@/lib/audio";

interface ProjectItem {
  title: string;
  date: string;
  biome: string;
  biomeColor: string;
  borderTheme: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  iconSvg: React.ReactNode;
}

const projects: ProjectItem[] = [
  {
    title: "FITNESS TRACKER APPLICATION",
    date: "FEB 2026",
    biome: "FOREST BIOME",
    biomeColor: "text-[#55ff55]",
    borderTheme: "hover:border-[#5c8e32] hover:shadow-[0_0_15px_rgba(92,142,50,0.25)]",
    badgeBg: "bg-[#5c8e32]/35 border-[#5c8e32]",
    badgeText: "text-[#d8f3dc]",
    description: "DESIGNED AND BUILT A FULL-STACK FITNESS TRACKING SYSTEM USING JAVA, SPRING BOOT, AND MICROSERVICES ARCHITECTURE WITH REACT FRONTEND. IMPLEMENTED SERVICE DISCOVERY USING EUREKA, ASYNCHRONOUS COMMUNICATION WITH RABBITMQ, AND CONTAINERIZED SERVICES USING DOCKER. INTEGRATED MONGODB AND POSTGRESQL FOR DATA MANAGEMENT, SECURED APIS WITH KEYCLOAK AUTHENTICATION, AND ADDED AI-BASED INSIGHTS USING GEMINI API.",
    tech: ["JAVA", "SPRING BOOT", "REACT", "EUREKA", "RABBITMQ", "DOCKER", "MONGODB", "POSTGRESQL", "KEYCLOAK", "GEMINI API"],
    features: ["MICROSERVICES", "SERVICE DISCOVERY", "ASYNC MESSAGING", "AI INSIGHTS"],
    githubUrl: "https://github.com/Shriyansh2004/fitness-microservices-app",
    iconSvg: (
      <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
        <path d="M7 14h2v2H7zM5 12h6v2H5zm-1-4h8v4H4zm1-3h6v3H5z" fill="#5c8e32" />
        <path d="M7 6h2v6H7zm-2 2h6v1H5z" fill="#866043" />
        <path d="M6 3h4v2H6z" fill="#a7c957" />
      </svg>
    ),
  },
  {
    title: "JOB SCRAPER PLATFORM",
    date: "JAN 2026",
    biome: "DIAMOND CAVE",
    biomeColor: "text-[#55ffff]",
    borderTheme: "hover:border-[#33e3e3] hover:shadow-[0_0_15px_rgba(51,227,227,0.25)]",
    badgeBg: "bg-[#33e3e3]/20 border-[#33e3e3]",
    badgeText: "text-[#33e3e3]",
    description: "BUILT AN AI-POWERED FULL-STACK JOB SCRAPING PLATFORM THAT AGGREGATES LISTINGS FROM MULTIPLE JOB PORTALS INTO A UNIFIED DASHBOARD. IMPLEMENTED KEYWORD/LOCATION-BASED SCRAPING, JWT AUTHENTICATION, APPLICATION TRACKING, AND AN AI RESUME PARSER FOR SKILL EXTRACTION USING PYTHON (FASTAPI), REACT, TYPESCRIPT, TAILWINDCSS, AND POSTGRESQL, DEPLOYED ON NETLIFY AND RENDER.",
    tech: ["PYTHON", "FASTAPI", "REACT", "TYPESCRIPT", "TAILWINDCSS", "POSTGRESQL", "JWT", "NETLIFY", "RENDER"],
    features: ["MULTI-PORTAL SCRAPING", "JWT AUTH", "APP TRACKING", "AI RESUME PARSER"],
    githubUrl: "https://github.com/Shriyansh2004/Job_Scrap",
    liveUrl: "https://fastjobscraper.netlify.app/",
    iconSvg: (
      <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
        <path d="M0 0h16v16H0z" fill="#33e3e3" />
        <path d="M1 1h14v14H1z" fill="#00aaaa" />
        <path d="M3 3h10v10H3z" fill="#d8f3f3" />
        <path d="M5 5h6v6H5z" fill="#33e3e3" />
      </svg>
    ),
  },
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
                    {proj.date}
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

              <div className="mt-6 pt-4 border-t border-[#3c3c3c] flex flex-col gap-4">
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

                {/* Project links */}
                <div className="flex flex-wrap gap-2">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClick()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 font-vt323 text-sm uppercase bg-[#8b8b8b] border-[3px] border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#3f3f3f] border-r-[#3f3f3f] text-white shadow-[2px_2px_0px_#000] hover:bg-[#9c9c9c] active:translate-y-[1px] active:shadow-none transition-all duration-100"
                  >
                    GitHub Repo
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playClick()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 font-vt323 text-sm uppercase bg-[#5c8e32] border-[3px] border-t-[#a7c957] border-l-[#a7c957] border-b-[#38661b] border-r-[#38661b] text-white shadow-[2px_2px_0px_#000] hover:bg-[#6ba03c] active:translate-y-[1px] active:shadow-none transition-all duration-100"
                    >
                      Live Demo
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
