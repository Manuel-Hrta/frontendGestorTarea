import React from "react";
import Carrusel from "../components/seccion1Carrusel.jsx";

const Inicio = () => {
  return (
    <section id="inicio" className="bg-white">
      <div className="bg-[url('./src/assets/seccion1/imagen.png')] bg-cover bg-center w-full xl:h-[550px] lg:h-[500px] md:h-[450px] h-[400px] text-white flex flex-col items-center">
        <h3 className="lg:mt-[3%] mt-[10%] font-normal text-[18px]">
          Claves del Exito:
        </h3>
        <Carrusel />
      </div>

      {/* Sección de cards */}
      <div className="relative -mt-[10%] flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[90%] mx-auto gap-6">
        {/* Card 1 */}
        <div className="w-[70%] md:w-[60%] lg:w-[30%] h-[300px] lg:mb-0 mb-6 bg-[#97CBDC] rounded-xl shadow-xl flex flex-col items-center justify-center">
          <img
            src="./src/assets/seccion1/lista.png"
            alt="Lista"
            className="object-contain"
          />
        </div>
        {/* Card 2 */}
        <div className="w-[70%] md:w-[60%] lg:w-[30%] h-[300px] lg:mb-0 mb-6 bg-[#97CBDC] rounded-lg shadow-xl flex flex-col items-center justify-center">
          <img
            src="./src/assets/seccion1/calendario.png"
            alt="Calendario"
            className="object-contain"
          />
        </div>
        {/* Card 3 */}
        <div className="w-[70%] md:w-[60%] lg:w-[30%] h-[300px] bg-[#97CBDC] rounded-lg shadow-xl flex flex-col items-center justify-center">
          <img
            src="./src/assets/seccion1/campana.png"
            alt="Campana"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
