"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type EmbeddedProject = {
  title: string;
  summary: string;
  details: string;
  image?: string;
  images?: string[];
  tags: string[];
  reverse?: boolean;
};

const projects: EmbeddedProject[] = [
  {
    title: "Parwaaz-CroDrone",
    summary:
      "Parwaaz-CroDrone is a fully autonomous multi-parcel courier drone designed and developed end-to-end as a Final Year Project at NUST SEECS 2026.",
    details:
      " The mechanical design was built entirely from scratch in Autodesk Fusion 360, featuring a generatively designed diamond airframe, four independent rotary-release parcel compartments, and a spool-winch zipline delivery system — all modelled, iterated, and validated through in-lab FDM 3D printing. Material selection was treated as a per-component structural engineering decision, with PETG-CF for load-bearing arms, ABS/ASA for external covers, and carbon-fibre rod reinforcements for maximum stiffness at minimum weight. The complete electronics architecture was independently designed and integrated, spanning flight control, propulsion via ESCs and brushless motors, power distribution through a MATEKSYS PM12S module, companion computing on a Raspberry Pi 4, and GSM-based secure communication. Embedded firmware was developed to handle autonomous navigation, waypoint-based multi-delivery sorties, servo-actuated bay release, and controlled winch descent at a regulated 0.3 m/s. Computer vision was integrated through a Pi Camera co-located with the descending payload tray to enable real-time parcel tracking during delivery. Structural balance and centre of mass were carefully engineered so that asymmetric bay emptying across a multi-stop sortie remains within the correcting authority of the remaining motors at all times. The project maintained a thrust-to-weight ratio above 2.4 at full loaded mass and was designed, built, tested, and flown entirely within the laboratory using in-house resources and tooling. A formal research paper documenting the design methodology, electronics architecture, and flight test results was submitted as part of the project deliverables. Parwaaz-CroDrone represents a complete, industry-relevant engineering product — not a prototype concept — covering mechanical design, structural analysis, electronics integration, embedded software, computer vision, and academic research under one project.",
    images: ["/embedded.jpeg"],
    tags: ["GSM", "ESP-32", "Skydroid H30","Pixhawk","Fusion"],
  },
  {
    title: "PID Tuned Flight Controller of Bicopter through Kalman Filter",
    summary:
      "The primary objective of this project is to apply digital signal processing techniques for stabilizing a bicopter using statistical sensor fusion and adaptive filtering, with a focus on handling noisy inertial data at high frequency and low latency.",
    details:"The system is built around an ESP32 microcontroller operating at a 250 Hz update rate (4 ms cycle), ensuring real-time control responsiveness. An MPU6050 IMU is used to capture accelerometer and gyroscope data, which is inherently noisy and requires filtering for reliable state estimation. Brushless DC motors are controlled through PWM signals generated from the processed sensor data to maintain stability. A real-time Kalman filter is implemented to fuse gyroscope and accelerometer readings by dynamically modeling their noise characteristics and weighting them accordingly. This approach significantly reduces sensor noise, achieving approximately 60% reduction in RMS error compared to raw measurements. As a result, the system maintains stable flight behavior with approximately ±0.5° pitch-axis accuracy and successfully eliminates sustained oscillations observed in the unfiltered system.",
    images: ["/embedded1.jpeg"],
    tags: ["ESP32", "Accelerometer", "Control Systems"],
    reverse: true,
  },
  {
    title: "Project AVIA (Aerial Vision in Action)",
    summary:
      "The objective of AVIA is to integrate high-end computer vision with embedded systems for real-time drone surveillance using a distributed main–secondary architecture to efficiently manage computational load.",
    details:
      "The system is built around a Raspberry Pi 4 (8GB) as the primary inference engine, paired with a Pi Camera running a TensorFlow Lite-based model, while an STM32F746-DISCO microcontroller acts as the display and visualization node. Communication between the two units is handled through a low-latency UDP protocol over Gigabit Ethernet for fast and reliable data transfer. To improve real-time performance, the EfficientNet Lite0 model is optimized using post-training quantization, converting weights to INT8 format and reducing model size from 18 MB to 4.1 MB. This optimization enables inference speeds of approximately 15–25 FPS on the Raspberry Pi. Detected bounding box coordinates are transmitted to the STM32, which renders them using external SDRAM due to limited internal memory, along with DMA2D hardware acceleration for efficient frame rendering. The complete system operates under 15W power consumption, making it suitable for deployment on a standard 3S LiPo-powered drone platform.",
    images: ["/embedded2.jpeg"],
      tags: ["Object detection", "RasberryPi", "ML & CV"],
  },
  {
    title: "Wireless Charger PCB",
    summary:
      "The objective of this project is to apply power electronics and transistor-based switching techniques to develop a wireless charging system based on inductive power transfer.",
    details:"The system is built around four IRFZ44N power MOSFETs mounted on a custom-designed PCB along with a transmitter coil, while a separate receiver coil is used to capture the transferred energy. The complete assembly is enclosed in a custom acrylic casing for structural support and insulation. The MOSFETs are configured in an H-bridge topology to convert DC input into a high-frequency AC signal in the range of 175–230 kHz, which generates the alternating magnetic field required for inductive coupling. The PCB was designed in Proteus and fabricated manually using ferric chloride etching. Experimental testing confirmed successful wireless power transfer across an approximately 5 mm air gap, achieving around 60% efficiency for small DC loads, demonstrating the feasibility of the design.",
    images: ["/embedded3.jpeg"],
    tags: ["PCB", "IRFZ44N", "Transmitter Coil"],
    reverse: true,
  },
  {
    title: "Amplitude Modulation and Demodulation System",
    summary:
      "The objective of this software-based project is to demonstrate the fundamental principles of amplitude modulation (AM) transmission and reception through full system simulation in Proteus Design Suite without using physical hardware.",
    details:
      "On the transmitter side, a 1 MHz high-frequency carrier signal is combined with a 1.07 kHz low-frequency message signal, and modulation is achieved using a nonlinear transistor-based circuit employing an NPN transistor such as the 2N2222 or BC547. On the receiver side, an envelope detector is implemented to recover the original message, consisting of a fast-recovery diode (1N4148) for rectification followed by an RC low-pass filter to remove the high-frequency carrier component. The system behavior is validated using virtual oscilloscopes in Proteus, where the modulated waveform correctly shows an envelope corresponding to the input signal. The receiver successfully reconstructs a clean 1.07 kHz message signal with minimal distortion, confirming accurate AM modulation and demodulation.",
    images: ["/embedded4.jpeg"],
      tags: ["Modulation", "Rectification", "Proteus"],
  },
  {
    title: "Temperature-Controlled Fan System",
    summary:
      "The primary objective of this project is to develop an automated, energy-efficient cooling system that dynamically adjusts fan speed based on ambient room temperature.",
    details:"The system is built around an Arduino UNO microcontroller, which serves as the central control unit for processing sensor inputs and controlling the actuator. It uses a DHT11 sensor to measure real-time temperature and humidity, providing continuous environmental feedback for adaptive control. A 5V DC fan is used as the cooling element, driven through an L298N motor driver that receives PWM-based control signals from the Arduino. Temperature and humidity readings are displayed on a 16x2 LCD using an I2C module, reducing wiring complexity while enabling real-time monitoring. The system is programmed using the Arduino IDE to continuously read sensor data and execute control logic based on defined temperature thresholds. During testing, the fan operates at low speed below 25°C and progressively increases speed as temperature rises, ensuring efficient cooling while minimizing unnecessary power consumption.",
    images: ["/embedded5.jpeg"],
    tags: ["Arduino", "Sensors", "Control"],
    reverse: true,
  },
  {
    title: "Arduino Based Bluetooth Control Car",
    summary:
      "This project involved designing and building a 4-wheeled Bluetooth-controlled car in my first semester as an introduction to embedded systems and robotics.",
    details:"The system was built entirely from scratch, including hardware assembly, firmware development, and wireless communication setup between a smartphone and the vehicle. An Arduino Uno served as the central microcontroller, interfacing with four DC motors (one per wheel) through an L298N motor driver for directional and speed control. Wireless commands were transmitted from a smartphone application to an HC-05 Bluetooth module, which relayed data to the Arduino via serial communication. The Arduino processed these inputs and generated corresponding motor control signals, enabling real-time movement in all directions. This project introduced core concepts such as microcontroller programming in C, PWM-based motor control, serial communication, and basic embedded system integration, forming a strong foundation for subsequent robotics and embedded projects.",
    tags: ["Arduino", "C language ", "Bluetooth"],
  },
  {
    title: "Digital Multimeter — Arduino",
    summary:
      "This project involved designing and building a fully functional digital multimeter using Arduino, capable of measuring five fundamental electrical parameters: voltage, current, resistance, capacitance, and inductance.",
    details:"The system was developed entirely from scratch as an all-in-one electronics measurement tool. An Arduino Uno served as the central processing unit, interfacing with multiple sensing circuits including a voltage divider for voltage measurement, a shunt resistor with op-amp for current sensing, a resistor network for resistance calculation, an RC timing circuit for capacitance measurement, and an LC oscillator circuit for inductance estimation. Each measurement mode used a different signal conditioning approach, with analog or digital inputs processed by the Arduino. The firmware applied corresponding mathematical models in real time to compute accurate readings, which were displayed on an LCD. This project provided hands-on experience in analog circuit design, signal processing, and embedded firmware development, while also building a strong understanding of how commercial electronic test instruments operate internally.",
    tags: ["Arduino", "Current", "Voltage","Resistance","Capacitance","Inductance"],
    reverse: true,
  },
  {
    title: "Digital Voting Machine — FPGA",
    summary:
      "This project involved designing and implementing a fully functional digital voting machine on an FPGA, simulating a real-world electronic voting system with candidate selection, vote recording, counting, and result display using digital logic design and hardware description languages.",
    details:"The system was built on an FPGA development board using Verilog and implemented through the Quartus IDE for synthesis, simulation, and deployment. User input was handled through push buttons for candidate selection, while vote counts and results were displayed using seven-segment displays or LEDs. Internal FPGA registers were used for secure vote storage and real-time counting, ensuring proper tracking and prevention of double voting. The design was fully described at the hardware level in Verilog and synthesized directly onto the FPGA fabric, enabling true parallel execution of logic. This project provided deep hands-on experience with finite state machines, combinational and sequential logic, and RTL design, building a strong foundation in FPGA-based digital system development and hardware-level thinking.",
    tags: ["Verilog", "Quartus", "simulation","deployment"],
  },
];

export function EmbeddedProjects() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [openImagesProject, setOpenImagesProject] = useState<string | null>(
    null,
  );
  const cardVariant = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 120 : -120,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

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
            Embedded Systems Work
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
  custom={projects.indexOf(project) % 2 === 0 ? 1 : -1}
  variants={cardVariant}
  initial="hidden"
  whileInView="show"
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
