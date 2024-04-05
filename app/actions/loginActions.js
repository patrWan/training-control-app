'use server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function redirectTo(path) {
    redirect(`${path}`);
}

export async function isLoggedIn(user) {
    redirect(`${path}`);
}

export async function setSession(user) {
    await cookies().set('session', user[0].UserName);
    redirect('/dashboard')
}

export async function deleteSession() {

    cookies().delete('session');
    redirect('/')
}