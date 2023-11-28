export default async function Comments({ postSlug }: { postSlug: string }) {
  return (
    <div>
      <h2>| Comments |</h2>
      <h3>Leave a comment: </h3>
      <form action={`/api/cpmments/${postSlug}`} method="POST">
        <label htmlFor="username">Name: </label>
        <input type="text" name="username" />
        <label htmlFor="comment">Your comment: </label>
        <textarea
          name="comment"
          cols={30}
          rows={10}
          className="text-neutral-900"
        />
        <button type="submit">send comment</button>
      </form>
    </div>
  );
}
