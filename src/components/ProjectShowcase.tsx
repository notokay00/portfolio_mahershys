import { useState, useRef, useEffect } from "react";

const carouselImages = [
  "/bq25504-pcb",
  "/bq25504-schematic",
  "/betavoltaic-1.jpg",
  "/betavoltaic-2.jpg",
  "/betavoltaic-3.jpg",
  "/geant4",
  "/ggag",
  "/apfc-1.jpg",
  "/aquamind-ui",
  "/aquamind-node",
  "/uav-arch",
  "/zephyr-ui",
  "/zephyr-contract",
];

function SmartImage({
  base,
  alt,
  className,
  onClick,
}: {
  base: string;
  alt: string;
  className?: string;
  onClick?: (resolvedSrc: string, alt: string) => void;
}) {
  const candidates = base.match(/\.(png|jpg|jpeg|webp)$/i)
    ? [base, `${base}.png`, `${base}.jpg`, `${base}.jpeg`]
    : [`${base}.png`, `${base}.jpg`, `${base}.jpeg`, `${base}.webp`, base];

  const [idx, setIdx] = useState(0);
  const currentSrc = candidates[idx];

  return (
    <img
      src={currentSrc}
      alt={alt}
      onClick={() => onClick && onClick(currentSrc, alt)}
      className={className}
      onError={() => {
        if (idx < candidates.length - 1) {
          setIdx(idx + 1);
        }
      }}
    />
  );
}

