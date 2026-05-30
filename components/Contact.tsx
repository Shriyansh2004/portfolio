"use client";
import React, { useState } from "react";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { playClick, playPortalTravel } from "@/lib/audio";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger full Nether portalFM swirling sweep!
    playPortalTravel();
    setStatus("sending");
    
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-4 md:px-8 bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Wooden Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => playClick()}
            className="px-8 py-4 bg-[#7a5c3a] border-[4px] border-t-[#a87c54] border-l-[#a87c54] border-b-[#473521] border-r-[#473521] shadow-2xl [image-rendering:pixelated]"
          >
            <h2 
              className="text-2xl md:text-4xl font-extrabold font-vt323 text-[#ffff55] uppercase"
              style={{ textShadow: "2px 2px 0px #3c2d1b" }}
            >
              [ CHAT TERMINAL: NETHER PORTAL ]
            </h2>
          </motion.div>
          <div className="w-4 h-12 bg-[#5c3a21] border-x-[4px] border-[#3a2515] -mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Narrative Info Box */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 bg-[#3c2d1b]/95 border-[6px] border-t-[#5c4428] border-l-[#5c4428] border-b-[#1c140c] border-r-[#1c140c] shadow-2xl relative [image-rendering:pixelated] text-white font-vt323 uppercase"
          >
            <div className="space-y-6">
              <h3 
                className="text-2xl font-bold text-[#ffff55]"
                style={{ textShadow: "2px 2px 0px #000" }}
              >
                Let's discuss something big.
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Whether you are a recruiter looking for a full stack developer, or a tech lead seeking robust Spring Boot APIs, I am ready to deploy.
              </p>
            </div>

            <div className="space-y-4 py-6 border-y border-[#1c140c] my-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#8b8b8b] border-[3px] border-t-[#3f3f3f] border-l-[#3f3f3f] border-b-[#dfdfdf] border-r-[#dfdfdf] flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs text-neutral-400">Email Address:</h4>
                  <a 
                    href="mailto:anubhab.sahoo@example.com" 
                    onClick={() => playClick()}
                    className="text-lg text-[#33e3e3] hover:text-white transition-colors"
                  >
                    anubhab.sahoo@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#8b8b8b] border-[3px] border-t-[#3f3f3f] border-l-[#3f3f3f] border-b-[#dfdfdf] border-r-[#dfdfdf] flex items-center justify-center text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs text-neutral-400">Spawn Coordinates:</h4>
                  <span className="text-lg text-white">
                    Bhubaneswar, Odisha, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Inventory Frames */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                onClick={() => playClick()}
                onMouseEnter={() => playClick()}
                className="w-12 h-12 bg-[#8b8b8b] border-[3px] border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#3f3f3f] border-r-[#3f3f3f] flex items-center justify-center text-white hover:bg-[#9c9c9c] transition-colors relative"
              >
                <GithubIcon className="w-6 h-6 filter drop-shadow-[1px_1px_0px_#000]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                onClick={() => playClick()}
                onMouseEnter={() => playClick()}
                className="w-12 h-12 bg-[#8b8b8b] border-[3px] border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#3f3f3f] border-r-[#3f3f3f] flex items-center justify-center text-white hover:bg-[#9c9c9c] transition-colors relative"
              >
                <LinkedinIcon className="w-6 h-6 filter drop-shadow-[1px_1px_0px_#000]" />
              </a>
            </div>
          </motion.div>

          {/* Portal Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between p-6 bg-[#2a2a2a]/95 border-[6px] border-t-[#555] border-l-[#555] border-b-[#111] border-r-[#111] shadow-2xl relative [image-rendering:pixelated]"
          >
            {/* Voxel corner indicators */}
            <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-[#555]" />
            <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#555]" />
            <div className="absolute bottom-1 left-1 w-2.5 h-2.5 bg-[#111]" />
            <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-[#111]" />

            <form onSubmit={handleSubmit} className="space-y-6 font-vt323 uppercase text-lg">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">
                  [ Sender Name ]
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onFocus={() => playClick()}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="INPUT NAME..."
                  className="w-full bg-[#111111] border-[3px] border-t-[#333] border-l-[#333] border-b-[#555] border-r-[#555] p-3 text-white placeholder-neutral-600 outline-none focus:border-[#ffff55]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                  [ Sender Coordinate Email ]
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onFocus={() => playClick()}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="INPUT EMAIL..."
                  className="w-full bg-[#111111] border-[3px] border-t-[#333] border-l-[#333] border-b-[#555] border-r-[#555] p-3 text-white placeholder-neutral-600 outline-none focus:border-[#ffff55]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-neutral-400 mb-2">
                  [ Scroll Content Message ]
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onFocus={() => playClick()}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="WRITE TRANSMISSION CONTENT..."
                  className="w-full bg-[#111111] border-[3px] border-t-[#333] border-l-[#333] border-b-[#555] border-r-[#555] p-3 text-white placeholder-neutral-600 outline-none focus:border-[#ffff55] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                onMouseEnter={() => playClick()}
                className="w-full py-4 bg-[#5c8e32] border-[4px] border-t-[#a7c957] border-l-[#a7c957] border-b-[#38661b] border-r-[#38661b] text-white font-vt323 text-xl uppercase shadow-[3px_3px_0px_#000] hover:bg-[#6ba03c] active:translate-y-[2px] active:shadow-none cursor-pointer transition-all duration-100 flex items-center justify-center gap-2 disabled:bg-[#333] disabled:border-[#111] disabled:text-neutral-500 disabled:shadow-none"
              >
                {status === "idle" && "ACTIVATE NETHER PORTAL TRANSMISSION"}
                {status === "sending" && "SWIRLING DIMENSIONAL TELEMETRY..."}
                {status === "success" && (
                  <span className="flex items-center gap-2 text-[#55ff55]">
                    TRANSMISSION COMPLETE! <CheckCircle2 size={18} />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
