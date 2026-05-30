"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for smooth cursor tracking
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const glowX = useSpring(cursorX, springConfig);
  const glowY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 120); // half of width (240px)
      cursorY.set(e.clientY - 120); // half of height (240px)
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-60 h-60 rounded-full bg-cyan-500/8 blur-[100px] pointer-events-none z-30 hidden md:block"
      style={{
        x: glowX,
        y: glowY,
      }}
    />
  );
}
