import React, { useState } from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="relative h-screen bg-[url('./src/assets/login/image.png')] bg-cover text-center flex items-center justify-center">
      <div className="absolute inset-0 bg-[#001B48] bg-opacity-50"></div>

      <div className="w-[80%] md:w-[30%] h-[50%] md:h-[60%] bg-[#DDE8F0] rounded-xl z-10 text-[001B48] flex flex-col pt-[1%] pb-[3%] mx-auto justify-between">
        <h1 className="text-4xl font-bold w-[100%] items-center">
          Bienvenido!
        </h1>
        <div className="bg-white w-[85%] h-[10%] rounded-r-xl p-1 flex items-center shadow-lg">
          <img
            className="h-[80%] w-[8%] mr-2 ml-1"
            src="./src/assets/login/user.png"
            alt="User"
          />
          <input
            className="h-[70%] w-[100%] mr-1"
            type="text"
            placeholder="nombre"
            style={{
              "--tw-placeholder-color": "transparent",
              WebkitTextFillColor: "transparent",
              background: "linear-gradient(to right, #000000, #555555)",
              WebkitBackgroundClip: "text",
            }}
          />
        </div>

        <div className="bg-white w-[85%] h-[10%] rounded-r-xl p-1 flex items-center shadow-lg">
          <img
            className="h-[80%] w-[8%] mr-2 ml-1"
            src="./src/assets/login/padlock.png"
            alt="User"
          />
          <input
            className="h-[70%] w-[100%] mr-1 bg-white"
            type="password"
            placeholder="contraseña"
            style={{
              color: "transparent",
              background: "linear-gradient(to right, #000000, #555555)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          />
        </div>

        <button className="bg-[#001B48] text-white w-[50%] h-[10%] rounded-md mx-auto font-semibold text-lg hover:bg-[#003570] transition-colors duration-300">
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
