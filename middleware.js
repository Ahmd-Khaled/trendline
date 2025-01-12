import { NextRequest, NextResponse } from "next/server";

export const protectedRoutes = ["/test-auth"];
export default function middleware(req) {
  const token = req.cookies.get("token");

  if (!token && protectedRoutes.includes(req?.nextUrl?.pathname)) {
    const absoluteUrl = new URL("/register", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }

  return NextResponse.next();
}
