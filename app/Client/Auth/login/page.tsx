"use client";
import {FaHome} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import Image from "next/image";
import {useState} from "react";
export default function Login() {
  const[email,setemail]=useState();
  const[password,setpassword]=useState();
  const handlelogin=()=>{

  }
  return (
    <div className="md:h-screen flex flex-col sm:flex-row w-full min-h-screen">
      <div className="md:h-full md:w-1/2 p-10 ">
        <div className="flex items-center gap-4 md:mt-10 ">
           <FaHome className="h-6 w-7 text-violet-600" />
          <h1 className="font-bold text-2xl font-serif">Cube Factory</h1>
        </div>
        <div className="login flex justify-center mt-12">
          <div className="flex gap-4 flex-col w-full max-w-md">
            <div className="flex flex-col gap-y-2">
              <h2 className="font-bold text-3xl font-serif">Welcome back</h2>
              <h3 className="text-gray-500">Please enter your details</h3>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-bold">Email address</label>
              <input
                type="email"
                className="border-2 border-gray-300 rounded-md  p-2"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Password</label>
              <input
                type="text"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                className="border border-2 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-x-3">
               
                <div className="checkbox border w-4 h-4 cursor-pointer "></div>
                <div>Remember for 30 days</div>
              </div>
              <div>
                <h2 className="underline text-violet-700 cursor-pointer">Forgot password</h2>
              </div>
            </div>
            <button className="bg-violet-500 text-white p-2 rounded-md hover:bg-violet-600 transition-all mt-4 cursor-pointer">
              Signin
            </button>
            <div className="flex justify-center gap-3 items-center border-2 border-gray-300 mt-3 p-2">
              <FcGoogle className="w-6 h-7" />
              <h2>Sign in with google</h2>
            </div>
            <div className="flex gap-3 justify-center mt-4">
              <h3>Dont have an account</h3>
              <button className="text-blue-400 underline cursor-pointer">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    <div className="h-full w-full sm:w-1/2 bg-violet-400 flex items-center justify-center">
    <div className="h-full w-full flex items-center justify-center">
        <Image
  src="/login4.webp"
  alt="Login"
  width={500}
  height={400}
  className="rounded-xl shadow-lg object-cover"
/>
    </div>

</div>

    </div>
  );
}
