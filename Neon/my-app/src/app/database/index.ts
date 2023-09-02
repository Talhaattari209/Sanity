import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

const sql = neon(
  "postgres://attaritalha209:g9SXwoKdL4Zu@ep-delicate-water-37299013-pooler.us-east-2.aws.neon.tech/Books"
);
export const db = drizzle(sql);

//const result = await db.select().from(...);
