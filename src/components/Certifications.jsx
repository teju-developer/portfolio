import React from 'react';
import { Award, CheckCircle2, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "Digital Circuits",
      issuer: "NPTEL, IIT Kharagpur",
      badge: "Elite Certificate",
      score: "Score: 63%",
      highlight: true,
      description: "Rigorous 12-week certification covering Boolean algebra, logic gates, combinational circuit synthesis, flip-flops, sequential circuits, finite state machines (FSM), and timing analysis.",
      topics: ["Combinational Logic", "Sequential Circuits", "Finite State Machines", "Timing Constraints", "Flip-Flops & Counters"]
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      badge: "Skill Verified",
      score: "Verified Assessment",
      highlight: false,
      description: "Validated fundamental Python programming proficiency, covering data structures (lists, tuples, dicts), flow control, algorithmic problem-solving, and functional constructs.",
      topics: ["Data Structures", "Control Flow", "Functions", "Algorithmic Logic"]
    },
    {
      title: "Introduction to Python",
      issuer: "SoloLearn",
      badge: "Course Certificate",
      score: "Completed",
      highlight: false,
      description: "Certification covering Python programming syntax, standard libraries, object-oriented principles, modular code organization, and error handling.",
      topics: ["Core Syntax", "OOP Principles", "Exception Handling", "Standard Libraries"]
    },
    {
      title: "Attended Technical Workshops",
      issuer: "Academic & Technical Events",
      badge: "Hands-on Exposure",
      score: "Participation",
      highlight: false,
      description: "Actively engaged in technical workshops and hands-on laboratory sessions focusing on electronics, microcontroller interfacing, digital simulation, and embedded prototyping.",
      topics: ["Embedded Hardware", "Sensor Interfacing", "Technical Collaboration", "Simulation Tools"]
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            VERIFIED CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Verified academic certifications in digital electronics and programming from premier institutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 ${
                cert.highlight
                  ? 'border-cyan-500/40 bg-[#0d162e]/70 shadow-[0_0_30px_rgba(0,240,255,0.12)]'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${cert.highlight ? 'bg-cyan-950/90 border border-cyan-500/50' : 'bg-slate-900 border border-slate-800'}`}>
                    <Award className={`w-6 h-6 ${cert.highlight ? 'text-cyan-400' : 'text-purple-400'}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      {cert.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-300">
                      {cert.issuer}
                    </div>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end gap-1">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                    cert.highlight
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {cert.badge}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                    {cert.score}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {cert.topics.map((topic, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
