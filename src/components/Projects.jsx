import React from 'react';
import { Cpu, ExternalLink, Github, Layers, Play, CheckCircle2, FileText, ArrowRight, Activity, Calculator, CloudSun } from 'lucide-react';

export default function Projects({ onOpenUartModal, onOpenCalculatorModal, onOpenResume }) {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            PORTFOLIO HIGHLIGHTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Hardware RTL design, simulation verification, and Python applications with clean architectures.
          </p>
        </div>

        {/* FLAGSHIP PROJECT: UART Controller */}
        <div className="mb-14">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0e162e] to-[#070b16] border border-cyan-500/40 p-6 sm:p-10 shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden">
            
            {/* Top Accent line & badge */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Project Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider">
                    FLAGSHIP HARDWARE PROJECT
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    10/10 ModelSim Cases Passed
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    UART Controller with FIFO and Error Detection
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-900 text-cyan-400 border border-cyan-500/30">
                      Verilog HDL
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-900 text-purple-400 border border-purple-500/30">
                      ModelSim
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-900 text-sky-400 border border-sky-500/30">
                      FIFO Memory
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-700">
                      FSM Architecture
                    </span>
                  </div>
                </div>

                {/* Exact bullets from requirements */}
                <div className="space-y-2.5 text-sm text-slate-300 leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                    <span>Designed and verified a full UART controller using <strong>Verilog HDL</strong>.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                    <span>Implemented transmitter, receiver, and dedicated baud-rate generator.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                    <span>Integrated <strong>16-deep TX and RX FIFO buffers</strong> to prevent data loss and decouple clocks.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                    <span>Configured <strong>115200 baud rate</strong> with <strong>50 MHz system clock</strong> and <strong>16x oversampling</strong> for precision bit sync.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                    <span>Implemented robust <strong>parity error</strong> and <strong>framing error detection</strong> mechanisms.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                    <span>Verified the design using <strong>10 ModelSim test cases with zero failures</strong>.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></span>
                    <span>Analysed simulation waveforms to verify timing constraints, setup/hold margins, and data integrity.</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenUartModal}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                  >
                    <Activity className="w-4 h-4" />
                    Open Architecture &amp; Waveforms
                  </button>

                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs text-cyan-300 bg-slate-900/80 hover:bg-cyan-950/50 border border-cyan-500/40 hover:border-cyan-400 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-cyan-400" />
                    Resume Project Details
                  </button>

                  <span className="text-xs font-mono text-slate-400">
                    *Design verified in ModelSim testbench
                  </span>
                </div>
              </div>

              {/* Right Column: Interactive Diagram Preview */}
              <div className="lg:col-span-5">
                <div
                  onClick={onOpenUartModal}
                  className="group relative cursor-pointer rounded-2xl bg-[#070b16] border border-cyan-500/30 p-3 hover:border-cyan-400 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
                >
                  <img
                    src="public/uart-block-diagram.svg"
                    alt="UART Architecture Diagram"
                    className="w-full h-auto rounded-xl object-cover transform group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent rounded-2xl flex items-end p-4">
                    <span className="text-xs font-mono text-cyan-300 flex items-center gap-1.5 group-hover:text-white transition-colors">
                      <Play className="w-3.5 h-3.5 text-cyan-400" />
                      Click to explore interactive block diagram &amp; waveforms &rarr;
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* PROJECTS 2, 3, 4: Python & Tkinter Applications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* PROJECT 2: Weather App */}
          <div className="glass-panel rounded-2xl p-6 border border-sky-500/20 hover:border-sky-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-sky-950/60 border border-sky-500/30">
                  <CloudSun className="w-6 h-6 text-sky-400" />
                </div>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-sky-300">
                  Python
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                Weather App
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Developed a Python application that displays the current weather of a location selected by the user.
              </p>

              <div className="space-y-1.5 text-xs text-slate-400 mb-6 font-mono">
                <div>&bull; User location selection</div>
                <div>&bull; Real-time weather data parsing</div>
                <div>&bull; Clear metrics display</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href="https://github.com/teju-developer/wether-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[10px] font-mono text-slate-500">teju-developer</span>
            </div>
          </div>

          {/* PROJECT 3: Calculator */}
          <div className="glass-panel rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30">
                  <Calculator className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-300">
                    Python
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-300">
                    Tkinter
                  </span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                Calculator
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Developed a GUI-based calculator using Tkinter with buttons and a display for arithmetic operations.
              </p>

              <div className="space-y-1.5 text-xs text-slate-400 mb-6 font-mono">
                <div>&bull; Arithmetic calculation engine</div>
                <div>&bull; Interactive button grid interface</div>
                <div>&bull; Real-time numeric display</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href="https://github.com/teju-developer/calculater.py"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={onOpenCalculatorModal}
                className="px-2.5 py-1 rounded bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 transition-colors"
              >
                Launch Demo
              </button>
            </div>
          </div>

          {/* PROJECT 4: Tkinter Models */}
          <div className="glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30">
                  <Layers className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-purple-300">
                    Python
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-purple-300">
                    Tkinter
                  </span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                Tkinter Models
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Created small GUI applications using Tkinter built-in widgets and functions. Applied GUI development and event-handling concepts.
              </p>

              <div className="space-y-1.5 text-xs text-slate-400 mb-6 font-mono">
                <div>&bull; Built-in widget mastery</div>
                <div>&bull; Event-driven handler pipelines</div>
                <div>&bull; Interactive desktop GUI models</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href="https://github.com/teju-developer/tkinter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[10px] font-mono text-slate-500">teju-developer</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
