// src/sections/Seccion3.js
import React from "react";
import CarruselMotivacion from "../components/CarruselMotivacion";

const Motivacion = () => {
  return (
    <section id="motivacion" className="h-screen bg-white flex flex-col items-center justify-center mt-[5%]">
      <p className="text-[20px] md:text-[30px] lg:text-[40px] text-[#004581] font-bold mb-[0%] text-center">Palabras que Transforman: Encuentra tu Motivación</p>
      
        <CarruselMotivacion/>
    </section>
  );
};

export default Motivacion;
