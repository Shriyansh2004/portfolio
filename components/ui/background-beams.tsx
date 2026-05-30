"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Create random beam animations
    const createBeam = () => {
      const beam = document.createElement("div");
      beam.className = "absolute bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent pointer-events-none";
      
      const isVertical = Math.random() > 0.5;
      const size = Math.random() * 2 + 1; // 1px to 3px wide
      const length = Math.random() * 200 + 150; // length of beam
      
      if (isVertical) {
        beam.style.width = `${size}px`;
        beam.style.height = `${length}px`;
        beam.style.left = `${Math.random() * 100}%`;
        beam.style.top = `-${length}px`;
        
        const duration = Math.random() * 8 + 4;
        beam.animate(
          [
            { transform: `translateY(0px)`, opacity: 0 },
            { opacity: 0.8, offset: 0.2 },
            { opacity: 0.8, offset: 0.8 },
            { transform: `translateY(${container.clientHeight + length}px)`, opacity: 0 }
          ],
          {
            duration: duration * 1000,
            easing: "linear",
            iterations: 1
          }
        );
      } else {
        beam.style.height = `${size}px`;
        beam.style.width = `${length}px`;
        beam.style.top = `${Math.random() * 100}%`;
        beam.style.left = `-${length}px`;
        
        const duration = Math.random() * 8 + 4;
        beam.animate(
          [
            { transform: `translateX(0px)`, opacity: 0 },
            { opacity: 0.8, offset: 0.2 },
            { opacity: 0.8, offset: 0.8 },
            { transform: `translateX(${container.clientWidth + length}px)`, opacity: 0 }
          ],
          {
            duration: duration * 1000,
            easing: "linear",
            iterations: 1
          }
        );
      }
      
      container.appendChild(beam);
      
      setTimeout(() => {
        beam.remove();
      }, 12000);
    };

    const interval = setInterval(createBeam, 1500);
    
    // Initial beams
    for(let i = 0; i < 5; i++) {
      createBeam();
    }

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden opacity-30 pointer-events-none",
        className
      )}
    />
  );
});

BackgroundBeams.displayName = "BackgroundBeams";
