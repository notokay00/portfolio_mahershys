import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t-2 border-foreground bg-secondary/40 text-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 space-y-14">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70">
            Communications // Direct Channel
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            Get in Touch.
          </h2>
          <p className="text-sm md:text-base font-mono text-foreground/85 leading-relaxed">
            Open to research internships, aerospace propulsion &amp; power
            electronics collaborations, and technical discussions.
          </p>
        </div>

        {/* Direct Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="mailto:maharshidave658@gmail.com"
            className="group border border-foreground/25 bg-background p-6 md:p-8 flex flex-col justify-between gap-4 hover:border-[#1E90FF] transition-colors"
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70">
              Email
            </span>
            <div className="flex items-center justify-between gap-4">
              <span className="text-base md:text-xl font-mono font-bold text-foreground break-all group-hover:text-[#1E90FF] transition-colors">
                maharshidave658@gmail.com
              </span>
              <span className="text-lg font-mono text-[#1E90FF]">↗</span>
            </div>
          </a>

          <a
            href="tel:+917048273316"
            className="group border border-foreground/25 bg-background p-6 md:p-8 flex flex-col justify-between gap-4 hover:border-[#1E90FF] transition-colors"
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70">
              Phone
            </span>
            <div className="flex items-center justify-between gap-4">
              <span className="text-base md:text-xl font-mono font-bold text-foreground group-hover:text-[#1E90FF] transition-colors">
                +91 7048273316
              </span>
              <span className="text-lg font-mono text-[#1E90FF]">↗</span>
            </div>
          </a>
        </div>

        {/* Social & Technical Profiles */}
        <div className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70">
            Profiles &amp; Socials
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a
              href="https://github.com/notokay00"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/25 bg-background px-5 py-4 flex items-center justify-between font-mono text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/maharshi-dave/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/25 bg-background px-5 py-4 flex items-center justify-between font-mono text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>

            <a
              href="https://x.com/kiwiy_1910"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/25 bg-background px-5 py-4 flex items-center justify-between font-mono text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <span>X (Twitter)</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.instagram.com/mahersheys/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/25 bg-background px-5 py-4 flex items-center justify-between font-mono text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <span>Instagram</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-foreground/75">
          <span>M. DAVE // AEROSPACE &amp; ELECTRICAL ENGINEERING</span>
          <span>© 2026 Maharshi Dave. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;