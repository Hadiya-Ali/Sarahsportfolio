import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Navbar } from "@/components/Navbar";
import Tools from "@/components/Tools"

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Education />
        <Experience />
        <Tools/>
      </main>
      <Footer />
    </div>
  );
}
