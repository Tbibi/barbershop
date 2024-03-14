"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FaqAccordion = () => {
  useEffect(() => {
    const handleAccordionClick = (event) => {
      event.currentTarget.classList.toggle("active");
      const panel = event.currentTarget.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    };

    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", handleAccordionClick);
    }

    return () => {
      // Nettoyer les écouteurs d'événements lors du démontage du composant
      for (let i = 0; i < acc.length; i++) {
        acc[i].removeEventListener("click", handleAccordionClick);
      }
    };
  }, []); // Exécuter l'effet une seule fois après le rendu initial
  return (
    <section
      id="FAQ"
      className="flex flex-col items-center justify-center overflow-hidden pb-[100px]"
    >
      <button className="accordion">
        QU&apos;EST-CE QUE L&apos;AURICULOTHERAPIE ?
      </button>
      <div className="panel">
        <p className="text-l mt-5 bg-[#f3eee7]/80 text-black lg:mt-[10px] ">
          L&apos;auriculothérapie, également connue sous le nom
          d&apos;auriculo-acupuncture ou acupuncture auriculaire, est une forme
          de médecine alternative qui se concentre sur le traitement des
          affections en stimulant des points spécifiques sur l&apos;oreille
          externe.
          <br /> Cette pratique est basée sur l&apos;idée que l&apos;oreille
          comporte des zones qui correspondent à différents organes et parties
          du corps. <br />
          En stimulant ces zones, on pense pouvoir soulager la douleur, traiter
          les troubles physiologiques et promouvoir la guérison.
          <br /> L&apos;auriculothérapie utilise souvent des techniques telles
          que la pression, l&apos;insertion d&apos;aiguilles minces ou
          l&apos;utilisation de lasers de bas niveau pour stimuler les points
          auriculaires.
        </p>
      </div>

      <button className="accordion">COMMENT ÇA MARCHE ?</button>
      <div className="panel">
        <p className="text-l mt-5 bg-[#f3eee7]/80 text-black lg:mt-[10px] ">
          L&apos;auriculothérapie fonctionne en stimulant des points spécifiques
          sur l&apos;oreille externe qui correspondent à différentes parties du
          corps. Ces points sont stimulés à l&apos;aide de l&apos;utilisation de
          lasers de bas niveau. Cette stimulation est censée envoyer des signaux
          au cerveau, qui à son tour libère des substances chimiques telles que
          les endorphines pour soulager la douleur ou d&apos;autres réponses
          physiologiques pour aider à traiter diverses affections.
          L&apos;objectif est de restaurer l&apos;équilibre énergétique dans le
          corps et de favoriser la guérison.
        </p>
      </div>

      <button className="accordion">À QUI EST-ELLE DESTINÉE ?</button>
      <div className="panel">
        <p className="text-l mt-5 bg-[#f3eee7]/80 text-black lg:mt-[10px] ">
          L&apos;auriculothérapie est destinée à toute personne souhaitant
          bénéficier d&apos;une approche non invasive et efficace pour traiter
          divers problèmes de santé, notamment les addictions, les douleurs
          chroniques, les troubles du sommeil, et bien d&apos;autres encore.
        </p>
      </div>

      <button className="accordion">QUELS SONT LES EFFETS SECONDAIRES ?</button>
      <div className="panel">
        <p className="text-l mt-5 bg-[#f3eee7]/80 text-black lg:mt-[10px] ">
          Il n&apos;y a aucun effet secondaire et le traitement est immédiat.*
          <br />
          <br />
          *Les résultats individuels peuvent varier.
        </p>
      </div>

      <button className="accordion">COMBIEN DE TEMPS ÇA DURE ?</button>
      <div id="tarification" className="panel">
        <p className="text-l mt-5 bg-[#f3eee7]/80 text-black lg:mt-[10px] ">
          Notre thérapie peut vous aider après une seule session de laser non
          invasive.*
          <br />
          <br />
          *Les résultats individuels peuvent varier.
        </p>
      </div>
    </section>
  );
};

export default FaqAccordion;
