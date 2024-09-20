import React from "react";
import Link from "next/link";

const Apropos = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h2
          className="text-6xl mb-[-6] text-[#c5ae87]"
          style={{
            fontFamily: "Sacramento",
            fontStyle: "italic",
          }}
        >
          À propos de nous
        </h2>
      </div>
      <div>
        <h3 className="text-4xl mt-[-6px] mb-6 font-semibold text-center mx-auto">
          BIENVENUE CHEZ SKOU BARBER
        </h3>
      </div>
      <div className="mx-8">
        <p className="text-2xl mt-[-6px] font-semibold text-center mx-auto">
        Vous planifiez un événement spécial ou souhaitez une nouvelle coiffure ?
        </p>
        <p className="mb-4 text-lg text-justify lg:text-center">
          Chez SKOU BARBER, nous nous déplaçons pour vous accompagner lors de vos occasions spéciales. Que ce soit pour une coupe tendance, un rasage de près, ou pour préparer un mariage, 
          ou toute autre célébration, notre équipe est prête à vous offrir une expérience inoubliable, 
          directement sur place. N’hésitez pas à nous contacter pour réserver votre rendez-vous ou discuter de vos besoins spécifiques pour vos événements !
        </p>
      </div>
      <Link href="contact/#contact" className="px-10 py-2 border-2 border-black font-bold mt-10 mb-8 transition duration-300 transform hover:scale-105 hover:bg-white hover:text-[#c5ae87]">
          Réservez
      </Link>
    </div>
  );
};

export default Apropos;
