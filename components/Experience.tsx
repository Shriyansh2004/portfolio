"use client";
import React from "react";
import { Timeline } from "./ui/timeline";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const timelineData = [
    {
      title: "HireKarma (Jan 2026 - Present)",
      content: (
        <div className="w-full rounded-3xl border border-neutral-800 bg-neutral-950/40 p-6 md:p-8 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm mb-1 uppercase tracking-wider">
                <Briefcase size={14} /> Internship
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white">
                Software Development Engineering Intern
              </h4>
              <p className="text-neutral-400 text-sm mt-1">HireKarma</p>
            </div>
            <div className="flex items-center gap-2 text-neutral-400 text-xs md:text-sm bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full max-w-fit">
              <Calendar size={14} /> Jan 2026 - Present
            </div>
          </div>

          <ul className="space-y-3.5 mb-6 text-sm md:text-base text-neutral-300">
            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
              <span>Developed responsive web application features using modern frontend libraries and CSS frameworks.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
              <span>Collaborated with cross-functional development teams to design and implement RESTful APIs on server-side environments.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
              <span>Participated in standard git workflows, team code reviews, and Agile standups to maintain code readability.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
              <span>Optimized frontend performance metrics resulting in faster page loading times and improved SEO indexes.</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-900">
            {["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "REST APIs", "Git"].map((tech, i) => (
              <span key={i} className="px-2.5 py-1 text-xs rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Automation Projects (2025)",
      content: (
        <div className="w-full rounded-3xl border border-neutral-800 bg-neutral-950/40 p-6 md:p-8 backdrop-blur-md relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-medium text-sm mb-1 uppercase tracking-wider">
                <Briefcase size={14} /> Engineering Lead
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white">
                Automation & SCADA Developer
              </h4>
              <p className="text-neutral-400 text-sm mt-1">Industrial Automation Projects</p>
            </div>
            <div className="flex items-center gap-2 text-neutral-400 text-xs md:text-sm bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full max-w-fit">
              <Calendar size={14} /> Jan 2025 - Dec 2025
            </div>
          </div>

          <ul className="space-y-3.5 mb-6 text-sm md:text-base text-neutral-300">
            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-blue-500 mt-1 flex-shrink-0" />
              <span>Designed and implemented PLC ladder logic systems utilizing Siemens STEP 7 program layouts.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-blue-500 mt-1 flex-shrink-0" />
              <span>Built industrial-grade SCADA monitoring dashboards using Siemens WinCC for active substation monitoring.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-blue-500 mt-1 flex-shrink-0" />
              <span>Developed automation rules and alarms for substation loads, mitigating grid failure thresholds and surges.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-blue-500 mt-1 flex-shrink-0" />
              <span>Configured telemetry networks using Modbus TCP and serial interfaces to connect physical energy meters to centralized servers.</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-900">
            {["Siemens PLC", "STEP 7", "WinCC SCADA", "Modbus TCP", "Power Monitoring", "Ladder Logic"].map((tech, i) => (
              <span key={i} className="px-2.5 py-1 text-xs rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="relative w-full py-16 bg-black overflow-hidden border-t border-neutral-900">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-900/5 rounded-full blur-[150px] pointer-events-none" />
      <Timeline data={timelineData} />
    </section>
  );
}
