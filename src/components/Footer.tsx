const Footer = () => {
  return (
    <footer id="contact" className="border-t border-foreground">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a
              href="mailto:maharshidave658@gmail.com"
              className="hover:text-primary transition-colors duration-200"
            >
              maharshidave658@gmail.com
            </a>
            <a
              href="tel:+917048273316"
              className="hover:text-primary transition-colors duration-200"
            >
              +91 7048273316
            </a>
            <a
              href="https://www.linkedin.com/in/maharshi-dave-7bb731322"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              GitHub ↗
            </a>
          </div>

          <p className="text-muted-foreground">
            © {new Date().getFullYear()} M. Dave
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
