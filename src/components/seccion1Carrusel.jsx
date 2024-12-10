import React, { useState } from "react";

const DataCarousel = () => {
  // Data con título y descripción
  const data = [
    {
      titulo: "Responsabilidad",
      descripcion:
        "Capacidad de cumplir con las obligaciones y compromisos que se adquieren, y de hacerse cargo de las consecuencias de los actos.",
    },
    {
      titulo: "Empatía",
      descripcion:
        "Capacidad de ponerse en el lugar del otro y comprender sus emociones y necesidades.",
    },
    {
      titulo: "Trabajo en equipo",
      descripcion:
        "Habilidad para colaborar con otros para alcanzar un objetivo común.",
    },
  ];

  // Estado para rastrear el índice actual
  const [indiceActual, setIndiceActual] = useState(0);

  // Función para cambiar al siguiente elemento
  const siguiente = () => {
    setIndiceActual((prevIndice) => (prevIndice + 1) % data.length);
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 lg:w-[50%] w-[80%] mt-[2%]">
      <h1 className="text-4xl text-[#ffffff] mb-5 font-extrabold">
        {data[indiceActual].titulo}
      </h1>
      <p className="text-2x1 text-[#ffffff] mb-5 text-center font-bold">
        {data[indiceActual].descripcion}
      </p>
      <button
        className="bg-[#97CBDC] text-[black] px-[16px] py-[5px] cursor-pointer mt-[15px] rounded-xl shadow-xl font-semibold"
        onClick={siguiente}
      >
        Siguiente
      </button>
    </div>
  );
};

export default DataCarousel;
