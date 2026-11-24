import React from 'react';
import { X, Download, FileText, CheckCircle2, Mail, MapPin, GraduationCap, Award } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Triggers direct download of the generated PDF resume
    const link = document.createElement('a');
    link.href = 'public/Tejashwini_Suresh_Sonnad_Resume.pdf';
    link.download = 'Tejashwini_Suresh_Sonnad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#090d1a] border border-cyan-500/40 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#060913]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40">
              <FileText className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Tejashwini Suresh Sonnad &bull; Curriculum Vitae
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                Aspiring VLSI &amp; Digital Design Engineer | Python Developer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-slate-200 text-sm">
          
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-5">
            <h2 className="text-2xl font-extrabold text-white">TEJASHWINI SURESH SONNAD</h2>
            <div className="text-sm font-mono text-cyan-400 mt-1">
              Aspiring VLSI &amp; Digital Design Engineer &bull; Python Developer
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 mt-2 font-mono">
              <span>Location: Vijayapura, Karnataka, India</span>
              <span>Email: sonnadtejashwini@gmail.com</span>
              <span>GitHub: github.com/teju-developer</span>
              <span>LinkedIn: linkedin.com/in/tejashwini-sonnad-9380a72aa</span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">
              Career Objective
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Electronics and Communication Engineering student passionate about Digital Design, Verilog HDL, FPGA concepts, Embedded Systems and Python Development. I enjoy designing digital systems and transforming ideas into practical engineering solutions. Seeking an entry-level VLSI / Digital Design Engineer role to contribute to hardware design, synthesis, and verification.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-800 pb-1">
              Education
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between font-semibold text-white">
                  <span>Bachelor of Engineering in Electronics and Communication Engineering</span>
                  <span className="text-xs font-mono text-cyan-400">2023–2027</span>
                </div>
                <div className="text-xs text-slate-400">KLE Institute of Technology, Hubballi | CGPA: 7.8/10</div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-white">
                  <span>Pre-University Course (PUC)</span>
                  <span className="text-xs font-mono text-cyan-400">2021–2023</span>
                </div>
                <div className="text-xs text-slate-400">Sanikethan College, Mudhol | 88%</div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-white">
                  <span>Secondary School Leaving Certificate (SSLC)</span>
                  <span className="text-xs font-mono text-cyan-400">2020–2021</span>
                </div>
                <div className="text-xs text-slate-400">MDRS, Nelithirtha, Mangalore | 87.2%</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-800 pb-1">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div><strong className="text-white">VLSI &amp; Digital Design:</strong> Verilog HDL, UART, FIFO Design, Digital Circuits, ModelSim</div>
              <div><strong className="text-white">Programming:</strong> Python, NumPy</div>
              <div><strong className="text-white">Embedded Systems:</strong> Arduino, ESP32</div>
              <div><strong className="text-white">Development Tools:</strong> VS Code, GitHub</div>
              <div><strong className="text-white">Soft Skills:</strong> Problem Solving, Logical Thinking, Teamwork</div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 border-b border-slate-800 pb-1">
              Projects
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-semibold text-white">
                  <span>UART Controller with FIFO and Error Detection</span>
                  <span className="text-xs font-mono text-cyan-400">Verilog HDL, ModelSim</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-1">
                  <li>Designed and verified a UART controller using Verilog HDL.</li>
                  <li>Implemented transmitter, receiver and baud-rate generator.</li>
                  <li>Integrated 16-deep TX and RX FIFO buffers.</li>
                  <li>Configured 115200 baud rate, 50 MHz clock and 16x oversampling.</li>
                  <li>Implemented parity and framing error detection.</li>
                  <li>Verified the design using 10 ModelSim test cases with zero failures.</li>
                  <li>Analysed simulation waveforms to verify timing and data integrity.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-white">
                  <span>Weather App</span>
                  <span className="text-xs font-mono text-cyan-400">Python</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Developed a Python application that displays the current weather of a location selected by the user. (https://github.com/teju-developer/wether-app)
                </p>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-white">
                  <span>Calculator &amp; Tkinter Models</span>
                  <span className="text-xs font-mono text-cyan-400">Python, Tkinter</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Developed GUI-based calculator and event-handling widget prototypes using Tkinter. (https://github.com/teju-developer/calculater.py, https://github.com/teju-developer/tkinter)
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">
              Certifications &amp; Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div>&bull; Digital Circuits – NPTEL, IIT Kharagpur (Elite Certificate, 63%)</div>
              <div>&bull; Python (Basic) – HackerRank</div>
              <div>&bull; Introduction to Python – SoloLearn</div>
              <div>&bull; Attended Technical Workshops</div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#060913] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">Official Resume Document</span>
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold transition-all"
            >
              <Download className="w-4 h-4" />
              Download PDF Resume
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
