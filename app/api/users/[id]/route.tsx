import { NextRequest } from "next/server";
import { schema } from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

// Getting a single user
export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user) {
    return Response.json({ error: "Invalid ID" }, { status: 404 });
  }

  return Response.json(user, { status: 200 });
}

// Updating a user
export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return Response.json(validation.error.errors, { status: 400 });
  }

  // Find if user exists
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return Response.json({ error: "Invalid ID" }, { status: 404 });
  }

  const updatedUser = prisma.user.update({
    where: { id: parseInt(params.id) },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return Response.json(updatedUser, { status: 200 });
}

// Deleting a user
export async function DELETE(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return Response.json({ error: "Invalid ID" }, { status: 404 });
  }

  await prisma.user.delete({
    where: { id: parseInt(params.id) },
  });

  return Response.json({});
}
