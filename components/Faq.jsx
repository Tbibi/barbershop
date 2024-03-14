import React from "react";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 mb-12 bg-[#f3eee7]">
      <div>
        <h2
          className="text-6xl font-semibold text-center mx-10 my-10 text-[#c5ae87] "
        >
          FAQ 
        </h2>
        <FaqAccordion />
      </div>
    </div>
  );
};

export default Faq;
