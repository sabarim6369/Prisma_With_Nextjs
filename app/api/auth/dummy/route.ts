import prisma from "@/lib/connectivity";
import { NextResponse } from "next/server";
export async function GET(){
    const data=await prisma.user.findMany();
    const userbyemail=await prisma.user.findUnique({
        where:{
            email:"sabarim6369@gmail.com"
        }
    })
    const getallposts=await prisma.post.findMany({
        include:{
            author:true
        }
    })
    const getalltodosofparticularuser=await prisma.todo.findMany({
        where:{
            userid:"12344"
        }
    })
    const allevents=await prisma.events.findMany({
        include:{
            organizer:true,
            collegedetail:true
        }
    })
    const gettop10colleges=await prisma.college.findMany({
        where:{
            ranking:{
                lte:10
            }
        }
    })
  const getUsersWithNoTodos = await prisma.user.findMany({
  where: {
    todolists: {
      none: {} 
    }
  }
});

    const geteventswithnametech=await prisma.events.findMany({
        where:{
           eventname:{
            contains:"Tech"
           }
        }
    })
        const getpostofuser=await prisma.user.findUnique({
            where:{email:"sabri"},
            include:{
                posts:{
                    take:1,
                    orderBy:{id:"asc"}
                }
            }
        })
}