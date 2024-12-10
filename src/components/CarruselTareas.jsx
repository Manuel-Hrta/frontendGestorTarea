import React, { useState, useEffect } from "react";
import CardTareasActivas from "./CardTareasActivas";
import "../styles/carruselTareasActivas.css";

const CarruselTareas = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(6); // Número inicial de tarjetas visibles

  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth <= 900) {
        setVisibleCards(2); // 2 filas x 1 columna en pantallas pequeñas
      } else if (window.innerWidth <= 1200) {
        setVisibleCards(4); // 2 filas x 2 columnas en pantallas medianas
      } else {
        setVisibleCards(6); // 2 filas x 3 columnas en pantallas grandes
      }
    };

    window.addEventListener("resize", resizeListener);
    resizeListener(); // Ejecutar al cargar el componente

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const nextSlide = () => {
    const maxIndex = Math.ceil(data.length / visibleCards) - 1; // Máximo índice permitido
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : currentIndex;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    setCurrentIndex(newIndex);
  };

  const renderCards = () => {
    // Mostrar solo las tarjetas visibles según el índice actual
    const cards = data.slice(
      currentIndex * visibleCards,
      currentIndex * visibleCards + visibleCards
    );

    return cards.map((item, index) => (
      <div className="card-wrapper xl:m-[35px] lg:m-[30px] md:m-[20px] m-[10px]" key={index}>
        <CardTareasActivas {...item} />
      </div>
    ));
  };

  return (
    <div className="carousel-contenedor">
      <button className="buttonCarruselLeft" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-slide">
        <div className="grid-wrapper">{renderCards()}</div>
      </div>
      <button className="buttonCarruselRight" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default CarruselTareas;
