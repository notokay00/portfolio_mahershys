import { motion } from "framer-motion";
import { User, BookOpen, ChefHat } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-4xl mx-auto items-start">
          {/* Profile picture placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="w-56 h-56 rounded-2xl bg-secondary border border-border flex items-center justify-center glow-md">
              <User size={64} className="text-muted-foreground" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a 4th-semester Electrical Engineering undergraduate with a deep passion for{" "}
              <span className="text-foreground font-medium">digital logic</span>,{" "}
              <span className="text-foreground font-medium">control systems</span>, and bridging the
              gap between hardware and software. I believe the most exciting innovations happen at
              the intersection of disciplines — where circuits meet code, and power systems meet
              machine learning.
            </p>

            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen size={14} />
                Beyond Engineering
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <BookOpen size={14} className="mt-1 shrink-0 text-primary/60" />
                  Organizing events and curating conversations for the{" "}
                  <span className="text-foreground">Jharokha literature club</span>.
                </p>
                <p className="flex items-start gap-2">
                  <ChefHat size={14} className="mt-1 shrink-0 text-primary/60" />
                  On an eternal quest to cook the perfect mushroom pasta.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
