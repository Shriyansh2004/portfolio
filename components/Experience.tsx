"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { playXPDing, playLevelUp } from "@/lib/audio";

interface ExpLevel {
  level: number;
  title: string;
  subtitle: string;
  duration: string;
  details: string[];
  tech: string[];
}

const levels: ExpLevel[] = [
  {
    level: 1,
    title: "SDE INTERN @ HIREKARMA",
    subtitle: "SOFTWARE DEVELOPMENT ENGINEERING INTERN",
    duration: "JAN 2026 - PRESENT",
    details: [
      "DEVELOPED SCALABLE WEB APPLICATIONS USING REACT, NEXT.JS, AND TYPESCRIPT.",
      "COLLABORATED WITH DEV TEAMS TO DESIGN AND DEPLOY SPRING BOOT RESTFUL BACKENDS.",
      "PARTICIPATED IN GIT WORKFLOWS, LINT COMPILING CHECKS, AND SCRUM REVIEWS.",
      "OPTIMIZED FRONTEND METRICS BOOSTING RENDER SPEEDS AND IMPROVING LIGHTHOUSE SCOPES.",
    ],
    tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "NODE.JS", "EXPRESS", "GIT"],
  },
  {
    level: 2,
    title: "FULL STACK ARCHITECT",
    subtitle: "ENTERPRISE SYSTEMS & PIPELINES",
    duration: "JAN 2025 - DEC 2025",
    details: [
      "BUILT SCALABLE WEB PORTALS LINKED TO RELATIONAL POSTGRESQL/MYSQL ENGINE STORES.",
      "DESIGNED SECURE SPRING SECURITY TOKEN SCHEMAS AND DATA JPA ENTITY MODELS.",
      "CONFIGURED DOCKER CONTAINERS AND CI/CD WORKFLOWS FOR AUTOMATED DEPLOYMENTS.",
      "INTEGRATED REAL-TIME WEBSOCKET SERVICES SUPPORTING CHAT CONVERSATIONS.",
    ],
    tech: ["JAVA", "SPRING BOOT", "SPRING SECURITY", "SPRING DATA JPA", "POSTGRESQL", "DOCKER"],
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [xpPoints, setXpPoints] = useState(0);
  const [activeLevel, setActiveLevel] = useState(1);

  // Monitor scroll progression specifically for the Experience section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  useEffect(() => {
    let triggeredL1 = false;
    let triggeredL2 = false;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Map scroll progress to XP points out of 100
      const xp = Math.round(latest * 100);
      setXpPoints(xp);

      // Determine level and play retro dings at milestones
      if (xp > 10 && xp < 60) {
        setActiveLevel(1);
        if (!triggeredL1) {
          playXPDing();
          triggeredL1 = true;
        }
      } else if (xp >= 60) {
        setActiveLevel(2);
        if (!triggeredL2) {
          playLevelUp();
          triggeredL2 = true;
        }
      } else {
        // Reset triggers if scrolled back up
        triggeredL1 = false;
        triggeredL2 = false;
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full py-24 px-4 md:px-8 bg-transparent overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Wooden Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => playXPDing()}
            className="px-8 py-4 bg-[#7a5c3a] border-[4px] border-t-[#a87c54] border-l-[#a87c54] border-b-[#473521] border-r-[#473521] shadow-2xl [image-rendering:pixelated]"
          >
            <h2 
              className="text-2xl md:text-4xl font-extrabold font-vt323 text-[#ffff55] uppercase"
              style={{ textShadow: "2px 2px 0px #3c2d1b" }}
            >
              [ progression map: xp system ]
            </h2>
          </motion.div>
          <div className="w-4 h-12 bg-[#5c3a21] border-x-[4px] border-[#3a2515] -mt-1" />
        </div>

        {/* Dynamic XP HUD Panel */}
        <div className="mb-16 p-4 bg-[#1e1e1e]/90 border-[4px] border-t-[#5c5c5c] border-l-[#5c5c5c] border-b-[#1c1c1c] border-r-[#1c1c1c] max-w-2xl mx-auto text-center [image-rendering:pixelated] shadow-xl">
          <div className="flex justify-between items-center text-white font-vt323 text-lg md:text-xl uppercase px-2 mb-2">
            <span>LEVEL {activeLevel} SDE</span>
            <span className="text-[#55ff55]">XP: {xpPoints} / 100</span>
          </div>

          {/* Minecraft XP Bar */}
          <div className="h-5 w-full bg-[#1c1c1c] border-[3px] border-t-[#0a0a0a] border-l-[#0a0a0a] border-b-[#3c3c3c] border-r-[#3c3c3c] overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#55ff55] to-[#a7c957] shadow-[inset_0_0_6px_rgba(0,0,0,0.4)]"
              style={{ width: `${xpPoints}%` }}
              layoutId="xp-progress"
            />
          </div>
          <div className="mt-2 text-xs font-vt323 text-[#ffff55] uppercase tracking-wider">
            * SCROLL DOWN TO COLLECT XP AND LEVEL UP!
          </div>
        </div>

        {/* progression Levels list */}
        <div className="space-y-12">
          {levels.map((lvl) => {
            const isUnlocked = xpPoints >= (lvl.level === 1 ? 15 : 60);

            return (
              <motion.div
                key={lvl.level}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`p-6 md:p-8 border-[6px] relative [image-rendering:pixelated] transition-colors duration-300 ${
                  isUnlocked
                    ? "bg-[#2e2e2e]/95 border-t-[#5c5c5c] border-l-[#5c5c5c] border-b-[#1c1c1c] border-r-[#1c1c1c] text-white shadow-2xl"
                    : "bg-[#181818]/80 border-t-[#2a2a2a] border-l-[#2a2a2a] border-b-[#0c0c0c] border-r-[#0c0c0c] text-neutral-600"
                }`}
              >
                {/* Level Tag Overlay */}
                <div 
                  className={`absolute -top-6 left-6 px-4 py-2 border-[4px] font-vt323 text-lg md:text-xl uppercase shadow-md ${
                    isUnlocked
                      ? "bg-[#5c8e32] border-t-[#a7c957] border-l-[#a7c957] border-b-[#38661b] border-r-[#38661b] text-white"
                      : "bg-[#333333] border-t-[#555] border-l-[#555] border-b-[#111] border-r-[#111] text-neutral-500"
                  }`}
                  style={{ textShadow: isUnlocked ? "2px 2px 0px #38661b" : "none" }}
                >
                  LEVEL {lvl.level} {isUnlocked ? "UNLOCKED" : "LOCKED"}
                </div>

                <div className="mt-4 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#3c3c3c]/50 pb-4">
                    <div>
                      <h3 
                        className={`text-2xl font-bold font-vt323 uppercase ${isUnlocked ? "text-[#ffff55]" : "text-neutral-500"}`}
                        style={{ textShadow: isUnlocked ? "2px 2px 0px #3a2d1b" : "none" }}
                      >
                        {lvl.title}
                      </h3>
                      <p className="font-vt323 text-sm md:text-base uppercase tracking-wider text-neutral-400 mt-1">
                        {lvl.subtitle}
                      </p>
                    </div>
                    <div className="font-vt323 text-sm md:text-base uppercase text-neutral-400 bg-[#1c1c1c] px-3 py-1.5 border border-[#3c3c3c]">
                      {lvl.duration}
                    </div>
                  </div>

                  {/* Bullet Achievements */}
                  <ul className="space-y-3 font-vt323 text-base md:text-lg uppercase">
                    {lvl.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex gap-3 items-start">
                        {/* Custom status bullet */}
                        <div 
                          className={`w-3.5 h-3.5 mt-1 flex-shrink-0 border-2 ${
                            isUnlocked 
                              ? "bg-[#55ff55] border-[#a7c957]" 
                              : "bg-[#444] border-[#555]"
                          }`} 
                        />
                        <span className={isUnlocked ? "text-neutral-200" : "text-neutral-600"}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech slots */}
                  <div className="pt-4 border-t border-[#3c3c3c]/50 flex flex-wrap gap-2">
                    {lvl.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2 py-0.5 border text-xs font-vt323 uppercase ${
                          isUnlocked
                            ? "bg-[#1c1c1c] border-[#5c5c5c] text-[#33e3e3]"
                            : "bg-[#111] border-[#333] text-neutral-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
