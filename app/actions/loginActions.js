'use server'
import { redirect } from 'next/navigation'
export const runtime = 'edge'
export async function redirectTo(path) {
    redirect(`${path}`);
}