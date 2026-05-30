import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden selection:bg-cyan-500/30 selection:text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
