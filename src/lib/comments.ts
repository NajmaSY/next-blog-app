import { sql } from "@vercel/postgres";
import short from "short-uuid";

export async function saveComment(
  username: string,
  content: string,
  slug: string
) {
  const uuid = short.generate();
  await sql`INSERT INTO comment (id, slug, username, content) VALUES (${uuid}, ${slug}, ${username}, ${content})`;
  return uuid;
}

export async function getComments(slug: string) {
  return await sql`SELECT * from comments WHERE slug=${slug}`;
}