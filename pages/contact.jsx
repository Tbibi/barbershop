import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Index from "./index";

const contact = () => {
  return (
    <div>
      <Hero 
      heading="CONTACT"
      message="Contactez-nous pour prendre rendez-vous et révéler votre style !"           
      />
      <Contact />
    </div>
  );
};

export default contact;
