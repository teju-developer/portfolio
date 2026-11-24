# Tejashwini Suresh Sonnad — Personal Portfolio Website

A modern, responsive, high-performance personal portfolio website for **Tejashwini Suresh Sonnad**, an aspiring **VLSI Engineer, Digital Design Engineer, and Python Developer**.

Designed with a premium semiconductor & digital electronics aesthetic, incorporating dark navy / near-black backgrounds, electric cyan, sky blue, and subtle purple accents, interactive circuit board traces, an interactive UART serial shift register simulator, waveform timing diagrams, and live project demos.

---

## 🚀 Quick Start (Instant Local Preview)

This portfolio is built to run with **zero setup or build steps required**, while also offering a full standard **Vite + React + Tailwind CSS** architecture.

### Option 1: Instant Python Server (Recommended & Zero Setup)
Run the included high-performance Python server:
```bash
python serve.py
```
Then open your browser at **[http://localhost:3000](http://localhost:3000)**.

### Option 2: Standard Vite + React Development
If Node.js and npm are installed in your environment:
```bash
npm install
npm run dev
```

---

## 🌟 Key Sections & Features

### 1. Hero Section
- **Identity & Headline**: *"Hi, I'm Tejashwini Suresh Sonnad"* &mdash; **Aspiring VLSI & Digital Design Engineer**.
- **Live Silicon Shift Register**: An interactive simulation of the UART transmission path (ASCII 'T' / `0x54`), 10-bit serial framing (Start, D0–D6, Parity, Stop), clock pulse indicator, and ModelSim clock waveform preview.
- **Direct Actions**: *Explore My Projects* (smooth scroll) and *Download Resume* (triggers high-resolution vector PDF resume download).
- **Direct Links**: GitHub (`https://github.com/teju-developer`), LinkedIn (`https://www.linkedin.com/in/tejashwini-sonnad-9380a72aa`), and Email (`sonnadtejashwini@gmail.com`).

### 2. About Me Section
- Authentic narrative detailing academic focus at **KLE Institute of Technology, Hubballi (2023–2027)**, RTL design experience in Verilog HDL, ModelSim verification, and Python development.
- **Profile Data Sheet Card**: Summarizes Degree (B.E. in ECE), Institution, CGPA (7.8/10), Location (Vijayapura, Karnataka), and Career Goal (Entry-level VLSI / Digital Design Engineer).

### 3. Technical Skills (Accurate & Categorized)
Strictly adheres to verified engineering skills without invented percentages:
- **VLSI and Digital Design**: Verilog HDL, UART, FIFO Design, Digital Circuits, ModelSim.
- **Programming**: Python, NumPy.
- **Embedded Systems**: Arduino, ESP32.
- **Development Tools**: VS Code, GitHub.
- **Soft Skills**: Problem Solving, Logical Thinking, Teamwork.

### 4. Featured Projects
- **Flagship Project: UART Controller with FIFO and Error Detection**
  - **Tech**: Verilog HDL, ModelSim.
  - **Architecture**: Transmitter, receiver, baud rate generator (Modulo-27 divider for 50 MHz clock to 115200 baud), 16x oversampling in receiver, 16-deep circular FIFO buffers, parity & framing error detection.
  - **Verification**: Verified using 10 ModelSim test cases with zero failures.
  - **Interactive Deck Modal**: Full-screen modal with top-level block diagram, ModelSim timing waveforms, and detailed 10-testcase regression breakdown.
- **Weather App**: Python application parsing and displaying weather metrics for user-selected locations. ([GitHub](https://github.com/teju-developer/wether-app))
- **Calculator**: GUI-based calculator developed using Tkinter for arithmetic operations. Includes an interactive live calculator demo directly on the website. ([GitHub](https://github.com/teju-developer/calculater.py))
- **Tkinter Models**: Event-driven desktop applications built with Tkinter widgets. ([GitHub](https://github.com/teju-developer/tkinter))

### 5. Education Timeline
- **Bachelor of Engineering (B.E.) &mdash; Electronics and Communication Engineering**
  - KLE Institute of Technology, Hubballi | 2023–2027 | **CGPA: 7.8 / 10**
- **Pre-University Course (PUC &mdash; Science / PCMB)**
  - Sanikethan College, Mudhol | 2021–2023 | **88.0%**
- **Secondary School Leaving Certificate (SSLC)**
  - MDRS, Nelithirtha, Mangalore | 2020–2021 | **87.2%**

### 6. Certifications & Achievements
- **Digital Circuits** &mdash; NPTEL, IIT Kharagpur (*Elite Certificate, 63%*).
- **Python (Basic)** &mdash; HackerRank (*Verified Skill*).
- **Introduction to Python** &mdash; SoloLearn (*Course Certificate*).
- **Attended Technical Workshops** &mdash; Hands-on embedded hardware and simulation sessions.

### 7. Contact Section
- **Heading**: *"Let's Connect and Build Something Great"*.
- **Contact Channels**: Direct Email (`sonnadtejashwini@gmail.com`) with 1-click copy button, LinkedIn, GitHub, and Location.
- **Contact Form**: Pre-populates default mail client with formatted subject and inquiry details; includes clear guidance on integrating serverless form backends like Formspree or Web3Forms in production.

---

## 📁 Project Structure

```
tejashwini-portfolio/
├── index.html                    # Unified production-ready portfolio with embedded interactive modules
├── serve.py                      # Lightweight local HTTP server with SVG/PDF/JS MIME support
├── generate_resume_pdf.py        # Vector PDF generator creating the real resume
├── generate_assets.py            # SVG generator for UART block diagram and favicon
├── package.json                  # Vite & React dependency definitions
├── vite.config.js                # Vite build configuration
├── tailwind.config.js            # Tailwind color schemes & animation tokens
├── postcss.config.js             # PostCSS configuration
├── Tejashwini_Suresh_Sonnad_Resume.pdf  # Generated vector PDF resume
├── public/
│   ├── favicon.svg               # Microchip icon favicon
│   ├── uart-block-diagram.svg    # Top-level UART architecture diagram
│   └── Tejashwini_Suresh_Sonnad_Resume.pdf  # Downloadable PDF asset
└── src/
    ├── main.jsx                  # React application root
    ├── App.jsx                   # Component tree orchestrator
    ├── index.css                 # Global styles & glassmorphism utilities
    └── components/
        ├── CircuitCanvas.jsx     # Interactive circuit traces background canvas
        ├── Navbar.jsx            # Responsive navigation bar with mobile drawer
        ├── Hero.jsx              # Hero banner with UART shift register simulation
        ├── About.jsx             # About narrative & profile data sheet
        ├── Skills.jsx            # Categorized technical competencies
        ├── Projects.jsx          # Featured hardware & software project cards
        ├── UartVisualizerModal.jsx # UART architecture, waveforms & test cases
        ├── TkinterCalculatorModal.jsx # Live interactive calculator simulator
        ├── ResumeModal.jsx       # Resume viewer modal & PDF trigger
        ├── Education.jsx         # Academic timeline
        ├── Certifications.jsx    # Verified certifications & workshop badges
        ├── Contact.jsx           # Functional contact form & direct channels
        └── Footer.jsx            # Footer with quick links & back-to-top button
```

---

## 🎨 Design System

- **Background**: Deep Navy / Near-Black (`#060810`, `#090d1a`, `#0e162e`)
- **Primary Accents**: Electric Cyan (`#00f0ff`, `#22d3ee`), Sky Blue (`#38bdf8`)
- **Secondary Accents**: Silicon Violet (`#a855f7`), Logic Green (`#10b981`)
- **Typography**: `Inter` (sans-serif) for body prose & headings; `JetBrains Mono` for pins, registers, baud rates, and timing.
- **Effects**: Glassmorphism (`backdrop-blur-md`, subtle 1px border highlights), animated canvas circuit traces with traveling electron packets.

---

## 📄 License & Credits
Created for **Tejashwini Suresh Sonnad** &bull; 2026.
All project specifications, repositories, and achievements reflect genuine academic and project accomplishments.
