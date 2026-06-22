"use client"
import { motion } from "framer-motion";
const educationItems = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Electrical Engineering",
    place: "National University of Sciences and Technology (NUST)",
    text: "Embedded Systems Engineer and UAV Developer with expertise in Machine Learning, Deep Learning, Computer Vision, Control Systems, and end-to-end drone design, from 3D CAD modeling and prototyping to intelligent autonomous flight systems.",
  },
  {
    year: "2020-2022",
    title: "FSc-Pre-Engineering",
    place: "Punjab Group of Colleges",
    text: "Achieved strong academic performance in FSc (Pre-Engineering) with consistent focus on core science and mathematics subjects, building a solid foundation for engineering studies.",
  },
  {
    year: "2018-2020",
    title: "Matriculation",
    place: "Army Public Schools and Colleges System (Azam Garrison)",
    text: "Completed Matriculation with outstanding academic performance, earning a gold medal in recognition of top achievement while developing a strong foundation in science and mathematics.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute left-0 top-8 h-72 w-72 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] blur-sm" />
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="mb-12 max-w-2xl">
          <div className="mb-6 h-1 w-24 bg-[var(--color-green)]" />
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-mint)] sm:text-sm sm:tracking-[0.38em]">
            Education
          </p>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
            Learning That Shapes My Work
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {educationItems.map((item, index) => (
            <motion.article
  key={item.title}
  initial={{
    opacity: 0,
    y: 30,
    boxShadow: "0 0 0px rgba(176,228,204,0)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    boxShadow: [
      "0 0 0px rgba(176,228,204,0)",
      "0 0 25px rgba(176,228,204,0.6)",
      "0 0 50px rgba(176,228,204,0.9)",
      "0 0 0px rgba(176,228,204,0)",
    ],
  }}
  viewport={{ once: true }}
  transition={{
    opacity: { duration: 0.6 },
    y: { duration: 0.6 },
    boxShadow: {
      duration: 1,
      delay: index * 1,
    },
  }}
  className="border border-[var(--color-line)] bg-[var(--color-panel)] p-5 shadow-[0_24px_70px_#00000033] sm:p-7"
>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-mint)]">
                {item.year}
              </span>
              <h3 className="mt-5 text-xl font-black leading-tight text-white sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-bold text-[var(--color-green)]">
                {item.place}
              </p>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
