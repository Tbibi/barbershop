import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Index from "./index";

const contact = () => {
  return (
    <div>
      <Hero 
        heading="CONTACT"
        message="Prenez le premier pas vers une vie sans dépendances en nous contactant dès maintenant."
      />
      <Contact />
    </div>
  );
};

export default contact;
