
function Home (){
    return (
        <div class="h-screen flex">
        {/* <!-- Barra lateral (lista de chats) --> */}
        <div class="w-1/4 border-r border-gray-300">
          {/* <!-- Encabezado de la barra lateral --> */}
          <div class="bg-gray-200 p-4">
            <h1 class="text-lg font-semibold">Chats</h1>
          </div>
          {/* <!-- Lista de chats --> */}
          <ul class="overflow-y-auto">
            {/* <!-- Cada elemento de la lista de chats --> */}
            <li class="p-4 hover:bg-gray-100 cursor-pointer">
              <div class="flex items-center">
                <img src="imagen-usuario.jpg" alt="Imagen de usuario" class="w-10 h-10 rounded-full"/>
                <div class="ml-4">
                  <h2 class="text-md font-semibold">Nombre del usuario</h2>
                  <p class="text-sm text-gray-600">Último mensaje</p>
                </div>
              </div>
            </li>
            {/* <!-- Puedes repetir este elemento para cada chat en la lista --> */}
          </ul>
        </div>
        
        {/* <!-- Vista de chat --> */}
        <div class="flex-1 flex flex-col">
          {/* <!-- Encabezado del chat --> */}
          <div class="bg-gray-200 p-4 border-b border-gray-300">
            <div class="flex items-center">
              <img src="imagen-usuario.jpg" alt="Imagen de usuario" class="w-10 h-10 rounded-full"/>
              <h2 class="text-lg font-semibold ml-4">Nombre del usuario</h2>
            </div>
          </div>
          {/* <!-- Lista de mensajes --> */}
          <div class="flex-1 p-4 overflow-y-auto">
            {/* <!-- Puedes agregar mensajes aquí --> */}
          </div>
          {/* <!-- Área de composición de mensaje --> */}
          <div class="bg-gray-100 p-4 border-t border-gray-300">
            <div class="flex items-center">
              <input type="text" class="flex-1 py-2 px-4 rounded-full border border-gray-300 focus:outline-none" placeholder="Escribe un mensaje..."/>
              <button class="ml-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;