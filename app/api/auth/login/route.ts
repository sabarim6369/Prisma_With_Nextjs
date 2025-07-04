import {NextResponse} from "next/server";
import prisma from "@/lib/connectivity";
export  async function POST(req:Request){
try{
const body=await req.json();
const {email,name,password}=body;
if(!name||!email||!password){
      if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const newuser=await prisma.user.create({
        data:{
            name,email,password,todo:[]
        }
    })

    return NextResponse.json({ user: newuser }, { status: 201 });}
}catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}