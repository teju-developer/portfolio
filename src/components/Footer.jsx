import React from 'react';
import { Cpu, Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#04060d] pt-12 pb-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Monogram & Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                Tejashwini Suresh Sonnad
              </div>
              <div className="font-mono text-[10px] text-cyan-400">
                Aspiring VLSI &amp; Digital Design Engineer
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <button onClick={onOpenResume} className="hover:text-cyan-400 transition-colors text-cyan-400">Resume</button>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/teju-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/tejashwini-sonnad-9380a72aa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:sonnadtejashwini@gmail.com"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-900 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px] font-mono">
          <div>
            &copy; {new Date().getFullYear()} Tejashwini Suresh Sonnad. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Vijayapura, Karnataka</span>
            <span>&bull;</span>
            <span className="text-cyan-500">React + Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
