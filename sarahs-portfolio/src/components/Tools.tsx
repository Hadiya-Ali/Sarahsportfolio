"use client"
import { motion } from "framer-motion";

import Image from "next/image";

const tools = [
  { name: "ArduinoIDE", image: "/Arduino_IDE.png" },
  { name: "Autocad", image: "/autocad.png" },
  { name: "Eayeda", image: "/Eayeda.png" },
  { name: "Fusion_360", image: "/fusion_360.png" },
  { name: "LTspice", image: "/LTspice.png" },
  { name: "Matlab", image: "/Matlab.png" },
  { name: "Proteus", image: "/Proteus.png" },
  { name: "QGC", image: "/qgc.png" },
  { name: "Quartus", image: "/Quartus.png" },
  { name: "Selenium", image: "/Selenium.png" },
  { name: "VS_code", image: "/vs_code.png" },
];

export default function ToolsSection() {
  const radius = 260;

  return (
    <section
      id="tools"
      className="relative w-full bg-[#091413] px-5 py-16 sm:py-24"
    >
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-mint)] sm:text-sm sm:tracking-[0.5em]">
          Technology Stack
        </p>

        <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
          Tools I Have Worked With
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-muted)] sm:text-lg">
          Technologies, frameworks, and platforms
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group flex min-h-32 flex-col items-center justify-center rounded-[8px] border border-[var(--color-mint)]/30 bg-white/5 p-4 text-center backdrop-blur-xl shadow-[0_0_20px_rgba(176,228,204,0.15)] transition hover:border-[var(--color-mint)]"
          >
            <Image
              src={tool.image}
              alt={tool.name}
              width={46}
              height={46}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="mt-3 text-xs font-semibold text-white">
              {tool.name}
            </span>
          </div>
        ))}
      </div>

      {/* Network Area */}
      <div className="relative mx-auto mt-20 hidden h-[700px] max-w-[1200px] lg:block">

        {/* Center Core */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

          <div className="absolute inset-0 scale-[2.5] rounded-full bg-[var(--color-mint)] opacity-30 blur-3xl animate-pulse" />

          <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-[#11221d]/80 backdrop-blur-xl shadow-[0_0_60px_rgba(176,228,204,0.35)]">
            <span className="text-xl font-black tracking-[0.2em] text-white">
              TOOLS
            </span>
          </div>
        </div>

        {/* Nodes */}
        {tools.map((tool, index) => {
          const angle = (360 / tools.length) * index;
          const rad = (angle * Math.PI) / 180;

          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <div key={tool.name}>
              {/* Connection Line */}
              <div
                className="absolute left-1/2 top-1/2 origin-left"
                style={{
                  width: `${radius}px`,
                  transform: `translateY(-50%) rotate(${angle}deg)`,
                }}
              >
                {/* Static line */}
                <div className="h-[2px] w-full bg-gradient-to-r from-[var(--color-mint)]/30 via-[var(--color-mint)]/20 to-transparent" />

                <motion.div
                  className="absolute top-1/2 h-[2px] w-8 -translate-y-1/2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--color-mint), transparent)",
                    filter: "blur(1px)",
                    boxShadow:
                      "0 0 8px var(--color-mint), 0 0 16px var(--color-mint)",
                  }}
                  initial={{
                    x: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: [0, radius],
                    opacity: [0, 1, 1, 0],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.8,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Tool Card */}
              <div
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <motion.div
                  initial={{
                    scale: 1,
                  }}
                  whileInView={{
                    boxShadow: [
                      "0 0 20px rgba(176,228,204,0.15)",
                      "0 0 40px rgba(176,228,204,0.5)",
                      "0 0 80px rgba(176,228,204,0.9)",
                      "0 0 120px rgba(176,228,204,1)",
                      "0 0 80px rgba(176,228,204,0.9)",
                      "0 0 20px rgba(176,228,204,0.15)",
                    ],
                    borderColor: [
                      "rgba(176,228,204,0.3)",
                      "rgba(176,228,204,1)",
                      "rgba(176,228,204,0.3)",
                    ],
                    scale: [1, 1.06, 1],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.8,
                    ease: "linear",
                  }}
                  className="
    group
    relative
    flex
    h-24
    w-24
    flex-col
    items-center
    justify-center
    rounded-3xl
    border
    border-[var(--color-mint)]/30
    bg-white/5
    backdrop-blur-xl
    shadow-[0_0_40px_rgba(176,228,204,0.25)]
    transition-all
    duration-300
    hover:scale-110
    hover:border-[var(--color-mint)]
  "
                >
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={42}
                    height={42}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="mt-2 text-[10px] font-semibold text-white">
                    {tool.name}
                  </span>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
