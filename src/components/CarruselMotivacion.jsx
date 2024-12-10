import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarruselMotivacion = () => {
    const data = [
        {
          id: 1,
          image: "./src/assets/seccion3/img1.png", // Imagen funcional de ejemplo
          quote: "El único modo de hacer un gran trabajo es amar lo que haces.",
          author: "Steve Jobs",
        },
        {
          id: 2,
          image: "./src/assets/seccion3/img2.png", // Imagen funcional de ejemplo
          quote: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
          author: "Robert Collier",
        },
        {
          id: 3,
          image: "./src/assets/seccion3/img3.png", // Imagen funcional de ejemplo
          quote: "La forma de empezar es dejar de hablar y comenzar a hacer.",
          author: "Walt Disney",
        },
      ];
      

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slick-slider container mx-auto overflow-visible">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="px-4">
            <CardInspiradora
              image={item.image}
              quote={item.quote}
              author={item.author}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CardInspiradora = ({ image, quote, author }) => {
    return (
      <div className="flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-16 pt-[100px] pb-[30px]">
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-lg ">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <p className="text-gray-700 font-medium mt-4">"{quote}"</p>
        <p className="text-blue-600 font-semibold mt-2">• {author}</p>
      </div>
    );
  };
  

export default CarruselMotivacion;
