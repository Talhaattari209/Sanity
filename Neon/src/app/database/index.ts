import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
 
neonConfig.fetchConnectionCache = true;
 
const sql = neon("postgres://malikmuzammil4411:VjXCyh80JuTZ@ep-frosty-wood-09631971-pooler.us-east-2.aws.neon.tech/books");
export const db = drizzle(sql);

//const result = await db.select().from(...);