import Nav from "@/app/components/Nav";
import { Launch } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const SocialLinks = [
  {
    name: "Github",
    url: "https://github.com/leandrobernal-dev",
    icon: <GitHubIcon fontSize="small" />,
  },
];

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans text-white md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-6">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-3/4 lg:flex-col lg:justify-between lg:py-24">
          <div className="">
            <div>
              <h1 className="text-4xl font-black">
                <Link href={"/"}>Leandro Bernal.</Link>
              </h1>
              <br />
              <h2 className="text-xl font-light">
                Full Stack Software Engineer
              </h2>
              <h3 className="text-xl font-light">
                <strong>|</strong> Web Developer
              </h3>
              <br />
            </div>
            <div>
              <p className="text-zinc-400">
                I build responsive, scalable, and user-focused web applications
                with modern full-stack technologies.
              </p>
            </div>

            <Nav />
          </div>
          <div className="ml-1 mt-8 flex items-center">
            <div className="my-8 flex gap-12">
              {SocialLinks.map(({ name, url, icon }) => (
                <Link
                  key={name}
                  href={url}
                  target="_blank"
                  className="flex items-center gap-4 text-zinc-400 transition-colors hover:text-white"
                >
                  {icon}
                  <p>{name} </p>
                  <Launch fontSize="small" />
                </Link>
              ))}
            </div>
          </div>
        </header>

        <div className="flex flex-col pt-24">
          <div
            className="textbase section mb-24 leading-relaxed text-zinc-400"
            id="About"
          >
            <h3 className="font-bold text-white md:hidden">ABOUT</h3>
            <p>
              Started out as a curious kid learning about robotics and
              computers, fell in love with web development. I've been
              freelancing for 3 years now, building and maintaining websites and
              web applications of my clients.
            </p>
            <br />
            <p>
              In my spare time, either I do 3d printing and modelling or play
              fingerstyle on my acoustic guitar.
            </p>
          </div>

          <div className="section mb-24 flex flex-col gap-2" id="Experience">
            <div className="h-48 bg-zinc-900"></div>
          </div>

          <div
            className="section mb-24 grid h-fit w-full grid-cols-2 gap-2"
            id="Projects"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-black sm:text-6xl">My Projects.</h2>
            </div>
            <div className="aspect-square bg-zinc-900"></div>
            <div className="aspect-square bg-zinc-900"></div>
            <div className="aspect-square bg-zinc-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
