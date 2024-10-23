import { sql } from "@vercel/postgres";
export async function getPosts() {
    try {
        const posts = await sql`SELECT * FROM posts`;
        return posts.rows;
    } catch (e) {
        console.error(e)
    }
}