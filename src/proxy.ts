import { ratelimit } from "@/lib/redis";
import { ApiError } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";

  const { success } = await ratelimit.limit(ip);

  if (!success) {
    const error: ApiError = { success: false, message: "Too many requests" };
    return NextResponse.json(error, { status: 429 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
