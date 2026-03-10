const projects = [
  {
    id: "01",
    title: "C14 Betavoltaic Research",
    tags: "Geant4, CASINO, Quantum Tunneling",
    description:
      "Advanced simulations on C14 betavoltaic cells. Presented findings at the Indo Quantum Summit at PDEU.",
  },
  {
    id: "02",
    title: "PDEU-Huddle",
    tags: "Next.js, Prisma, Supabase",
    description:
      "Full-stack web application with robust database and real-time notification modals.",
    link: "https://pdeuhuddle.laxmichitfund.com/",
  },
  {
    id: "03",
    title: "ISRO IRoC-U UAV",
    tags: "System Architecture, Comms, Emergency Response",
    description:
      "System architecture, communication protocols, and emergency response for autonomous drone competition.",
  },
  {
    id: "04",
    title: "Power Fault Detection",
    tags: "MATLAB, Simulink, Machine Learning",
    description:
      "Simulation model and datasets for 15 fault types to train a classification model.",
  },
  {
    id: "05",
    title: "APFC System",
    tags: "Power Systems, Hardware",
    description:
      "Automatic Power Factor Corrector for solar integration and motor loads. 2KVAr capacitor configuration.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Project Index
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Selected Work
          </h2>
        </div>

        <div className="border-t border-foreground">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-b border-foreground grid grid-cols-12 gap-4 py-6 group hover:bg-secondary/50 transition-colors duration-200 px-2"
            >
              <div className="col-span-1 text-xs font-mono text-muted-foreground pt-1">
                {project.id}
              </div>

              <div className="col-span-11 md:col-span-3">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-primary hover:underline underline-offset-2 mt-1 inline-block"
                  >
                    [LIVE ↗]
                  </a>
                )}
              </div>

              <div className="col-span-11 md:col-span-3 md:col-start-5">
                <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                  {project.tags}
                </p>
              </div>

              <div className="col-span-11 md:col-span-5 md:col-start-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-foreground" />
    </section>
  );
};

export default ProjectsSection;
