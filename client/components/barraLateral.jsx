"use client"
import { MdGroups2 } from "react-icons/md"
import { BiDotsVertical } from "react-icons/bi"

function BarraLateral({ setBarra }) {


  return (
    <div className=" w-1/4 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-black">
      {/* Encabezado de la barra lateral */}
      <div className="bg-[#0ed3cf] p-4">
        <div className="flex flex-col">
          {/* Avatar del dueño de la cuenta (clickeable) */}
          <div className="flex items-center justify-between">
            {/*mi avatr*/}
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-semibold" onClick={() => setBarra(true)}>
              A
            </div>
            <div className="flex justify-between mt-1">
              <i className="fas fa-plus-circle text-2xl cursor-pointer hover:text-gray-400 dark:text-white"><MdGroups2 /></i>
              <i className="fas fa-ellipsis-h text-2xl cursor-pointer hover:text-gray-400 dark:text-white ml-4"><BiDotsVertical /></i>
            </div>
          </div>
        </div>
      </div>
      {/* Lista de chats */}
      <div className=" p-3 border-b-2 dark:border-gray-500 ">
        <input
          type="text"
          placeholder="Buscar en chats..."
          className="flex-auto py-1 px-4 rounded-2xl border border-gray-300 focus:outline-non"
        />
      </div>
      <ul className="overflow-y-auto">
        {/* Cada elemento de la lista de chats */}
        <li className="p-4 hover:bg-gray-100 cursor-pointer dark:hover:bg-slate-600">
          <div className="flex items-center">
            {/*avtar del amigo*/}
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
              A
            </div>
            <div className="ml-4">
              <h2 className="text-md font-semibold dark:text-white">
                Nombre del usuario
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Último mensaje
              </p>
            </div>
          </div>
        </li>
        {/* Puedes repetir este elemento para cada chat en la lista */}
      </ul>
    </div>
  )
}

export default BarraLateral
