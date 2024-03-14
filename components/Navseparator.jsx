import React from "react";

const NavbarSeparator = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 text-center">
      <p className="text-sm">
        Sans effets secondaires <span className="mx-2">|</span> Sans prise de
        poids <span className="mx-2">|</span> Appelez-nous :{" "}
        <a
          style={{
            fontFamily: "Raleway",
          }}
          className="hover:text-[#C4AF89] transition transform"
          href="tel:+33781195599"
        >
          0781195599
        </a>
      </p>
    </div>
  );
};

export default NavbarSeparator;
