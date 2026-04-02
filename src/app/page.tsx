import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import PorQueVelocar from "@/components/PorQueVelocar";
import Resenas from "@/components/Resenas";
import AgendarCita from "@/components/AgendarCita";
import Ubicacion from "@/components/Ubicacion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <PorQueVelocar />
        <Resenas />
        <AgendarCita />
        <Ubicacion />
      </main>
      <Footer />
    </>
  );
}
