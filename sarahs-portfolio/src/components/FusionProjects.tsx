"use client";

import Image from "next/image";
import { useState } from "react";
import {motion} from "framer-motion"

type FusionProject = {
  title: string;
  summary: string;
  details: string;
  image?: string;
  images?: string[];
  tags: string[];
  reverse?: boolean;
};

const projects: FusionProject[] = [
  {
    title: "Parwaaz–CroDrone",
    summary:
      "Parwaaz–CroDrone is a fully autonomous multi-compartment delivery UAV designed and built from scratch as my Final Year Project at NUST SEECS.",
    details:
      "It can carry and independently deliver up to four parcels to separate waypoints using servo-based release and a custom spool–winch descent system, enabling ground delivery without landing. The airframe was developed in Fusion 360 using a generative design approach, producing a lightweight yet high-stiffness truss structure optimized for 3D printing. A diamond planform ensures stability by aligning thrust with the center of pressure, maintaining control during asymmetric payload release. Material selection was performance-driven, combining PLA, PETG, PETG-CF, and ABS/ASA with carbon-fiber rod reinforcement for structural integrity. The project integrates UAV airframe design, embedded systems, and autonomous delivery control into a unified engineering system. ",
    image: "/Fusion1.jpeg",
    tags: ["Drone Frame", "4 Parcels", "Fusion 360","3D printed"],
  },
  {
    title: "Courier Drone",
    summary:
      "Courier Drone is a quadcopter-based autonomous delivery UAV designed entirely in Autodesk Fusion 360.",
    details:
      "It features a multi-compartment payload tower mounted above the flight platform for efficient parcel transport. Each compartment uses a rotary opening mechanism for simple, reliable, and ejection-free parcel release. The design ensures easy refilling and reuse without disassembling the structure, improving operational efficiency. A built-in zipline winch system lowers parcels to the ground while maintaining stable hover flight. The overall architecture balances aerodynamic performance with a practical and user-friendly payload delivery system for real-world courier applications. ",
    image: "/Fusion2.jpeg",
    tags: ["Enclosure", "UAV", "Product CAD","Fusion 360","3D design"],
    reverse: true,
    },
  {
    title: "Drone Testing Net",
    summary:
      "Drone Testing Net is a full-scale safety enclosure designed in Autodesk Fusion 360 for controlled indoor drone testing and tuning.",
    details:
      "It features a rigid steel rectangular frame covered with a diamond-pattern net on all sides, including the roof and floor, to fully contain the drone in case of failure or loss of control. A hinged access door allows easy entry and exit without compromising structural integrity. The floor includes a landing grid with a central pad to define a stable takeoff and landing zone. The enclosure is designed to enable safe, repeatable testing for PID tuning, firmware validation, and first-flight trials. Its transparent net structure ensures full visibility while maintaining lightweight impact containment.",
    image: "/Fusion3.jpeg",
    tags: ["Surface Design", "Prototype", "Fusion 360"],
  },{
    title: "Concordia1",
    summary:
      "Concordia1 is a creative architectural speaker system designed entirely in Autodesk Fusion 360.",
    details:
      "It consists of a central monument-style tower flanked by two smaller satellite structures, forming a unified three-part audio setup. Each structure is designed with detailed architectural elements such as arches, staircases, and tiered towers, inspired by grand pavilion monuments. The left and right towers house satellite speakers, while the central unit serves as the main focal speaker. The design transforms a functional audio system into a collectible artistic object that blends sound engineering with architectural storytelling. It reflects a strong emphasis on product design thinking, aesthetics, and emotional value beyond utility.",
    image: "/Fusion4.jpeg",
    tags: ["Speaker", "Souvenier", "Product CAD","3D printed"],
    reverse: true,
    
  },{
    title: "Drone Arm — Generative Design",
    summary:
      "A structurally optimised drone arm designed in Autodesk Fusion 360 using a generative design approach, producing an organic skeletal truss structure that achieves maximum strength at minimum weight — the fundamental challenge of any UAV component design.",
    details:
      "The arm consists of three distinct sections working together as one unified structure. At one end sits a circular motor mount collar, precisely sized to securely house a brushless motor while keeping it rigidly aligned with the thrust axis. At the other end is a hollow square mounting bracket with bolt holes, designed to attach cleanly and firmly to the main drone body frame. Connecting the two is the generatively designed lattice arm itself — an intricate web of curved structural ribs and cross members that distributes flight loads, motor thrust forces, and vibration along the most efficient possible load paths, eliminating unnecessary material everywhere it is not structurally needed. The result is an arm that looks organic and almost skeletal but is engineered to be significantly stiffer and lighter than a conventional solid or hollow arm of the same length — making it ideal for performance UAV applications where every gram saved translates directly into longer flight time and higher payload capacity.",
    image: "/Fusion5.jpeg",
    tags: ["Fusion 360", "Prototype", "Generative design"],
  },

];

