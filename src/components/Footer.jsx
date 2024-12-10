// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#004581] text-white text-center flex flex-col">
      
    
        <div className="w-[100%] h-auto flex flex-col md:flex-row text-center justify-center items-center gap-8 md:gap-[10%] p-6">
           
            <div className="flex flex-row md:flex-col h-[100%] items-center justify-between gap-6 md:gap-8">
                <div className="flex flex-row gap-6">
                    <img src="./src/assets/footer/facebook.png" alt="Facebook" />
                    <img src="./src/assets/footer/instagram.png" alt="Instagram" />
                </div>
                <div className="flex flex-row gap-6">
                    <img src="./src/assets/footer/linkedin.png" alt="LinkedIn" />
                    <img src="./src/assets/footer/youtube.png" alt="YouTube" />
                </div>
            </div>

            <div className="text-left">
                <h3 className="font-bold lg:text-[17px] text-[14px]">Visión</h3>
                <ul className="list-disc pl-6 lg:text-[15px] text-[12px]">
                <li>Metas claras</li>
                <li>Planificación estratégica</li>
                <li>Motivación constante</li>
                </ul>
            </div>

            <div className="text-left">
                <h3 className="font-bold lg:text-[17px] text-[14px]">Esfuerzo</h3>
                <ul className="list-disc pl-6 lg:text-[15px] text-[12px]">
                <li>Trabajo constante</li>
                <li>Compromiso personal</li>
                <li>Superación continua</li>
                </ul>
            </div>

            <div className="text-left">
                <h3 className="font-bold lg:text-[17px] text-[14px]">Persistencia</h3>
                <ul className="list-disc pl-6 lg:text-[15px] text-[12px]">
                <li>Resiliencia ante fallos</li>
                <li>Paciencia prolongada</li>
                <li>Actitud positiva</li>
                </ul>
            </div>
        </div>
        <div className="w-[100%] h-[40px] bg-[#001B48] flex text-center justify-center items-center lg:text-[17px] text-[14px] p-6">
            &copy; 2024 Tu Asistente de Tareas. Todos los derechos reservados.
        </div>

    </footer>
  );
};

export default Footer;
