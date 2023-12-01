import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default function Page() {
  const posts = getPosts();
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <div className="max-w-2xl mx-auto mt-10 ">
        <h2 className="text-3xl font-bold mb-4">My Posts: </h2>
        <ul className="list-disc pl-4">
          {posts.map((post) => {
            return (
              <li key={post.slug} className="mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-500 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
