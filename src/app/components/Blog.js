import { getLatestPosts } from "@/app/(blog)/lib/post";
import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiDocker,
  SiVisualstudiocode,
  SiPython,
  SiFirebase,
  SiSupabase,
  SiGooglecloud,
  SiAwslambda,
  SiGraphql,
  SiShadcnui,
} from "react-icons/si";

export default async function BlogSection() {
  const latestPost = await getLatestPosts();
  const technologies = [
    { name: "React", icon: SiReact, color: "text-sky-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    { name: "Supabase", icon: SiSupabase, color: "text-emerald-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Git", icon: SiGit, color: "text-red-500" },
  ];

  return (
    <section className="relative flex w-full flex-col gap-2" id="blog">
      <h3 className="mb-2 font-bold text-white">BLOG</h3>

      <div className="grid w-full gap-8">
        {latestPost.map((post) => (
          <div key={post.slug} className="space-y-2">
            <p className="text-sm text-accent">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {post.title}
            </h3>
            <p className="text-[#a0aec0]">{post.summary}</p>
          </div>
        ))}
      </div>
      <Link href="/blog" className="mt-4 inline-block">
        <button className="group text-accent hover:text-white">
          Read more posts
          <KeyboardArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </Link>
    </section>
  );
}
