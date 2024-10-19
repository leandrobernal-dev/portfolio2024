import Nav from "@/app/components/Nav";
import Link from "next/link";
import { OpenInNew } from "@mui/icons-material";
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
            <Link href={"/"}>
              Leandro Bernal<span className="text-accent">.</span>
            </Link>
          </h1>
          <br />
          <h2 className="text-xl font-light">Full Stack Software Engineer</h2>
          <h3 className="text-xl font-light">
            <strong>|</strong>{" "}
            <span className="text-accent">Web Developer</span>
          </h3>
          <br />
        </div>
        <div>
          <p className="max-w-sm text-zinc-400">
            I build <strong className="text-accent">responsive</strong>,{" "}
            <strong className="text-accent">scalable</strong>, and
            <strong className="text-accent"> user-focused</strong> web
            applications with <strong className="text-accent">modern</strong>{" "}
            full-stack technologies.
          </p>
        </div>

        <Nav />
      </div>
      <div className="flex w-full items-center">
        <div className="my-8 flex gap-4 text-white md:justify-between">
          {SocialLinks.map(({ name, url, icon }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              className="hover:text-accent flex items-center gap-3 text-sm transition-colors duration-200"
            >
              {icon}
              <p>{name} </p>
              <OpenInNew className="h-4 w-4" />
            </Link>
          ))}
          <a
            target="_blank"
            href="https://www.upwork.com/freelancers/~01a704d9fb8d180d89"
            className="hover:text-accent flex h-12 animate-shimmer items-center justify-center gap-2 rounded-full border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-2 px-4 text-sm font-medium text-zinc-400 transition duration-300 hover:scale-110 focus:outline-none"
          >
            <img
              src="https://www.upwork.com/favicon.ico"
              className="w-5 invert"
              alt=""
            />
            Let's Work Together
            <OpenInNew className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
