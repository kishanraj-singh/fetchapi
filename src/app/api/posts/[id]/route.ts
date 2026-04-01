import { getData } from "@/lib/getData";
import { ApiError, ApiResponse, Post, User } from "@/types";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;

  const posts = getData<Post>("posts");
  const post = posts.find((u) => u.id === parseInt(id));

  if (!post) {
    const error: ApiError = { success: false, message: "Post not found" };
    return NextResponse.json(error, { status: 404 });
  }

  const response: ApiResponse<Post> = { success: true, data: post };
  return NextResponse.json(response);
}
