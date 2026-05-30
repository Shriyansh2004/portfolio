"use client";
import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { Cpu, Eye, Globe, Zap, ShoppingCart, Activity, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Industrial Power Monitoring & Load Management",
    category: "Industrial Automation",
    description: "An industrial automation system engineered to aggregate electrical parameters (voltage, current, power factor) and programmatically control load distribution. Utilizes PLC ladder logic to run automated load-shedding algorithms.",
    tech: ["Siemens PLC", "WinCC SCADA", "STEP 7", "Modbus RTU"],
    icon: <Activity className="text-cyan-400 w-8 h-8" />,
    color: "rgba(6, 182, 212, 0.15)", // cyan
  },
  {
    title: "33/11kV Substation SCADA Monitoring",
    category: "Power Systems",
    description: "A real-time substation control room application. Provides interactive, single-line diagrams of breaker relays, transformer oil temperature, and busbar telemetry with automatic visual alarms for trip events.",
    tech: ["Siemens PLC", "WinCC SCADA", "Substation Automation"],
    icon: <Cpu className="text-blue-400 w-8 h-8" />,
    color: "rgba(59, 130, 246, 0.15)", // blue
  },
  {
    title: "EV Charging Infrastructure Management",
    category: "Smart Energy",
    description: "A scalable management central system backend. Implements the Open Charge Point Protocol (OCPP) via WebSocket channels to establish bi-directional communication with EV chargers, managing transactions and heartbeat rates.",
    tech: ["OCPP 1.6J/2.0.1", "Node.js", "WebSockets", "MongoDB"],
    icon: <Zap className="text-amber-400 w-8 h-8" />,
    color: "rgba(245, 158, 11, 0.15)", // amber
  },
  {
    title: "Responsive Grocery Web Application",
    category: "Full Stack Web",
    description: "A consumer grocery marketplace platform. Features a clean, glassmorphic UI, responsive drawer sidebars, product searching/filtering, cart management, and seamless micro-animations on interaction.",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Framer Motion"],
    icon: <ShoppingCart className="text-purple-400 w-8 h-8" />,
    color: "rgba(168, 85, 247, 0.15)", // purple
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-24 px-4 md:px-8 bg-black overflow-hidden border-t border-neutral-900"
    >
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-900/5 blur-[120px] pointer-events-none" />
      
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
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-neutral-400 max-w-xl text-center"
          >
            A curated showcase of engineering automation systems and full-stack software applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <CardSpotlight
                radius={240}
                color={proj.color}
                className="h-full border-neutral-800 bg-neutral-950/40 hover:border-neutral-700/60"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800">
                    {proj.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/30 px-3 py-1.5 border border-cyan-800/20 rounded-full">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-display">
                  {proj.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-neutral-900">
                  <span className="text-xs font-bold text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
                    <ExternalLink size={14} /> View Details
                  </span>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
