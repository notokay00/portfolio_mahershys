import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "INDEX", href: "#home" },
  { label: "RESEARCH", href: "#projects" },
  { label: "SYSTEMS", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-foreground">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-6">
        <a href="#home" className="text-xs font-mono uppercase tracking-[0.2em] text-foreground">
          M. Dave // Aerospace & Electrical
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              [{link.label}]
            </a>
          ))}
          <a
            href="#"
            className="text-xs font-mono uppercase tracking-[0.15em] text-primary hover:underline underline-offset-4 transition-all duration-200"
          >
            [RESUME ↓]
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-foreground px-6 pb-6 pt-2 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
            >
              [{link.label}]
            </a>
          ))}
          <a
            href="#"
            className="block text-xs font-mono uppercase tracking-[0.15em] text-primary"
          >
            [RESUME ↓]
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
