import { getData } from "@/lib/getData";
import { ApiResponse, Product } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const category = searchParams.get("category");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const search = searchParams.get("search");
  const inStock = searchParams.get("inStock");

  let products = getData<Product>("products");

  if (category) products = products.filter((p) => p.category === category);
  if (minPrice)
    products = products.filter((p) => p.price >= parseInt(minPrice));
  if (maxPrice)
    products = products.filter((p) => p.price <= parseInt(maxPrice));
  if (inStock === "true") products = products.filter((p) => p.inStock === true);
  if (search) {
    products = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  const total = products.length;
  const data = products.slice((page - 1) * limit, page * limit);

  const response: ApiResponse<Product[]> = {
    success: true,
    total,
    page,
    limit,
    data,
  };
  return NextResponse.json(response);
}
