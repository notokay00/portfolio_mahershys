const HeroSection = () => {
  return (
    <section id="home" className="pt-14">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-4xl">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-foreground">
            Advancing Propulsion & Autonomous Systems.
          </h1>

          <p className="mt-8 text-sm md:text-base font-mono text-muted-foreground max-w-2xl leading-relaxed">
            Bridging electrical systems with sustainable propulsion for deep-space
            exploration. Focus: Ion thrusters, Hall effect, C14 Betavoltaics.
          </p>

          <div className="mt-10 flex flex-wrap gap-6 text-xs font-mono uppercase tracking-[0.15em]">
            <a
              href="#projects"
              className="text-primary hover:underline underline-offset-4 transition-all duration-200"
            >
              View Research →
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>

      <hr className="border-foreground" />
    </section>
  );
};

export default HeroSection;
