const projects = [
  {
    id: "01",
    title: "C14 Betavoltaic Research",
    tags: "Geant4, CASINO, Quantum Tunneling",
    description:
      "Advanced Monte Carlo simulations on Carbon-14 betavoltaic micro-batteries. Presented findings at the Indo Quantum Summit at PDEU.",
  },
  {
    id: "02",
    title: "High-Gain Boost Converter (TEG Harvester)",
    tags: "BQ25504, Supercapacitors, ESP32, KiCad",
    description:
      "Ultra-low-power sub-volt energy harvesting boost converter circuit for thermoelectric generators with cold-start and MPPT.",
    link: "https://github.com/notokay00/BQ25504-Energy-Harvester",
    linkLabel: "[GITHUB ↗]",
  },
  {
    id: "03",
    title: "3U CubeSat EPS & Flatsat",
    tags: "STM32G474RE, TLP3543A, INA219/INA226, KiCad",
    description:
      "2-layer power distribution and solid-state photorelay switching PCB with real-time I2C current telemetry for a 3U student satellite.",
  },
  {
    id: "04",
    title: "ISRO IRoC-U UAV",
    tags: "Pixhawk, ArduPilot, Comms, Fail-Safe Systems",
    description:
      "System architecture, power electronics, communication protocols, and emergency response for an autonomous quadcopter.",
  },
  {
    id: "05",
    title: "AquaMind Smart Water Grid",
    tags: "ESP32, JSN-SR04T, Next.js, Supabase, Tailwind",
    description:
      "Full-stack smart water tank IoT telemetry dashboard paired with ultrasonic liquid-level sensing hardware nodes.",
  },
  {
    id: "06",
    title: "PDEU-Huddle",
    tags: "Next.js, Prisma, Supabase",
    description:
      "Full-stack campus web application with relational database architecture and real-time notification modals.",
    link: "https://pdeuhuddle.laxmichitfund.com/",
    linkLabel: "[LIVE ↗]",
  },
  {
    id: "07",
    title: "Power Fault Detection",
    tags: "MATLAB, Simulink, Machine Learning",
    description:
      "Power distribution grid simulation model generating synthetic datasets across 15 fault types to train ML classification models.",
  },
  {
    id: "08",
    title: "APFC System",
    tags: "Power Electronics, Capacitor Banks, Hardware",
    description:
      "Solar-integrated Automatic Power Factor Corrector utilizing a 2kVAr capacitor bank configuration to mitigate motor startup voltage sags.",
  },
  {
    id: "09",
    title: "Zephyr Decentralized Platform",
    tags: "Solidity, Sepolia Testnet, Next.js, Web3",
    description:
      "Decentralized innovation platform and smart contract dApp deployed on the Ethereum Sepolia testnet.",
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
                    {project.linkLabel || "[LIVE ↗]"}
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