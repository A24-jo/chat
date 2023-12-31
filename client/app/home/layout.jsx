"use client"
import { useEffect, useState } from "react";
import { BsEmojiSunglasses } from "react-icons/bs";
import ModalConfirmSubmit from "@/components/ModalConfirmSubmit";
import { useDispatch } from "react-redux";
import { dataInputChat } from "@/redux/features/chatSlice";
import { socket } from "../../socket";

export default function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    numero: 1,
    text: ''
  })

  const textInput = (e) => {
    setInput({ ...input, text: e })
    dispatch(dataInputChat(input));
  }

  const initialConnection = () => {
    socket.connect()
    socket.emit("join_room","hello my name is brayan")
  }

  const handleClick = () => {
    console.log("click")
    socket.emit("send",{emitido:"emitido"})
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (typeof window !== 'undefined') {
      if (theme === "dark") {
        document.querySelector("html").classList.add("dark");
      } else {
        document.querySelector("html").classList.remove("dark");
      }
    };
    initialConnection()
  }, []);
  
  return (
    <div className="h-screen flex dark:bg-gray-900 dark:text-white">
      {children}
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
        <div className="  dark:bg-gray-800  bg-gray-100 p-4 border-t border-gray-300 dark:border-gray-600">
          <div className="flex items-center">
            <div onClick={_ => setShow(!show)} className="mr-2 p-2 rounded-lg hover:bg-[#0ed3cf] dark:hover:bg-[#0ed3cf] dark:text-slate-100 text-slate-600 hover:text-white" >
              <BsEmojiSunglasses size="25px " />
            </div>
            <input
              type="text"
              className="flex-1 py-2 px-4 rounded-full border border-gray-300 focus:outline-none dark:text-black"
              placeholder="Escribe un mensaje..."
              value={input.text}
              onChange={(e) => textInput(e.target.value)}
            />
            <button onClick={handleClick} className="ml-4 px-4 py-2 bg-[#0ed3cf] text-white rounded-full hover:bg-[#0ed3d0b0]">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <ModalConfirmSubmit show={show} setShow={setShow} setInput={setInput} />
    </div>
  );
}