"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { 
  Code2, Database, Terminal, GitBranch, Layers, 
  Cpu, Layout, Server, Flame, Compass, RefreshCw
} from "lucide-react";
import { motion } from "framer-motion";

const techItems = [
  {
    name: "Next.js",
    icon: <Layers className="text-white" />,
  },
  {
    name: "React",
    icon: <Layout className="text-cyan-400 animate-[spin_8s_linear_infinite]" />,
  },
  {
    name: "TypeScript",
    icon: <Code2 className="text-blue-400" />,
  },
  {
    name: "JavaScript",
    icon: <Code2 className="text-yellow-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <Flame className="text-cyan-500" />,
  },
  {
    name: "Node.js",
    icon: <Server className="text-emerald-500" />,
  },
  {
    name: "Python",
    icon: <Terminal className="text-blue-500" />,
  },
  {
    name: "Java",
    icon: <Terminal className="text-red-500" />,
  },
  {
    name: "Git",
    icon: <GitBranch className="text-orange-500" />,
  },
  {
    name: "Docker",
    icon: <Layers className="text-blue-500" />,
  },
  {
    name: "MySQL",
    icon: <Database className="text-blue-600" />,
  },
  {
    name: "MongoDB",
    icon: <Database className="text-emerald-600" />,
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="relative w-full py-20 bg-black overflow-hidden border-t border-neutral-900"
    >
      <div className="absolute inset-0 w-full h-full bg-black opacity-40 z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-12 space-y-4 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-extrabold font-display bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent"
          >
            Technologies I Work With
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[2px] w-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
          />
        </div>

        {/* Infinite Moving Cards Slider */}
        <div className="w-full py-4">
          <InfiniteMovingCards items={techItems} direction="left" speed="normal" />
        </div>
      </div>
    </section>
  );
}
