import { getData } from "@/lib/getData";
import { ApiResponse, Country } from "@/types";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const region = searchParams.get("region");
  const search = searchParams.get("search");

  let countries = getData<Country>("countries");

  if (region) countries = countries.filter((c) => c.region === region);
  if (search) {
    const q = search.toLowerCase();
    countries = countries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q),
    );
  }

  const total = countries.length;

  const response: ApiResponse<Country[]> = {
    success: true,
    total,
    data: countries,
  };
  return NextResponse.json(response);
}
