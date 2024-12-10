import React, { useState } from "react";

const Admin = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
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

      <div className="lg:hidden flex items-center justify-center bg-orange-700S">
        <button
          className="w-full flex flex-row items-center justify-center bg-[#97CBDC] hover:bg-gray-100 focus:outline-none"
          onClick={() => console.log("Regresar")}
        >
          <img
            src="./src/assets/back.png"
            alt="icon"
            className="m-2 md:w-auto w-[18px]"
          />
          <h1 className="text-[#001B48] font-bold md:text-[18px] text-[12px] ml-[5%]">
            Regresar
          </h1>
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-[20%] h-screen bg-[#DDE8F0] hidden lg:flex flex-col justify-center text-center items-center shadow-xl">
          <img src="./src/assets/user.png" alt="usuarios" />
          <h1 className="text-[18px] font-bold mt-3 text-[#001B48]">
            Administrador
          </h1>

          <button
            className="w-full flex flex-row items-center justify-center bg-[#97CBDC] hover:bg-gray-100 focus:outline-none mt-[40%]"
            onClick={() => console.log("Regresar")}
          >
            <img
              src="./src/assets/back.png"
              alt="icon"
              className="m-2 md:w-auto w-[18px]"
            />
            <h1 className="text-[#001B48] font-bold md:text-[18px] text-[12px] ml-[5%]">
              Regresar
            </h1>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full items-center">
          <p className="text-center text-xl font-bold text-[#004581] mt-6 mb-4">
            Usuarios
          </p>

          {/* Tabla de Usuarios */}
          <div className="w-full md:w-3/4 lg:w-2/3 overflow-x-auto">
            <table className="table-auto w-full border border-[#004581] text-center bg-[#DDE8F0]">
              <thead>
                <tr className="border-b border-[#004581]">
                  <th className="px-4 py-2 border-r border-[#004581]">ID</th>
                  <th className="px-4 py-2 border-r border-[#004581]">
                    Nombre
                  </th>
                  <th className="px-4 py-2 border-r border-[#004581]">Email</th>
                  <th className="px-4 py-2 border-r border-[#004581]">Tipo</th>
                  <th className="px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="border-b border-[#004581]">
                    <td className="px-4 py-2 border-r border-[#004581]"></td>
                    <td className="px-4 py-2 border-r border-[#004581]"></td>
                    <td className="px-4 py-2 border-r border-[#004581]"></td>
                    <td className="px-4 py-2 border-r border-[#004581]"></td>
                    <td className="px-4 py-2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Botón flotante */}
          <button
            className="fixed bottom-6 right-6 bg-[#004581] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#003366] focus:outline-none"
            onClick={() => alert("Agregar nuevo usuario")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
