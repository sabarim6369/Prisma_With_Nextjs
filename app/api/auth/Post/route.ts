import { NextResponse } from "next/server";
import prisma from "@/lib/connectivity";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, userId } = body;

    // validate input
    if (!title || !userId) {
      return NextResponse.json(
        { error: "Title and userId are required" },
        { status: 400 }
      );
    }

    // create the post
    const newPost = await prisma.post.create({
      data: {
        title,
        author: {
          connect: { id: userId }
        }
      }
    });

    return NextResponse.json({ post: newPost }, { status: 201 });

  } catch (error) {
    console.error("Post creation error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const data = await prisma.post.findMany({
      include: {
        author: true, // includes full User data for each post
      },
    });

    return NextResponse.json({ data }, { status: 200 });

  } catch (err) {
    console.error("Error fetching posts:", err);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}