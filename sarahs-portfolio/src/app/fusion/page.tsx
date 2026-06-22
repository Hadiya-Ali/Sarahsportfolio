import { Footer } from "@/components/Footer";
import { FusionProjects } from "@/components/FusionProjects";
import { Navbar } from "@/components/Navbar";
import { ResumeDownload } from "@/components/ResumeDownload";

const fusionTools = [
  "Fusion 360",
  "Solidworks (Beginner)",
  "AutoCAD",
  "Generative Design"
];

export default function FusionPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden pt-48 pb-16 sm:pt-52 sm:pb-20 lg:pt-36">
          <div className="absolute -right-28 top-24 h-[520px] w-[520px] rounded-full bg-[var(--color-green)]/25 blur-3xl" />
          <div className="absolute left-0 top-40 h-[360px] w-[360px] rounded-full bg-[var(--color-mint)]/10 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-10">
            <div>
              <div className="mb-6 h-1 w-24 bg-[var(--color-green)]" />
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-mint)] sm:text-sm sm:tracking-[0.5em]">
                Fusion 360
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-none text-white sm:text-5xl lg:text-6xl">
                Design and Development Engineer
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                Electrical Engineer with hands-on experience in electromechanical design, UAV development, and 3D CAD modeling. Designed and developed drone platforms from concept to prototype, integrating mechanical structures with embedded and electronic systems. Passionate about creating innovative engineering solutions that combine design, electronics, and real-world functionality.
              </p>
              <ResumeDownload
                href="/Sarah Ali- Embedded and Design Engineer.pdf"
                fileName="Sarah-Ali-Designer and Embedded-Resume.pdf"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
             {fusionTools.map((tool, index) => (
  <div
    key={tool}
    className="tool-card rounded-[8px] border border-[var(--color-line)] bg-[#b0e4cc0f] p-5 shadow-[0_24px_70px_#00000025] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#b0e4cc18] sm:p-6"
    style={{
      animationDelay: `${index * 0.4}s`,
    }}
  >
    <span className="block text-sm font-black uppercase tracking-[0.18em] text-[var(--color-mint)]">
      {tool}
    </span>
  </div>
))}
            </div>
          </div>
        </section>

        <FusionProjects />
      </main>
      <Footer />
    </div>
  );
}
