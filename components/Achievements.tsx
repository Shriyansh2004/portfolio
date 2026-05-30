"use client";
import React from "react";
import { GraduationCap, Briefcase, Cpu, Zap, LayoutDashboard, Award } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: <GraduationCap className="text-cyan-400 w-7 h-7" />,
    title: "B.Tech Graduate in Electrical Engineering",
    institution: "Government College of Engineering Kalahandi, Bhawanipatna",
    desc: "Acquired core engineering discipline covering electrical networks, control theory, machine layouts, and electronic controllers."
  },
  {
    icon: <Briefcase className="text-blue-400 w-7 h-7" />,
    title: "Software Development SDE Intern",
    institution: "HireKarma",
    desc: "Assumed software delivery responsibilities, creating new full-stack features, reviewing code, and tuning responsive rendering speed."
  },
  {
    icon: <Cpu className="text-purple-400 w-7 h-7" />,
    title: "Built Industrial Automation Projects",
    institution: "Control Rooms & Labs",
    desc: "Architected PLC network logic and physical device hookups via Modbus, handling load balancing automation systems."
  },
  {
    icon: <Zap className="text-amber-400 w-7 h-7" />,
    title: "EV Charging Infrastructure Dev",
    institution: "Self-driven & Research",
    desc: "Designed OCPP messaging systems for remote EV charge stations, creating full-stack charging networks."
  },
  {
    icon: <LayoutDashboard className="text-emerald-400 w-7 h-7" />,
    title: "SCADA & PLC Development Expert",
    institution: "Industrial Systems",
    desc: "Configured multi-screen HMI and industrial SCADA diagrams in WinCC, setting up telemetry pipelines and critical threshold alarms."
  }
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full py-24 px-4 md:px-8 bg-black overflow-hidden border-t border-neutral-900 bg-dot-white"
    >
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none" />

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
            Key Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-neutral-400 max-w-xl text-center"
          >
            Milestones spanning my electrical engineering foundation and software engineering transition.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
          />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-950/40 p-6 backdrop-blur-md hover:border-cyan-500/30 hover:bg-neutral-900/10 transition-all duration-300"
            >
              <div>
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-neutral-900 border border-neutral-800 group-hover:border-cyan-500/20 group-hover:scale-105 transition-all duration-300">
                  {ach.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {ach.title}
                </h3>
                <p className="text-neutral-400 text-xs mb-3 font-semibold uppercase tracking-wider">
                  {ach.institution}
                </p>
                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                  {ach.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-neutral-500 font-semibold group-hover:text-cyan-500 transition-colors">
                <span className="flex items-center gap-1.5">
                  <Award size={14} /> Certified Milestone
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