export function FusionProjects() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [openImagesProject, setOpenImagesProject] = useState<string | null>(
    null,
  );

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute left-1/2 top-8 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--color-green)]/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <div className="mb-6 h-1 w-24 bg-[var(--color-green)]" />
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-mint)] sm:text-sm sm:tracking-[0.38em]">
            Featured Projects
          </p>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Fusion 360 Work
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-24 lg:space-y-28">
          {projects.map((project) => {
            const isOpen = openProject === project.title;
            const projectImages = project.images ?? (project.image ? [project.image] : []);
            const hasImages = projectImages.length > 0;
            const hasMoreImages = projectImages.length > 1;
            const showMoreImages = openImagesProject === project.title;

            return (
              <motion.article
  key={project.title}
  initial={{
    opacity: 0,
    x: projects.indexOf(project) % 2 === 0 ? 120 : -120,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 0.8,
  }}
  viewport={{ once: true, amount: 0.25 }}
  className={`relative grid items-start gap-6 lg:min-h-[360px] lg:gap-8 ${
    hasImages ? "lg:grid-cols-2" : "lg:grid-cols-1"
  } ${
    project.reverse && hasImages ? "lg:[&>*:first-child]:order-2" : ""
  }`}
>
                {hasImages && (
                  <div>
                    <div className="relative h-[220px] overflow-hidden rounded-[8px] border border-[var(--color-line)] bg-[#285a484d] shadow-[0_30px_90px_#00000055] sm:h-[270px]">
                      <Image
                        src={projectImages[0]}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,#09141333,#09141388)]" />
                    </div>

                    {hasMoreImages && (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenImagesProject(
                            showMoreImages ? null : project.title,
                          )
                        }
                        className="mt-4 rounded-full border border-[var(--color-mint)]/50 px-5 py-2 text-sm font-black text-[var(--color-mint)] transition hover:border-[var(--color-mint)] hover:bg-[var(--color-mint)] hover:text-[var(--color-bg)]"
                        aria-expanded={showMoreImages}
                      >
                        {showMoreImages ? "Hide images" : "View more images"}
                      </button>
                    )}

                    {showMoreImages && (
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {projectImages.slice(1).map((image) => (
                          <div
                            key={image}
                            className="relative h-40 overflow-hidden rounded-[8px] border border-[var(--color-line)] bg-[#285a484d]"
                          >
                            <Image
                              src={image}
                              alt={`${project.title} additional preview`}
                              fill
                              sizes="(min-width: 640px) 25vw, 100vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div
                  className={`relative ${
                    project.reverse && hasImages ? "lg:text-right" : ""
                  }`}
                >
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--color-mint)] sm:tracking-[0.32em]">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-black text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <div className="mt-5 rounded-[8px] border border-white/10 bg-[#10231f]/88 p-5 text-left shadow-[0_24px_70px_#00000045] backdrop-blur-xl sm:p-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-mint)]">
                      Summary
                    </h4>
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--color-muted)]">
                      {project.summary}
                    </p>

                    {isOpen && (
                      <div className="mt-5 border-t border-[var(--color-line)] pt-5">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-mint)]">
                          Details
                        </h4>
                        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--color-muted)]">
                          {project.details}
                        </p>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        setOpenProject(isOpen ? null : project.title)
                      }
                      className="mt-5 rounded-full border border-[var(--color-mint)]/50 px-5 py-2 text-sm font-black text-[var(--color-mint)] transition hover:border-[var(--color-mint)] hover:bg-[var(--color-mint)] hover:text-[var(--color-bg)]"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "Show less" : "Read more"}
                    </button>
                  </div>

                  <div
                    className={`mt-5 flex flex-wrap gap-3 ${
                      project.reverse && hasImages ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--color-line)] bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-mint)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
