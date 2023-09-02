import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";
import { db } from "@/app/database/index";
import { NextResponse } from "next/server";
import { not } from "drizzle-orm";

export const book = pgTable("book", {
  id: serial("id").primaryKey(),
  authorname: text("authorname"),
  price: integer("price"),
  title: text("title"),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  book_id: integer("book_id").references(() => book.id),
});


 

