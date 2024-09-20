import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Index from "./index";

const contact = () => {
  return (
    <div>
      <Hero 
      heading="CONTACT"
      message="N'hésitez pas à nous contacter pour prendre rendez-vous ou discuter de vos besoins. 
      Chez SKOU BARBER, nous sommes là pour vous aider à révéler votre style et votre bien-être."      
      />
      <Contact />
    </div>
  );
};

export default contact;
