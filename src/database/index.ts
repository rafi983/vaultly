import { drizzle } from "drizzle-orm/postgres-js"
import { message } from "./message"
import postgres from "postgres"

const uri = process.env.URI;
if (!uri) {
    throw new Error("Database URI is not set in environment variables.");
}
export const db = drizzle({ client: postgres(uri) })

export const table = { message } as const
