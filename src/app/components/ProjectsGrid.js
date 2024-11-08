"use client";

import { GitHub, Launch } from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "InstaViewer",
    shortDescription: "Anonymous Instagram Stories Viewer",
    description:
      "View Instagram stories anonymously with this Next.js web application. No login required.",
    imageUrl: "/instaviewer.jpg",
    githubUrl:
      "https://github.com/leandrobernal-dev/anonymous-insta_stories-viewer",
    demoUrl: "https://anonymous-insta-stories-viewer.vercel.app/",
    techUsed: [
      "Supabase",
      "Puppeteer",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Javascript",
    ],
  },
  {
    id: 2,
    title: "Ref Online",
    shortDescription: "Reference Canvas board for Designers",
    description:
      "A canvas for designers to put their image references on to. Similar to Pureref, but on the browser.",
    imageUrl: "/refonline.jpg",
    githubUrl: "https://github.com/leandrobernal-dev/ref-ol",
    demoUrl: "https://refonline.vercel.app/",
    techUsed: [
      "MongoDB",
      "AWS S3",
      "NextAuth",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Javascript",
    ],
  },
  {
    id: 3,
    title: "FakePost",
    shortDescription: "Chat Meme Generator",
    description:
      "Generate realistic funny chat screenshots from popular messaging platforms like WhatsApp, iMessage, and Facebook Messenger.",
    imageUrl: "/fakepost.jpg",
    githubUrl: "https://github.com/leandrobernal-dev/fakepost",
    demoUrl: "https://fakepost.vercel.app/create",
    techUsed: ["Next.js", "Tailwind CSS", "Javascript"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    shortDescription: "My 2024 Portfolio Website",
    description:
      "My 2024 Portfolio Website made with Next.js and Tailwind CSS.",
    imageUrl: "/portfolio.jpg",
    githubUrl: "https://github.com/leandrobernal-dev/portfolio2024",
    demoUrl: "https://bernalleandro.com/",
    techUsed: ["Next.js", "Tailwind CSS", "Javascript"],
  },
];
export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <section className="section mt-12 flex flex-col gap-2" id="Projects">
      <h3 className="mb-2 font-bold text-white">MY PROJECTS</h3>

      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-12">
        {projects.map((project, index) => (
          <li
            key={index}
            className={`group flex flex-col justify-between gap-8 rounded-lg bg-white/10 p-6 transition-all duration-300 md:aspect-square md:gap-0 md:hover:scale-110 ${
              index % 2 === 0 ? "md:-mt-12" : ""
            } ${hoveredId !== null && hoveredId !== project.id ? "md:opacity-30 md:blur-sm" : ""}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <header className="flex justify-between">
              <h4 className="text-2xl font-black">
                <a
                  target="_blank"
                  className="flex gap-1 underline underline-offset-2 transition-colors duration-300 hover:text-accent"
                  href={project.demoUrl}
                >
                  {project.title}
                  <Launch fontSize="small" />
                </a>
              </h4>
              <a
                target="_blank"
                className="flex gap-1 underline underline-offset-2 transition-colors duration-300 hover:text-accent"
                href={project.githubUrl}
              >
                <GitHub fontSize="small" />
              </a>
            </header>
            <div className="relative">
              <Image
                width={1000}
                height={1000}
                quality={100}
                priority
                className="w-full"
                src={project.imageUrl}
                alt={project.title + " Image"}
              />
              <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-black to-black/50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <div className="absolute inset-x-0 bottom-0 top-0 h-full w-full translate-y-full transform p-4 text-center text-white transition-transform duration-300 ease-out group-hover:translate-y-1.5">
                  <p className="font-bold">{project.shortDescription}</p>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-1">
              {project.techUsed.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-[#030712] p-1 px-2 font-mono text-xs text-white shadow-md"
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
