"use client"
import { useEffect, useState } from "react";
import { BsEmojiSunglasses } from "react-icons/bs";
import ModalConfirmSubmit from "@/components/ModalConfirmSubmit";
import { socket } from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorageItems } from "@/utils/helpers";
import { postUserData } from "@/redux/features/userSlice";
import Image from "next/image";
import { postNewMessage } from "@/services/postNewMessage";

export default function HomeLayout({ children }) {
  const user =  useSelector( state =>  state.user.userData)
  const selectedUser =  useSelector( state =>  state.chat.selectedUser)
  const dispatch = useDispatch()

  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    numero: 1,
    text: ''
  })

  const textInput = (e) => {
    setInput({ ...input, text: e })
  }

  const initialConnection = (userLocalStrId = false) => {
    socket.connect()
    socket.emit("join_room",{userId: user?.userId ?? userLocalStrId})
    socket.on("new_message", (message) => {
      console.log(message)
    })
  }

  const handleClick = async () => {


    await postNewMessage({
      message: input.text,
      receiver,
      sender,
      type: 1
    })

    console.log("clieck en send messge")
    // socket.emit("send_message",input.text)
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
  }, []);

  useEffect(() => {

    if(!Object.entries(user).length){
      const userDataLocalStr = getLocalStorageItems('user_data')
      const userDataFormated = JSON.parse(userDataLocalStr)
      dispatch(postUserData(userDataFormated))
      initialConnection(userDataFormated.userId)
    } else initialConnection();

  }, [])
  
  
  return (
    <div className="h-screen flex dark:bg-gray-900 dark:text-white">
      {children}
     {!!Object.entries(selectedUser).length ? (<div className="flex-1 flex flex-col">
        {/* Encabezado del chat */}
        <div className="bg-gray-200 p-4 border-b border-gray-300 dark:border-gray-600 dark:bg-gray-700">
          <div className="flex items-center">
            {/*avtar del amigo*/}
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
              A
            </div>

            <h2 className="text-lg font-semibold dark:text-white ml-4">
              {selectedUser?.name}
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
      </div>) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col gap-6 items-center justify-center">
          <h1 className="text-lg">Selecciona un usuario para chatear</h1>
          <Image src="/cta-img.svg" height={300} width={500} alt="no-user-selected" />
          </div>
        </div>
      )}
      <ModalConfirmSubmit show={show} setShow={setShow} setInput={setInput} />
    </div>
  );
}