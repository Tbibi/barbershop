import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Apropos from "../components/Apropos";
import Faq from "../components/Faq";
import Tarification from "../components/Tarification";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Laser Rush - Révélez votre Bien-être avec l&apos;Auriculothérapie</title>
        <meta
          name="keywords"
          content="auriculothérapie, obésité morbide, laser, laserthérapie, laser anti-tabac, tabagiste, sevrage tabac, tabagisme passif, arrêt cigarette, tarif auriculothérapie, sans effets secondaires, sans douleurs, sans prise de poids, garantie, médecine alternative, acupuncture auriculaire, bien-être, santé, soulagement douleur, traitement addiction, médecine chinoise, équilibre énergétique, médecine traditionnelle chinoise, médecine douce, acupuncture, traitement naturel, médecine préventive, gestion du stress, relaxation, acupuncture sans aiguilles, santé naturelle, bien-être physique, bien-être mental, thérapie alternative, acupuncture auriculotherapie, médecine complémentaire, santé globale, médecine intégrative, traitement non invasif, harmonisation énergétique, médecine holistique, soulagement du stress, amélioration de la circulation sanguine, relaxation profonde, réduction de l'anxiété, amélioration du sommeil, gestion de la douleur, renforcement du système immunitaire, amélioration de la digestion, réduction de l'inflammation."
        />
        <meta name="description" content="Découvrez les bienfaits de l'auriculothérapie pour traiter l'obésité morbide, les problèmes de sommeil, arrêter le tabac, les drogues et toute autre dépendances ou addiction ainsi que pour soulager les douleurs, sans effets secondaires ni prise de poids. Profitez d'un service professionnel et d'une garantie de résultats avec notre cabinet spécialisé." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
