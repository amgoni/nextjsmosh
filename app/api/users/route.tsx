import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";

// Getting all users
export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Doe",
    },
  ]);
}

// Creating a new user
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
    },
    { status: 201 }
  );
}
