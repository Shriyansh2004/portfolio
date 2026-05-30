"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Code, Database, Eye, ShieldAlert } from "lucide-react";

const pillars = [
  {
    icon: <Code className="text-cyan-400 w-8 h-8" />,
    title: "Full-Stack Development",
    desc: "Building interactive, responsive web applications using React, Next.js, and Node.js with scalable backend API designs."
  },
  {
    icon: <Cpu className="text-blue-400 w-8 h-8" />,
    title: "PLC & Automation",
    desc: "Programming logic and hardware controllers using Siemens STEP 7 and Ladder Logic for industrial process flows."
  },
  {
    icon: <Eye className="text-purple-400 w-8 h-8" />,
    title: "SCADA Systems",
    desc: "Designing rich visual control panels and real-time systems using WinCC to manage complex operations."
  },
  {
    icon: <Zap className="text-amber-400 w-8 h-8" />,
    title: "EV Charging Infrastructure",
    desc: "Integrating electric vehicle chargers and protocol communication models such as OCPP (Open Charge Point Protocol)."
  },
  {
    icon: <Database className="text-emerald-400 w-8 h-8" />,
    title: "Power Monitoring",
    desc: "Developing telemetry pipelines to aggregate electrical parameters and loads for data-driven power grids."
  },
  {
    icon: <ShieldAlert className="text-red-400 w-8 h-8" />,
    title: "Control Systems",
    desc: "Bridging electrical grid layouts with computerized telemetry systems to safeguard industrial machinery."
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-4 md:px-8 bg-black overflow-hidden bg-dot-white"
    >
      {/* Decorative gradient blur in background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
          />
        </div>

        {/* Narrative / Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
              Bridging the gap between{" "}
              <span className="text-cyan-400">Electrical Engineering</span> and{" "}
              <span className="text-blue-500">Software Architecture</span>.
            </h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              I am an Electrical Engineering graduate with a strong passion for software development, industrial automation, and emerging technologies. My journey started with studying electrical networks, motors, and power grids, which naturally evolved into software engineering, where I enjoy building scalable web applications, automation systems, and smart energy networks.
            </p>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Through my internships and hands-on projects, I have combined traditional systems programming (PLCs, ladder logic, and SCADA) with modern web stacks (Next.js, Node.js, and databases) to solve complex, real-world control and monitoring issues.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative rounded-3xl border border-neutral-800 bg-neutral-950/40 p-8 backdrop-blur-md overflow-hidden"
          >
            {/* Visual glow element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
            
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">My Technical Pillars</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-800/30 text-cyan-400">
                  <Code size={20} />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Modern Web & Systems Code</h5>
                  <p className="text-xs md:text-sm text-neutral-400">Writing clean TypeScript, React/Next.js interfaces, and backend Node REST services.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-800/30 text-blue-400">
                  <Cpu size={20} />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Industrial Automation</h5>
                  <p className="text-xs md:text-sm text-neutral-400">Programming Siemens PLCs using STEP 7 ladder logic and designing SCADA monitoring platforms via WinCC.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-800/30 text-amber-400">
                  <Zap size={20} />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Smart Grids & EV Integration</h5>
                  <p className="text-xs md:text-sm text-neutral-400">Integrating smart energy meters and EV chargers through real-time communication libraries (OCPP).</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group border border-neutral-800/80 bg-neutral-950/40 rounded-3xl p-6 hover:border-cyan-500/30 hover:bg-neutral-900/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="mb-4 inline-block p-3 rounded-2xl bg-neutral-900/60 border border-neutral-800 group-hover:border-cyan-500/20 group-hover:scale-105 transition-all duration-300">
                {p.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {p.title}
              </h4>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
