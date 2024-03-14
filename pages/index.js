import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Apropos from "../components/Apropos";
import Faq from "../components/Faq";
import Tarification from "../components/Tarification";

export default function Home() {
  return (
    <div>
      <Hero
        heading="LASER RUSH"
        message="Une nouvelle vision sans addiction."
      />
      <Apropos />
      <Faq />
      <Tarification />
    </div>
  );
}
