'use client'

import { useEffect, useState } from "react"
import { redirectTo, deleteSession } from "../actions/loginActions";

export default function DashboardPage() {

  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser() {
      const u = await JSON.parse(localStorage.getItem("user"));

      //setUser(u[0]);
    }

    getUser();


  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-800">
      <h1 className="text-amber-800">Bienvenid@  ! <span className="font-bold text-lg">{user.UserName}</span></h1>
      <button 
        className="border-2 border-red-800 text-red-800 bg-zinc-900 p-2"
        onClick={()=>logOut()}
      >
        Cerrar Sesión
      </button>
    </div>
  )
}

function logOut(){
  deleteSession();
  localStorage.removeItem('user');
}
