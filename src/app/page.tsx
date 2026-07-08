"use client";
import React, { useState } from 'react';
import { ArrowUpRight, Mail, Database, Terminal, Cloud, Activity, Shield, Cpu, X, CheckCircle2 } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const clientProjects = [
    {
      title: "SteelX ERP",
      category: "Client Project",
      role: "Lead Developer — SteelX Innovation",
      desc: "Cloud-based enterprise resource planning and inventory command center built for a regional steel manufacturing client.",
      tags: ["Next.js 15", "PostgreSQL", "Node.js", "RBAC"],
      icon: <Database className="w-6 h-6 text-violet-400" />,
      color: "from-violet-500/20 to-violet-500/5",
      image: "/projects/steelx-erp.png",
      problem: "Regional manufacturing businesses suffer from fragmented data—tracking raw materials, utility overheads, and customer billing across disconnected offline spreadsheets. This lack of visibility causes inventory stockouts and delayed financial reporting.",
      architecture: "Built with Next.js (App Router) and PostgreSQL, featuring strict role-based access control for factory managers and sales teams. Engineered custom accounting logic that dynamically computes gross revenue, utility overheads, and net profit margins in real time. Integrated automated low-stock alert engines for raw materials and a customer CRM module to manage unpaid billing collections.",
      impact: "Centralized daily factory workflows into a secure cloud dashboard, eliminating stockouts and providing real-time P&L visibility across all manufacturing units."
    },
    {
      title: "EazyBillz",
      category: "Client Project",
      role: "Full-Stack Engineer — Bharat Finance",
      desc: "Background database synchronization agent and cloud analytics dashboard built for a regional finance client to modernize their legacy desktop accounting software.",
      tags: ["Node.js", "Next.js", "FoxPro (.DBF)", "Cloud Sync"],
      icon: <Terminal className="w-6 h-6 text-cyan-400" />,
      color: "from-cyan-500/20 to-cyan-500/5",
      image: "/projects/eazybillz.png",
      problem: "Established regional enterprises often rely on legacy accounting software built on archaic FoxPro (.DBF) databases. Fully replacing these systems risks operational downtime and catastrophic data loss.",
      architecture: "Engineered a custom local background synchronization agent using Node.js that safely reads and extracts daily financial transaction records from legacy FoxPro database files. Transformed and securely transmitted the extracted data to a modern, mobile-responsive Next.js cloud dashboard.",
      impact: "Enabled business owners to access live financial analytics and daily transaction summaries on mobile devices without disrupting existing desktop accounting operations."
    },
    {
      title: "Enterprise BI & Big Data Analytics Engine",
      category: "Client Project",
      role: "Big Data Engineer & BI Developer",
      desc: "High-contrast executive Business Intelligence terminals engineered using Microsoft Power BI and structured Big Data modeling pipelines for C-suite decision-makers.",
      tags: ["Power BI", "Data Analytics", "Big Data", "ESG Telemetry"],
      icon: <Activity className="w-6 h-6 text-amber-400" />,
      color: "from-amber-500/20 to-amber-500/5",
      image: "/projects/bi-engine.png",
      images: ["/projects/bi-engine.png", "/projects/bi-esg.png", "/projects/bi-health.png"],
      problem: "C-suite executives and enterprise decision-makers often struggle with fragmented Excel datasets and disconnected operational metrics, making it difficult to track multi-currency revenue growth ($57.79M+ profit tracking), supply chain carbon compliance (3.71M+ tonnes CO2), and global demographic trends in real time.",
      architecture: "Engineered automated Big Data ingestion and statistical modeling pipelines using Microsoft Power BI and structured Excel modeling. Designed real-time telematics tracking for Supply Chain ESG Carbon compliance, multi-currency financial revenue growth models, and large-scale public health aggregation datasets with interactive filtering and predictive modeling.",
      impact: "Delivered an executive command suite that transforms raw multi-million-dollar transaction logs and telemetry streams into instant, high-contrast visual intelligence for executive decision-making."
    },
  ];

  const founderProjects = [
    {
      title: "Aetherra",
      category: "Founder Project",
      role: "Founder & Lead Engineer",
      desc: "End-to-end IoT hardware and cloud software platform engineered for real-time environmental telemetry and carbon offset auditing.",
      tags: ["Python", "FastAPI", "Next.js", "IoT Telemetry"],
      icon: <Cloud className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/20 to-emerald-500/5",
      image: "/projects/aetherra.png",
      problem: "Traditional environmental auditing relies on manual, periodic sampling. Verifying green initiatives and carbon credit eligibility requires continuous, tamper-proof environmental data streamed directly from physical field sensors.",
      architecture: "Engineered secure backend data ingestion workflows capable of receiving, parsing, and validating continuous time-series data streams from IoT hardware sensors. Built algorithmic calculation engines that process environmental variables (temperature, air quality, humidity) to quantify carbon offset metrics in real time.",
      impact: "Bridged physical sensor hardware with cloud analytics, enabling continuous monitoring, reporting, and verification (MRV) for climate initiatives."
    },
  ];

  const labProjects = [
    {
      title: "Enterprise Go Microservice",
      category: "Engineering Lab",
      role: "Solo Developer",
      desc: "High-performance RESTful API microservice built as a deep-dive into Go for low-latency data ingestion and memory-safe processing.",
      tags: ["Go (Golang)", "GoFiber", "PostgreSQL", "SQLC", "Docker"],
      icon: <Database className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500/20 to-blue-500/5",
      image: "",
      problem: "Standard interpreted backend frameworks often suffer from high memory overhead and unpredictable garbage-collection pauses under high-concurrency enterprise workloads.",
      architecture: "Built from scratch using Go and the GoFiber web framework, leveraging zero-allocation routing for maximum throughput. Implemented SQLC to compile raw SQL queries into type-safe Go code, eliminating ORM latency while querying PostgreSQL. Integrated structured logging using Uber Zap and fully containerized the deployment pipeline using Docker.",
      impact: "Delivered a lightweight, highly scalable microservice capable of processing high-volume concurrent API requests with minimal CPU and memory footprint."
    },
    {
      title: "MedFleet",
      category: "Engineering Lab",
      role: "Solo Developer",
      desc: "Emergency medical logistics and ambulance dispatch platform featuring live geospatial tracking and zero-latency transaction processing.",
      tags: ["Python", "SQLite", "Leaflet.js", "Geospatial"],
      icon: <Activity className="w-6 h-6 text-rose-400" />,
      color: "from-rose-500/20 to-rose-500/5",
      image: "",
      problem: "In emergency medical logistics, heavy cloud dependencies and bloated frameworks can introduce latency or network failure during critical dispatch windows where speed is vital.",
      architecture: "Built a lightweight, high-reliability backend using Python's native ThreadingHTTPServer integrated directly with an in-memory/file-based SQLite database for immediate transaction execution. Implemented real-time interactive mapping and vehicle tracking on the frontend utilizing Leaflet.js.",
      impact: "Provided emergency dispatchers with a responsive, low-latency tracking portal capable of monitoring fleet movements over low-bandwidth network environments."
    },
    {
      title: "Cipher Studio",
      category: "Engineering Lab",
      role: "Solo Developer",
      desc: "Experimental multi-agent AI coding environment that uses multiple LLM models to cross-verify generated code for security vulnerabilities.",
      tags: ["Python", "FastAPI", "Agentic AI", "LLM Council"],
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      color: "from-amber-500/20 to-amber-500/5",
      image: "/projects/cipher.png",
      problem: "Single-prompt AI code generators frequently produce subtle syntax errors, security flaws, and hallucinations that create severe vulnerabilities in production environments.",
      architecture: "Built an interactive council framework where specialized AI models (Architect, Security Auditor, and Validator) debate and critique code logic asynchronously. Implemented verification guardrails that require unanimous council consensus on security correctness before code is finalized.",
      impact: "Reduced AI-generated code vulnerabilities by introducing multi-model verification and automated security auditing into the development loop."
    },
    {
      title: "Sentinel OS",
      category: "Engineering Lab",
      role: "Solo Developer",
      desc: "Real-time situational awareness and encrypted telemetry portal for enterprise field operations and remote asset management.",
      tags: ["WebSockets", "Next.js", "Encrypted Streams", "MongoDB"],
      icon: <Shield className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500/20 to-indigo-500/5",
      image: "",
      problem: "Managing distributed field operations requires continuous data synchronization across unpredictable network conditions without compromising data security or draining client resources.",
      architecture: "Implemented bidirectional, low-latency communication using WebSockets to stream live geospatial coordinates and status updates from remote field units. Built an encrypted data transmission layer with a reactive, minimalist command dashboard.",
      impact: "Provided operations directors with instantaneous visual oversight of global field assets with minimal data latency."
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
        
        {/* Hero Section */}
        <section className="mb-24 text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="w-20 h-20 mx-auto bg-zinc-800 rounded-full mb-6 flex items-center justify-center border border-white/10 shadow-xl">
             <span className="text-2xl text-white font-bold tracking-tighter">JP</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            I build software that solves <br className="hidden sm:block"/> real business problems.
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed mb-8">
            Full-Stack Engineer based in Bengaluru, India. IBM Certified Big Data Engineer and Upwork Rising Talent. I specialize in building production B2B platforms — from legacy-to-cloud data bridges to multi-tenant ERP systems and IoT telemetry pipelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:jeonc180@gmail.com" className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <div className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 rounded-full text-sm font-medium text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Enterprise Contracts ($25/hr Baseline)
            </div>
          </div>
        </section>

        {/* Project Card Component */}
        {(() => {
          const ProjectCard = ({ proj, idx }: { proj: any; idx: number }) => (
            <div 
              key={idx} 
              onClick={() => setSelectedProject(proj)}
              className="cursor-pointer group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg flex flex-col justify-between"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center shadow-md border border-white/5 group-hover:scale-110 transition-transform">
                    {proj.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                      proj.category === 'Client Project' 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                        : proj.category === 'Founder Project'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-zinc-500/10 text-zinc-400 border-white/5'
                    }`}>
                      {proj.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
                <p className="text-xs text-zinc-500 mb-3 font-medium">{proj.tags[0]}</p>
                <p className="text-sm text-zinc-400 mb-6 flex-grow line-clamp-3">{proj.desc}</p>
                <div className="flex items-center text-xs font-semibold text-zinc-500 group-hover:text-white transition-colors">
                  View Case Study <ArrowUpRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          );
          return null;
        })()}

        {/* Client Work */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2 text-center tracking-tight">Client Work</h2>
          <p className="text-center text-zinc-500 mb-10 text-sm">Production systems built and deployed for paying enterprise clients.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientProjects.map((proj, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedProject(proj)}
                className="cursor-pointer group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg flex flex-col justify-between"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center shadow-md border border-white/5 group-hover:scale-110 transition-transform">
                      {proj.icon}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Client Project
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
                  <p className="text-xs text-zinc-500 mb-3 font-medium">{proj.role}</p>
                  <p className="text-sm text-zinc-400 mb-6 flex-grow line-clamp-3">{proj.desc}</p>
                  <div className="flex items-center text-xs font-semibold text-zinc-500 group-hover:text-white transition-colors">
                    View Case Study <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Founder Project */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2 text-center tracking-tight">Founder Project</h2>
          <p className="text-center text-zinc-500 mb-10 text-sm">My own startup — currently in active development.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founderProjects.map((proj, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedProject(proj)}
                className="cursor-pointer group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg flex flex-col justify-between"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center shadow-md border border-white/5 group-hover:scale-110 transition-transform">
                      {proj.icon}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Founder Project
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
                  <p className="text-xs text-zinc-500 mb-3 font-medium">{proj.role}</p>
                  <p className="text-sm text-zinc-400 mb-6 flex-grow line-clamp-3">{proj.desc}</p>
                  <div className="flex items-center text-xs font-semibold text-zinc-500 group-hover:text-white transition-colors">
                    View Case Study <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Labs */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-2 text-center tracking-tight">Engineering Labs</h2>
          <p className="text-center text-zinc-500 mb-10 text-sm">Personal projects and technical explorations built to sharpen my engineering skills.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labProjects.map((proj, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedProject(proj)}
                className="cursor-pointer group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg flex flex-col justify-between"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center shadow-md border border-white/5 group-hover:scale-110 transition-transform">
                      {proj.icon}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-500/10 text-zinc-400 border border-white/5">
                      Engineering Lab
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
                  <p className="text-xs text-zinc-500 mb-3 font-medium">{proj.tags[0]}</p>
                  <p className="text-sm text-zinc-400 mb-6 flex-grow line-clamp-3">{proj.desc}</p>
                  <div className="flex items-center text-xs font-semibold text-zinc-500 group-hover:text-white transition-colors">
                    View Case Study <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About / Technical Authority Section */}
        <section className="mb-24 p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Engineering Philosophy & Authority</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-zinc-400 leading-relaxed">
            <div>
              <p className="mb-4">
                I operate as a technical partner, not just a ticket-taker. Through independent client contracts and building my own startup, I have delivered production systems for regional businesses that handle real money and real operational data.
              </p>
              <p>
                Whether it is migrating legacy FoxPro databases into live cloud dashboards, building multi-tenant ERP software for industrial manufacturers, or engineering Python and Node.js microservices, I build software that works in the real world — not just in demos.
              </p>
            </div>
            <div className="space-y-4 bg-black/40 p-6 rounded-2xl border border-white/5">
              <div className="font-bold text-white uppercase tracking-wider text-xs">Verified Credentials & Stack</div>
              <div className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Official IBM Certified Big Data Engineer</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Upwork Verified Rising Talent Distinction</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Production Client History (SteelX Innovation & Bharat Finance)</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Core Stack: Next.js 15, Python, FastAPI, PostgreSQL, Docker</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Consultation CTA */}
      <footer className="py-16 text-center text-sm border-t border-white/5 text-zinc-600 flex flex-col items-center justify-center gap-4 bg-black/40">
        <div className="text-white font-bold text-lg">Initiate a Technical Consultation</div>
        <p className="text-zinc-400 max-w-md mx-auto text-xs">
          Available for select B2B SaaS consulting, cloud architecture builds, and long-term full-stack engineering contracts. Starting baseline at $25.00/hr.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="mailto:jeonc180@gmail.com" className="px-5 py-2.5 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform text-xs">
            Email Me Directly
          </a>
          <a href="https://github.com/jeonc-dot" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-zinc-900 text-white font-semibold rounded-full border border-white/10 hover:bg-zinc-800 transition-colors text-xs">
            View GitHub Repo
          </a>
        </div>
        <p className="mt-8 text-zinc-600 text-xs">© {new Date().getFullYear()} Jeon Prince. Engineered in India.</p>
      </footer>

      {/* Executive Case Study Glassmorphism Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-[#0e0e11] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl transform transition-all scale-100 animate-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner flex-shrink-0">
                {selectedProject.icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-1">
                  {selectedProject.role}
                </div>
              </div>
            </div>

            {/* Optional Screenshot Rendering */}
            {selectedProject.images && selectedProject.images.length > 0 ? (
              <div className="mb-8 space-y-4">
                {selectedProject.images.map((imgUrl: string, index: number) => (
                  <div key={index} className="rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-lg">
                    <img src={imgUrl} alt={`${selectedProject.title} ${index + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            ) : selectedProject.image ? (
              <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-lg">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto object-cover" />
              </div>
            ) : null}

            {/* Case Study Sections */}
            <div className="space-y-6 text-sm text-zinc-300 leading-relaxed mb-8">
              <div className="bg-zinc-900/50 p-5 rounded-2xl border border-white/5">
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">The Business Problem</div>
                <p className="text-zinc-400">{selectedProject.problem}</p>
              </div>

              <div className="bg-zinc-900/50 p-5 rounded-2xl border border-white/5">
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Technical Architecture</div>
                <p className="text-zinc-400">{selectedProject.architecture}</p>
              </div>

              <div className="bg-zinc-900/50 p-5 rounded-2xl border border-white/5">
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Operational Impact</div>
                <p className="text-zinc-400">{selectedProject.impact}</p>
              </div>
            </div>
            
            <div className="mb-3 text-xs font-bold text-white uppercase tracking-wider">Architecture Stack</div>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag: string, i: number) => (
                <span key={i} className="px-3 py-1.5 bg-black/60 rounded-lg text-xs font-medium text-zinc-300 border border-white/5">
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
