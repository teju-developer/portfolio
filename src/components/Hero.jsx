import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Cpu, Terminal, Activity, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenResume, onOpenUartModal }) {
  const [clockTicking, setClockTicking] = useState(true);
  const [clockCount, setClockCount] = useState(0);
  const [activeBit, setActiveBit] = useState(0);

  // Simulated 50 MHz clock / packet cycle
  useEffect(() => {
    if (!clockTicking) return;
    const interval = setInterval(() => {
      setClockCount((prev) => (prev + 1) % 1000);
      setActiveBit((prev) => (prev + 1) % 10);
    }, 450);
    return () => clearInterval(interval);
  }, [clockTicking]);

  // Serial frame representation: Start(0), Data 'T' (0x54: 00101010 LSB first), Parity(1), Stop(1)
  const serialBits = [
    { label: 'START', val: '0', type: 'ctrl' },
    { label: 'D0', val: '0', type: 'data' },
    { label: 'D1', val: '0', type: 'data' },
    { label: 'D2', val: '1', type: 'data' },
    { label: 'D3', val: '0', type: 'data' },
    { label: 'D4', val: '1', type: 'data' },
    { label: 'D5', val: '0', type: 'data' },
    { label: 'D6', val: '1', type: 'data' },
    { label: 'PARITY', val: '1', type: 'parity' },
    { label: 'STOP', val: '1', type: 'ctrl' }
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Entry-Level Roles &bull; 2027 Grad</span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-mono text-cyan-400 tracking-wide">
                Hi, I'm Tejashwini Suresh Sonnad
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Aspiring{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                  VLSI &amp; Digital Design
                </span>{' '}
                Engineer
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Electronics and Communication Engineering student passionate about Digital Design, Verilog HDL, FPGA concepts, Embedded Systems and Python Development. I enjoy designing digital systems and transforming ideas into practical engineering solutions.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transform hover:-translate-y-0.5"
              >
                Explore My Projects
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-slate-900/80 hover:bg-cyan-950/40 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-200 shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Download Resume
              </button>
            </div>

            {/* Social Links & Quick Contact Info */}
            <div className="flex items-center gap-4 pt-4 text-slate-400">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
              <a
                href="https://github.com/teju-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                title="GitHub: teju-developer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tejashwini-sonnad-9380a72aa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sonnadtejashwini@gmail.com"
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                title="Email: sonnadtejashwini@gmail.com"
              >
                <Mail className="w-5 h-5" />
              </a>
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-400 pl-2">
                <span>Vijayapura, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Right Column: Semiconductor Die & Interactive Architecture Illustration */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Silicon IC Package Frame */}
              <div className="relative rounded-2xl bg-[#090e1c]/90 border border-cyan-500/30 p-5 sm:p-6 shadow-[0_0_50px_rgba(0,240,255,0.15)] backdrop-blur-xl">
                
                {/* IC Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-white tracking-wider">
                      MODULE: UART_CONTROLLER_TOP
                    </span>
                  </div>
                  <button
                    onClick={() => setClockTicking(!clockTicking)}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/80 transition-colors flex items-center gap-1"
                  >
                    <Activity className="w-3 h-3 text-cyan-400" />
                    {clockTicking ? 'CLK RUNNING' : 'CLK PAUSED'}
                  </button>
                </div>

                {/* Silicon Core Grid with Pins */}
                <div className="relative bg-[#050811] rounded-xl p-4 border border-slate-800/80 space-y-4 font-mono">
                  
                  {/* Pin Layout Header */}
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      sys_clk: 50 MHz
                    </span>
                    <span className="text-cyan-400">baud: 115200 bps</span>
                    <span className="text-purple-400">oversample: 16x</span>
                  </div>

                  {/* Silicon Architecture Core Blocks */}
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-cyan-500/20">
                      <div className="text-[10px] text-cyan-400 font-semibold mb-1">TX SUBSYSTEM</div>
                      <div className="text-slate-300">16-Deep FIFO</div>
                      <div className="text-slate-400 text-[10px]">FSM: IDLE &rarr; TX</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-purple-500/20">
                      <div className="text-[10px] text-purple-400 font-semibold mb-1">RX SUBSYSTEM</div>
                      <div className="text-slate-300">16-Deep FIFO</div>
                      <div className="text-slate-400 text-[10px]">Parity &amp; Frame Chk</div>
                    </div>
                  </div>

                  {/* Real-time Serial Bitstream Shift Register Animation */}
                  <div className="p-3 rounded-lg bg-[#0a0f24] border border-cyan-500/25">
                    <div className="flex justify-between items-center text-[10px] mb-2">
                      <span className="text-cyan-300 font-bold">TXD SHIFT REGISTER (ASCII 'T' - 0x54)</span>
                      <span className="text-emerald-400 text-[9px] bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        VERIFIED: 10/10 PASS
                      </span>
                    </div>

                    <div className="grid grid-cols-10 gap-1 text-center">
                      {serialBits.map((b, i) => {
                        const isCurrent = i === activeBit && clockTicking;
                        return (
                          <div
                            key={i}
                            className={`p-1 rounded text-[10px] transition-all duration-200 ${
                              isCurrent
                                ? 'bg-cyan-500 text-slate-950 font-bold scale-110 shadow-[0_0_10px_#00f0ff]'
                                : b.type === 'ctrl'
                                ? 'bg-slate-800 text-slate-400'
                                : b.type === 'parity'
                                ? 'bg-purple-950/60 text-purple-300 border border-purple-500/30'
                                : 'bg-slate-900 text-cyan-300'
                            }`}
                          >
                            <div className="text-[8px] opacity-75">{b.label}</div>
                            <div className="font-bold">{b.val}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[9px] text-slate-400">
                      <span>Transmission Bus: TXD Pin #4</span>
                      <span className="text-cyan-400 font-bold">Strobe: Tick #{activeBit}</span>
                    </div>
                  </div>

                  {/* Live Simulation Waveform Mini-Strip */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>Simulation Waveform Preview (ModelSim)</span>
                      <button
                        onClick={onOpenUartModal}
                        className="text-cyan-400 hover:text-cyan-300 underline text-[10px]"
                      >
                        Inspect Full Timing
                      </button>
                    </div>
                    <div className="h-9 w-full bg-[#030611] rounded border border-slate-800 p-1 flex items-center gap-1 overflow-hidden">
                      <div className="text-[9px] text-slate-500 w-8 flex-shrink-0">CLK</div>
                      <div className="flex-1 flex items-center space-x-0.5">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-4 border-l border-t border-r ${
                              i % 2 === 0 ? 'border-cyan-400/80 bg-cyan-500/10' : 'border-transparent h-1'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Interactive Button to Explore UART Modal */}
                  <button
                    onClick={onOpenUartModal}
                    className="w-full py-2.5 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-mono font-semibold transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    <span>Inspect UART Controller Specs &amp; Waveforms</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Silicon Package Corner Rivets */}
                <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full border border-slate-700 bg-slate-900"></div>
                <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full border border-slate-700 bg-slate-900"></div>
                <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full border border-slate-700 bg-slate-900"></div>
                <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full border border-slate-700 bg-slate-900"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
