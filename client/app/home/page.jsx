"use client"
import { MdGroups2 } from "react-icons/md"
import { BiDotsVertical } from "react-icons/bi"
import { PiChatsFill } from "react-icons/pi"
import Link from "next/link"
import Chats from "@/components/Chats"
import Contacts from "@/components/Contacts"
import { useState } from "react"

function BarraLateral() {

  const [tabs, setTabs] = useState(1)

  return (
    <div className=" w-1/4 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-black">
      {/* Encabezado de la barra lateral */}
      <div className="bg-[#0ed3cf] p-4">
        <div className="flex flex-col">
          {/* Avatar del dueño de la cuenta (clickeable) */}
          <div className="flex items-center justify-between">
            {/*mi avatr*/}
            <Link href="/home/perfil">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-semibold" >
              A
            </div>
            </Link>
            <div className="flex justify-between gap-4">
              <i
                onClick={() =>  setTabs(1)} 
                className="fas fa-plus-circle text-2xl cursor-pointer hover:text-gray-400 dark:text-white">
                <PiChatsFill />
              </i>
              <i
                onClick={() =>  setTabs(2)} 
                className="fas fa-plus-circle text-2xl cursor-pointer hover:text-gray-400 dark:text-white">
                  <MdGroups2 />
              </i>
              <i className="fas fa-ellipsis-h text-2xl cursor-pointer hover:text-gray-400 dark:text-white"><BiDotsVertical /></i>
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
      <div>
        {tabs == 1 && <Contacts />}
        {tabs == 2 && <Chats setTabs={setTabs} />}
      </div>
    </div>
  )
}

export default BarraLateral
