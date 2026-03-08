import { motion } from "framer-motion";
import { FlaskConical, Users, Wind } from "lucide-react";

const timeline = [
  {
    icon: FlaskConical,
    title: "Indo Quantum Summit",
    subtitle: "Research Presenter",
    description:
      "Presented research on C14 Betavoltaic batteries with simulations in Geant4 and CASINO at PDEU.",
  },
  {
    icon: Users,
    title: "IEEE IAS Student Branch",
    subtitle: "Chairperson",
    description:
      "Led the IEEE Industry Applications Society student chapter, organizing technical workshops and events.",
  },
  {
    icon: Wind,
    title: "Suzlon Renewathon",
    subtitle: "Hackathon Participant",
    description:
      "Participated in a hackathon focused on wind energy innovation and sustainability solutions.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">Research & Experience</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-primary">
                  <item.icon size={18} />
                </div>
                <p className="text-xs font-mono text-primary mb-1 uppercase tracking-wider">
                  {item.subtitle}
                </p>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
