import { getData } from "@/lib/getData";
import { ApiResponse, Joke, Quote } from "@/types";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const quotes = getData<Quote>("quotes");
  const random = quotes[Math.floor(Math.random() * quotes.length)];

  const response: ApiResponse<Quote> = { success: true, data: random };
  return NextResponse.json(response);
}
