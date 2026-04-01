import { getData } from "@/lib/getData";
import { ApiResponse, Joke } from "@/types";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const jokes = getData<Joke>("jokes");
  const random = jokes[Math.floor(Math.random() * jokes.length)];

  const response: ApiResponse<Joke> = { success: true, data: random };
  return NextResponse.json(response);
}
