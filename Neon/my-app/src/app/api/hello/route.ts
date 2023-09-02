import { db } from "@/app/database"
import { book, orderbook } from "@/app/database/schema";
import { equal } from "assert";
import { NextResponse } from "next/server"
import { eq } from "drizzle-orm";
//import { orderbook } from "@/app/database1/schema";


export async function GET(request: Request) {
    const data = await db.select().from(orderbook);
    const data1 = await db.select().from(book);
    console.log(data);
    return NextResponse.json(data1);
}

export async function POST(request: Request) {
  const req = await request.json();
  await db.insert(book).values({id: req.id, authorname: req.authorname, price: req.price, title: req.title});
  return NextResponse.json({ res: "your data Posted Successfuly" });
}

export async function PATCH(request: Request) {
  const req = await request.json();
  await db.update(book).set({ title: "html" }).where(eq(book.id, req.id));
  return NextResponse.json({ res: "your data updated Successfuly" });
}

export async function DELETE(request: Request) {
  const req = await request.json();
  await db.delete(book).where(eq(book.id, req.id));
  return NextResponse.json({ res: "your data Deleted Successfuly" });
}