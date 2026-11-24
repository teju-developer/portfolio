import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, AlertCircle, Info } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);

  const email = "sonnadtejashwini@gmail.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare mailto link with pre-filled contents
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry: Tejashwini Suresh Sonnad'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect and <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Build Something Great</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            I'm currently seeking entry-level VLSI, Digital Design Engineer, or Python developer positions. Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-click Copy */}
            <div className="glass-panel rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Direct Email
              </div>
              <a
                href={`mailto:${email}`}
                className="text-base font-bold text-white hover:text-cyan-400 transition-colors block mt-1 break-all"
              >
                {email}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Fastest response for interview requests and technical discussions.
              </p>
            </div>

            {/* LinkedIn Profile */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-500/40 text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Professional Network</div>
                  <div className="text-sm font-bold text-white">LinkedIn Profile</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Connect for professional updates, recommendations, and recruiting.
              </p>
              <a
                href="https://www.linkedin.com/in/tejashwini-sonnad-9380a72aa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
              >
                linkedin.com/in/tejashwini-sonnad-9380a72aa &rarr;
              </a>
            </div>

            {/* GitHub Profile */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Code Repositories</div>
                  <div className="text-sm font-bold text-white">GitHub Profile</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Inspect public Python repositories and project source code.
              </p>
              <a
                href="https://github.com/teju-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
              >
                github.com/teju-developer &rarr;
              </a>
            </div>

            {/* Location */}
            <div className="glass-panel rounded-2xl p-4 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Vijayapura, Karnataka, India (Open to Relocation)</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the form below to initiate communication.
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                  SECURE MAIL LINK
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070b16] border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-600 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070b16] border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-600 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    SUBJECT *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. VLSI Design Engineer Opportunity / Interview Request"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070b16] border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-600 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, role details, or inquiry here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070b16] border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-600 font-sans resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Informative, honest banner explaining backend connection */}
              <div className="mt-5 p-3.5 rounded-xl bg-[#050914] border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-300">Backend Notice:</strong> Clicking <em>Send Message</em> will automatically open your default mail client with your pre-filled inquiry. To configure silent background form submission in production, integrate a serverless endpoint like <strong>Formspree</strong> (e.g. <code>action="https://formspree.io/f/&lt;your-id&gt;"</code>) or <strong>Web3Forms</strong>.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
