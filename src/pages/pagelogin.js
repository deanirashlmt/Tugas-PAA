import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

export default function login() {
  const [email,setemail] = useState ('');
  const [password,setpassword] = useState ('');
  const log = async (e)=>{
    e.preventDefault();
    const res = await fetch ('http://localhost:3000/api/auth',{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email,password})
    });
    const data = await res.json();
    console.log(data)
    if(data.token){
      Router.push('/dashboard')
    }

  }
    return (
<div className="min-h-screen bg-purple-400 flex justify-center items-center">
        <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
        </div>
        <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
        </div>
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Login</h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Hayolo Login Dulu</p>
          </div>
          <form onSubmit={log}>
          <div className="space-y-4">
            <input type="text" placeholder="Email Address" value={email} onChange={(e)=> setemail(e.target.value)} className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
            <input type="text" placeholder="Password" value={password} onChange={(e)=> setpassword(e.target.value)} className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Login</button>
            <Link href='/'>
            <p className="mt-4 text-sm">Already to? <span className="underline cursor-pointer"> Sign Up</span>
            </p></Link>
          </div>
          </form>
        </div>
        <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block" />
        <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
        </div>
      </div>
    )
}
