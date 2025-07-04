
import { NextResponse } from "next/server";
import prisma from "@/lib/connectivity";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

   const existingUser=await prisma.user.findUnique({
    where:{email},
   })
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        todo: [],
      },
    });

    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
