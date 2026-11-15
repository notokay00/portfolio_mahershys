import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-b border-foreground/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Text Column */}
        <div className="md:col-span-8 space-y-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70 mb-2">
              Engineer Profile
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
              About
            </h2>
          </div>

          <div className="space-y-4 text-sm md:text-base font-mono text-foreground/85 leading-relaxed max-w-2xl">
            <p>
              I&apos;m Maharshi Dave — an electrical and aerospace engineering
              researcher building a foundation in power electronics, plasma
              propulsion, nuclear engineering, and autonomous control systems.
            </p>
            <p>
              My work spans from designing sub-volt energy harvesting circuits
              and 3U CubeSat electrical power subsystems to C14 betavoltaic
              quantum tunneling simulations and electromagnetic propulsion —
              technologies critical for resilient deep-space exploration.
            </p>
          </div>

          {/* Beyond the Lab */}
          <div className="pt-6 border-t border-foreground/15 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70 mb-3">
              Beyond the Lab:
            </p>
            <ul className="space-y-2 text-sm md:text-base font-mono text-foreground/90">
              <li className="flex items-start gap-2.5">
                <span className="text-[#1E90FF] font-bold">→</span>
                <span>Writing poetry.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#1E90FF] font-bold">→</span>
                <span>Reading books and watching movies &amp; series.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Portrait Column */}
        <div className="md:col-span-4 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[300px] aspect-[3/4] border border-foreground/25 bg-secondary overflow-hidden shadow-md">
            <img
              src="/profile.jpg"
              alt="Maharshi Dave"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-3 right-3 bg-background/95 border border-foreground/25 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-foreground font-semibold">
              B.Tech EE // PDEU
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;