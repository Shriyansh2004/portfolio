"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playClick } from "@/lib/audio";

interface HotbarItem {
  name: string;
  link: string;
  iconSvg: React.ReactNode;
}

export default function InventoryNav() {
  const [activeIdx, setActiveIdx] = useState(0);

  const hotbarItems: HotbarItem[] = [
    {
      name: "Home",
      link: "#home",
      iconSvg: (
        // Grass Block
        <svg viewBox="0 0 16 16" className="w-8 h-8 [image-rendering:pixelated]">
          <path d="M0 0h16v8H0z" fill="#5c8e32" />
          <path d="M0 8h16v8H0z" fill="#866043" />
          <path d="M0 8h2v2H0zm3-1h3v2H3zm5 0h4v2H8zm6 1h2v2h-2z" fill="#5c8e32" />
        </svg>
      )
    },
    {
      name: "About",
      link: "#about",
      iconSvg: (
        // Book
        <svg viewBox="0 0 16 16" className="w-8 h-8 [image-rendering:pixelated]">
          <path d="M2 1h11v12H2z" fill="#a05a2c" />
          <path d="M3 2h9v10H3z" fill="#f4eed7" />
          <path d="M4 4h7v1H4zm0 2h7v1H4zm0 2h5v1H4z" fill="#7d6a52" />
          <path d="M12 2h1v11h-1z" fill="#c07e4d" />
        </svg>
      )
    },
    {
      name: "Skills",
      link: "#skills",
      iconSvg: (
        // Crafting Table / Iron Sword
        <svg viewBox="0 0 16 16" className="w-8 h-8 [image-rendering:pixelated]">
          <path d="M14 0l2 2-9 9-2 2-3 3-2-2 3-3 2-2 9-9z" fill="#8d99ae" />
          <path d="M5 9l2 2-6 5-1-1 5-6z" fill="#4a5759" />
          <path d="M0 16l1-1 1-1h1v1h-1v1H0z" fill="#866043" />
          <path d="M1 15h1v1H1zm2-2h1v1H3z" fill="#b07d62" />
          <path d="M15 1l-2 2 1 1 2-2-1-1z" fill="#d8f3dc" />
        </svg>
      )
    },
    {
      name: "Exp",
      link: "#experience",
      iconSvg: (
        // Experience Bottle
        <svg viewBox="0 0 16 16" className="w-8 h-8 [image-rendering:pixelated]">
          <path d="M6 1h4v3H6z" fill="#a8dadc" />
          <path d="M5 4h6v2H5zm-2 2h10v8H3zm1 8h8v1H4z" fill="#457b9d" />
          <path d="M4 7h8v5H4z" fill="#1d3557" />
          <path d="M6 8h4v3H6z" fill="#a7c957" />
          <path d="M8 9h1v1H8z" fill="#f4f1de" />
        </svg>
      )
    },
    {
      name: "Projects",
      link: "#projects",
      iconSvg: (
        // Chest
        <svg viewBox="0 0 16 16" className="w-8 h-8 [image-rendering:pixelated]">
          <path d="M1 2h14v12H1z" fill="#a05a2c" />
          <path d="M1 5h14v1H1zm7-2h1v3H8z" fill="#d4af37" />
          <path d="M2 3h12v2H2zm0 4h12v6H2z" fill="#763c11" />
        </svg>
      )
    },
    {
      name: "Contact",
      link: "#contact",
      iconSvg: (
        // Ender Pearl
        <svg viewBox="0 0 16 16" className="w-8 h-8 [image-rendering:pixelated]">
          <circle cx="8" cy="8" r="6" fill="#0f4c5c" />
          <circle cx="8" cy="8" r="4" fill="#3a86c8" />
          <circle cx="7" cy="7" r="2" fill="#e0fbfc" />
          <circle cx="9" cy="9" r="1" fill="#3a86c8" />
        </svg>
      )
    }
  ];

  // Additional 3 easter-egg items to fill up a standard Minecraft 9-slot Hotbar!
  const easterEggs = [
    {
      name: "Diamond",
      iconSvg: (
        <svg viewBox="0 0 16 16" className="w-8 h-8 [image-rendering:pixelated] opacity-40 hover:opacity-100 transition-opacity">
          <path d="M8 1l5 4-5 10-5-10 5-4z" fill="#33e3e3" />
          <path d="M8 3l3 3-3 7-3-7 3-3z" fill="#d8f3f3" />
        </svg>
      )
    },
    {
      name: "Cake",
      iconSvg: (
        <svg viewBox="0 0 16 16" className="w-8 h-8 [image-rendering:pixelated] opacity-40 hover:opacity-100 transition-opacity">
          <path d="M1 6h14v8H1z" fill="#8d6e63" />
          <path d="M1 5h14v2H1z" fill="#eeeeee" />
          <path d="M3 3h2v2H3zm4 0h2v2H7zm4 0h2v2h-2z" fill="#e53935" />
          <path d="M2 10h12v2H2z" fill="#d7ccc8" />
        </svg>
      )
    },
    {
      name: "Redstone",
      iconSvg: (
        <svg viewBox="0 0 16 16" className="w-8 h-8 [image-rendering:pixelated] opacity-40 hover:opacity-100 transition-opacity">
          <path d="M6 6h4v4H6z" fill="#ff2200" />
          <path d="M4 5h8v6H4zm3 7h2v1H7zm0-9h2v1H7z" fill="#b30000" />
          <path d="M8 7h1v1H8z" fill="#ffcccc" />
        </svg>
      )
    }
  ];

  const handleSelect = (idx: number, link: string) => {
    playClick();
    setActiveIdx(idx);
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
      
      // Determine active hotbar slot index based on scroll threshold mapping
      let idx = 0;
      if (scrollPercent <= 0.15) idx = 0;
      else if (scrollPercent <= 0.35) idx = 1;
      else if (scrollPercent <= 0.55) idx = 2;
      else if (scrollPercent <= 0.70) idx = 3;
      else if (scrollPercent <= 0.85) idx = 4;
      else idx = 5;
      
      setActiveIdx(idx);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 inset-x-0 mx-auto w-fit z-[5000] flex flex-col items-center">
      {/* Tooltip display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mb-2 px-3 py-1 bg-black/85 border border-[#8f8f8f] text-[#ffff55] text-xs font-vt323 tracking-wide rounded-sm shadow-md uppercase"
        >
          {activeIdx < hotbarItems.length ? hotbarItems[activeIdx].name : "Easter Egg!"}
        </motion.div>
      </AnimatePresence>

      {/* Main hotbar frame */}
      <div 
        className="flex p-[3px] bg-[#8f8f8f] border-[3px] border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#3f3f3f] border-r-[#3f3f3f] shadow-2xl relative"
        style={{ imageRendering: "pixelated" }}
      >
        {hotbarItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleSelect(idx, item.link)}
            onMouseEnter={() => playClick()}
            className="w-12 h-12 md:w-14 md:h-14 m-[1px] bg-[#8b8b8b] border-[3px] border-b-[#dfdfdf] border-r-[#dfdfdf] border-t-[#3f3f3f] border-l-[#3f3f3f] flex items-center justify-center relative cursor-pointer group hover:bg-[#9c9c9c] transition-colors"
          >
            {/* Slot active outline */}
            {activeIdx === idx && (
              <div className="absolute inset-[-4px] border-[4px] border-[#ffffff] shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] z-20 pointer-events-none" />
            )}

            {/* Hover Item scaling animation */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="z-10 relative flex items-center justify-center"
            >
              {item.iconSvg}
            </motion.div>
          </div>
        ))}

        {/* Easter Egg slots to complete Minecraft 9-slot GUI look */}
        {easterEggs.map((egg, idx) => {
          const absoluteIdx = hotbarItems.length + idx;
          return (
            <div
              key={idx}
              onClick={() => {
                playClick();
                setActiveIdx(absoluteIdx);
              }}
              onMouseEnter={() => playClick()}
              className="w-12 h-12 md:w-14 md:h-14 m-[1px] bg-[#8b8b8b] border-[3px] border-b-[#dfdfdf] border-r-[#dfdfdf] border-t-[#3f3f3f] border-l-[#3f3f3f] flex items-center justify-center relative cursor-pointer hover:bg-[#9c9c9c] transition-colors"
            >
              {activeIdx === absoluteIdx && (
                <div className="absolute inset-[-4px] border-[4px] border-[#ffffff] shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] z-20 pointer-events-none" />
              )}
              <motion.div
                whileHover={{ scale: 1.15, rotate: -5 }}
                className="z-10"
              >
                {egg.iconSvg}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
