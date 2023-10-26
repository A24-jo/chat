"use client"
import { useState } from "react";
import BarraLateral from "../../components/barraLateral";
import BarraPerfil from "../../components/barraPerrfil";


function Home() {

  const [barra, setBarra] = useState(false);

  return (
    <div className="h-screen flex dark:bg-gray-900 dark:text-white">

      {barra ? <BarraPerfil setBarra={setBarra} /> : <BarraLateral setBarra={setBarra} />}

      <div className="flex-1 flex flex-col">
        {/* Encabezado del chat */}
        <div className="bg-gray-200 p-4 border-b border-gray-300 dark:border-gray-600 dark:bg-gray-700">
          <div className="flex items-center">
          {/*avtar del amigo*/}
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
              A
            </div>

            <h2 className="text-lg font-semibold dark:text-white ml-4">
              Nombre del usuario
            </h2>
          </div>
        </div>
        {/* Lista de mensajes */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Puedes agregar mensajes aquí */}
        </div>
        {/* Área de composición de mensaje */}
        <div className= "  dark:bg-gray-800  bg-gray-100 p-4 border-t border-gray-300 dark:border-gray-600">
          <div className="flex items-center">
            <input
              type="text"
              className="flex-1 py-2 px-4 rounded-full border border-gray-300 focus:outline-none dark:text-black"
              placeholder="Escribe un mensaje..."
            />
            <button className="ml-4 px-4 py-2 bg-[#0ed3cf] text-white rounded-full hover:bg-[#0ed3d0b0]">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;