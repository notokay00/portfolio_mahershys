import { motion } from "framer-motion";
import { Users, Zap, BookOpen, Award } from "lucide-react";

const timeline = [
  {
    icon: Users,
    title: "IEEE IAS PDEU Student Branch",
    subtitle: "Event Management Head",
    description:
      "Leading event planning and execution for the IEEE Industry Applications Society student chapter.",
  },
  {
    icon: Zap,
    title: "IEEE Student Branch PDEU",
    subtitle: "Electrical Lead",
    description:
      "Spearheading electrical engineering initiatives, workshops, and technical projects for the IEEE student branch.",
  },
  {
    icon: BookOpen,
    title: "DebSoc PDEU",
    subtitle: "Content & Documentation Head",
    description:
      "Managing content creation and documentation for the university debating society.",
  },
  {
    icon: Award,
    title: "Certifications",
    subtitle: "Fundamentals of Deep Learning",
    description:
      "Completed certification covering neural networks, CNNs, and deep learning fundamentals.",
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Experience & Leadership</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
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