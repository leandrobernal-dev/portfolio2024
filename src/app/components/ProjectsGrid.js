"use client";

import { Launch } from "@mui/icons-material";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "InstaViewer",
    shortDescription: "Anonymous Instagram Stories Viewer",
    description:
      "View Instagram stories anonymously with this Next.js web application. No login required.",
    imageUrl: "/placeholder.svg?height=300&width=300",
    githubUrl:
      "https://github.com/leandrobernal-dev/anonymous-insta_stories-viewer",
    techUsed: [
      "Next.js",
      "Tailwind CSS",
      "Javascript",
      "Supabase",
      "Puppeteer",
    ],
  },
  {
    id: 2,
    title: "Ref Online",
    shortDescription: "Reference Canvas board for Designers",
    description:
      "A canvas for designers to put their image references on to. Similar to Pureref, but on the browser.",
    imageUrl: "/placeholder.svg?height=300&width=300",
    githubUrl: "https://github.com/leandrobernal-dev/ref-ol",
    techUsed: ["Next.js", "Tailwind CSS", "Javascript", "MongoDB", "AWS S3"],
  },
  {
    id: 3,
    title: "FakePost",
    shortDescription: "Chat Meme Generator",
    description:
      "Generate realistic funny chat screenshots from popular messaging platforms like WhatsApp, iMessage, and Facebook Messenger.",
    imageUrl: "/placeholder.svg?height=300&width=300",
    githubUrl: "https://github.com/leandrobernal-dev/fakepost",
    techUsed: ["Next.js", "Tailwind CSS", "Javascript"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    shortDescription:
      "My 2024 Portfolio Website made with Next.js and Tailwind CSS.",
    description:
      "My 2024 Portfolio Website made with Next.js and Tailwind CSS.",
    imageUrl: "/placeholder.svg?height=300&width=300",
    githubUrl: "https://github.com/leandrobernal-dev/portfolio2024",
    techUsed: ["Next.js", "Tailwind CSS", "Javascript"],
  },
];
export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <section className="section my-12 flex flex-col gap-2" id="Projects">
      <h3 className="font-bold text-white md:hidden">MY PROJECTS</h3>

      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {projects.map((project, index) => (
          <li
            key={index}
            className={`flex flex-col justify-between gap-8 bg-zinc-800 p-6 transition-all duration-300 md:aspect-square md:hover:scale-110 ${
              index % 2 === 0 ? "md:-mt-12" : ""
            } ${hoveredId !== null && hoveredId !== project.id ? "md:opacity-30" : "md:opacity-100"}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <header>
              <h4 className="text-2xl font-black">
                <a
                  target="_blank"
                  className="flex gap-1"
                  href={project.githubUrl}
                >
                  {project.title}
                  <Launch fontSize="small" />
                </a>
              </h4>
            </header>
            <div>
              <p className="text-sm">{project.shortDescription}</p>
              <p className="text-sm text-zinc-500">{project.description}</p>
            </div>
            <ul className="flex flex-wrap items-center gap-1">
              {project.techUsed.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border-zinc-700 bg-zinc-800 p-1 px-2 font-mono text-sm text-white shadow-md shadow-zinc-950/30"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
