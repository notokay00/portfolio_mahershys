import { motion } from "framer-motion";
import { Atom, Plane, Activity, Globe, Zap } from "lucide-react";

const projects = [
  {
    icon: Atom,
    title: "C14 Betavoltaic Battery Research",
    tags: ["Geant4", "CASINO", "Quantum Tunneling"],
    description:
      "Conducted advanced simulations and research on C14 betavoltaic cells, presenting findings at the Indo Quantum Summit at PDEU.",
  },
  {
    icon: Plane,
    title: "ISRO IRoC-U Autonomous UAV",
    tags: ["System Architecture", "Electronics", "Comms"],
    description:
      "Designed the system architecture, communication protocols, and emergency response mechanisms for an autonomous drone competition.",
  },
  {
    icon: Activity,
    title: "Power Distribution Fault Detection",
    tags: ["MATLAB", "Simulink", "Machine Learning"],
    description:
      "Developed a simulation model and generated datasets for 15 fault types to train a classification model.",
  },
  {
    icon: Globe,
    title: "PDEU-Huddle Web App",
    tags: ["Next.js", "Prisma", "Supabase"],
    description:
      "Full-stack web application featuring a robust database and real-time notification modals.",
  },
  {
    icon: Zap,
    title: "APFC System Design",
    tags: ["Power Systems", "Hardware"],
    description:
      "Designed an Automatic Power Factor Corrector for solar integration and motor loads, featuring a 2KVAr capacitor configuration.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <project.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
