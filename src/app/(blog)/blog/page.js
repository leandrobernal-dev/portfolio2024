import { getSortedPostsData } from "@/app/(blog)/lib/post";
import Link from "next/link";

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData();

  return (
    <main className="mx-auto px-6 py-12">
      <h1 className="mb-4 text-7xl font-bold">Latest</h1>
      <p className="mb-16 border-b border-gray-800 pb-8 text-xl text-gray-400">
        Straightforward Articles and Guides on My Favorite Technologies
      </p>

      <div className="space-y-16">
        {allPostsData.map((post) => (
          <article key={post.id}>
            <time className="text-gray-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h2 className="mb-4 mt-2 text-2xl font-bold">
              <Link href={`/blog/${post.slug}`} className="hover:text-gray-300">
                {post.title}
              </Link>
            </h2>
            <div className="mb-4 flex gap-3">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${tag}`}
                  className="text-sm font-semibold text-accent hover:text-accent/90"
                >
                  {String(tag).toUpperCase()}
                </Link>
              ))}
            </div>
            <p className="mb-4 text-gray-400">{post.summary}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center font-semibold text-accent hover:text-accent/90"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
