"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const navigate = useRouter()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("first")
   navigate.push("/home")
  };

  return (
<div className="bg-black flex justify-center items-center h-screen">
<div className="w-1/2 h-screen hidden lg:block">
  <img src="https://tailwindcomponents.com/svg/secure-login-animate.svg" alt="Placeholder Image" className="object-cover w-full h-full"/>
</div>
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">Login</h1>
  <form onSubmit={handleSubmit} >
    <div className="mb-4">
      <label  className="block text-gray-300">Email/Phone</label>
      <input type="text" id="username" name="username" className="w-full border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 bg-black text-white " />
    </div>
    <div className="mb-4">
      <label className="block text-gray-300">Password</label>
      <input type="password" id="password" name="password" className="w-full border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 bg-black text-white " />
    </div>
    <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
      <label  className="text-gray-600 ml-2">Remember Me</label>
    </div>
    <div className="mb-6 text-yellow-50">
      <a  className="hover:underline">Forgot Password?</a>
    </div>
    <button type="submit" className="bg-[#0ed3cf] hover:bg-[#68cecc] text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
  <div className="mt-6 text-yellow-50 text-center">
    <Link href={"/register"} className="hover:underline" >Sign up Here</Link>
  </div>
</div>
</div>
  )
}
