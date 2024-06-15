import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/articles")
        return NextResponse.redirect(new URL("/articles/1", request.url));
}

export const config = {
    matcher: "/articles",
};
