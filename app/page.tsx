import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { VoxelWorld } from "@/components/ui/voxel-world";
import InventoryNav from "@/components/InventoryNav";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white selection:bg-[#ffff55] selection:text-black overflow-x-hidden">
      {/* 3D WebGL Voxel Canvas Backdrop */}
      <VoxelWorld />

      {/* Floating Inventory/Hotbar Navbar */}
      <InventoryNav />

      {/* Foreground Content with relative z-index overlays */}
      <div className="relative z-10 w-full flex flex-col pointer-events-none">
        {/* Pointer events are selectively re-enabled on interactive sections inside components */}
        <div className="pointer-events-auto">
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
      </div>
    </div>
  );
}
