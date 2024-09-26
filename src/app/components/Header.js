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
          <a
            href="mailto:bernalleandro.dev@gmail.com"
            className="my-auto flex items-center gap-1 rounded-full bg-white px-4 py-2 font-semibold text-black transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Email />
            Contact me
          </a>
        </div>
      </div>
    </header>
  );
}
