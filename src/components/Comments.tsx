import { WEB_SITE } from "config";
import { CommentForm } from "./CommentForm";

// this comp is now responsible for fetching components

export default async function Comments({ postSlug }: { postSlug: string }) {
  console.log("This runs on the server");
  // `/blog/post-1`

  let comments = [];

  try {
    const commentsResult = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {
      next: { revalidate: 0 },
    });
    const response = await commentsResult.json();
    comments = response.comments.rows;
    console.log(response.comments);
  } catch (err) {
    console.log(err);
  }

  console.log(comments);
  return (
    <div className="mt-8">
      <CommentForm postSlug={postSlug} />
      <h2 className="text-2xl font-bold my-4">| Comments |</h2>
      <ul className="list-disc pl-4">
        {/* @ts-ignore */}
        {comments.map((comment) => {
          return (
            <li key={comment.id} className="mb-4">
              <span className="text-lg font-semibold">
                {comment.username} says...
              </span>
              <br />
              <span className="text-gray-700">{comment.content}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
