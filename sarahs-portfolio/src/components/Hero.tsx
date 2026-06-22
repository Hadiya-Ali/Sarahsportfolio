"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const text = "Hi, I'm Sarah Ali";
export function Hero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden pt-44 sm:min-h-[760px] lg:pt-20">
      <div className="absolute -right-24 top-32 h-[420px] w-[105vw] max-w-[1240px] overflow-hidden rounded-bl-[44%] border-b border-l border-[var(--color-line)] shadow-[0_38px_95px_#00000061] sm:-right-16 sm:top-20 sm:h-[610px] sm:w-[92vw] sm:rounded-bl-[54%] lg:-right-8">

         
        <div className="absolute inset-0 bg-black/10" />

        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,#b0e4cc3d,transparent_30%)]" />
        <div className="absolute bottom-0 right-0 h-[88%] w-[68%] sm:h-[95%] sm:w-[55%]">
    <Image
      src="/profilepic (2).png"
      alt="Background"
      fill
      priority
      className="object-contain object-bottom object-right"
    />
  </div>
        <div className="absolute bottom-0 left-0 h-40 w-[58%] rounded-tr-[100%] bg-[var(--color-bg)]" />
        <div className="absolute bottom-12 left-[12%] hidden h-1 w-32 bg-[var(--color-mint)] md:block" />

      </div>

      <div className="relative mx-auto flex min-h-[560px] w-full max-w-7xl items-center justify-start px-5 sm:min-h-[680px] md:px-10">
        <div className="max-w-3xl pt-20 text-left sm:pt-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-mint)] sm:text-sm sm:tracking-[0.5em]">
            ELECTRICAL ENGINEER
          </p>
          <h1 className="text-4xl font-black leading-none tracking-normal text-white sm:text-5xl lg:text-6xl">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.05,
            duration: 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}

      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
      >
        |
      </motion.span>
    </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-[var(--color-mint)] sm:text-lg sm:leading-8">
            Electrical Engineer with hands-on experience in Embedded Systems, UAV Design, CAD Modeling, 
            Product Development, Quality Assurance (Manual & Automation Testing), and AI-driven engineering solutions.

          </p>
          
        </div>
      </div>
    </section>
  );
}
