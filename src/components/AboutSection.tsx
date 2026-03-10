import React from "react";
export default function AboutSection() {
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

            <div className="text-sm text-muted-foreground leading-relaxed mb-6 space-y-4">
              <p>
                I&apos;m Maharshi Dave &mdash; an aspiring aerospace and
                electrical engineer building a foundation in{" "}
                <span className="text-foreground">nuclear engineering</span>,{" "}
                <span className="text-foreground">plasma propulsion</span>, and{" "}
                <span className="text-foreground">control systems</span>.
              </p>
              <p>
                My research spans from C14 betavoltaic quantum tunneling
                simulations to exploring nuclear thermal and electromagnetic
                propulsion &mdash; technologies critical for sustainable
                deep-space exploration.
              </p>
            </div>

            <div className="border-t border-foreground pt-5 mt-8">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Anomalies:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  &rarr; Organizing events for the{" "}
                  <span className="text-foreground">
                    Jharokha literature club
                  </span>
                  .
                </li>
                <li>
                  &rarr; On an eternal quest to perfect the ultimate mushroom
                  pasta recipe.
                </li>
                <li>
                  &rarr; Proudly serving as{" "}
                  <span className="text-foreground">
                    &quot;Chief Scamming Officer&quot;
                  </span>{" "}
                  at Laxmi Chit Fund.
                </li>
              </ul>
            </div>
          </div>

          {/* Right — Profile Image */}
          <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-56 h-72 border border-foreground bg-secondary">
              <img
                src="/profile.jpg"
                alt="Maharshi Dave"
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* Technical Caption Box */}
              <div className="absolute bottom-2 right-2 bg-background px-2 py-1 text-[10px] font-mono border border-foreground uppercase text-foreground shadow-sm">
                Fig 1. Operator
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-foreground" />
    </section>
  );
}
