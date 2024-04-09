'use client'

import { useEffect, useState } from "react"

import { deleteSession } from "../actions/loginActions"

import BasicLineChart from "../components/LineChart"

import { session, session_sentadillas } from "@/app/util/data"

export default function DashboardPage() {

  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser() {
      const u = await JSON.parse(localStorage.getItem("user"));

      setUser(u[0]);
    }

    getUser();

  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center  bg-slate-100">
      <h1 className="text-amber-800 my-10">Bienvenid@  ! <span className="font-bold text-lg">{user.UserName}</span></h1>
      <div className="md:flex md:flex-row">
          <BasicLineChart data={session} type={'Salto de cuerda'}/>
          <BasicLineChart data={session_sentadillas} type={'Sentadillas'}/>
          <BasicLineChart data={session} type={'Salto de cuerda'}/>
      </div>


      <button
        className="border-2 border-red-800 text-red-800 bg-zinc-900 p-2"
        onClick={() => logOut()}
      >
        Cerrar Sesión
      </button>
    </div>
  )
}

function logOut() {
  deleteSession();
  localStorage.removeItem('user');
}
