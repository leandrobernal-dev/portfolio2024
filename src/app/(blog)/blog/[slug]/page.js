import { getPostData } from "@/app/(blog)/lib/post";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default async function PostPage({ params }) {
  const postData = await getPostData(params.slug);
  return (
    <main className="mx-auto px-6 py-12">
      <p className="mb-4 text-center font-bold text-zinc-500">
        {new Date(postData.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })}
      </p>
      <h1 className="mb-4 border-b border-gray-800 pb-8 text-center text-2xl font-bold sm:text-3xl lg:text-6xl">
        {postData.title}
      </h1>

      <ReactMarkdown
        className="prose max-w-full dark:prose-invert prose-a:text-accent"
        components={{
          h2: ({ children }) => {
            return (
              <h2 id={String(children).replace(/\s+/g, "-")}>{children}</h2>
            );
          },
        }}
        rehypePlugins={[rehypeHighlight]}
      >
        {postData.content}
      </ReactMarkdown>
    </main>
  );
}
