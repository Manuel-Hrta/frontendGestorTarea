// src/sections/Seccion2.js
import React from "react";
import CarruselTareasActivas from "../components/CarruselTareas";
import CarruselTareasCompletadas from "../components/CarruselTareasCompletadas";

const Tareas = () => {
  const data = [
    {
      nombre: "Tarea 1",
      fecha: "07/12/2024",
      descripcion: "Lorem ipsum dolor sit amet...",
      id: 1,
    },
    {
      nombre: "Tarea 2",
      fecha: "08/12/2024",
      descripcion: "Lorem ipsum dolor sit amet...",
      id: 2,
    },
    {
      nombre: "Tarea 3",
      fecha: "07/12/2024",
      descripcion: "Lorem ipsum dolor sit amet...",
      id: 3,
    },

    {
      nombre: "Tarea 3",
      fecha: "07/12/2024",
      descripcion: "Lorem ipsum dolor sit amet...",
      id: 3,
    },
    {
      nombre: "Tarea 4",
      fecha: "08/12/2024",
      descripcion: "Lorem ipsum dolor sit amet...",
      id: 4,
    },
    {
      nombre: "Tarea 5",
      fecha: "07/12/2024",
      descripcion: "Lorem ipsum dolor sit amet...",
      id: 5,
    },
    {
      nombre: "Tarea 6",
      fecha: "08/12/2024",
      descripcion: "Lorem ipsum dolor sit amet...",
      id: 6,
    },
    {
      nombre: "Tarea 7",
      fecha: "08/12/2024",
      descripcion: "Lorem ipsum dolor sit amet...",
      id: 7,
    },
    {
      nombre: "Tarea 8",
      fecha: "07/12/2024",
      descripcion: "Lorem ipsum dolor sit amet...",
      id: 8,
    },
    {
      nombre: "Tarea 9",
      fecha: "08/12/2024",
      descripcion: "Lorem ipsum dolor sit amet...",
      id: 9,
    },
    // Agrega más datos...
  ];

  return (
    <section id="tareas" className="h-auto bg-white ">
      <div
        className="bg-[#004581] w-[60%] md:w-[50%] lg-[40%] h-[8%] md:h-[8%] lg:h-[10%] p-1 flex items-center justify-center shadow-lg mt-[10%] mb-[5%] "
        style={{
          borderTopRightRadius: "2rem",
          borderBottomRightRadius: "2rem",
        }}
      >
        <h1 className="text-[25px] md:text-[30px] lg:text-[40px] text-white font-bold">
          Tareas Activas
        </h1>
      </div>
      <CarruselTareasActivas data={data} />
      <div
        className="bg-[#004581] w-[60%] md:w-[50%] lg-[40%] h-[8%] md:h-[8%] lg:h-[10%] p-1 flex items-center justify-center shadow-lg mt-[10%] mb-[5%] ml-auto"
        style={{ borderTopLeftRadius: "2rem", borderBottomLeftRadius: "2rem" }}
      >
        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] text-white font-bold">
          Tareas Completadas
        </h1>
      </div>
     <CarruselTareasCompletadas/>
    </section>
  );
};

export default Tareas;
