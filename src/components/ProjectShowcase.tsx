import { useState, useRef, useEffect } from "react";

const carouselImages = [
  "/betavoltaic-1.jpg.png",
  "/betavoltaic-2.jpg.png",
  "/apfc-1.jpg.png",
  "/geant4.jpeg",
  "/betavoltaic-3.jpg.png",
];

export default function ProjectShowcase() {
  // Carousel State
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  // Auto-rotate
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev - 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Drag Handlers
  const handlePointerDown = (e: any) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches?.[0].clientX);
  };

  const handlePointerMove = (e: any) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches?.[0].clientX;
    const diff = currentX - startX;
    setRotation((prev) => prev + diff * 0.5);
    setStartX(currentX);
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-32 overflow-hidden text-foreground">
      
      {/* 1. 3D CAROUSEL SECTION */}
      <div className="space-y-12">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/20 pb-4">
          Visual Telemetry // Project Gallery
        </h2>
        
        <div 
          className="relative h-[400px] w-full flex justify-center items-center perspective-[1200px] cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <div 
            ref={carouselRef}
            className="relative w-[300px] h-[200px] transform-style-preserve-3d transition-transform duration-75 ease-out"
            style={{ transform: `rotateY(${rotation}deg)` }}
          >
            {carouselImages.map((src, idx) => {
              const angle = (idx / carouselImages.length) * 360;
              return (
                <div
                  key={idx}
                  className="absolute inset-0 bg-secondary border border-foreground/30 shadow-2xl flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(350px)`,
                    WebkitBoxReflect: "below 5px linear-gradient(transparent, transparent, rgba(0,0,0,0.2))"
                  }}
                >
                  <img src={src} alt="Project" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 border border-foreground/10 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. PROJECT BREAKDOWN */}
      <div className="space-y-16">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/20 pb-4">
          Systems Analysis // Deep Dives
        </h2>

        {/* Project 1: High-Gain Boost Converter (BQ25504) */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl font-bold font-heading">Sub-Volt TEG High-Gain Boost Converter</h3>
              <a
                href="https://github.com/notokay00/BQ25504-Energy-Harvester"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase px-2.5 py-1 border border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                [GITHUB ↗]
              </a>
            </div>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground block mb-1">Problem</strong>
                <p>Thermoelectric generators (TEGs) and micro-harvesters produce millivolt-level outputs insufficient to cold-start standard DC-DC boost converters or power wireless MCU nodes.</p>
              </div>
              
              <div>
                <strong className="text-foreground block mb-1">Solution</strong>
                <p>Designed an ultra-low-power, high-gain boost converter and power management circuit around the TI BQ25504 IC to harvest sub-volt TEG energy into supercapacitors for ESP32 telemetry loads.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-foreground/10">
                <div>
                  <strong className="text-foreground block mb-1">Hardware</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>TI BQ25504 Boost IC</li>
                    <li>TEG Source &amp; Supercapacitors</li>
                    <li>ESP32 Load Interface</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground block mb-1">Design &amp; EDA</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>KiCad PCB Layout</li>
                    <li>MPPT Configuration</li>
                    <li>Cold-Start Network</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-foreground/10">
                <strong className="text-foreground block mb-1">Outcome</strong>
                <p>Achieved reliable sub-volt cold-start and programmable Maximum Power Point Tracking (MPPT) with over-voltage and under-voltage protection for autonomous sensor nodes.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-secondary border border-foreground/20 flex items-center justify-center text-xs text-muted-foreground font-mono">[SCHEMATIC: BQ25504]</div>
            <div className="aspect-square bg-secondary border border-foreground/20 flex items-center justify-center text-xs text-muted-foreground font-mono">[PCB: 2-LAYER HARVESTER]</div>
          </div>
        </div>

        {/* Project 2: 3U CubeSat EPS */}
        <div className="grid md:grid-cols-2 gap-12 items-start pt-16 border-t border-foreground/10">
          <div className="grid grid-cols-2 gap-4 md:order-1 order-2">
            <div className="aspect-square bg-secondary border border-foreground/20 flex items-center justify-center text-xs text-muted-foreground font-mono">[PCB: EPS DISTRIBUTION]</div>
            <div className="aspect-square bg-secondary border border-foreground/20 flex items-center justify-center text-xs text-muted-foreground font-mono">[FLATSAT TELEMETRY]</div>
          </div>

          <div className="space-y-6 md:order-2 order-1">
            <h3 className="text-2xl font-bold font-heading">3U CubeSat Electrical Power Subsystem (EPS)</h3>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground block mb-1">Problem</strong>
                <p>Nanosatellites require fault-tolerant power distribution, solid-state load switching, and continuous bus telemetry within tight PC/104 form-factor and thermal constraints.</p>
              </div>
              
              <div>
                <strong className="text-foreground block mb-1">Solution</strong>
                <p>Engineered a 2-layer relay and power distribution PCB and flatsat prototype for a 3U CubeSat, integrating solid-state photorelays and precision I2C current/voltage sensors.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-foreground/10">
                <div>
                  <strong className="text-foreground block mb-1">Hardware</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>STM32G474RE MCU</li>
                    <li>Toshiba TLP3543A Photorelays</li>
                    <li>INA219 &amp; INA226 Sensors</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground block mb-1">Architecture</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>KiCad 2-Layer Routing</li>
                    <li>I2C Power Telemetry</li>
                    <li>Solid-State Bus Protection</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-foreground/10">
                <strong className="text-foreground block mb-1">Outcome</strong>
                <p>Delivered a modular flatsat power distribution architecture with isolated solid-state switching and real-time per-rail current monitoring.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: UAV */}
        <div className="grid md:grid-cols-2 gap-12 items-start pt-16 border-t border-foreground/10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading">ISRO IRoC-U Autonomous UAV</h3>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground block mb-1">Problem</strong>
                <p>Standard UAV architectures lack the resilience required for complex, autonomous operational environments, often failing under communication blackouts.</p>
              </div>
              
              <div>
                <strong className="text-foreground block mb-1">Solution</strong>
                <p>Architected the overarching system framework, power distribution, and electronics integration for an autonomous quadcopter competing in the ISRO Robotics Challenge.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-foreground/10">
                <div>
                  <strong className="text-foreground block mb-1">Hardware</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Pixhawk 6C Mini / Pixhawk 4</li>
                    <li>FlySky Telemetry &amp; Receivers</li>
                    <li>BLDC ESC Power Train</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground block mb-1">Software</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>ArduPilot &amp; C/C++</li>
                    <li>Telemetry Protocols</li>
                    <li>Fail-safe Algorithms</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-foreground/10">
                <strong className="text-foreground block mb-1">Outcome</strong>
                <p>Designed robust communication protocols and implemented fail-safe emergency response mechanisms to ensure operational reliability during autonomous flight testing.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-secondary border border-foreground/20 flex items-center justify-center text-xs text-muted-foreground font-mono">[IMAGE: UAV SYS-ARCH]</div>
            <div className="aspect-square bg-secondary border border-foreground/20 flex items-center justify-center text-xs text-muted-foreground font-mono">[VIDEO: FLIGHT TEST]</div>
          </div>
        </div>

        {/* Project 4: Betavoltaic */}
        <div className="grid md:grid-cols-2 gap-12 items-start pt-16 border-t border-foreground/10">
          <div className="grid grid-cols-2 gap-4 md:order-1 order-2">
            <img src="/betavoltaic-1.jpg.png" alt="CASINO Simulation" className="aspect-square object-cover bg-secondary border border-foreground/20" />
            <img src="/geant4.jpeg" alt="Geant4 Simulation" className="aspect-square object-cover bg-secondary border border-foreground/20" />
          </div>

          <div className="space-y-6 md:order-2 order-1">
            <h3 className="text-2xl font-bold font-heading">C14 Betavoltaic Battery Research</h3>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground block mb-1">Problem</strong>
                <p>Deep space missions and remote terrestrial sensors require power sources that outlive conventional chemical batteries without adding massive weight.</p>
              </div>
              
              <div>
                <strong className="text-foreground block mb-1">Solution</strong>
                <p>Conducted Monte Carlo simulations of Carbon-14 betavoltaic micro-batteries utilizing Geant4 and CASINO software to model electron trajectories, quantum tunneling, and energy conversion.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-foreground/10">
                <div>
                  <strong className="text-foreground block mb-1">Core Tech</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Carbon-14 Beta Emitters</li>
                    <li>Semiconductor Junctions</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground block mb-1">Software</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Geant4</li>
                    <li>CASINO</li>
                    <li>MATLAB</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-foreground/10">
                <strong className="text-foreground block mb-1">Outcome</strong>
                <p>Modeled energy conversion efficiency and presented research findings on sustainable atomic battery architectures at the Indo Quantum Summit at PDEU.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project 5: AquaMind */}
        <div className="grid md:grid-cols-2 gap-12 items-start pt-16 border-t border-foreground/10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading">AquaMind // Smart Water Grid IoT</h3>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground block mb-1">Problem</strong>
                <p>Campus and residential water distribution tanks suffer from overflow waste and unmonitored depletion due to manual level checking.</p>
              </div>
              
              <div>
                <strong className="text-foreground block mb-1">Solution</strong>
                <p>Built an end-to-end ultrasonic telemetry node and full-stack real-time cloud dashboard for automated water level tracking and anomaly alerts.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-foreground/10">
                <div>
                  <strong className="text-foreground block mb-1">Hardware</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>ESP32 Microcontroller</li>
                    <li>JSN-SR04T Ultrasonic Sensor</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground block mb-1">Software</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Next.js &amp; React</li>
                    <li>Supabase &amp; Tailwind CSS</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-foreground/10">
                <strong className="text-foreground block mb-1">Outcome</strong>
                <p>Deployed live sensor-to-cloud telemetry providing continuous tank capacity visualization and historical consumption analytics.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-secondary border border-foreground/20 flex items-center justify-center text-xs text-muted-foreground font-mono">[NODE: ESP32 + JSN-SR04T]</div>
            <div className="aspect-square bg-secondary border border-foreground/20 flex items-center justify-center text-xs text-muted-foreground font-mono">[UI: AQUAMIND TELEMETRY]</div>
          </div>
        </div>

        {/* Project 6: Solar Cold Storage */}
        <div className="grid md:grid-cols-2 gap-12 items-start pt-16 border-t border-foreground/10">
          <div className="grid grid-cols-2 gap-4 md:order-1 order-2">
            <div className="aspect-square bg-secondary border border-foreground/20 flex items-center justify-center text-xs text-muted-foreground font-mono">[IMAGE: ICE BANK ARCH]</div>
            <div className="aspect-square bg-secondary border border-foreground/20 flex items-center justify-center text-xs text-muted-foreground font-mono">[IMAGE: ESP32 PCB]</div>
          </div>

          <div className="space-y-6 md:order-2 order-1">
            <h3 className="text-2xl font-bold font-heading">Hydronic Solar-Powered Smart Cold Storage</h3>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground block mb-1">Problem</strong>
                <p>Off-grid agricultural refrigeration typically relies on massive, expensive electrochemical battery banks that degrade quickly and scale poorly.</p>
              </div>
              
              <div>
                <strong className="text-foreground block mb-1">Solution</strong>
                <p>Designed a dual-domain energy architecture utilizing a 300W solar PV array to freeze a 60L water tank, storing 2.51 kWh of cooling as latent heat. A small 12.8V LiFePO4 battery solely powers an ESP32 and hydronic glycol circulation.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-foreground/10">
                <div>
                  <strong className="text-foreground block mb-1">Hardware</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>ESP32 &amp; LiFePO4 BMS</li>
                    <li>Secop BD35F BLDC</li>
                    <li>DHT22 &amp; DS18B20</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground block mb-1">Software</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>C/C++ Finite State Machine</li>
                    <li>Sensor Telemetry</li>
                    <li>Hysteresis Pump Control</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-foreground/10">
                <strong className="text-foreground block mb-1">Outcome</strong>
                <p>Separated high-power refrigeration physics from low-power supervisory control, achieving a calculated 72-hour passive thermal autonomy target.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 & 4. LEARNING AND TOOLS MATRIX */}
      <div className="grid md:grid-cols-2 gap-16 pt-16 border-t border-foreground/20">
        
        {/* Learning */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Active Research Directory
          </h2>
          <ul className="space-y-3 text-sm text-muted-foreground font-mono">
            <li className="flex gap-2"><span>&gt;</span> Space-grade power electronics &amp; radiation-hardened topologies</li>
            <li className="flex gap-2"><span>&gt;</span> Plasma diagnostics (Langmuir probes) &amp; Townsend breakdown</li>
            <li className="flex gap-2"><span>&gt;</span> Sub-volt energy harvesting &amp; solid-state power distribution</li>
            <li className="flex gap-2"><span>&gt;</span> Autonomous flight control &amp; UAV telemetry systems</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground">
            Operational Stack
          </h2>
          <div className="grid grid-cols-2 gap-8 text-sm text-muted-foreground">
            <div>
              <strong className="text-foreground font-mono text-xs uppercase block mb-2 border-b border-foreground/10 pb-1">Hardware &amp; Power</strong>
              <ul className="space-y-1">
                <li>STM32, ESP32 &amp; Pixhawk</li>
                <li>MOSFET / IGBT Converters</li>
                <li>Photorelays &amp; I2C Telemetry</li>
              </ul>
            </div>
            <div>
              <strong className="text-foreground font-mono text-xs uppercase block mb-2 border-b border-foreground/10 pb-1">Programming</strong>
              <ul className="space-y-1">
                <li>C/C++ &amp; Embedded C</li>
                <li>Python &amp; TypeScript</li>
                <li>Next.js, React &amp; Supabase</li>
              </ul>
            </div>
            <div className="col-span-2">
              <strong className="text-foreground font-mono text-xs uppercase block mb-2 border-b border-foreground/10 pb-1">EDA &amp; Simulation Tools</strong>
              <ul className="grid grid-cols-2 gap-1">
                <li>KiCad, EasyEDA &amp; TINA-TI</li>
                <li>MATLAB &amp; Simulink</li>
                <li>Geant4 &amp; CASINO</li>
                <li>Ubuntu Linux &amp; Git</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}