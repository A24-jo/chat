'use client'

const Chats = () => {
  return (
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
  );
};

export default Chats;
