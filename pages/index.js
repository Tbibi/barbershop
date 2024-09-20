import Hero from "../components/Hero";
import Apropos from "../components/Apropos";
import dynamic from 'next/dynamic';

// Dynamically import MapComponent to avoid SSR issues
const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <Hero
        heading="SKOU BARBER"
        message="Transformez votre look, vivez sans contraintes."
      />
      <section>
        <section className="pt-6" id="apropos">
          <Apropos />
        </section>
        <section id="services">
          <MapComponent />
        </section>
      </section>
    </>
  );
}
