"use client";
import React from "react";
import { motion } from "framer-motion";
import { playClick } from "@/lib/audio";

interface SkillCategory {
  title: string;
  description: string;
  rarity: "COMMON" | "RARE" | "EPIC" | "LEGENDARY";
  rarityColor: string;
  bgOutline: string;
  iconSvg: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES (COMMON)",
    description: "CORE PROGRAMMING LANGUAGES FOR SYSTEM LOGIC, SCRIPTS, AND APPS.",
    rarity: "COMMON",
    rarityColor: "text-neutral-400 border-neutral-500 bg-neutral-900/60",
    bgOutline: "hover:border-neutral-500",
    iconSvg: (
      // Stone Sword / Wooden Tools
      <svg viewBox="0 0 16 16" className="w-12 h-12 [image-rendering:pixelated] filter drop-shadow-[2px_2px_0px_#000]">
        <path d="M11 0l5 5-9 9-2-1-1-1 9-9-2-3z" fill="#737373" />
        <path d="M4 10l2 2-4 4-2-2 4-4z" fill="#866043" />
        <path d="M3 11h2v2H3z" fill="#dfdf9f" />
        <path d="M12 2l2 2-6 6-2-2 6-6z" fill="#a3a3a3" />
      </svg>
    ),
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "FRONTEND STACK (EPIC)",
    description: "RESPONSIVE LAYOUTS, DYNAMIC UI, AND CLIENT SIDE APPLICATIONS.",
    rarity: "EPIC",
    rarityColor: "text-[#d8f3dc] border-[#aa00ff] bg-purple-950/30",
    bgOutline: "hover:border-[#aa00ff] hover:shadow-[0_0_15px_rgba(170,0,255,0.2)]",
    iconSvg: (
      // Diamond Sword
      <svg viewBox="0 0 16 16" className="w-12 h-12 [image-rendering:pixelated] filter drop-shadow-[2px_2px_0px_#000]">
        <path d="M11 0l5 5-9 9-2-1-1-1 9-9-2-3z" fill="#33e3e3" />
        <path d="M4 10l2 2-4 4-2-2 4-4z" fill="#866043" />
        <path d="M3 11h2v2H3z" fill="#dfdf9f" />
        <path d="M12 2l2 2-6 6-2-2 6-6z" fill="#ffffff" />
      </svg>
    ),
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "BACKEND CORE (LEGENDARY)",
    description: "ENTERPRISE JAVA BACKEND PIPELINES AND SECURE REST APIS.",
    rarity: "LEGENDARY",
    rarityColor: "text-[#ffff55] border-[#ffaa00] bg-amber-950/30",
    bgOutline: "hover:border-[#ffaa00] hover:shadow-[0_0_15px_rgba(255,170,0,0.25)]",
    iconSvg: (
      // Enchanted Book
      <svg viewBox="0 0 16 16" className="w-12 h-12 [image-rendering:pixelated] filter drop-shadow-[2px_2px_0px_#000]">
        <path d="M2 1h11v12H2z" fill="#aa00ff" />
        <path d="M3 2h9v10H3z" fill="#ff77ff" />
        <path d="M4 4h7v1H4zm0 2h7v1H4zm0 2h5v1H4z" fill="#ffffff" />
        <path d="M1 2h1v12H1z" fill="#5c00a3" />
      </svg>
    ),
    skills: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "Microservices"],
  },
  {
    title: "DATABASES (RARE)",
    description: "RELATIONAL DATABASES, DOCUMENT STORES, AND SCHEMAS.",
    rarity: "RARE",
    rarityColor: "text-[#55ffff] border-[#00aaaa] bg-cyan-950/30",
    bgOutline: "hover:border-[#00aaaa] hover:shadow-[0_0_15px_rgba(0,170,170,0.2)]",
    iconSvg: (
      // Diamond Pickaxe
      <svg viewBox="0 0 16 16" className="w-12 h-12 [image-rendering:pixelated] filter drop-shadow-[2px_2px_0px_#000]">
        <path d="M2 2l12 12" stroke="#866043" strokeWidth="2" strokeLinecap="square" />
        <path d="M10 0l6 6-3 3-6-6 3-3z" fill="#33e3e3" />
        <path d="M12 1l3 3-1 1-3-3 1-1z" fill="#ffffff" />
        <path d="M0 16l2-2-1-1-1 1v2z" fill="#3f3f3f" />
      </svg>
    ),
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DEVOPS INFRA (RARE)",
    description: "CONTAINERS, VCS REPOSITORIES, AND CONTINUOUS PIPELINES.",
    rarity: "RARE",
    rarityColor: "text-[#55ffff] border-[#00aaaa] bg-cyan-950/30",
    bgOutline: "hover:border-[#00aaaa] hover:shadow-[0_0_15px_rgba(0,170,170,0.2)]",
    iconSvg: (
      // Shield
      <svg viewBox="0 0 16 16" className="w-12 h-12 [image-rendering:pixelated] filter drop-shadow-[2px_2px_0px_#000]">
        <path d="M1 1h14v8c0 3-4 6-7 7-3-1-7-4-7-7V1z" fill="#8b8b8b" />
        <path d="M3 3h10v6c0 2-3 4-5 5-2-1-5-3-5-5V3z" fill="#3f3f3f" />
        <path d="M7 4h2v7H7V4z" fill="#ffff55" />
        <path d="M5 6h6v2H5V6z" fill="#ffff55" />
      </svg>
    ),
    skills: ["Docker", "Git", "GitHub", "CI/CD"],
  },
  {
    title: "UTILITIES & IDE (COMMON)",
    description: "INTEGRATED ENVIRONMENTS AND DESIGN TESTING TOOLS.",
    rarity: "COMMON",
    rarityColor: "text-neutral-400 border-neutral-500 bg-neutral-900/60",
    bgOutline: "hover:border-neutral-500",
    iconSvg: (
      // Golden Apple
      <svg viewBox="0 0 16 16" className="w-12 h-12 [image-rendering:pixelated] filter drop-shadow-[2px_2px_0px_#000]">
        <path d="M6 3c-2 0-3 2-3 4 0 3 3 6 5 7 2-1 5-4 5-7 0-2-1-4-3-4-1 0-2 1-2 1s-1-1-2-1z" fill="#ffff55" />
        <path d="M7 1h2v2H7V1z" fill="#866043" />
        <path d="M9 5c0 1-1 2-2 2s-1-1-1-2 1-2 2-2 1 1 1 2z" fill="#ffffff" opacity="0.6" />
      </svg>
    ),
    skills: ["IntelliJ IDEA", "VS Code", "Postman"],
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
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
              [ CRAFTING TABLE: SKILL ITEMS ]
            </h2>
          </motion.div>
          <div className="w-4 h-12 bg-[#5c3a21] border-x-[4px] border-[#3a2515] -mt-1" />
        </div>

        {/* 3x2 Grid for Crafting Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => playClick()}
              className={`flex flex-col justify-between p-6 bg-[#2e2e2e]/95 border-[4px] border-t-[#5c5c5c] border-l-[#5c5c5c] border-b-[#1c1c1c] border-r-[#1c1c1c] shadow-2xl transition-all duration-200 relative [image-rendering:pixelated] ${cat.bgOutline}`}
            >
              {/* Voxel corner indicators */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-[#5c5c5c]" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#5c5c5c]" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 bg-[#1c1c1c]" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-[#1c1c1c]" />

              <div className="space-y-4">
                {/* Item slot layout */}
                <div className="flex items-center gap-4">
                  {/* Recessed slot square */}
                  <div className="w-16 h-16 bg-[#8b8b8b] border-[3px] border-t-[#3f3f3f] border-l-[#3f3f3f] border-b-[#dfdfdf] border-r-[#dfdfdf] flex items-center justify-center relative">
                    {cat.iconSvg}
                  </div>

                  <div>
                    <span className={`inline-block px-2 py-0.5 border text-xs font-vt323 ${cat.rarityColor}`}>
                      {cat.rarity}
                    </span>
                    <h4 
                      className="text-lg font-bold text-white font-vt323 mt-1 uppercase"
                      style={{ textShadow: "1px 1px 0px #000" }}
                    >
                      {cat.title}
                    </h4>
                  </div>
                </div>

                <p 
                  className="text-sm text-neutral-400 font-vt323 uppercase leading-relaxed"
                  style={{ textShadow: "1px 1px 0px #000" }}
                >
                  {cat.description}
                </p>
              </div>

              {/* Grid of skill tags */}
              <div className="mt-6 pt-4 border-t border-[#3f3f3f] flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-1 bg-[#1a1a1a] border-2 border-[#5c5c5c] text-[#ffff55] font-vt323 text-sm uppercase shadow-[1px_1px_0px_#000]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
