import React from 'react';
import { MapPin, GraduationCap, Award, Compass, Cpu, Code2, CheckCircle2 } from 'lucide-react';

export default function About() {
  const profileDetails = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      label: "Degree",
      value: "Bachelor of Engineering (B.E.)",
      sub: "Electronics & Communication Engineering"
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      label: "Institution",
      value: "KLE Institute of Technology",
      sub: "Hubballi, Karnataka (2023–2027)"
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      label: "Academic Score",
      value: "CGPA: 7.8 / 10",
      sub: "Consistent academic foundation"
    },
    {
      icon: <MapPin className="w-5 h-5 text-rose-400" />,
      label: "Location",
      value: "Vijayapura, Karnataka",
      sub: "Open to relocation & remote"
    },
    {
      icon: <Compass className="w-5 h-5 text-sky-400" />,
      label: "Career Goal",
      value: "VLSI / Digital Design Engineer",
      sub: "Entry-level hardware design & verification"
    },
    {
      icon: <Code2 className="w-5 h-5 text-amber-400" />,
      label: "Key Competencies",
      value: "Verilog HDL & ModelSim",
      sub: "RTL design, FSMs, Python programming"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            ENGINEERING PROFILE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Bridging semiconductor architecture, digital design logic, and software problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Story & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border border-cyan-500/20 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400"></span>
                Hardware Design Enthusiast &amp; Problem Solver
              </h3>

              {/* Exact user text */}
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  I am a final-year Electronics and Communication Engineering student at KLE Institute of Technology, Hubballi. I am interested in VLSI, Digital Design and Embedded Systems.
                </p>
                <p>
                  I have practical experience designing and verifying digital systems using Verilog HDL and ModelSim. My major project involves developing a UART Controller with FIFO buffering and error detection.
                </p>
                <p>
                  Apart from hardware design, I enjoy Python programming and building small applications. I continuously work on improving my technical knowledge, logical thinking and problem-solving abilities.
                </p>
              </div>

              {/* Highlight Pillars */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-cyan-500/20">
                  <div className="text-cyan-400 font-mono font-bold text-xs uppercase mb-1">RTL Design</div>
                  <div className="text-xs text-slate-400">Verilog HDL, modular architecture, and finite state machines.</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-purple-500/20">
                  <div className="text-purple-400 font-mono font-bold text-xs uppercase mb-1">Verification</div>
                  <div className="text-xs text-slate-400">ModelSim testbenches, timing checks, and waveform analysis.</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-emerald-500/20">
                  <div className="text-emerald-400 font-mono font-bold text-xs uppercase mb-1">Programming</div>
                  <div className="text-xs text-slate-400">Python scripting, logic implementation, and GUI applications.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-cyan-500/20 shadow-xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
                  <h4 className="text-sm font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    Profile Data Sheet
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                    ID: TS-ECE-2027
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {profileDetails.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3.5 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-slate-800/80 flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold text-white truncate">
                          {item.value}
                        </div>
                        <div className="text-xs text-slate-400">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Status note */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  Credentials Verified
                </span>
                <span className="font-mono text-slate-500">KLE Tech &bull; VTU Affiliated</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
