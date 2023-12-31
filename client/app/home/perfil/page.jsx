"use client"
import { BiLeftArrowAlt } from "react-icons/bi"
import {BsBrightnessHigh} from "react-icons/bs"
import {HiOutlineMoon} from "react-icons/hi"
import Link from "next/link";
import React, { useState, useEffect } from 'react';


function BarraPerfil() { 
  // Esta función cambia el tema
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme || "light";
    } else {
      // Si no está en el navegador, devuelve un valor por defecto
      return "light";
    }
  });

  const changeModeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === "dark") {
        document.querySelector("html").classList.add("dark");
      } else {
        document.querySelector("html").classList.remove("dark");
      }
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  return (
    <div className="w-1/4  dark:bg-gray-800 dark:text-white ">
      <div className="bg-[#0ed3cf] pt-8 pl-5 pb-4 flex flex-wrap text-white space-x-28">
        <div className="flex flex-wrap" >
          <Link href="/home"><BiLeftArrowAlt size="30px" /></Link>
          <p className="ml-3 font-semibold text-lg">Perfil</p>
        </div>
        <div className=" flex flex-wrap  items-center">
          <BsBrightnessHigh onClick={()=>changeModeTheme()} size="30px" className=" bg-gray-600 rounded-md mr-8 p-1 dark:bg-inherit "/>
           <HiOutlineMoon onClick={()=>changeModeTheme()} size="30px" className="dark:bg-gray-600 rounded-md  " />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-6">
        <div className="w-44 h-44 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
          A
        </div>
      </div>
      <div className="mt-6 px-6">
        <div className="mb-4">
          <label className="text-gray-600 dark:text-white" >Nombre:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none dark:text-black dark:bg-white"
            placeholder="Nombre"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-600 dark:text-white">Correo:</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none dark:text-black dark:bg-white"
            placeholder="Correo"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-600 dark:text-white">Número de Teléfono:</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none dark:text-black dark:bg-white"
            placeholder="Número de Teléfono"
          />
        </div>
        <button className="bg-[#0ed3cf] text-white p-2 rounded hover:bg-[#0ed3d0b0]">
          Guardar Cambios
        </button>
        <br/>
        <button className="bg-[#0ed3cf] text-white p-2 rounded hover:bg-[#0ed3d0b0]">
          cerrar session
        </button>
      </div>
    </div>
  );
}

export default BarraPerfil;