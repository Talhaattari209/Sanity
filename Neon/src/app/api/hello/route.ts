import { db } from "@/app/database";
import exp from "constants";
import { request } from "http";
import { NextResponse } from "next/server";
import { book } from "@/app/database/schema"
import { eq } from "drizzle-orm";
 

export async function GET (request: Request){

    // const url = new URL(request.url);
    // console.log(url);
    // const Name1 = url.searchParams.get("Name1");
    // const Name2 = url.searchParams.get("class");
    // const Name3 = "Muzammil";
    // const Obj = {
    //     Name: "Muzammil",
    //     message: `hello from ${Name1}, ${Name2}` ,
   const data =await db.select().from(book)
   return NextResponse.json(data);
};



export async function POST(request: Request){
    const req=await request.json();
   await db.insert(book).values({ id: req.id, Author: req.Author, price: req.price, title: req.id});
    return NextResponse.json({res:"your data Posted Successfuly"});
}

export async function PATCH( request: Request ){
    const req=await request.json();
    await db.update(book).set({title:'html'}).where(eq(book.id, req.id));
    return NextResponse.json({res:"your data updated Successfuly"})
}

export async function DELETE( request: Request ){
    const req=await request.json();
    await db.delete(book).where(eq(book.id, req.id));
    return NextResponse.json({res:"your data Deleted Successfuly"});
}

