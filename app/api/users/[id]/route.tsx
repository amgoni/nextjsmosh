import { NextRequest } from "next/server";
import { schema } from "../schema";

interface Props {
  params: { id: number };
}

// Getting a single user
export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10) {
    return Response.json({ error: "Invalid ID" }, { status: 404 });
  }

  return Response.json({
    id: params.id,
    name: "John Doe",
  });
}

// Updating a user
export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return Response.json(validation.error.errors, { status: 400 });
  }

  if (params.id > 10) {
    return Response.json({ error: "Invalid ID" }, { status: 404 });
  }

  return Response.json(
    {
      id: params.id,
      name: body.name,
    },
    { status: 200 }
  );
}

// Deleting a user
export async function DELETE(request: NextRequest, { params }: Props) {
  if (params.id > 10) {
    return Response.json({ error: "Invalid ID" }, { status: 404 });
  }

  return Response.json({ id: params.id }, { status: 200 });
}
