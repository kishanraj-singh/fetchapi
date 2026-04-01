import { getData } from "@/lib/getData";
import { ApiError, ApiResponse, User } from "@/types";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;

  const users = getData<User>("users");
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    const error: ApiError = { success: false, message: "User not found" };
    return NextResponse.json(error, { status: 404 });
  }

  const response: ApiResponse<User> = { success: true, data: user };
  return NextResponse.json(response);
}
