import { getData } from "@/lib/getData";
import { ApiResponse, Quote } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const category = searchParams.get("category");

  let quotes = getData<Quote>("quotes");

  if (category) quotes = quotes.filter((q) => q.category === category);

  const total = quotes.length;
  const data = quotes.slice((page - 1) * limit, page * limit);

  const response: ApiResponse<Quote[]> = {
    success: true,
    total,
    page,
    limit,
    data,
  };
  return NextResponse.json(response);
}
