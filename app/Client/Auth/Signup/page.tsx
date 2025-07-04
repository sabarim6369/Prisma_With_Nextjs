"use client";

import { useState } from "react";
import axios from "axios";
import { FaHome } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const router=useRouter();
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });
if(res.status===201){
  alert("Signup successful!");
}
    
      // Optionally: reset form or redirect
    } catch (error: any) {
      const message =
        error?.response?.data?.error || "Something went wrong";
      alert(message);
    }
  };

  return (
    <div className="md:h-screen flex flex-col sm:flex-row w-full min-h-screen">
      <div className="md:h-full md:w-1/2 p-10">
        <div className="flex items-center gap-4">
          <FaHome className="h-6 w-7 text-violet-600" />
          <h1 className="font-bold text-2xl font-serif">Cube Factory</h1>
        </div>
        <div className="login flex justify-center mt-12">
          <div className="flex gap-4 flex-col w-full max-w-md">
            <div className="flex flex-col gap-y-2">
              <h2 className="font-bold text-3xl font-serif">Create your account</h2>
              <h3 className="text-gray-500">Please fill in the details below to sign up</h3>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-bold">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-bold">Email address</label>
              <input
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-bold">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-bold">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-violet-500 text-white p-2 rounded-md hover:bg-violet-600 transition-all mt-4 cursor-pointer"
            >
              Sign Up
            </button>
            <div className="flex justify-center gap-3 items-center border-2 border-gray-300 mt-3 p-2 cursor-pointer">
              <FcGoogle className="w-6 h-7" />
              <h2>Sign up with Google</h2>
            </div>
            <div className="flex gap-3 justify-center mt-4">
              <h3>Already have an account?</h3>
              <button className="text-blue-400 underline cursor-pointer">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full sm:w-1/2 bg-violet-400 flex items-center justify-center">
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/login4.webp"
            alt="Signup"
            width={500}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