function FigureCard({
  base,
  alt,
  caption,
  onSelect,
}: {
  base: string;
  alt: string;
  caption: string;
  onSelect: (src: string, alt: string) => void;
}) {
  return (
    <div className="border border-foreground/20 bg-secondary/30 overflow-hidden group">
      <div className="p-3 bg-background/60 flex items-center justify-center">
        <SmartImage
          base={base}
          alt={alt}
          onClick={onSelect}
          className="w-full max-h-[300px] object-contain cursor-zoom-in transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </div>
      <div className="px-3 py-2 border-t border-foreground/10 flex items-center justify-between text-[11px] font-mono text-muted-foreground bg-secondary/50">
        <span>{caption}</span>
        <span className="text-[#1E90FF] opacity-80 group-hover:opacity-100">
          [EXPAND +]
        </span>
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );
  const carouselRef = useRef(null);

  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev - 0.35);
    }, 40);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handlePointerDown = (e: any) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches?.[0].clientX);
  };

  const handlePointerMove = (e: any) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches?.[0].clientX;
    const diff = currentX - startX;
    setRotation((prev) => prev + diff * 0.4);
    setStartX(currentX);
  };

  const handlePointerUp = () => setIsDragging(false);

  const openLightbox = (src: string, alt: string) => {
    setLightbox({ src, alt });
  };

  const radius = 520;

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto space-y-24 md:space-y-32 overflow-hidden text-foreground">
      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-6xl w-full flex justify-between items-center mb-4 text-white font-mono text-xs uppercase tracking-widest">
            <span>{lightbox.alt}</span>
            <button
              onClick={() => setLightbox(null)}
              className="px-3 py-1 border border-white/40 hover:bg-white hover:text-black transition-colors"
            >
              [CLOSE ✕]
            </button>
          </div>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[82vh] max-w-full object-contain border border-white/20 bg-white/5 p-2"
          />
        </div>
      )}

      {/* 1. 3D CAROUSEL SECTION */}
      <div className="space-y-12">
        <div className="flex items-center justify-between border-b border-[#1E90FF]/20 pb-4">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#1E90FF]">
            Visual Telemetry // Project Gallery
          </h2>
          <span className="text-xs font-mono text-muted-foreground">
            [DRAG TO ROTATE // CLICK TO EXPAND]
          </span>
        </div>

        <div
          className="relative h-[320px] md:h-[440px] w-full flex justify-center items-center perspective-[1600px] cursor-grab active:cursor-grabbing mt-8 select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <div
            ref={carouselRef}
            className="relative w-[210px] md:w-[250px] h-[145px] md:h-[170px] transform-style-preserve-3d transition-transform duration-75 ease-out"
            style={{ transform: `rotateX(-5deg) rotateY(${rotation}deg)` }}
          >
            {carouselImages.map((src, idx) => {
              const angle = (idx / carouselImages.length) * 360;
              return (
                <div
                  key={idx}
                  className="absolute inset-0 bg-background border border-foreground/30 shadow-2xl flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110 p-1.5"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    WebkitBoxReflect:
                      "below 6px linear-gradient(transparent, transparent, rgba(0,0,0,0.25))",
                  }}
                >
                  <SmartImage
                    base={src}
                    alt={`Project telemetry ${idx + 1}`}
                    onClick={openLightbox}
                    className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity cursor-zoom-in"
                  />
                  <div className="absolute inset-0 border border-foreground/10 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. PROJECT BREAKDOWN */}
      <div className="space-y-20 md:space-y-28">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#1E90FF] border-b border-[#1E90FF]/20 pb-4">
          Systems Analysis // Deep Dives
        </h2>

        {/* Project 1: High-Gain Boost Converter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#1E90FF]">
                Sub-Volt TEG High-Gain Boost Converter
              </h3>
              <a
                href="https://github.com/notokay00/BQ25504-Energy-Harvester"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase px-2.5 py-1 border border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                [GITHUB ↗]
              </a>
            </div>

            <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground block mb-2">Problem</strong>
                <p>
                  Thermoelectric generators (TEGs) and micro-harvesters produce
                  millivolt-level outputs insufficient to cold-start standard
                  DC-DC boost converters or power wireless MCU nodes.
                </p>
              </div>

              <div>
                <strong className="text-foreground block mb-2">Solution</strong>
                <p>
                  Designed an ultra-low-power, high-gain boost converter and
                  power management circuit around the TI BQ25504 IC to harvest
                  sub-volt TEG energy into supercapacitors for ESP32 telemetry
                  loads.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-foreground/10">
                <div>
                  <strong className="text-foreground block mb-2">
                    Hardware
                  </strong>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>TI BQ25504 Boost IC</li>
                    <li>TEG Source &amp; Supercapacitors</li>
                    <li>ESP32 Load Interface</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground block mb-2">
                    Design &amp; EDA
                  </strong>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>KiCad PCB Layout</li>
                    <li>MPPT Configuration</li>
                    <li>Cold-Start Network</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-foreground/10">
                <strong className="text-foreground block mb-2">Outcome</strong>
                <p>
                  Achieved reliable sub-volt cold-start and programmable Maximum
                  Power Point Tracking (MPPT) with over-voltage and
                  under-voltage protection for autonomous sensor nodes.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-4 md:mt-0">
            <FigureCard
              base="/bq25504-schematic"
              alt="BQ25504 Harvester Schematic"
              caption="FIG 1.1 // TI BQ25504 BOOST HARVESTER SCHEMATIC"
              onSelect={openLightbox}
            />
            <FigureCard
              base="/bq25504-pcb"
              alt="BQ25504 2-Layer PCB Layout"
              caption="FIG 1.2 // 2-LAYER KICAD PCB ROUTING & MPPT NETWORK"
              onSelect={openLightbox}
            />
          </div>
        </div>

        {/* Project 2: 3U CubeSat EPS (No Images - NDA Restricted) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start pt-16 border-t border-foreground/10">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#1E90FF]">
                3U CubeSat Electrical Power Subsystem (EPS)
              </h3>
              <span className="text-xs font-mono uppercase px-2.5 py-1 border border-foreground/20 bg-secondary text-muted-foreground">
                [NDA // RESTRICTED HARDWARE]
              </span>
            </div>

            <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground block mb-2">Problem</strong>
                <p>
                  Nanosatellites require fault-tolerant power distribution,
                  solid-state load switching, and continuous bus telemetry
                  within tight PC/104 form-factor and thermal constraints.
                </p>
              </div>

              <div>
                <strong className="text-foreground block mb-2">Solution</strong>
                <p>
                  Engineered a 2-layer relay and power distribution PCB and
                  flatsat prototype for a 3U CubeSat, integrating solid-state
                  photorelays and precision I2C current/voltage sensors.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/40 border border-foreground/10 p-6 md:p-8 space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <strong className="text-foreground block mb-2">Hardware</strong>
                <ul className="list-disc pl-5 space-y-2">
                  <li>STM32G474RE MCU</li>
                  <li>Toshiba TLP3543A Photorelays</li>
                  <li>INA219 &amp; INA226 Sensors</li>
                </ul>
              </div>
              <div>
                <strong className="text-foreground block mb-2">
                  Architecture
                </strong>
                <ul className="list-disc pl-5 space-y-2">
                  <li>KiCad 2-Layer Routing</li>
                  <li>I2C Power Telemetry</li>
                  <li>Solid-State Bus Protection</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-foreground/10">
              <strong className="text-foreground block mb-2">Outcome</strong>
              <p>
                Delivered a modular flatsat power distribution architecture with
                isolated solid-state switching and real-time per-rail current
                monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Project 3: UAV */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start pt-16 border-t border-foreground/10">
          <div className="space-y-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#1E90FF]">
                ISRO IRoC-U Autonomous UAV
              </h3>
              <a
                href="https://github.com/notokay00/openvins_implementation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase px-2.5 py-1 border border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                [GITHUB ↗]
              </a>
            </div>

            <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground block mb-2">Problem</strong>
                <p>
                  Standard UAV architectures lack the resilience required for
                  GPS-denied autonomous navigation, where sensor glitches or
                  attitude desynchronization can cause catastrophic flight
                  failures.
                </p>
              </div>

              <div>
                <strong className="text-foreground block mb-2">Solution</strong>
                <p>
                  Architected the overarching system framework, state-machine
                  fail-safes, power distribution, and electronics integration
                  for an autonomous quadcopter competing in the ISRO Robotics
                  Challenge.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-foreground/10">
                <div>
                  <strong className="text-foreground block mb-2">
                    Hardware
                  </strong>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Pixhawk 6C Mini / Pixhawk 4</li>
                    <li>FlySky Telemetry &amp; Receivers</li>
                    <li>BLDC ESC Power Train</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground block mb-2">
                    Software
                  </strong>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>ROS 2, OpenVINS &amp; ArduPilot</li>
                    <li>Autonomous State Machine</li>
                    <li>Fail-safe Recovery Logic</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-foreground/10">
                <strong className="text-foreground block mb-2">
                  Failure Analysis &amp; Rapid Rebuild
                </strong>
                <p>
                  During high-altitude field testing just days before the final
                  ISRO submission deadline, the test-bench airframe suffered an
                  in-flight crash. Led a rapid root-cause teardown, rebuilt the
                  power and avionics harness from scratch, and hardened the
                  state-machine recovery logic to complete the submission on
                  schedule.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-4 md:mt-0">
            <FigureCard
              base="/uav-arch"
              alt="UAV Autonomous State Machine Architecture"
              caption="FIG 3.1 // AUTONOMOUS FLIGHT & FAIL-SAFE STATE MACHINE"
              onSelect={openLightbox}
            />

            <div className="border border-foreground/20 bg-secondary/30 overflow-hidden">
              <div className="p-3 bg-background/60 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full max-h-[300px] object-contain bg-black"
                >
                  <source src="/uav-test.mp4" type="video/mp4" />
                  <source src="/uav-test.mov" />
                  <source src="/uav-test.webm" type="video/webm" />
                </video>
              </div>
              <div className="px-3 py-2 border-t border-foreground/10 flex items-center justify-between text-[11px] font-mono text-muted-foreground bg-secondary/50">
                <span>
                  FIG 3.2 // PRE-SUBMISSION CRASH LOG — REBUILT 48H BEFORE
                  DEADLINE
                </span>
                <span className="text-red-500 font-semibold">[TEST LOG]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4: Betavoltaic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start pt-16 border-t border-foreground/10">
          <div className="grid grid-cols-1 gap-6 md:order-1 order-2 mt-4 md:mt-0">
            <FigureCard
              base="/betavoltaic-1.jpg"
              alt="Carbon-14 Beta Emission Spectrum"
              caption="FIG 4.1 // C-14 BETA EMISSION SPECTRUM (AVG ~49.5 KEV)"
              onSelect={openLightbox}
            />
            <FigureCard
              base="/geant4"
              alt="Geant4 Monte Carlo Particle Trajectory Simulation"
              caption="FIG 4.2 // GEANT4 MONTE CARLO ELECTRON TRAJECTORY MODEL"
              onSelect={openLightbox}
            />
          </div>

          <div className="space-y-8 md:order-2 order-1">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#1E90FF]">
                C14 Betavoltaic Battery Research
              </h3>
              <a
                href="/Indo-Quantum Summit Gujarat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase px-2.5 py-1 border border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                [POSTER PDF ↗]
              </a>
            </div>

            <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground block mb-2">Problem</strong>
                <p>
                  Deep space missions and remote terrestrial sensors require
                  power sources that outlive conventional chemical batteries
                  without adding massive weight.
                </p>
              </div>

              <div>
                <strong className="text-foreground block mb-2">Solution</strong>
                <p>
                  Conducted Monte Carlo simulations of Carbon-14 betavoltaic
                  micro-batteries utilizing Geant4 and CASINO software to model
                  electron trajectories, quantum tunneling, and energy
                  conversion.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-foreground/10">
                <div>
                  <strong className="text-foreground block mb-2">
                    Core Tech
                  </strong>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Carbon-14 Beta Emitters</li>
                    <li>Semiconductor Junctions</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground block mb-2">
                    Software
                  </strong>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Geant4</li>
                    <li>CASINO</li>
                    <li>MATLAB</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-foreground/10">
                <strong className="text-foreground block mb-2">Outcome</strong>
                <p>
                  Modeled energy conversion efficiency and presented research
                  findings on sustainable atomic battery architectures at the
                  Indo Quantum Summit at PDEU.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project 5: AquaMind */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start pt-16 border-t border-foreground/10">
          <div className="space-y-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#1E90FF]">
                AquaMind // Smart Water Grid IoT
              </h3>
              <a
                href="https://github.com/notokay00/aqua-mind-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase px-2.5 py-1 border border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                [GITHUB ↗]
              </a>
            </div>

            <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground block mb-2">Problem</strong>
                <p>
                  Campus and residential water distribution tanks suffer from
                  overflow waste and unmonitored depletion due to manual level
                  checking.
                </p>
              </div>

              <div>
                <strong className="text-foreground block mb-2">Solution</strong>
                <p>
                  Built an end-to-end ultrasonic telemetry node and full-stack
                  real-time cloud dashboard for automated water level tracking
                  and anomaly alerts.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-foreground/10">
                <div>
                  <strong className="text-foreground block mb-2">
                    Hardware
                  </strong>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>ESP32 Microcontroller</li>
                    <li>JSN-SR04T Ultrasonic Sensor</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground block mb-2">
                    Software
                  </strong>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Next.js &amp; React</li>
                    <li>Supabase &amp; Tailwind CSS</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-foreground/10">
                <strong className="text-foreground block mb-2">Outcome</strong>
                <p>
                  Deployed live sensor-to-cloud telemetry providing continuous
                  tank capacity visualization and historical consumption
                  analytics.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-4 md:mt-0">
            <FigureCard
              base="/aquamind-node"
              alt="AquaMind Hardware & Cloud Telemetry Architecture"
              caption="FIG 5.1 // ESP32 TELEMETRY & SAFETY INTERLOCK FLOW"
              onSelect={openLightbox}
            />
            <FigureCard
              base="/aquamind-ui"
              alt="AquaMind Live Control Dashboard"
              caption="FIG 5.2 // REAL-TIME PUMP CONTROL & ANALYTICS UI"
              onSelect={openLightbox}
            />
          </div>
        </div>

        {/* Project 6: Zephyr DAO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start pt-16 border-t border-foreground/10">
          <div className="grid grid-cols-1 gap-6 md:order-1 order-2 mt-4 md:mt-0">
            <FigureCard
              base="/zephyr-ui"
              alt="Zephyr DAO Governance Interface"
              caption="FIG 6.1 // DECENTRALIZED PROPOSAL & VOTING DASHBOARD"
              onSelect={openLightbox}
            />
            <FigureCard
              base="/zephyr-contract"
              alt="Zephyr Smart Contract Architecture"
              caption="FIG 6.2 // SEPOLIA TESTNET SMART CONTRACT TELEMETRY"
              onSelect={openLightbox}
            />
          </div>

          <div className="space-y-8 md:order-2 order-1">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#1E90FF]">
                Zephyr // Decentralized Governance DAO
              </h3>
              <a
                href="https://github.com/notokay00/zephyr-dao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase px-2.5 py-1 border border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                [GITHUB ↗]
              </a>
            </div>

            <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground block mb-2">Problem</strong>
                <p>
                  Traditional organizational voting mechanisms lack
                  transparency, auditability, and are vulnerable to centralized
                  manipulation.
                </p>
              </div>

              <div>
                <strong className="text-foreground block mb-2">Solution</strong>
                <p>
                  Developed a decentralized governance platform on the Ethereum
                  Sepolia testnet utilizing immutable smart contracts and
                  reputation-weighted voting.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-foreground/10">
                <div>
                  <strong className="text-foreground block mb-2">
                    Architecture
                  </strong>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Web3 &amp; Blockchain</li>
                    <li>Sepolia Testnet</li>
                    <li>Reputation Systems</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground block mb-2">
                    Software
                  </strong>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>ethers.js</li>
                    <li>Solidity</li>
                    <li>Next.js &amp; React</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-foreground/10">
                <strong className="text-foreground block mb-2">Outcome</strong>
                <p>
                  Successfully deployed governance smart contracts, enabling
                  secure, transparent, and auditable voting workflows for
                  distributed teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project 7: Solar Cold Storage (No Images - System Design Phase) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start pt-16 border-t border-foreground/10">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#1E90FF]">
                Hydronic Solar-Powered Smart Cold Storage
              </h3>
              <span className="text-xs font-mono uppercase px-2.5 py-1 border border-foreground/20 bg-secondary text-muted-foreground">
                [SYSTEM ARCHITECTURE]
              </span>
            </div>

            <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground block mb-2">Problem</strong>
                <p>
                  Off-grid agricultural refrigeration typically relies on
                  massive, expensive electrochemical battery banks that degrade
                  quickly and scale poorly.
                </p>
              </div>

              <div>
                <strong className="text-foreground block mb-2">Solution</strong>
                <p>
                  Designed a dual-domain energy architecture utilizing a 300W
                  solar PV array to freeze a 60L water tank, storing 2.51 kWh of
                  cooling as latent heat. A small 12.8V LiFePO4 battery solely
                  powers an ESP32 and hydronic glycol circulation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/40 border border-foreground/10 p-6 md:p-8 space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <strong className="text-foreground block mb-2">
                  Hardware Spec
                </strong>
                <ul className="list-disc pl-5 space-y-2">
                  <li>ESP32 &amp; LiFePO4 BMS</li>
                  <li>Secop BD35F BLDC</li>
                  <li>DHT22 &amp; DS18B20</li>
                </ul>
              </div>
              <div>
                <strong className="text-foreground block mb-2">
                  Control Logic
                </strong>
                <ul className="list-disc pl-5 space-y-2">
                  <li>C/C++ Finite State Machine</li>
                  <li>Sensor Telemetry</li>
                  <li>Hysteresis Pump Control</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-foreground/10">
              <strong className="text-foreground block mb-2">Outcome</strong>
              <p>
                Separated high-power refrigeration physics from low-power
                supervisory control, achieving a calculated 72-hour passive
                thermal autonomy target.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 & 4. LEARNING AND TOOLS MATRIX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-20 border-t border-foreground/20">
        {/* Learning */}
        <div className="space-y-8">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#1E90FF] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Active Research Directory
          </h2>
          <ul className="space-y-4 text-sm md:text-base text-muted-foreground font-mono">
            <li className="flex gap-3">
              <span>&gt;</span> Space-grade power electronics &amp;
              radiation-hardened topologies
            </li>
            <li className="flex gap-3">
              <span>&gt;</span> Plasma diagnostics (Langmuir probes) &amp;
              Townsend breakdown
            </li>
            <li className="flex gap-3">
              <span>&gt;</span> Sub-volt energy harvesting &amp; solid-state
              power distribution
            </li>
            <li className="flex gap-3">
              <span>&gt;</span> Autonomous flight control &amp; UAV telemetry
              systems
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div className="space-y-8">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#1E90FF]">
            Operational Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm md:text-base text-muted-foreground">
            <div>
              <strong className="text-foreground font-mono text-xs uppercase block mb-4 border-b border-foreground/10 pb-2">
                Hardware &amp; Power
              </strong>
              <ul className="space-y-2">
                <li>STM32, ESP32 &amp; Pixhawk</li>
                <li>MOSFET / IGBT Converters</li>
                <li>Photorelays &amp; I2C Telemetry</li>
              </ul>
            </div>
            <div>
              <strong className="text-foreground font-mono text-xs uppercase block mb-4 border-b border-foreground/10 pb-2">
                Programming
              </strong>
              <ul className="space-y-2">
                <li>C/C++ &amp; Embedded C</li>
                <li>Python &amp; TypeScript</li>
                <li>Next.js, React &amp; Supabase</li>
              </ul>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <strong className="text-foreground font-mono text-xs uppercase block mb-4 border-b border-foreground/10 pb-2">
                EDA &amp; Simulation Tools
              </strong>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li>KiCad, EasyEDA &amp; TINA-TI</li>
                <li>MATLAB &amp; Simulink</li>
                <li>Geant4 &amp; CASINO</li>
                <li>Ubuntu Linux &amp; Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 5. PRESENTATIONS & PUBLICATIONS */}
      <div className="pt-20 border-t border-foreground/20 mt-16">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#1E90FF] mb-8">
          Academic Discourse // Presentations
        </h2>

        <div className="space-y-6">
          {/* IEEE SAMPARK Presentation */}
          <div className="border border-foreground/10 bg-secondary/50 p-6 md:p-8 hover:border-[#1E90FF]/30 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Solar-Integrated APFC Architecture
                </h3>
                <p className="text-sm font-mono text-[#1E90FF] mt-1">
                  IEEE SAMPARK Conference
                </p>
              </div>
              <div className="flex items-center gap-3 self-start flex-wrap">
                <span className="text-xs font-mono text-muted-foreground bg-background px-3 py-1 border border-foreground/10">
                  TECHNICAL PRESENTATION
                </span>
                <a
                  href="/APFC Poster Presentation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase px-3 py-1 border border-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  [VIEW POSTER ↗]
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-3xl">
              Presented the design and hardware implementation of an Automatic
              Power Factor Corrector (APFC) system optimized for solar
              integration. Detailed the specification of a 2KVAr capacitor
              configuration to maximize correction accuracy and system stability
              under heavy motor loads.
            </p>
          </div>

          {/* Indo Quantum Summit Presentation */}
          <div className="border border-foreground/10 bg-secondary/50 p-6 md:p-8 hover:border-[#1E90FF]/30 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Sustainable Atomic Batteries: C14 Betavoltaics
                </h3>
                <p className="text-sm font-mono text-[#1E90FF] mt-1">
                  Indo Quantum Summit, Pandit Deendayal Energy University
                </p>
              </div>
              <div className="flex items-center gap-3 self-start flex-wrap">
                <span className="text-xs font-mono text-muted-foreground bg-background px-3 py-1 border border-foreground/10">
                  POSTER PRESENTATION
                </span>
                <a
                  href="/Indo-Quantum Summit Gujarat.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase px-3 py-1 border border-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  [VIEW POSTER ↗]
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-3xl">
              Presented comprehensive research on quantum tunneling and energy
              conversion in Carbon-14 betavoltaic cells. Demonstrated energy
              output modeling using Monte Carlo simulations via Geant4 and
              CASINO to academic and industry researchers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}