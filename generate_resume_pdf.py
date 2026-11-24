"""
Vector PDF Generator for Tejashwini Suresh Sonnad's Resume
Generates a valid, high-quality, professional 1-page PDF using standard PDF 1.4 specification.
"""
import os

def create_resume_pdf(output_path):
    # Dimensions for standard A4 page: 595.28 x 841.89 points
    width = 595.28
    height = 841.89
    
    # We will assemble PDF content streams
    # Colors:
    # Navy: 0.05 0.1 0.2
    # Cyan accent: 0.0 0.6 0.8
    # Gray text: 0.3 0.3 0.35
    # Dark text: 0.1 0.1 0.12
    # Light gray line: 0.8 0.85 0.9
    
    stream_ops = []
    
    # Top accent banner
    stream_ops.append("q")
    stream_ops.append("0.04 0.08 0.18 rg") # Deep navy
    stream_ops.append(f"0 {height - 85} {width} 85 re f")
    
    # Cyan accent strip
    stream_ops.append("0.0 0.75 0.95 rg") # Cyan
    stream_ops.append(f"0 {height - 88} {width} 3 re f")
    
    # Header text in banner
    # Name
    stream_ops.append("BT")
    stream_ops.append("/F2 22 Tf") # Bold
    stream_ops.append("1 1 1 rg") # White
    stream_ops.append(f"36 {height - 40} Td")
    stream_ops.append("(TEJASHWINI SURESH SONNAD) Tj")
    stream_ops.append("ET")
    
    # Title
    stream_ops.append("BT")
    stream_ops.append("/F1 11 Tf") # Regular
    stream_ops.append("0.0 0.85 1.0 rg") # Bright cyan
    stream_ops.append(f"36 {height - 58} Td")
    stream_ops.append("(Aspiring VLSI & Digital Design Engineer | Python Developer) Tj")
    stream_ops.append("ET")
    
    # Contact info right-aligned / top right
    stream_ops.append("BT")
    stream_ops.append("/F1 8.5 Tf")
    stream_ops.append("0.9 0.92 0.95 rg")
    stream_ops.append(f"36 {height - 75} Td")
    stream_ops.append("(Email: sonnadtejashwini@gmail.com   |   Location: Vijayapura, Karnataka, India   |   GitHub: teju-developer   |   LinkedIn: tejashwini-sonnad) Tj")
    stream_ops.append("ET")
    stream_ops.append("Q")
    
    # Helper to draw section header
    def draw_section_header(y_pos, title):
        ops = []
        ops.append("q")
        # Section title
        ops.append("BT")
        ops.append("/F2 10.5 Tf")
        ops.append("0.05 0.12 0.28 rg")
        ops.append(f"36 {y_pos} Td")
        ops.append(f"({title.upper()}) Tj")
        ops.append("ET")
        # Cyan underline
        ops.append("0.0 0.7 0.9 rg")
        ops.append(f"36 {y_pos - 3} 523 1.2 re f")
        ops.append("Q")
        return ops

    # Content cursor
    y = height - 105
    
    # 1. CAREER OBJECTIVE
    stream_ops.extend(draw_section_header(y, "Career Objective"))
    y -= 14
    obj_lines = [
        "Electronics and Communication Engineering student passionate about Digital Design, Verilog HDL, FPGA concepts,",
        "Embedded Systems and Python Development. Seeking an entry-level VLSI / Digital Design Engineer role to design and verify",
        "robust digital architectures and transform complex requirements into practical engineering solutions."
    ]
    stream_ops.append("BT")
    stream_ops.append("/F1 8.5 Tf")
    stream_ops.append("0.18 0.2 0.25 rg")
    for i, line in enumerate(obj_lines):
        stream_ops.append(f"36 {y - (i * 11)} Td")
        stream_ops.append(f"({line}) Tj")
        stream_ops.append(f"-36 {- (y - (i * 11))} Td")
    stream_ops.append("ET")
    y -= (len(obj_lines) * 11 + 10)
    
    # 2. EDUCATION
    stream_ops.extend(draw_section_header(y, "Education"))
    y -= 14
    
    edu_items = [
        ("Bachelor of Engineering (B.E.) - Electronics & Communication Engineering", "2023 - 2027", "KLE Institute of Technology, Hubballi", "CGPA: 7.8 / 10"),
        ("Pre-University Course (PUC - Science / PCMB)", "2021 - 2023", "Sanikethan College, Mudhol", "Percentage: 88.0%"),
        ("Secondary School Leaving Certificate (SSLC)", "2020 - 2021", "MDRS, Nelithirtha, Mangalore", "Percentage: 87.2%")
    ]
    
    for title, dates, school, grade in edu_items:
        # Title bold & dates
        stream_ops.append("BT")
        stream_ops.append("/F2 8.8 Tf")
        stream_ops.append("0.1 0.12 0.18 rg")
        stream_ops.append(f"36 {y} Td")
        stream_ops.append(f"({title}) Tj")
        stream_ops.append("ET")
        
        stream_ops.append("BT")
        stream_ops.append("/F2 8.5 Tf")
        stream_ops.append("0.0 0.5 0.7 rg")
        stream_ops.append(f"500 {y} Td")
        stream_ops.append(f"({dates}) Tj")
        stream_ops.append("ET")
        y -= 11
        
        # Institution & grade
        stream_ops.append("BT")
        stream_ops.append("/F1 8.2 Tf")
        stream_ops.append("0.3 0.35 0.4 rg")
        stream_ops.append(f"36 {y} Td")
        stream_ops.append(f"({school}  |  {grade}) Tj")
        stream_ops.append("ET")
        y -= 12
        
    y -= 4
    
    # 3. TECHNICAL SKILLS
    stream_ops.extend(draw_section_header(y, "Technical Skills"))
    y -= 14
    
    skills = [
        ("VLSI & Digital Design:", "Verilog HDL, UART, FIFO Design, Digital Circuits, ModelSim Waveform Analysis"),
        ("Programming Languages:", "Python, NumPy"),
        ("Embedded Systems:", "Arduino, ESP32 Microcontrollers"),
        ("Tools & Platforms:", "VS Code, GitHub, Git Version Control"),
        ("Core Competencies:", "Problem Solving, Logical Thinking, Teamwork, Hardware-Software Interfacing")
    ]
    
    for cat, val in skills:
        stream_ops.append("BT")
        stream_ops.append("/F2 8.5 Tf")
        stream_ops.append("0.1 0.15 0.22 rg")
        stream_ops.append(f"36 {y} Td")
        stream_ops.append(f"({cat}) Tj")
        stream_ops.append("ET")
        
        stream_ops.append("BT")
        stream_ops.append("/F1 8.5 Tf")
        stream_ops.append("0.22 0.25 0.3 rg")
        stream_ops.append(f"160 {y} Td")
        stream_ops.append(f"({val}) Tj")
        stream_ops.append("ET")
        y -= 11
        
    y -= 4
    
    # 4. KEY ENGINEERING PROJECTS
    stream_ops.extend(draw_section_header(y, "Featured Engineering Projects"))
    y -= 14
    
    # Project 1: UART
    stream_ops.append("BT")
    stream_ops.append("/F2 9.2 Tf")
    stream_ops.append("0.05 0.2 0.5 rg")
    stream_ops.append(f"36 {y} Td")
    stream_ops.append("(UART Controller with FIFO and Error Detection) Tj")
    stream_ops.append("ET")
    
    stream_ops.append("BT")
    stream_ops.append("/F2 8.2 Tf")
    stream_ops.append("0.0 0.55 0.75 rg")
    stream_ops.append(f"415 {y} Td")
    stream_ops.append("(Technologies: Verilog HDL, ModelSim) Tj")
    stream_ops.append("ET")
    y -= 11
    
    uart_bullets = [
        "Designed and verified a full-duplex UART controller using Verilog HDL with transmitter, receiver, and baud-rate generator.",
        "Integrated 16-deep TX and RX FIFO buffers to decouple processing rates and prevent data starvation/overflow.",
        "Configured 115200 baud rate, 50 MHz system clock, and implemented 16x oversampling in the receiver for robust bit synchronization.",
        "Implemented parity error and framing error detection mechanisms for high data transmission reliability.",
        "Verified design through 10 comprehensive ModelSim testbench cases achieving 100% pass rate (zero failures).",
        "Analyzed simulation waveforms to rigorously verify setup/hold timing, state transitions, and bus data integrity."
    ]
    for b in uart_bullets:
        stream_ops.append("BT")
        stream_ops.append("/F1 8.0 Tf")
        stream_ops.append("0.2 0.22 0.28 rg")
        stream_ops.append(f"46 {y} Td")
        stream_ops.append(f"(\\225  {b}) Tj")
        stream_ops.append("ET")
        y -= 10
        
    y -= 4
    
    # Project 2: Weather App
    stream_ops.append("BT")
    stream_ops.append("/F2 9.0 Tf")
    stream_ops.append("0.05 0.2 0.5 rg")
    stream_ops.append(f"36 {y} Td")
    stream_ops.append("(Weather Application) Tj")
    stream_ops.append("ET")
    stream_ops.append("BT")
    stream_ops.append("/F2 8.2 Tf")
    stream_ops.append("0.0 0.55 0.75 rg")
    stream_ops.append(f"460 {y} Td")
    stream_ops.append("(Technology: Python) Tj")
    stream_ops.append("ET")
    y -= 10
    stream_ops.append("BT")
    stream_ops.append("/F1 8.0 Tf")
    stream_ops.append("0.2 0.22 0.28 rg")
    stream_ops.append(f"46 {y} Td")
    stream_ops.append("(\\225  Developed a Python application fetching and displaying real-time weather metrics for user-selected global locations.) Tj")
    stream_ops.append("ET")
    y -= 10
    stream_ops.append("BT")
    stream_ops.append("/F1 7.8 Tf")
    stream_ops.append("0.35 0.4 0.45 rg")
    stream_ops.append(f"46 {y} Td")
    stream_ops.append("(Repository: https://github.com/teju-developer/wether-app) Tj")
    stream_ops.append("ET")
    y -= 12
    
    # Project 3 & 4
    stream_ops.append("BT")
    stream_ops.append("/F2 9.0 Tf")
    stream_ops.append("0.05 0.2 0.5 rg")
    stream_ops.append(f"36 {y} Td")
    stream_ops.append("(GUI Calculator & Tkinter Application Models) Tj")
    stream_ops.append("ET")
    stream_ops.append("BT")
    stream_ops.append("/F2 8.2 Tf")
    stream_ops.append("0.0 0.55 0.75 rg")
    stream_ops.append(f"420 {y} Td")
    stream_ops.append("(Technologies: Python, Tkinter) Tj")
    stream_ops.append("ET")
    y -= 10
    stream_ops.append("BT")
    stream_ops.append("/F1 8.0 Tf")
    stream_ops.append("0.2 0.22 0.28 rg")
    stream_ops.append(f"46 {y} Td")
    stream_ops.append("(\\225  Engineered desktop GUI calculator and event-driven modular UI prototypes using Tkinter widgets and state handlers.) Tj")
    stream_ops.append("ET")
    y -= 10
    stream_ops.append("BT")
    stream_ops.append("/F1 7.8 Tf")
    stream_ops.append("0.35 0.4 0.45 rg")
    stream_ops.append(f"46 {y} Td")
    stream_ops.append("(Repositories: https://github.com/teju-developer/calculater.py  |  https://github.com/teju-developer/tkinter) Tj")
    stream_ops.append("ET")
    y -= 14
    
    # 5. CERTIFICATIONS & ACHIEVEMENTS
    stream_ops.extend(draw_section_header(y, "Certifications & Achievements"))
    y -= 14
    
    certs = [
        ("Digital Circuits", "NPTEL, IIT Kharagpur", "Elite Certificate (Score: 63%) - Combinational/Sequential logic & FSMs"),
        ("Python (Basic)", "HackerRank", "Validated algorithmic proficiency, syntax, and data structures"),
        ("Introduction to Python", "SoloLearn", "Certified in fundamental programming concepts and object-oriented paradigms"),
        ("Technical Workshops", "College & Industry Events", "Actively participated in hands-on workshops in electronics and embedded systems")
    ]
    
    for c_title, issuer, detail in certs:
        stream_ops.append("BT")
        stream_ops.append("/F2 8.5 Tf")
        stream_ops.append("0.12 0.15 0.2 rg")
        stream_ops.append(f"36 {y} Td")
        stream_ops.append(f"(\\225  {c_title}) Tj")
        stream_ops.append("ET")
        
        stream_ops.append("BT")
        stream_ops.append("/F1 8.2 Tf")
        stream_ops.append("0.3 0.35 0.4 rg")
        stream_ops.append(f"165 {y} Td")
        stream_ops.append(f"(- {issuer}: {detail}) Tj")
        stream_ops.append("ET")
        y -= 11

    # Combine stream
    content_stream = "\n".join(stream_ops)
    stream_bytes = content_stream.encode('latin1')
    stream_len = len(stream_bytes)
    
    # Construct standard PDF file
    objects = []
    
    # 1: Catalog
    objects.append("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")
    
    # 2: Pages
    objects.append("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n")
    
    # 3: Page
    objects.append(f"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {width} {height}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n")
    
    # 4: Content stream
    objects.append(f"4 0 obj\n<< /Length {stream_len} >>\nstream\n{content_stream}\nendstream\nendobj\n")
    
    # 5: Font F1 (Helvetica)
    objects.append("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")
    
    # 6: Font F2 (Helvetica-Bold)
    objects.append("6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n")
    
    # Calculate xref
    header = "%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"
    offsets = []
    current_offset = len(header.encode('latin1'))
    
    body = ""
    for obj in objects:
        offsets.append(current_offset)
        obj_bytes = obj.encode('latin1')
        current_offset += len(obj_bytes)
        body += obj
        
    xref_offset = current_offset
    xref = f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n"
    for off in offsets:
        xref += f"{off:010d} 00000 n \n"
        
    trailer = f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n"
    
    full_pdf = header + body + xref + trailer
    
    with open(output_path, "wb") as f:
        f.write(full_pdf.encode('latin1'))
    print(f"Resume PDF generated successfully at: {output_path} ({len(full_pdf.encode('latin1'))} bytes)")

if __name__ == "__main__":
    out_dir = r"C:\Users\Lenovo\.gemini\antigravity\scratch\tejashwini-portfolio"
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "Tejashwini_Suresh_Sonnad_Resume.pdf")
    create_resume_pdf(out_file)
    
    # Also save in public folder
    pub_dir = os.path.join(out_dir, "public")
    os.makedirs(pub_dir, exist_ok=True)
    create_resume_pdf(os.path.join(pub_dir, "Tejashwini_Suresh_Sonnad_Resume.pdf"))
