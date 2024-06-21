import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1240px] mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col items-center justify-center mb-8 md:mb-16">
        <h2 className="text-4xl md:text-5xl mb-2 md:mb-4 text-[#c5ae87] font-sacramento italic">
          Contactez-Nous
        </h2>
        <h3 className="text-3xl md:text-4xl mb-4 md:mb-8 font-semibold text-center">
          BIENVENUE CHEZ LASER RUSH
        </h3>
        <p className="text-lg text-center mb-4 md:mb-8">
          Pour toute prise de contact ou rendez-vous, veuillez remplir et envoyer ce formulaire ci-dessous ou appeler le{" "}
          <a
            style={{ fontFamily: "Raleway" }}
            className="hover:text-[#C4AF89] transition-transform"
            href="tel:+33781195599"
          >
            0781195599
          </a>.
        </p>
      </div>
      <form className="max-w-[600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="border rounded shadow-lg p-3"
            type="text"
            placeholder="Nom*"
            required
          />
          <input
            className="border rounded shadow-lg p-3"
            type="email"
            placeholder="E-Mail*"
            required
          />
        </div>
        <input
          className="border rounded shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Objet*"
          required
        />
        <textarea
          className="border rounded shadow-lg p-3 w-full"
          cols="30"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button className="border border-[#9c8c6d] text-white font-bold bg-[#9c8c6d] rounded shadow-lg p-3 w-full mt-4 transition duration-300 transform hover:scale-105 hover:bg-[#afa38a] hover:text-white">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
