import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, BookOpen } from 'lucide-react';

export default function Education() {
  const educationTimeline = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Electronics and Communication Engineering",
      institution: "KLE Institute of Technology",
      location: "Hubballi, Karnataka",
      period: "2023–2027",
      grade: "CGPA: 7.8 / 10",
      status: "In Progress (Final Year)",
      details: [
        "Core coursework: VLSI Design, Digital System Design, Microcontrollers, Verilog HDL, Signals & Systems.",
        "Hands-on laboratory experience with ModelSim waveform simulation, FPGA concepts, and embedded hardware.",
        "Developed full-duplex UART Controller with 16-deep FIFO buffering and error detection as flagship academic project."
      ],
      badgeColor: "bg-cyan-950/80 text-cyan-300 border-cyan-500/40"
    },
    {
      degree: "Pre-University Course (PUC)",
      field: "Science (PCMB Stream)",
      institution: "Sanikethan College",
      location: "Mudhol, Karnataka",
      period: "2021–2023",
      grade: "Score: 88.0%",
      status: "Completed with Distinction",
      details: [
        "Strong academic grounding in Physics, Mathematics, Chemistry, and Analytical Thinking.",
        "Developed foundational interest in electronics, circuit analysis, and computational logic."
      ],
      badgeColor: "bg-purple-950/80 text-purple-300 border-purple-500/40"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      field: "High School Education",
      institution: "MDRS, Nelithirtha",
      location: "Mangalore, Karnataka",
      period: "2020–2021",
      grade: "Score: 87.2%",
      status: "Completed with Distinction",
      details: [
        "Excellence in Mathematics, Science, and Logical Problem Solving.",
        "Demonstrated consistent academic discipline and active participation in school activities."
      ],
      badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-500/40"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Academic qualifications demonstrating a consistent foundation in electronics, engineering, and logic.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Rule */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -ml-0.5 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500/40"></div>

          <div className="space-y-12">
            {educationTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -ml-3 sm:-ml-3.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#060913] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)] z-10 mt-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  </div>

                  {/* Spacer for non-even row on desktop */}
                  <div className="hidden sm:block sm:w-1/2"></div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-6">
                    <div className="glass-panel rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-xl hover:-translate-y-1">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold border ${item.badgeColor}`}>
                          {item.grade}
                        </span>
                        <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-300">
                        {item.field}
                      </div>

                      <div className="text-xs text-slate-400 mt-1 mb-3 flex flex-wrap items-center gap-x-3">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                          {item.institution}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {item.location}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
