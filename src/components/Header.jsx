// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[25%]">
        <div className="h-[40px] w-full bg-[#004581] text-white pr-[10%] pl-[3%] pt-2 pb-2 flex items-center font-bold justify-between">
            <h1>Tu Asistente de Tareas</h1>
            <div className="flex flex-row gap-4">
                <img
                    className="md:h-[30px] h-[25px]"
                    src="./src/assets/header/notebook.png"
                    alt="notebook"
                />
            <img
                className="md:h-[30px] h-[25px]"
                src="./src/assets/header/pencil.png"
                alt="pencil"
            />
            <img
                className="md:h-[30px] h-[25px]"
                src="./src/assets/header/brain.png"
                alt="brain"
            />
            </div>
        </div>
        <div className="h-[100px] w-full bg-white flex justify-center items-center">
            <nav>
            <ul className="flex space-x-8">
                <li>
                <a
                    href="#inicio"
                    className="text-[#004581] font-bold hover:underline"
                >
                    Inicio
                </a>
                </li>
                <li>
                <a
                    href="#tareas"
                    className="text-[#004581] font-bold hover:underline"
                >
                    Tareas
                </a>
                </li>
                <li>
                <a
                    href="#motivacion"
                    className="text-[#004581] font-bold hover:underline"
                >
                    Motivación
                </a>
                </li>
            </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;
