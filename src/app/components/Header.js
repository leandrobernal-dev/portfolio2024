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
      <div className="flex w-full items-center pr-4">
        <div className="my-8 flex w-full gap-4 text-white md:justify-between md:gap-0">
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
              className="hover:text-accent flex items-center gap-3 text-sm transition-colors"
            >
              {icon}
              <p>{name} </p>
              <OpenInNew className="h-4 w-4" />
            </Link>
          ))}
          <a
            target="_blank"
            href="https://www.upwork.com/freelancers/~01a704d9fb8d180d89"
            className="flex h-12 animate-shimmer items-center justify-center gap-2 rounded-full border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-2 px-4 font-medium text-zinc-400 transition duration-300 hover:scale-110 focus:outline-none"
          >
            <img
              src="https://www.upwork.com/favicon.ico"
              className="w-5 invert"
              alt=""
            />
            Let's Work Together
            <OpenInNew className="h-4 w-4" />
          </a>

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
