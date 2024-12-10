import React from "react";

const CardTareasActivas = () => {
  return (
    <div className="bg-[rgb(221,232,240)] w-[300px] md:w-[350px] h-[400px] shadow-lg rounded-xl flex flex-col justify-between">
      {/* Encabezado */}
      <div className="bg-[#A9D0E6] rounded-lg text-center m-4 shadow-md p-4 border-2 border-[#004581]">
        <p className="text-black font-semibold">Realizar una página web</p>
      </div>

      {/* Fecha y descripción */}
      <div className="px-4 pt-y-1 ">
        <p className="text-black font-semibold mt-4">07/12/2024</p>
        <p className="text-black text-sm mt-2 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      {/* Botones */}
      <div className="flex justify-between text-center items-center mt-4 pt-2 border-[#001B48] border-2 rounded-xl p-2">
        <button className="text-[#1E3A8A] underline hover:text-black">
          Terminar Tarea
        </button>
        <p className="text-black font-medium">Tarea 5</p>
      </div>
    </div>
  );
};

export default CardTareasActivas;
