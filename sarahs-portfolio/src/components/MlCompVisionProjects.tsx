"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import { useState } from "react";

type MlProject = {
  title: string;
  summary: string;
  details: string;
  image?: string;
  images?: string[];
  tags: string[];
  reverse?: boolean;
};

const projects: MlProject[] = [
  {
    title: "Video Action Recognition with Video Transformers",
    summary:
      "This project investigates memory-efficient video action recognition architectures, specifically addressing the challenge of training complex, high-dimensional models under strict hardware constraints using a 6 GB NVIDIA GTX 1660 Ti GPU.",
    details:
      "The study contrasts a classical CNN-LSTM hybrid baseline, which utilized offline spatial feature extraction via a pre-trained ResNet-50, against Facebook AI's TimeSformer architecture. To enable the training of the computationally heavy TimeSformer on consumer-grade hardware, Linear Probing and 16-bit Automatic Mixed Precision (AMP) were successfully employed to reduce the memory footprint. Evaluated on a curated 24-class subset of the UCF101 dataset, the CNN-LSTM achieved a 97.44% validation accuracy, while the optimized TimeSformer model attained an impressive 99.49% accuracy in just five epochs. To prove practical viability, the optimized model was deployed via a real-time OpenCV inference pipeline using a rolling temporal buffer, demonstrating that state-of-the-art video transformers can operate efficiently at interactive frame rates outside of high-end cloud compute environments.",
    images: ["/ML1.jpeg","/ML2.jpeg","/ML3.jpeg"],
      tags: ["Detection", "Vision", "Inference"],
  },
  {
    title: "Aerial Vision in Action",
    summary:
      "Developed Project AViA, a comprehensive, edge-deployed object detection pipeline for aerial and dashcam footage that demonstrates a progression from an interpretable classical computer vision approach to an optimized deep learning architecture.",
    details:
      "The initial phase featured a multi-scale detector engineered with an image pyramid, sliding windows, HOG features, and a Linear SVM, which was heavily optimized using a custom Sobel gradient texture filter to reduce computational overhead by 70% and refined via hard negative mining to address severe real-world class imbalances. To overcome the strict 0.5 FPS speed bottleneck of the classical method, the pipeline was transitioned to an end-to-end neural network. This involved curating and augmenting a custom dataset of roughly 15,000 images to fine-tune an EfficientNet.Lite0 model, followed by INT8 quantization that drastically compressed the model footprint from over 100 MB to just 4 MB. For final edge integration, the quantized model was deployed on an 8GB Raspberry Pi using a multi-device UDP streaming architecture that offloaded real-time bounding box rendering to an STM32F756-DISCO microcontroller via an Ethernet/LWIP stack. Ultimately, this architectural pivot achieved a 30x to 50x speedup in inference latency, delivering a stable 15–25 FPS real-time performance with a 90% test accuracy, successfully proving that high-end computer vision tasks can be efficiently executed on low-power, constrained IoT edge devices.",
    images: ["/embedded6.jpeg","/embedded3.jpeg"],
      tags: ["Classification", "Training", "Evaluation"],
    reverse: true,
  },
 
];

export function MlCompVisionProjects() {
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
            ML & Computer Vision Work
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
