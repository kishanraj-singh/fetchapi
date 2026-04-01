import { getData } from "@/lib/getData";
import { ApiError, ApiResponse, Post, Product, User } from "@/types";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;

  const products = getData<Product>("posts");
  const product = products.find((u) => u.id === parseInt(id));

  if (!product) {
    const error: ApiError = { success: false, message: "Product not found" };
    return NextResponse.json(error, { status: 404 });
  }

  const response: ApiResponse<Product> = { success: true, data: product };
  return NextResponse.json(response);
}
