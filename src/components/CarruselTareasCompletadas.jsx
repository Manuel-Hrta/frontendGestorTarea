import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardConModal from "./CardTareasCompletadas";

const CarouselCards = () => {
  const data = [
    {
      id: 1,
      title: "Realizar una página web",
      status: "completada!",
      dateCreated: "07/12/2024",
      dateCompleted: "10/12/2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      taskId: "Tarea 1",
    },
    {
      id: 2,
      title: "Revisar código fuente",
      status: "completada!",
      dateCreated: "06/12/2024",
      dateCompleted: "09/12/2024",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      taskId: "Tarea 2",
    },
    {
      id: 3,
      title: "Diseñar un logo",
      status: "completada!",
      dateCreated: "05/12/2024",
      dateCompleted: "08/12/2024",
      description:
        "Diseño del logotipo para un cliente importante utilizando herramientas de diseño gráfico.",
      taskId: "Tarea 3",
    },
    {
      id: 4,
      title: "Actualizar el servidor",
      status: "completada!",
      dateCreated: "04/12/2024",
      dateCompleted: "07/12/2024",
      description:
        "Mantenimiento y actualización de un servidor para mejorar su rendimiento y seguridad.",
      taskId: "Tarea 4",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4, // Mostrar 4 en pantallas grandes (xl)
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="slick-slider container mx-auto p-4 w-full flex justify-center"
      style={{ overflow: "visible" }}
    >
      <Slider {...settings}>
        {data.map((task) => (
          <div key={task.id} className="flex justify-center px-4">
            <CardConModal
              title={task.title}
              status={task.status}
              dateCreated={task.dateCreated}
              dateCompleted={task.dateCompleted}
              description={task.description}
              taskId={task.taskId}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselCards;
