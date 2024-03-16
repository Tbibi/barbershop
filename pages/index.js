import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Apropos from "../components/Apropos";
import Faq from "../components/Faq";
import Tarification from "../components/Tarification";

export default function Home() {
  return (
    <div>
      <div>
        <Hero
          heading="LASER RUSH"
          message="Une nouvelle vision sans addiction."
        />
      </div>
      <div className="pt-6" id="apropos">
        <Apropos />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div className="pt-6" id="tarification">
        <Tarification />
      </div>
    </div>
  );
}
