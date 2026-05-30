"use client";
import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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

    setStatus("sending");
    // Mock submit timeout
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success status after 4 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-4 md:px-8 bg-black overflow-hidden border-t border-neutral-900 bg-dot-white"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

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
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-neutral-400 max-w-xl text-center"
          >
            Have a question or want to work together? Drop me a message below.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-display">
                Let's discuss something <span className="text-cyan-400">significant</span>.
              </h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                Whether you are a recruiter looking for a software developer with deep automation and hardware engineering instincts, or a tech lead seeking full-stack execution, I am ready to collaborate.
              </p>
            </div>

            <div className="space-y-4 py-6 border-y border-neutral-900">
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 text-cyan-400 group-hover:border-cyan-500/30 group-hover:scale-105 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Email</h4>
                  <a href="mailto:anubhab.sahoo@example.com" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    anubhab.sahoo@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 text-blue-400 group-hover:border-blue-500/30 group-hover:scale-105 transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Location</h4>
                  <span className="text-sm font-semibold text-white">
                    Bhubaneswar, Odisha, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 hover:scale-105 transition-all duration-300"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-cyan-400 hover:border-cyan-800/30 hover:scale-105 transition-all duration-300"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl border border-neutral-800 bg-neutral-950/40 p-8 backdrop-blur-md overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-850 bg-neutral-900/60 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-850 bg-neutral-900/60 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or role details..."
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-850 bg-neutral-900/60 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:bg-neutral-850 disabled:text-neutral-500 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                >
                  {status === "idle" && (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                  {status === "sending" && "Sending message..."}
                  {status === "success" && (
                    <>
                      Message Sent! <CheckCircle2 size={16} className="text-black" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
