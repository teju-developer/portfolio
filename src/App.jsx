import React, { useState } from 'react';
import CircuitCanvas from './components/CircuitCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UartVisualizerModal from './components/UartVisualizerModal';
import TkinterCalculatorModal from './components/TkinterCalculatorModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [uartModalOpen, setUartModalOpen] = useState(false);
  const [calcModalOpen, setCalcModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#060810] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Circuit Animation */}
      <CircuitCanvas />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        <main className="flex-grow">
          <Hero
            onOpenResume={() => setResumeOpen(true)}
            onOpenUartModal={() => setUartModalOpen(true)}
          />
          <About />
          <Skills />
          <Projects
            onOpenUartModal={() => setUartModalOpen(true)}
            onOpenCalculatorModal={() => setCalcModalOpen(true)}
            onOpenResume={() => setResumeOpen(true)}
          />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer onOpenResume={() => setResumeOpen(true)} />
      </div>

      {/* Modals */}
      <UartVisualizerModal
        isOpen={uartModalOpen}
        onClose={() => setUartModalOpen(false)}
      />

      <TkinterCalculatorModal
        isOpen={calcModalOpen}
        onClose={() => setCalcModalOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
