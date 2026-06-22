"use client"
import { motion } from "framer-motion";
import Image from "next/image";
export function Introduction() {
  return (
    <section id="about" className="relative overflow-hidden pb-16 pt-8 sm:pb-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute -left-3 top-5 h-full w-full rounded-[8px] bg-[var(--color-deep)] sm:-left-5 sm:top-8" />

          <div className="relative border-[10px] border-[var(--color-green)] bg-[var(--color-panel)] p-3 shadow-[0_30px_80px_#00000057] sm:border-[18px] sm:p-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/profilepic33-1.jpeg"
                alt="Sarah Ali"
                fill
                className="object-cover"
              />
            </div>
          </div>

         <motion.div
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
    delay: 0.3,
  }}
  className="absolute -left-1 bottom-10 grid h-24 w-24 place-items-center bg-[var(--color-mint)] text-center text-[var(--color-bg)] shadow-[0_20px_45px_#00000047] sm:-left-2 sm:bottom-16 sm:h-32 sm:w-32"
>
  <div>
    <span className="mt-2 block text-sm font-black uppercase tracking-[0.12em]">
      Sarah
      <br />
      Ali
    </span>
  </div>
</motion.div>
        </div>

        <div>
          <div className="mb-6 h-1 w-24 bg-[var(--color-green)]" />
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-mint)] sm:text-sm sm:tracking-[0.38em]">
            Introduction
          </p>
          <h2 className="max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Introduction About Me
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            As an Electrical Engineer with experience in Embedded Systems, Control Systems, and CAD design using Fusion 360, I enjoy transforming concepts into intelligent, working systems. Whether it’s designing in 3D, building hardware, or implementing control-based solutions, I’m passionate about creating technology that is both functional and thoughtfully designed.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            Alongside my hardware background, I also have experience working in Software Quality Assurance. I value precision, structured testing, and system reliability, and I am always eager to ensure that technology performs exactly as intended.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            I’m driven by curiosity, innovation, and the excitement of turning imagination into reality — blending creativity with engineering precision.

          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {["3D Designer", "Embedded", "Quality Assurance"].map((item) => (
              <div
                key={item}
                className="border border-[var(--color-line)] bg-[#b0e4cc0f] px-5 py-4 text-sm font-bold text-[var(--color-mint)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
