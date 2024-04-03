import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/feed')) {
        const response= NextResponse.next()
        // Add custom header to the response
        response.headers.set('x-custom-header', 'hello world')
        return response
    }

    return NextResponse.next()
}
