"use client";

import { getAllContacts } from "@/redux/features/chatSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Contacts = () => {
 
  const contacts = useSelector(state => state.chat.contacts)
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(getAllContacts())
  }, [])
  

  return (
    <ul className="overflow-y-auto">
      {contacts?.map((contact) => {
        return (
          <li key={contact.id} className="p-4 hover:bg-gray-100 cursor-pointer dark:hover:bg-slate-600">
            <div className="flex items-center">
              {/*avtar del amigo*/}
              <div className="w-12 h-12 bg-[#ad2828] rounded-full flex items-center justify-center text-white text-xl font-semibold">
                A
              </div>
              <div className="ml-4">
                <h2 className="text-md font-semibold dark:text-white">
                  {contact.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Último mensaje
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
