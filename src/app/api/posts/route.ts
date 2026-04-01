import { getData } from "@/lib/getData";
import { ApiResponse, Post, Product } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  let posts = getData<Post>("posts");

  if (category) posts = posts.filter((p) => p.category === category);
  if (search) {
    const q = search.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q)),
    );
  }

  const total = posts.length;
  const data = posts.slice((page - 1) * limit, page * limit);

  const response: ApiResponse<Post[]> = {
    success: true,
    total,
    page,
    limit,
    data,
  };
  return NextResponse.json(response);
}
