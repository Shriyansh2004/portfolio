"use client";
import React from "react";
import { motion } from "framer-motion";
import { playXPDing } from "@/lib/audio";

interface AchievementItem {
  title: string;
  category: "ACHIEVEMENT GET!" | "CHALLENGE COMPLETE!";
  bannerBg: string;
  bannerBorder: string;
  badgeText: string;
  institution: string;
  desc: string;
  iconSvg: React.ReactNode;
}

const achievements: AchievementItem[] = [
  {
    title: "B.TECH GRADUATE",
    category: "CHALLENGE COMPLETE!",
    bannerBg: "bg-[#aa00ff]",
    bannerBorder: "border-t-[#ff77ff] border-l-[#ff77ff] border-b-[#5c00a3] border-r-[#5c00a3]",
    badgeText: "text-[#ffb3ff]",
    institution: "ELECTRICAL ENGINEERING GRADUATE",
    desc: "ACQUIRED CORE ENGINEERING DISCIPLINE COVERING POWER NETWORKS, CONTROL SCHEMAS, AND ELECTRONICS.",
    iconSvg: (
      // Graduation Cap Voxel Icon
      <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
        <path d="M8 1l8 4-8 4-8-4 8-4z" fill="#ffff55" />
        <path d="M4 7v3.5c0 1 1.8 2.5 4 2.5s4-1.5 4-2.5V7l-4 2-4-2z" fill="#aaaa00" />
        <path d="M14.5 5.5v5l-1 1v-6l1-1z" fill="#ff77ff" />
      </svg>
    )
  },
  {
    title: "SOFTWARE INTERN",
    category: "ACHIEVEMENT GET!",
    bannerBg: "bg-[#5c8e32]",
    bannerBorder: "border-t-[#a7c957] border-l-[#a7c957] border-b-[#38661b] border-r-[#38661b]",
    badgeText: "text-[#d8f3dc]",
    institution: "HIREKARMA SDE ROLES",
    desc: "ASSUMED RESPONSIBILITIES CREATING FULL-STACK PRODUCTS, DEVELOPING APIS, AND ACCELERATING RENDERING PERFORMANCE.",
    iconSvg: (
      // Diamond Sword Voxel Icon
      <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
        <path d="M11 0l5 5-9 9-2-1-1-1 9-9-2-3z" fill="#33e3e3" />
        <path d="M4 10l2 2-4 4-2-2 4-4z" fill="#866043" />
      </svg>
    )
  },
  {
    title: "SCADA PROGRAMMER",
    category: "CHALLENGE COMPLETE!",
    bannerBg: "bg-[#aa00ff]",
    bannerBorder: "border-t-[#ff77ff] border-l-[#ff77ff] border-b-[#5c00a3] border-r-[#5c00a3]",
    badgeText: "text-[#ffb3ff]",
    institution: "SUBSTATION AUTO INFRA",
    desc: "CONFIGURED TELEMETRY PIPELINES AND SUBSTATION INTERCONNECTED CONTROL FLOWS VIA SIEMENS WINCC.",
    iconSvg: (
      // Redstone Repeater / Voxel Gear
      <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
        <path d="M3 6h10v4H3zm3 4h4v2H6z" fill="#ff2200" />
        <path d="M2 5h12v1H2zm3-3h2v3H5zm4 0h2v3H9z" fill="#8b8b8b" />
      </svg>
    )
  },
  {
    title: "OCPP EV DEVELOPER",
    category: "ACHIEVEMENT GET!",
    bannerBg: "bg-[#5c8e32]",
    bannerBorder: "border-t-[#a7c957] border-l-[#a7c957] border-b-[#38661b] border-r-[#38661b]",
    badgeText: "text-[#d8f3dc]",
    institution: "SMART ENERGY TELEMETRY",
    desc: "PROGRAMMED REAL-TIME CHARGER SERVER LOGIC AND WEBSOCKET INTERFACES SECURED VIA OCPP PROTOCOLS.",
    iconSvg: (
      // Lightning / Energy Voxel Block
      <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
        <path d="M9 1L2 9h6v6l7-8H9V1z" fill="#ffff55" />
      </svg>
    )
  },
  {
    title: "FULL STACK ENGINEER",
    category: "ACHIEVEMENT GET!",
    bannerBg: "bg-[#5c8e32]",
    bannerBorder: "border-t-[#a7c957] border-l-[#a7c957] border-b-[#38661b] border-r-[#38661b]",
    badgeText: "text-[#d8f3dc]",
    institution: "MODERN WEB DEV & DATABASES",
    desc: "ACQUIRED EXPERTISE ACROSS NEXT.JS FRONTENDS AND SPRING BOOT JAVA SYSTEMS LINKED TO SECURED DATABASES.",
    iconSvg: (
      // Diamond Block Icon
      <svg viewBox="0 0 16 16" className="w-10 h-10 [image-rendering:pixelated]">
        <path d="M0 0h16v16H0z" fill="#33e3e3" />
        <path d="M2 2h12v12H2z" fill="#d8f3f3" />
      </svg>
    )
  }
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full py-24 px-4 md:px-8 bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Wooden Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
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
              [ TROPHY ROOM: MILESTONES ]
            </h2>
          </motion.div>
          <div className="w-4 h-12 bg-[#5c3a21] border-x-[4px] border-[#3a2515] -mt-1" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => playXPDing()}
              className="group relative flex flex-col justify-between bg-[#2a2a2a]/95 border-[4px] border-t-[#555] border-l-[#555] border-b-[#111] border-r-[#111] p-6 shadow-2xl [image-rendering:pixelated] hover:border-[#ffff55] transition-all duration-200"
            >
              {/* Achievement Badge Banner */}
              <div 
                className={`absolute -top-6 left-6 px-3 py-1.5 border-[3px] font-vt323 text-xs md:text-sm uppercase shadow-md ${ach.bannerBg} ${ach.bannerBorder} ${ach.badgeText}`}
                style={{ textShadow: "1px 1px 0px #000" }}
              >
                {ach.category}
              </div>

              {/* Voxel corner indicators */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-[#555]" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#555]" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 bg-[#111]" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-[#111]" />

              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-4 border-b border-[#3c3c3c] pb-3">
                  {/* Recessed slot square */}
                  <div className="w-14 h-14 bg-[#8b8b8b] border-[3px] border-t-[#3f3f3f] border-l-[#3f3f3f] border-b-[#dfdfdf] border-r-[#dfdfdf] flex items-center justify-center">
                    {ach.iconSvg}
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-bold text-white font-vt323 uppercase"
                      style={{ textShadow: "1px 1px 0px #000" }}
                    >
                      {ach.title}
                    </h3>
                    <span className="text-xs font-vt323 uppercase text-neutral-400 tracking-wider">
                      {ach.institution}
                    </span>
                  </div>
                </div>

                <p 
                  className="text-sm text-neutral-300 font-vt323 leading-relaxed uppercase"
                  style={{ textShadow: "1px 1px 0px #000" }}
                >
                  {ach.desc}
                </p>
              </div>

              <div 
                className="mt-6 flex items-center gap-1.5 text-xs text-[#ffff55] font-vt323 uppercase"
                style={{ textShadow: "1px 1px 0px #000" }}
              >
                {/* Pixel star */}
                <div className="w-2.5 h-2.5 bg-[#ffff55]" />
                <span>CERTIFIED UNLOCKED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
