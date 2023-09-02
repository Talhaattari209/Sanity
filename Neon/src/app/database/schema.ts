import { pgTable, serial, text, varchar,integer } from "drizzle-orm/pg-core";


export const book =pgTable('book', {

  id: serial('id').primaryKey(),
  Author: text('author'),
  price: integer('price'),
  title: text('title')

  
});

