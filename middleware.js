import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const currentUser = request.cookies.get('session')?.value

    console.log(currentUser)


    if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
        console.log('hola 1')
        return Response.redirect(new URL('/dashboard', request.url))
    }

    if (!currentUser && request.nextUrl.pathname.startsWith('/dashboard')) {
        console.log('hola 2')
        return Response.redirect(new URL('/', request.url))
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}