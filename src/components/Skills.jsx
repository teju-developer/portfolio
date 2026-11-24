import React from 'react';
import { Cpu, Code, Layers, Wrench, Users, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  // Categorized skills strictly based on user specifications:
  // VLSI and Digital Design: Verilog HDL, UART, FIFO Design, Digital Circuits, ModelSim
  // Programming: Python, NumPy
  // Embedded Systems: Arduino, ESP32
  // Development Tools: VS Code, GitHub
  // Soft Skills: Problem Solving, Logical Thinking, Teamwork
  const skillCategories = [
    {
      category: "VLSI and Digital Design",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      accentColor: "border-cyan-500/30 hover:border-cyan-400",
      badgeColor: "bg-cyan-950/60 text-cyan-300 border-cyan-500/40",
      description: "Hardware description, digital synthesis concepts, memory buffer architecture, and simulation verification.",
      skills: [
        { name: "Verilog HDL", desc: "RTL modeling, Finite State Machines (FSM), testbenches" },
        { name: "UART", desc: "Full-duplex serial protocol, baud generator, oversampling" },
        { name: "FIFO Design", desc: "Circular pointers, 16-deep buffering, full/empty flags" },
        { name: "Digital Circuits", desc: "Combinational/sequential logic, registers, timing analysis" },
        { name: "ModelSim", desc: "Behavioral simulation, waveform inspection, regression testing" }
      ]
    },
    {
      category: "Programming",
      icon: <Code className="w-5 h-5 text-blue-400" />,
      accentColor: "border-blue-500/30 hover:border-blue-400",
      badgeColor: "bg-blue-950/60 text-blue-300 border-blue-500/40",
      description: "Algorithmic thinking, core scripting, numerical processing, and software development fundamentals.",
      skills: [
        { name: "Python", desc: "Object-oriented scripting, algorithmic logic, data processing" },
        { name: "NumPy", desc: "Numerical arrays, vector calculations, matrix operations" }
      ]
    },
    {
      category: "Embedded Systems",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      accentColor: "border-purple-500/30 hover:border-purple-400",
      badgeColor: "bg-purple-950/60 text-purple-300 border-purple-500/40",
      description: "Microcontroller architecture, peripheral interfacing, GPIO control, and sensor integration.",
      skills: [
        { name: "Arduino", desc: "Microcontroller prototyping, hardware interfacing, C/C++ firmware" },
        { name: "ESP32", desc: "32-bit dual-core microcontroller, IoT interfacing, GPIO buses" }
      ]
    },
    {
      category: "Development Tools",
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      accentColor: "border-emerald-500/30 hover:border-emerald-400",
      badgeColor: "bg-emerald-950/60 text-emerald-300 border-emerald-500/40",
      description: "Engineering workflows, source control, modular development, and debugging utilities.",
      skills: [
        { name: "VS Code", desc: "Modern code editor, extensions for Verilog HDL & Python" },
        { name: "GitHub", desc: "Git version control, repositories, collaboration workflows" }
      ]
    },
    {
      category: "Soft Skills",
      icon: <Users className="w-5 h-5 text-amber-400" />,
      accentColor: "border-amber-500/30 hover:border-amber-400",
      badgeColor: "bg-amber-950/60 text-amber-300 border-amber-500/40",
      description: "Analytical mindset, structured engineering methodology, and effective collaboration.",
      skills: [
        { name: "Problem Solving", desc: "Root-cause analysis, timing closure debugging, logic optimization" },
        { name: "Logical Thinking", desc: "Systematic state design, edge-case anticipation, truth tables" },
        { name: "Teamwork", desc: "Collaborative project execution, technical communication, peer review" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            TECHNICAL COMPETENCY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Verified competencies in VLSI digital design, hardware description, software programming, and engineering tools.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-2xl p-6 border ${cat.accentColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {cat.category}
                    </h3>
                    <div className="text-[10px] font-mono text-slate-400">
                      {cat.skills.length} core competencies
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Badges & Details */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-semibold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal pl-5">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer tag */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>SYSTEM VERIFIED</span>
                <span className="text-cyan-400">ACADEMIC &amp; PROJECT USE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
