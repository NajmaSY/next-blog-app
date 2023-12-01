"use client";
// @ts-expect-error
// just renaming the import/hook here.
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormStatusButton() {
  const { pending } = useFormStatus();
  // use formStatus has to be used inside a <form> tag.
  // we can extract the current 'pending' status
  return (
    <button
      type="submit"
      disabled={pending}
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
        pending ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
      }`}
    >
      {pending ? "sending comment..." : "send comment"}
    </button>
  );
}
