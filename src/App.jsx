// src/App.js
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Motivacion from "./sections/Motivacion.jsx";
import Tareas from "./sections/Tareas.jsx";
import Inicio from "./sections/Principal.jsx";
import Admin from "./pages/Admin.jsx";


function App() {
  return (
    <div className="bg-white">
       
      <Header />

     
      <Inicio />
      <Tareas />
      <Motivacion />

      <Footer/>
       
       {/* <Admin/> */}

    </div>
  );
}

export default App;
