"use client"

import { useRouter } from "next/navigation";

function Register() {

  const navigate = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate.push("/")
    // Agregar lógica para el registro aquí
  };

  return (
    <div className="bg-black flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://tailwindcomponents.com/svg/queue-animate.svg"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Right: Registration Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          {/* Email/Phone Input */}
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              id="emailPhone"
              name="emailPhone"
              className="w-full border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="text"
              id="emailPhone"
              name="emailPhone"
              className="w-full border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 bg-black text-white "
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200">Phone</label>
            <input
              type="text"
              id="emailPhone"
              name="emailPhone"
              className="w-full border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 bg-black text-white "
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-200">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 bg-black text-white "
            />
          </div>
          <button
            type="submit"
            className="bg-[#0ed3cf] hover:bg-[rgba(14,211,208,0.63)] text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;