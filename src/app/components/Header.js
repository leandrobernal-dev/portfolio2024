import Nav from "@/app/components/Nav";
import Link from "next/link";
import { OpenInNew, Place } from "@mui/icons-material";
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
      <div className="space-y-4">
        <div>
          <h1 className="text-5xl font-black">
            <Link href={"/"}>
              Leandro Bernal<span className="text-accent">.</span>
            </Link>
          </h1>
          <h2 className="text-xl font-semibold">Full Stack Web Developer</h2>
          <div className="flex items-end">
            <strong>
              <Place fontSize="small" className="p-0" />
            </strong>
            <span className="text-sm text-accent">Philippines</span>
          </div>
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
              className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-accent"
            >
              {icon}
              <p>{name} </p>
              <OpenInNew fontSize="16px" />
            </Link>
          ))}
          <a
            target="_blank"
            href="https://www.upwork.com/freelancers/~01a704d9fb8d180d89"
            className="flex h-12 animate-shimmer items-center justify-center gap-2 rounded-full border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-2 px-4 text-sm font-medium text-zinc-400 transition duration-300 hover:scale-110 hover:text-accent focus:outline-none"
          >
            <img
              src="https://www.upwork.com/favicon.ico"
              className="w-5 invert"
              alt=""
            />
            Let's Work Together
            <OpenInNew fontSize="16px" />
          </a>
        </div>
      </div>
    </header>
  );
}
