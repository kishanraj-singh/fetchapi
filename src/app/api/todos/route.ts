import { getData } from "@/lib/getData";
import { ApiResponse, Todo } from "@/types";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const userId = searchParams.get("userId");
  const completed = searchParams.get("completed");
  const priority = searchParams.get("priority");

  let todos = getData<Todo>("todos");

  if (userId) todos = todos.filter((t) => t.userId === parseInt(userId));
  if (priority) todos = todos.filter((t) => t.priority === priority);
  if (completed !== null) {
    todos = todos.filter((t) => t.completed === (completed === "true"));
  }

  const total = todos.length;
  const data = todos.slice((page - 1) * limit, page * limit);

  const response: ApiResponse<Todo[]> = {
    success: true,
    total,
    page,
    limit,
    data,
  };
  return NextResponse.json(response);
}
