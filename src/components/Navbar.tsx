import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b border-foreground/20 bg-background text-foreground sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between font-mono text-xs uppercase tracking-widest">
        {/* Logo / Name */}
        <a href="#" className="font-bold hover:text-[#1E90FF] transition-colors">
          M. DAVE // AEROSPACE & ELECTRICAL
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#about" className="hover:text-[#1E90FF] transition-colors">
            [ABOUT]
          </a>
          <a href="#projects" className="hover:text-[#1E90FF] transition-colors">
            [PROJECTS]
          </a>
          <a href="#experience" className="hover:text-[#1E90FF] transition-colors">
            [LEADERSHIP]
          </a>
          <a href="#contact" className="hover:text-[#1E90FF] transition-colors">
            [CONTACT]
          </a>
          <a
            href="/Maharshi_Dave_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:bg-primary hover:text-background border border-primary/30 px-3 py-1 transition-colors ml-2"
          >
            [RESUME ↓]
          </a>
        </div>

        {/* Mobile Menu (Hidden on desktop) */}
        <div className="md:hidden flex items-center">
          <a
            href="/Maharshi_Dave_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary border border-primary/30 px-3 py-1 transition-colors"
          >
            [RESUME ↓]
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;