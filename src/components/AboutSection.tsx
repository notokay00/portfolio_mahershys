import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left — Bio */}
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Operator Bio
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              About
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              I'm Maharshi Dave — an aspiring aerospace and electrical engineer building a
              foundation in{" "}
              <span className="text-foreground">plasma propulsion</span>,{" "}
              <span className="text-foreground">control systems</span>, and{" "}
              <span className="text-foreground">electronics</span>. My work centers on
              ion thrusters, Hall effect thrusters, and electromagnetic propulsion —
              technologies critical for sustainable deep-space exploration.
            </p>

            <div className="border-t border-foreground pt-5 mt-8">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Anomalies:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  → Organizing events for the{" "}
                  <span className="text-foreground">Jharokha literature club</span>.
                </li>
                <li>
                  → On an eternal quest to perfect the ultimate mushroom pasta recipe.
                </li>
                <li>
                  → Proudly serving as{" "}
                  <span className="text-foreground">"Chief Scamming Officer"</span> at
                  Laxmi Chit Fund.
                </li>
              </ul>
            </div>
          </div>

          {/* Right — Profile placeholder */}
          <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-56 h-72 border border-foreground bg-secondary flex items-center justify-center">
              <User size={48} className="text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-foreground" />
    </section>
  );
};

export default AboutSection;
