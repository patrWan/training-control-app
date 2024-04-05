'use client'
import {redirectTo} from '@/app/actions/loginActions';
import { useState } from 'react';

export const runtime = 'edge'

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bg-zinc-900 w-full h-96 text-center flex flex-col items-center my-auto">
            <h1 className="font-bold my-2">Control Training App V0.1</h1>
            <input
                type="text"
                placeholder="Ingrese su usuario"
                className="my-4 p-2 w-56 text-gray-700"
                onChange={handleUsername}
                value={username}
                required
            />
            <input
                type="password"
                placeholder="Ingrese su contraseña"
                className="my-4 p-2 w-56 text-gray-700"
                onChange={handlePassword}
                value={password}
                required
            />

            <button
                className="my-4 p-2 w-56 text-white uppercase border-2 hover:bg-slate-100 hover:text-black"
                value="Iniciar sesión"
                onClick={() => handleLogin(username, password)}
            >
                Iniciar sesión
            </button>
        </div>
    )

    function handleUsername(e){
        setUsername(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    async function handleLogin(username, password){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username, password})
        };
    
        const response = await fetch(`https://training-control-app-862.pages.dev/api/login`, requestOptions).then(response => {return response.json()});

        if(!response.length){
           alert('Usuario o contraseña no encontrados!')
           redirectTo('/')
        }else{
            alert('Inicio de sesión correcto!')
            redirectTo('/dashboard')
        }
    }
}

