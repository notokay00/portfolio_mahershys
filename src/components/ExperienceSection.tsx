const entries = [
  { role: "Event Management Head", org: "IEEE IAS PDEU Student Branch" },
  { role: "Electrical Lead", org: "IEEE Student Branch PDEU" },
  { role: "Content & Documentation Head", org: "DebSoc PDEU" },
  { role: "Certified", org: "Fundamentals of Deep Learning" },
];

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left column — header */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Systems Log
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Leadership & Certifications
            </h2>
          </div>

          {/* Right column — entries */}
          <div className="md:col-span-8">
            <div className="border-t border-foreground">
              {entries.map((entry, i) => (
                <div
                  key={i}
                  className="border-b border-foreground py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 hover:bg-secondary/50 transition-colors duration-200 px-2"
                >
                  <span className="text-sm font-mono text-foreground">
                    {entry.role}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    @ {entry.org}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-foreground" />
    </section>
  );
};

export default ExperienceSection;
