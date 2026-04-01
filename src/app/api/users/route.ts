import { getData } from "@/lib/getData";
import { ApiResponse, User } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const gender = searchParams.get("gender");
  const search = searchParams.get("search");

  let users = getData<User>("users");

  if (gender) users = users.filter((u) => u.gender === gender);

  if (search) {
    users = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()) ||
        u.username.toLowerCase().includes(search.toLowerCase()),
    );
  }

  const total = users.length;
  const start = (page - 1) * limit;
  const data = users.slice(start, start + limit);

  const response: ApiResponse<User[]> = {
    success: true,
    total,
    page,
    limit,
    data,
  };
  return NextResponse.json(response);
}
