import { getData } from "@/lib/getData";
import { ApiResponse, Joke } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const type = searchParams.get("type");

  let jokes = getData<Joke>("jokes");

  if (type) jokes = jokes.filter((j) => j.type === type);

  const total = jokes.length;
  const data = jokes.slice((page - 1) * limit, page * limit);

  const response: ApiResponse<Joke[]> = {
    success: true,
    total,
    page,
    limit,
    data,
  };
  return NextResponse.json(response);
}
