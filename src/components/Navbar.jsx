import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060810]/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Cpu className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
          </div>
          <div>
            <div className="text-white font-bold tracking-tight text-base sm:text-lg flex items-center gap-1.5">
              Tejashwini S Sonnad
            </div>
            <div className="text-xs font-mono text-cyan-400 tracking-wider">
              VLSI &bull; DIGITAL DESIGN &bull; PYTHON
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-md transition-colors hover:bg-cyan-500/10"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/teju-developer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/tejashwini-sonnad-9380a72aa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/40 hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-400 rounded-lg transition-all duration-200 shadow-[0_0_12px_rgba(0,240,255,0.15)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            <FileText className="w-4 h-4" />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 rounded-lg"
          >
            <FileText className="w-3.5 h-3.5" />
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1f]/95 border-b border-cyan-500/30 px-6 py-5 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex gap-4">
                <a
                  href="https://github.com/teju-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-cyan-400"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tejashwini-sonnad-9380a72aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-cyan-400"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sonnadtejashwini@gmail.com"
                  className="p-2 text-slate-400 hover:text-cyan-400"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="px-4 py-2 text-xs font-mono font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/50 rounded-lg"
              >
                View Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
