import React, { useState } from "react";
import ReactDOM from "react-dom";

const CardConModal = ({ title, status, dateCreated, dateCompleted, description, taskId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Modal content
  const modalContent = isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[70%] lg:w-[50%] rounded-lg shadow-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-xl font-bold"
          onClick={closeModal}
        >
          &times;
        </button>
        <h2 className="text-[#004581] font-bold text-lg md:text-2xl mb-4">
          {title}
        </h2>
        <p className="text-[#004581] font-semibold mb-2">Creada el: {dateCreated}</p>
        <p className="text-gray-700 text-justify mb-4">{description}</p>
        <p className="text-[#004581] font-semibold mb-2">{taskId}</p>
        <div className="flex flex-col items-center">
          <img
            src="https://img.icons8.com/fluency/48/000000/checked.png"
            alt="Completada"
          />
          <p className="text-black font-medium mt-2">{status}</p>
        </div>
        <p className="text-[#004581] font-semibold mt-4 text-right">
          Terminada el: {dateCompleted}
        </p>
      </div>
    </div>
  );

  return (
    <div className="mb-9">
      {/* Card */}
      <div
        className="bg-[#DDE8F0] w-[250px] h-[250px] rounded-lg shadow-md p-4 flex flex-col justify-between items-center cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl "
        onClick={openModal}
      >
        <h3 className="text-black font-bold text-center">{title}</h3>
        <div className="flex flex-col items-center">
          <img src="./src/assets/seccion2/completado.png" alt="Completado" />
          <p className="text-black font-medium mt-2">{status}</p>
        </div>
        <p className="text-black text-right font-medium">{taskId}</p>
      </div>

      {/* Render modal outside of the current DOM tree */}
      {ReactDOM.createPortal(modalContent, document.getElementById("modal-root"))}
    </div>
  );
};

export default CardConModal;
