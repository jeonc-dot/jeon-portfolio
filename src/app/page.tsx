"use client";
import React, { useState } from 'react';
import { ArrowUpRight, Mail, Database, Terminal, Cloud, Activity, Shield, Cpu, X } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Aetherra",
      role: "Hardware Founder & IoT Engineer",
      desc: "Built an end-to-end IoT hardware and software prototype to monitor environmental data in real-time. Engineered secure backend workflows for data ingestion to support algorithmic carbon credit calculations.",
      tags: ["Python", "IoT", "Next.js", "Hardware Integration"],
      icon: <Cloud className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/20 to-emerald-500/5"
    },
    {
      title: "EazyBillz",
      role: "Full-Stack Engineer",
      desc: "Engineered a background data-sync agent using Node.js to extract daily financial transaction data from legacy FoxPro (.DBF) databases and push it to a live, mobile-responsive Next.js analytics dashboard.",
      tags: ["Node.js", "Next.js", "Legacy Systems"],
      icon: <Terminal className="w-6 h-6 text-cyan-400" />,
      color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
      title: "SteelX ERP",
      role: "Software Architect",
      desc: "Designed and built a comprehensive inventory and supply-chain management software architecture specifically tailored for local steel manufacturing businesses, bridging offline workflows to the cloud.",
      tags: ["React", "Node.js", "PostgreSQL"],
      icon: <Database className="w-6 h-6 text-violet-400" />,
      color: "from-violet-500/20 to-violet-500/5"
    },
    {
      title: "MedFleet",
      role: "Full-Stack Developer",
      desc: "Developed an emergency logistics platform featuring real-time GPS tracking utilizing Leaflet.js, and a custom Python ThreadingHTTPServer backend natively integrated with SQLite.",
      tags: ["Python", "JavaScript", "SQLite"],
      icon: <Activity className="w-6 h-6 text-rose-400" />,
      color: "from-rose-500/20 to-rose-500/5"
    },
    {
      title: "Cipher Studio",
      role: "Security Architect",
      desc: "An experimental multi-agent coding environment. It runs a 'council' of AI agents that debate code logic before execution to ensure mathematical security and prevent vulnerabilities.",
      tags: ["FastAPI", "Agentic AI", "React"],
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      color: "from-amber-500/20 to-amber-500/5"
    },
    {
      title: "Sentinel OS",
      role: "Backend Architect",
      desc: "Engineered a secure, real-time situational awareness portal for enterprise field operations. Implemented live geospatial tracking via WebSockets and encrypted data streams.",
      tags: ["Next.js", "WebSockets", "MongoDB"],
      icon: <Shield className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500/20 to-indigo-500/5"
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 font-sans selection:bg-white selection:text-black relative">
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-40 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white font-bold tracking-tight text-xl">Jeon Prince.</div>
          <div className="flex space-x-6 text-sm font-medium">
            <a href="https://github.com/jeonc-dot" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <GithubIcon /> GitHub
            </a>
            <a href="mailto:jeonc180@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        
        {/* Hero */}
        <section className="mb-24 text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="w-20 h-20 mx-auto bg-zinc-800 rounded-full mb-6 flex items-center justify-center border border-white/10 shadow-xl">
             <span className="text-2xl text-white font-bold tracking-tighter">JP</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            I engineer complex <br className="hidden sm:block"/> software & AI systems.
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed mb-8">
            Full-Stack Engineer & Architect based in Bengaluru. I specialize in bridging legacy systems to the cloud, building scalable SaaS platforms, and integrating physical IoT hardware.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:jeonc180@gmail.com" className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <div className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for hire
            </div>
          </div>
        </section>

        {/* Interactive Grid */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-2 text-center tracking-tight">Selected Work</h2>
          <p className="text-center text-zinc-500 mb-12 text-sm">Click on any project to view technical architecture.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedProject(proj)}
                className={`cursor-pointer group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg`}
              >
                {/* Subtle colorful hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-white/5 group-hover:scale-110 transition-transform">
                    {proj.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-sm text-zinc-400 mb-6 flex-grow line-clamp-3">{proj.desc}</p>
                  <div className="flex items-center text-xs font-semibold text-zinc-500 group-hover:text-white transition-colors">
                    Click to view <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-sm border-t border-white/5 text-zinc-600 flex flex-col items-center justify-center gap-2">
        <a href="mailto:jeonc180@gmail.com" className="text-zinc-400 hover:text-white transition-colors font-medium">jeonc180@gmail.com</a>
        <p>© {new Date().getFullYear()} Jeon Prince. Engineered in India.</p>
      </footer>

      {/* Interactive Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-zinc-900 border border-white/10 rounded-3xl w-full max-w-lg p-8 relative shadow-2xl transform transition-all scale-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 border border-white/5 shadow-inner">
              {selectedProject.icon}
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
            <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-6">
              {selectedProject.role}
            </div>
            
            <p className="text-base text-zinc-300 leading-relaxed mb-8">
              {selectedProject.desc}
            </p>
            
            <div className="mb-3 text-sm font-bold text-white uppercase tracking-wider">Architecture Stack</div>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag: string, i: number) => (
                <span key={i} className="px-3 py-1.5 bg-black/50 rounded-lg text-xs font-medium text-zinc-300 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
