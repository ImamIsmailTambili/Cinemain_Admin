import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("jwt");

    const isLoginPage = request.nextUrl.pathname === "/";

    if (!token && !isLoginPage) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (token && isLoginPage) {
        return NextResponse.redirect(new URL("/Dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/Dashboard/:path*",
        "/Film/:path*",
        "/Cinema/:path*",
        "/Order/:path*",
        "/User/:path*",
        "/Notif/:path*",
    ],
};
