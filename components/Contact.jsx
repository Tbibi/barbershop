import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1240px] m-auto p-4">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h2
            className="text-5xl mb-[-6] text-[#c5ae87]"
            style={{
              fontFamily: "Sacramento",
              fontStyle: "italic",
            }}
          >
            Contactez-Nous
          </h2>{" "}
        </div>
        <div>
          <h3 className="text-4xl mt-[-6px] mb-6 font-semibold text-center mx-6">
            BIENVENUE CHEZ LASER RUSH
          </h3>
        </div>
        <div className="mx-8">
          <p className="mb-4 text-center text-lg">
            Pour toute prise de contact ou rendez-vous, veuillez remplir et
            envoyer ce formulaire ci-dessous ou appeler le{" "}
            <a
              style={{
                fontFamily: "Raleway",
              }}
              className="hover:text-[#C4AF89] transition transform"
              href="tel:+33781195599"
            >
              0781195599
            </a>
            .
          </p>
        </div>
      </div>
      <form className="max-w-[600px] m-auto mb-8">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border rounded shadow-lg p-3 focus:border-[#c5ae87]"
            type="text"
            placeholder="Nom*"
            required
          />
          <input
            className="border rounded shadow-lg p-3 focus:border-[#c5ae87]"
            type="email"
            placeholder="E-Mail*"
            required
          />
        </div>
        <input
          className="border rounded shadow-lg p-3 w-full my-2 focus:border-[#c5ae87]"
          type="text"
          placeholder="Objet*"
          required
        />
        <textarea
          className="border rounded shadow-lg p-3 w-full focus:border-[#c5ae87]"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border border-[#9c8c6d] text-white font-bold bg-[#9c8c6d] rounded shadow-lg p-3 w-full mt-2 mb-6 transition duration-300 transform hover:scale-105 hover:bg-[#afa38a] hover:text-[white]">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
