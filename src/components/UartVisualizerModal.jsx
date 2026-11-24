import React, { useState } from 'react';
import { X, CheckCircle2, Cpu, Activity, Clock, Layers, ShieldCheck, Database, Sliders } from 'lucide-react';

export default function UartVisualizerModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('diagram');
  const [simState, setSimState] = useState({
    baudRate: 115200,
    clockFreq: 50, // MHz
    oversample: 16,
    fifoDepth: 16,
    testCase: 1
  });

  if (!isOpen) return null;

  const testCases = [
    { id: 1, name: "TC1: Basic ASCII Single Byte ('T')", status: "PASS", errors: "None", notes: "Clean Start bit, 8 data bits, Even parity, Stop bit verified" },
    { id: 2, name: "TC2: Full-Duplex Simultaneous TX/RX", status: "PASS", errors: "None", notes: "Independent TX and RX paths operating concurrently with no collision" },
    { id: 3, name: "TC3: 16-Deep FIFO Burst Fill", status: "PASS", errors: "None", notes: "Pointers advance correctly, full flag asserts at entry 16" },
    { id: 4, name: "TC4: 16-Deep FIFO Continuous Drain", status: "PASS", errors: "None", notes: "Empty flag asserts cleanly, no data corruption" },
    { id: 5, name: "TC5: 16x Oversampling Mid-Bit Sync", status: "PASS", errors: "None", notes: "Sample strobe triggered at tick 7 to avoid transition edges" },
    { id: 6, name: "TC6: Parity Error Injection & Flagging", status: "PASS", errors: "PE Asserted", notes: "Deliberate corrupted parity bit caught; PE flag raised accurately" },
    { id: 7, name: "TC7: Framing Error (Invalid Stop Bit)", status: "PASS", errors: "FE Asserted", notes: "Missing high stop bit flagged; FE status bit captured" },
    { id: 8, name: "TC8: Back-to-Back Consecutive Packets", status: "PASS", errors: "None", notes: "Zero inter-frame dead cycle requirement respected" },
    { id: 9, name: "TC9: Baud Rate Modulo-27 Jitter Analysis", status: "PASS", errors: "None", notes: "Clock divider 50MHz / (16 * 115200) = 27.1; jitter within margin" },
    { id: 10, name: "TC10: Asynchronous Reset Assertion", status: "PASS", errors: "None", notes: "Immediate reset of all FSM states and FIFO pointers verified" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-2xl bg-[#090d1a] border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#060913]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40">
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                UART Controller Architecture &amp; Verification Deck
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                Verilog HDL &bull; ModelSim &bull; 50 MHz &bull; 115200 Baud &bull; 16x Oversampling &bull; 16-Deep FIFO
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-[#070b16] px-6 text-xs font-mono">
          <button
            onClick={() => setActiveTab('diagram')}
            className={`py-3 px-4 border-b-2 font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'diagram'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            Architecture Diagram
          </button>
          <button
            onClick={() => setActiveTab('waveforms')}
            className={`py-3 px-4 border-b-2 font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'waveforms'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-4 h-4" />
            Waveform Simulation
          </button>
          <button
            onClick={() => setActiveTab('testcases')}
            className={`py-3 px-4 border-b-2 font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'testcases'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            10 ModelSim Test Cases
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[72vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: Architecture Diagram */}
          {activeTab === 'diagram' && (
            <div className="space-y-6">
              <div className="rounded-xl border border-cyan-500/30 overflow-hidden bg-[#060913]">
                <img
                  src="public/uart-block-diagram.svg"
                  alt="UART Top Level Architecture"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Architectural Subsystems Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-cyan-400 font-mono font-bold text-xs uppercase mb-1">
                    Baud Rate Generator
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Divides 50 MHz input clock using a Modulo-27 counter to produce 1.8432 MHz sampling ticks (16 &times; 115200 Hz).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-purple-400 font-mono font-bold text-xs uppercase mb-1">
                    16-Deep FIFO Buffers
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Circular dual-pointer memory buffers for TX and RX channels to prevent data starvation and handle burst transmissions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-emerald-400 font-mono font-bold text-xs uppercase mb-1">
                    Error Detection Engine
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Computes real-time parity check bit and monitors stop-bit integrity to detect framing errors with zero false negatives.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Waveform Simulation */}
          {activeTab === 'waveforms' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#060a16] border border-cyan-500/30 font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="text-cyan-300 font-bold">MODELSIM TIMING WAVEFORM INSPECTOR</span>
                  <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    ZERO TIMING VIOLATIONS
                  </span>
                </div>

                {/* Simulated Waveform Traces */}
                <div className="mt-4 space-y-3">
                  
                  {/* sys_clk */}
                  <div className="flex items-center text-xs">
                    <span className="w-24 text-slate-400 text-[11px]">sys_clk (50MHz)</span>
                    <div className="flex-1 flex items-center h-5 border-l border-r border-slate-800">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 h-full border-l border-t border-r ${
                            i % 2 === 0 ? 'border-cyan-400/90 bg-cyan-500/10' : 'border-transparent h-1'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* s_tick (16x oversampling) */}
                  <div className="flex items-center text-xs">
                    <span className="w-24 text-slate-400 text-[11px]">s_tick (16x)</span>
                    <div className="flex-1 flex items-center h-5 border-l border-r border-slate-800">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 h-full ${
                            i % 4 === 0 ? 'border-l-2 border-emerald-400 bg-emerald-400/30' : ''
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* tx_data */}
                  <div className="flex items-center text-xs">
                    <span className="w-24 text-slate-400 text-[11px]">tx_data [7:0]</span>
                    <div className="flex-1 flex items-center h-6 bg-slate-900/80 rounded border border-slate-800 px-3 text-[11px] text-cyan-300">
                      8'h54 (ASCII 'T') | [01010100]
                    </div>
                  </div>

                  {/* TX Serial Line */}
                  <div className="flex items-center text-xs">
                    <span className="w-24 text-slate-400 text-[11px]">txd (Serial)</span>
                    <div className="flex-1 flex items-center h-6 bg-[#030712] rounded border border-cyan-500/40 px-2 space-x-1 text-[10px]">
                      <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">IDLE:1</span>
                      <span className="px-1.5 py-0.5 rounded bg-red-950 text-red-300">START:0</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300">D0:0</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300">D1:0</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-900 text-cyan-200 font-bold">D2:1</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300">D3:0</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-900 text-cyan-200 font-bold">D4:1</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300">D5:0</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-900 text-cyan-200 font-bold">D6:1</span>
                      <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-300">PARITY:1</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300">STOP:1</span>
                    </div>
                  </div>

                  {/* Error Flags */}
                  <div className="flex items-center text-xs">
                    <span className="w-24 text-slate-400 text-[11px]">parity_err</span>
                    <div className="flex-1 flex items-center h-5 bg-slate-950 rounded px-2 text-emerald-400 text-[10px]">
                      0 (No Parity Violation)
                    </div>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-24 text-slate-400 text-[11px]">frame_err</span>
                    <div className="flex-1 flex items-center h-5 bg-slate-950 rounded px-2 text-emerald-400 text-[10px]">
                      0 (Stop Bit Verified High)
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  Waveform verified with ModelSim behavioral and post-synthesis functional simulations.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 10 ModelSim Test Cases */}
          {activeTab === 'testcases' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Comprehensive Testbench Regression Suite (10 / 10 Pass)
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/40">
                  Zero Failures Recorded
                </span>
              </div>

              <div className="divide-y divide-slate-800/80 rounded-xl border border-slate-800 bg-[#060913] overflow-hidden">
                {testCases.map((tc) => (
                  <div key={tc.id} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-900/40 transition-colors">
                    <div>
                      <div className="text-xs font-mono font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        {tc.name}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {tc.notes}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-[10px]">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        Err: {tc.errors}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-bold">
                        {tc.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-[#060913] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Project documented in engineering resume</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40 transition-colors"
          >
            Close Deck
          </button>
        </div>

      </div>
    </div>
  );
}
