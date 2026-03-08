import { motion } from "framer-motion";
import { User, BookOpen, ChefHat, Rocket } from "lucide-react";

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
          <h2 className="font-heading text-3xl md:text-4xl font-bold">About Me</h2>
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
              I'm Maharshi Dave — an aspiring aerospace and electrical engineer with a deep
              fascination for{" "}
              <span className="text-foreground font-medium">ion thrusters</span>,{" "}
              <span className="text-foreground font-medium">Hall effect thrusters</span>, and{" "}
              <span className="text-foreground font-medium">electromagnetic propulsion</span>.
              I'm actively building a foundation in electronics, control systems, and plasma
              propulsion to contribute to the future of sustainable deep-space exploration.
            </p>

            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Rocket size={14} />
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
                  On an eternal quest to perfect the ultimate mushroom pasta recipe.
                </p>
                <p className="flex items-start gap-2">
                  <User size={14} className="mt-1 shrink-0 text-primary/60" />
                  Proudly serving as the{" "}
                  <span className="text-foreground">"Chief Scamming Officer"</span> at Laxmi Chit Fund.
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