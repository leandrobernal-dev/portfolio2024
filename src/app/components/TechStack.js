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
    { name: "Shadcn UI", icon: SiShadcnui, color: "text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    { name: "Supabase", icon: SiSupabase, color: "text-emerald-600" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "text-blue-500" },
    { name: "AWS Lambda", icon: SiAwslambda, color: "text-orange-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Git", icon: SiGit, color: "text-red-500" },
    { name: "VSCode", icon: SiVisualstudiocode, color: "text-blue-500" },
  ];

  return (
    <section className="relative flex w-full flex-col gap-2" id="TechStack">
      <h3 className="font-bold text-white md:hidden">TECH STACK I USE</h3>

      <div className="grid grid-cols-4 justify-items-center gap-4 sm:grid-cols-8">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <tech.icon className={`w-6 ${tech.color} mb-2`} />
            <span className="text-center text-xs text-gray-600 dark:text-gray-400">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
