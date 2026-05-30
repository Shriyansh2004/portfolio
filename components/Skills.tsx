"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { 
  Code2, Globe, Cpu, Database, Wrench, Zap, 
  Terminal, MonitorDot, Server, Settings
} from "lucide-react";
import { motion } from "framer-motion";

// Skills structured into sections for the Bento Grid
const skillCategories = [
  {
    title: "Programming Languages",
    description: "Multi-paradigm languages used for system-level logic, scripts, and web servers.",
    icon: <Terminal className="text-cyan-400 w-5 h-5" />,
    className: "md:col-span-2",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    header: (
      <div className="flex flex-wrap gap-2 mb-4 p-4 rounded-2xl bg-neutral-950/60 border border-neutral-900 min-h-[100px] items-center">
        {["Java", "Python", "JavaScript", "TypeScript", "SQL"].map((s, i) => (
          <span key={i} className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:border-cyan-500/30 hover:text-white transition-all duration-300">
            {s}
          </span>
        ))}
      </div>
    )
  },
  {
    title: "Industrial Automation",
    description: "Core technologies for PLC ladder programming and industrial process control.",
    icon: <Cpu className="text-blue-400 w-5 h-5" />,
    className: "md:col-span-1",
    skills: ["Siemens PLC", "STEP 7", "WinCC SCADA", "Modbus", "PLC Ladder Logic"],
    header: (
      <div className="flex flex-wrap gap-2 mb-4 p-4 rounded-2xl bg-neutral-950/60 border border-neutral-900 min-h-[100px] items-center">
        {["Siemens PLC", "STEP 7", "WinCC SCADA", "Ladder Logic"].map((s, i) => (
          <span key={i} className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:border-blue-500/30 hover:text-white transition-all duration-300">
            {s}
          </span>
        ))}
      </div>
    )
  },
  {
    title: "Frontend Web Stack",
    description: "Responsive layouts, styling compilers, and reactive user interfaces.",
    icon: <Globe className="text-purple-400 w-5 h-5" />,
    className: "md:col-span-1",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    header: (
      <div className="flex flex-wrap gap-2 mb-4 p-4 rounded-2xl bg-neutral-950/60 border border-neutral-900 min-h-[100px] items-center">
        {["React", "Next.js", "Tailwind CSS", "HTML/CSS"].map((s, i) => (
          <span key={i} className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:border-purple-500/30 hover:text-white transition-all duration-300">
            {s}
          </span>
        ))}
      </div>
    )
  },
  {
    title: "Backend & Databases",
    description: "Server architecture, RESTful API design, and document/relational databases.",
    icon: <Database className="text-emerald-400 w-5 h-5" />,
    className: "md:col-span-2",
    skills: ["Node.js", "Express.js", "REST APIs", "MySQL", "MongoDB"],
    header: (
      <div className="flex flex-wrap gap-2 mb-4 p-4 rounded-2xl bg-neutral-950/60 border border-neutral-900 min-h-[100px] items-center">
        {["Node.js", "Express.js", "REST APIs", "MySQL", "MongoDB"].map((s, i) => (
          <span key={i} className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:border-emerald-500/30 hover:text-white transition-all duration-300">
            {s}
          </span>
        ))}
      </div>
    )
  },
  {
    title: "Industrial EV Charging & Energy",
    description: "Protocols for charging station communications and electrical power load management.",
    icon: <Zap className="text-amber-400 w-5 h-5" />,
    className: "md:col-span-1",
    skills: ["OCPP Protocol", "EV Charging Systems", "Power Monitoring", "Modbus TCP"],
    header: (
      <div className="flex flex-wrap gap-2 mb-4 p-4 rounded-2xl bg-neutral-950/60 border border-neutral-900 min-h-[100px] items-center">
        {["OCPP", "EV Charging", "Power Monitoring"].map((s, i) => (
          <span key={i} className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:border-amber-500/30 hover:text-white transition-all duration-300">
            {s}
          </span>
        ))}
      </div>
    )
  },
  {
    title: "Tools & DevOps Infrastructure",
    description: "Version control systems, build utilities, and virtualized container environments.",
    icon: <Wrench className="text-rose-400 w-5 h-5" />,
    className: "md:col-span-2",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "IntelliJ IDEA"],
    header: (
      <div className="flex flex-wrap gap-2 mb-4 p-4 rounded-2xl bg-neutral-950/60 border border-neutral-900 min-h-[100px] items-center">
        {["Git", "GitHub", "Docker", "Postman", "VS Code", "IntelliJ"].map((s, i) => (
          <span key={i} className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:border-rose-500/30 hover:text-white transition-all duration-300">
            {s}
          </span>
        ))}
      </div>
    )
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-24 px-4 md:px-8 bg-black overflow-hidden"
    >
      {/* Background visual styling */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[150px] pointer-events-none" />

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
            Technical Competence
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
          />
        </div>

        <BentoGrid>
          {skillCategories.map((item, idx) => (
            <BentoGridItem
              key={idx}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
