import React, { useState, useEffect } from 'react';
import {
  Server, Database, ShieldCheck, Users, Github, Linkedin, Twitter, Mail, Code2, Layers, Cloud, MessageCircle
} from 'lucide-react';
import RasopsLogo from "./assets/images/rasops.png";
import RasopsAnalytics from "./assets/images/rasops-analytics.png";
import RasopsMenu from "./assets/images/rasops-menu.png";
import RasopsInventory from "./assets/images/rasops-inventory.png";
import RasopsActiveOrders from "./assets/images/rasops-active-orders.png";
import RasopsCustomerView from "./assets/images/rasops-customer-view.jpg";
import RasopsMobActiveOrders from "./assets/images/rasops-mob-active-app.jpg";
import RasopsMobOrderHistory from "./assets/images/rasops-order-history.jpg";

interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  accent: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "BlockHealth",
    role: "Team Lead - Backend",
    description: "A mission-critical healthcare platform automating the ingestion and processing of faxes, SMS, and medical records.",
    accent: "border-blue-500/50",
    image: ''
  },
  {
    id: 2,
    title: "Rasops",
    role: "Founder & Lead Engineer",
    description: "Architected an end-to-end digital ecosystem for restaurant management, synchronizing real-time ordering with automated inventory tracking.",
    image: RasopsLogo,
    accent: "border-purple-500/50"
  },
  {
    id: 3,
    title: "Airtrack Enterprise",
    role: "Senior Full Stack Engineer",
    description: "An enterprise-grade console for managing and tracking thousands of remote Android devices globally.",
    accent: "border-emerald-500/50",
    image: ''
  }
];

const links = {
  resume: "https://drive.google.com/uc?export=download&id=1o2wpsqmUNuDqzugLoMklQ2bsglCBoo3L",
  linkedin: "https://www.linkedin.com/in/deshmukh-shreyas/",
  github: "https://github.com/shreyas4510",
  twitter: "https://x.com/shreyas4510",
  whatsapp: "https://wa.me/919370806369?text=Hi%20Shreyas,%20I'd%20love%20to%20discuss%20a%20project!"
}

const ShreyasPortfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  const NavBar = () => (
    <nav className="fixed w-full z-[100] border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm cursor-pointer font-bold tracking-widest text-white uppercase">
          Shreyas <span className="text-blue-500">Deshmukh</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest">
          <a href="#experience" className="hover:text-blue-400 transition">Expertise</a>
          <a href="#work" className="hover:text-blue-400 transition">Selected Work</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          <a href={links.resume} className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-all transform active:scale-95">
            Resume
          </a>
        </div>
      </div>
    </nav>
  )

  const Header = () => (
    <header id='header' className="relative max-w-6xl mx-auto px-6 pt-32 pb-32">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Available for Senior/Staff Engineering Roles
      </div>
      <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-8">
        I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">scalable systems</span> for global impact.
      </h1>
      <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
        Senior Full-Stack Engineer with <strong>5.5 years of experience</strong>. Specializing in high-concurrency JS architectures, cloud-native migrations, and leading teams to ship production ready applications.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href="#work" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/25">View Work</a>
        <div className="flex gap-4 items-center px-4">
          <a href={links.github} target='_blank' className="p-2 hover:text-white transition" rel="noreferrer"><Github /></a>
          <a href={links.linkedin} target='_blank' className="p-2 hover:text-white transition" rel="noreferrer"><Linkedin /></a>
          <a href={links.twitter} target='_blank' className="p-2 hover:text-white transition" rel="noreferrer"><Twitter /></a>
        </div>
      </div>
    </header>
  )

  const Expertise = () => (
    <section id="experience" className="bg-slate-900/30 py-32 border-y border-slate-800/50 mx-auto md:px-36 px-12 py-20 border-t border-slate-800">
      <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
        <Layers className="text-blue-500" /> Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500"><Server /></div>
          <h3 className="text-xl font-bold text-white font-mono">Distributed Systems</h3>
          <p className="text-slate-400">
            Architecting high-throughput applications capable of handling <strong>5k+ concurrent nodes</strong> and mission-critical event processing with sub-second latency.
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500"><ShieldCheck /></div>
          <h3 className="text-xl font-bold text-white font-mono">End-to-End Ownership</h3>
          <p className="text-slate-400">
            Taking projects from <strong>initial RFC to production deployment</strong>, ensuring infrastructure security, compliance, and zero-downtime migrations.
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500"><Users /></div>
          <h3 className="text-xl font-bold text-white font-mono">Engineering Leadership</h3>
          <p className="text-slate-400">
            Driving team velocity by <strong>mentoring senior/junior engineers</strong> and establishing best practices, code quality, and system design.
          </p>
        </div>
      </div>
    </section>
  )

  const Projects = () => (
    <section id="work" className="px-8 pt-20 pb-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
        <Layers className="text-blue-500" /> High-Impact Projects
      </h2>
      <div className="relative">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`sticky w-full bg-[#0a0a0a] rounded-3xl border ${project.accent} shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.8)] overflow-hidden`}
            style={{
              top: `${100 + (index * 40)}px`,
              zIndex: index + 1
            }}
          >
            <div className={`grid ${project.image && 'md:grid-cols-2'} gap-8 p-8 md:p-12 items-center min-h-[450px]`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-bold text-center text-white">{project.title}</h3>
                  <p className="text-blue-400 font-mono text-center text-xs uppercase tracking-widest mt-1">{project.role}</p>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {
                project.image && (
                  <div className="hidden md:flex aspect-video bg-slate-900 rounded-2xl border border-white/10 items-center justify-center relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  )

  const Footer = () => (
    <section id="skills" className="bg-slate-900/30 px-12 md:px-36 py-32 border-y border-slate-800/50">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
          <Layers className="text-blue-500" /> Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-6 border border-slate-800 rounded-2xl bg-slate-950/50">
            <Code2 className="text-blue-500 mb-4" />
            <h4 className="font-bold text-white mb-2">Frontend</h4>
            <p className="text-sm text-slate-400">React.js, React Native, Next.js, Tailwind CSS, Bootstrap </p>
          </div>
          <div className="p-6 border border-slate-800 rounded-2xl bg-slate-950/50">
            <Layers className="text-emerald-500 mb-4" />
            <h4 className="font-bold text-white mb-2">Backend</h4>
            <p className="text-sm text-slate-400">Node.js, NestJS, GraphQL, Microservices, Serverless</p>
          </div>
          <div className="p-6 border border-slate-800 rounded-2xl bg-slate-950/50">
            <Database className="text-purple-500 mb-4" />
            <h4 className="font-bold text-white mb-2">Databases</h4>
            <p className="text-sm text-slate-400">PostgreSQL, MySQL, MongoDB, DynamoDB, Redis</p>
          </div>
          <div className="p-6 border border-slate-800 rounded-2xl bg-slate-950/50">
            <Cloud className="text-orange-500 mb-4" />
            <h4 className="font-bold text-white mb-2">Cloud/DevOps</h4>
            <p className="text-sm text-slate-400">AWS, Docker, Jenkins, Kafka</p>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className="bg-[#000000] text-slate-300 min-h-screen selection:bg-blue-500/30">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <NavBar />
      <Header />
      <Expertise />
      <Projects />
      <Footer />

      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-6">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative bg-[#080808] border border-white/10 w-full max-w-5xl max-h-full md:max-h-[90vh] overflow-y-auto rounded-none md:rounded-2xl shadow-2xl">
            <div className="p-8 md:p-16 space-y-20">

              {selectedProject.id === 1 && (
                <>
                  <section>
                    <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight">
                      Blockhealth – Distributed Notification Orchestration
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                      Led the architecture and evolution of a high-throughput,
                      event-driven healthcare communication system responsible
                      for delivering time-sensitive patient notifications reliably at scale.
                    </p>
                  </section>
                  <section>
                    <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-8">
                      Scope & Ownership
                    </h4>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                        <h3 className="text-white font-semibold mb-3">
                          Service Leadership
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Led a team of 4 engineers managing Scheduler,
                          Checkpoint Template, and Notification services.
                        </p>
                      </div>

                      <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                        <h3 className="text-white font-semibold mb-3">
                          Event-Driven Architecture
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Kafka-based ingestion triggering delayed job creation
                          and multi-provider notification delivery.
                        </p>
                      </div>

                      <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                        <h3 className="text-white font-semibold mb-3">
                          Delivery Reliability
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Implemented retry strategies, status tracking,
                          and provider failover handling.
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="bg-white/5 border border-white/10 p-10 rounded-xl">
                    <h4 className="text-white font-semibold mb-6">
                      System Architecture
                    </h4>

                    <p className="text-slate-400 leading-relaxed mb-4">
                      Appointment events consumed via Kafka → Scheduler resolves
                      provider-specific templates → Generates pre, post, and booking
                      notification jobs → Jobs queued for delayed execution →
                      Notification service dispatches via Telnyx / SendGrid.
                    </p>

                    <p className="text-slate-400 leading-relaxed">
                      The system was designed for deterministic scheduling,
                      provider-level configurability, and delivery observability.
                    </p>
                  </section>
                  <section className="bg-white/5 border border-white/10 p-10 rounded-xl">
                    <h4 className="text-white font-semibold mb-6">
                      Scalability Intervention
                    </h4>

                    <p className="text-slate-400 leading-relaxed mb-4">
                      Under peak traffic, Redis memory usage increased significantly
                      due to long-horizon delayed job storage.
                    </p>

                    <p className="text-slate-400 leading-relaxed">
                      Redesigned execution model:
                      <br />
                      • Long-term jobs persisted in database
                      <br />
                      • Daily cron loader pushes only next 24h workload into Redis
                      <br />
                      • Redis converted from persistence layer to execution buffer
                      <br />
                      <br />
                      This stabilized memory utilization and improved operational predictability.
                    </p>
                  </section>
                  <section>
                    <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-6">
                      Technology Used
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {[
                        "Node.js",
                        "Kafka",
                        "Redis",
                        "PostgreSQL / MySQL",
                        "Telnyx",
                        "SendGrid",
                        "Docker",
                        "Cron Jobs"
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/5 text-slate-300 rounded-md text-xs border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                </>
              )}

              {selectedProject.id === 2 && (
                <>
                  <div className="space-y-16">
                    <section>
                      <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight">
                        Rasops
                      </h2>
                      <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                        Multi-tenant hotel & food court management system centralizing
                        billing, inventory automation, staff control, and multi-branch analytics.
                      </p>
                    </section>

                    <section className="space-y-8">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                        Engineering Highlights
                      </h4>

                      <div className="grid md:grid-cols-3 gap-6">

                        <div className="p-6 bg-white/5 border border-white/5 rounded-xl">
                          <h3 className="text-white font-semibold mb-3">
                            Multi-Tenant Architecture
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            Single MySQL database with strict hotel_id isolation enforced
                            at service level.
                          </p>
                        </div>

                        <div className="p-6 bg-white/5 border border-white/5 rounded-xl">
                          <h3 className="text-white font-semibold mb-3">
                            Inventory Engine
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            Recipe-based raw material deduction per order. Heavy computation
                            offloaded to child processes to avoid event loop blocking.
                          </p>
                        </div>

                        <div className="p-6 bg-white/5 border border-white/5 rounded-xl">
                          <h3 className="text-white font-semibold mb-3">
                            Backend Settlement Logic
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            Unified checkout with backend-calculated distribution sent to
                            payment gateway APIs.
                          </p>
                        </div>

                      </div>
                    </section>

                    <section>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-6">
                        Tech Stack
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {[
                          "React",
                          "Bootstrap",
                          "Node.js",
                          "Express",
                          "MySQL",
                          "JWT",
                          "Vercel",
                          "Redis"
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-white/5 text-slate-300 rounded-md text-xs font-medium border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-6">
                        Product Screens
                      </h4>

                      <div className="grid md:grid-cols-2 gap-6">
                        <img
                          src={RasopsAnalytics}
                          alt="Analytics Dashboard"
                          className="rounded-xl border border-white/10"
                        />
                        <img
                          src={RasopsMenu}
                          alt="Menu Ordering"
                          className="rounded-xl border border-white/10"
                        />
                        <img
                          src={RasopsInventory}
                          alt="Inventory"
                          className="rounded-xl border border-white/10"
                        />
                        <img
                          src={RasopsActiveOrders}
                          alt="Active Orders"
                          className="rounded-xl border border-white/10"
                        />
                        <img
                          src={RasopsCustomerView}
                          alt="Customer View"
                          className="rounded-xl border border-white/10 object-contain object-center bg-black h-[500px] w-full"
                        />
                        <img
                          src={RasopsMobActiveOrders}
                          alt="Mobile Active Orders"
                          className="rounded-xl border border-white/10 object-contain h-[500px] w-full"
                        />
                        <img
                          src={RasopsMobOrderHistory}
                          alt="Mobile Order History"
                          className="rounded-xl border border-white/10 object-contain h-[500px] w-full"
                        />
                      </div>
                    </section>
                  </div>
                </>
              )}

              {selectedProject.id === 3 && (
                <>
                  <section>
                    <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight">
                      AirTrack – Enterprise Device Control Plane
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                      Architected a real-time Android device management platform
                      enabling enterprise-grade monitoring, control, and state
                      synchronization using event-driven cloud infrastructure.
                    </p>
                  </section>
                  <section>
                    <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-8">
                      Core Capabilities
                    </h4>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                        <h3 className="text-white font-semibold mb-3">
                          Real-Time Device Telemetry
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Devices publish state changes to GCP Pub/Sub.
                          Backend webhooks ingest and persist device updates
                          with near real-time propagation.
                        </p>
                      </div>

                      <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                        <h3 className="text-white font-semibold mb-3">
                          Scalable Serverless Backend
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Cloud Functions handling device APIs horizontally
                          without infrastructure management overhead.
                        </p>
                      </div>

                      <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                        <h3 className="text-white font-semibold mb-3">
                          Intelligent Poll Optimization
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          High-frequency frontend polling served from cache layer
                          instead of database to prevent read amplification.
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="bg-white/5 border border-white/10 p-10 rounded-xl">
                    <h4 className="text-white font-semibold mb-6">
                      Architectural Decisions
                    </h4>

                    <p className="text-slate-400 leading-relaxed mb-4">
                      Enterprise environments required polling every 5 seconds
                      across thousands of enrolled devices. Direct database reads
                      would have caused sustained load pressure.
                    </p>

                    <p className="text-slate-400 leading-relaxed">
                      Solution: Device-level cache updated during write operations.
                      Read path served entirely from cache.
                      This separated read and write concerns and stabilized backend load.
                    </p>
                  </section>
                  <section>
                    <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-6">
                      Technology Used
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {[
                        "Node.js",
                        "AWS Serverless",
                        "React.js",
                        "GCP Pub/Sub",
                        "Webhook Architecture",
                        "Redis",
                        "REST APIs"
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/5 text-slate-300 rounded-md text-xs border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                </>
              )}

            </div>
          </div>
        </div>
      )}

      <footer id="contact" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Let's build something exceptional.</h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto">
          Currently open to Senior Full-Stack roles where I can drive technical architecture and mentor high-performing teams.
        </p>
        <div className="flex flex-wrap flex-col items-center justify-center gap-4 mb-12">
          <a href="mailto:shreyasdeshmukh06@gmail.com" className="relative flex items-center gap-3 text-white hover:text-blue-400 transition">
            <Mail size={20} className="text-blue-500" /> shreyasdeshmukh06@gmail.com
          </a>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#128C7E] transition-all transform active:scale-95 shadow-lg shadow-emerald-500/10"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
        <p className="mt-12 text-xs text-slate-600 font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Shreyas Deshmukh • Portfolio
        </p>
      </footer>
    </div>
  );
};

export default ShreyasPortfolio;