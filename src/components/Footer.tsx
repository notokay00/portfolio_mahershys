import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Maharshi Dave. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/maharshi-dave-7bb731322" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:maharshidave658@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="tel:+917048273316" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Phone">
            <Phone size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;