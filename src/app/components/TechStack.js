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

export default function TechStack() {
  const technologies = [
    { name: "React", icon: SiReact, color: "text-sky-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Git", icon: SiGit, color: "text-red-500" },
  ];

  return (
    <section className="relative flex w-full flex-col gap-2" id="TechStack">
      <h3 className="mb-2 font-bold text-white">MY TECH STACK</h3>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex w-full gap-2 bg-zinc-800 p-4">
            <tech.icon className={`text-3xl ${tech.color} `} />
            <span className="text-center text-xs text-gray-600 dark:text-gray-400">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
