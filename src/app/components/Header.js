import Nav from "@/app/components/Nav";
import Link from "next/link";
import { Email, Launch } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/leandrobernal-dev",
    icon: <GitHubIcon fontSize="small" />,
  },
];
export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-[800px] lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="">
        <div>
          <h1 className="text-4xl font-black">
            <Link href={"/"}>Leandro Bernal.</Link>
          </h1>
          <br />
          <h2 className="text-xl font-light">Full Stack Software Engineer</h2>
          <h3 className="text-xl font-light">
            <strong>|</strong> Web Developer
          </h3>
          <br />
        </div>
        <div>
          <p className="text-zinc-400">
            I build responsive, scalable, and user-focused web applications with
            modern full-stack technologies.
          </p>
        </div>

        <Nav />
      </div>
      <div className="flex items-center">
        <div className="my-8 flex gap-8">
          <img
            className="h-12 w-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/108369489?v=4"
            alt=""
          />
          {SocialLinks.map(({ name, url, icon }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              className="flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {icon}
              <p>{name} </p>
              <Launch fontSize="small" />
            </Link>
          ))}
          {/* <a
            href="mailto:bernalleandro.dev@gmail.com"
            className="duration-400 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <Email fontSize="small" className="mr-1" />
              Email me
            </span>
          </a> */}
        </div>
      </div>
    </header>
  );
}
