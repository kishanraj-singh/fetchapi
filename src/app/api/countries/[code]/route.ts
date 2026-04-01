import { getData } from "@/lib/getData";
import { ApiError, ApiResponse, Country } from "@/types";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ code: string }>;
}

export async function GET(_req: NextRequest, { params }: Params) {
  const { code } = await params;

  console.log(code);

  const countries = getData<Country>("countries");

  const country = countries.find(
    (c) => c.code.toUpperCase() === code.toUpperCase(),
  );

  if (!country) {
    const error: ApiError = { success: false, message: "Country not found" };
    return NextResponse.json(error, { status: 404 });
  }

  const response: ApiResponse<Country> = { success: true, data: country };
  return NextResponse.json(response);
}
