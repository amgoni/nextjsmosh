import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Milk",
      price: 1.23,
    },
    {
      id: 2,
      name: "Bread",
      price: 2.34,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  return NextResponse.json(
    {
      id: 3,
      name: body.name,
      price: body.price,
    },
    { status: 201 }
  );
}
