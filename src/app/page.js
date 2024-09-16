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
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
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
          <div className="flex items-center">
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

        <main className="flex flex-col pt-24 lg:w-3/4 lg:py-24">
          <div
            className="section mb-24 leading-relaxed text-zinc-400"
            id="About"
          >
            <h3 className="font-bold text-white md:hidden">ABOUT</h3>
            <p>
              Started out curious about robotics and computers eventually fell
              in love with web development. I've been freelancing for 3 years
              now, building and maintaining websites and web applications of my
              clients.
            </p>
            <br />
            <p>
              In my spare time, either I do 3d printing and modelling or play
              fingerstyle on my acoustic guitar 🎸.
            </p>
          </div>

          <div
            className="section relative mb-24 flex flex-col gap-2"
            id="Experience"
          >
            <h3 className="font-bold text-white md:hidden">EXPERIENCE</h3>

            <div className="flex justify-between gap-4 bg-zinc-900 p-8 transition-transform duration-300 ease-in-out hover:scale-110">
              <span className="min-w-fit text-zinc-400">2022 — Present</span>
              <div>
                <h3 className="text-lg font-bold">
                  Full Stack Engineer | Freelance - Fiverr
                </h3>
                <p className="mt-2 text-sm leading-normal text-zinc-400">
                  I worked with clients to design and build responsive web
                  applications from concept to deployment. I utilized front-end
                  technologies like HTML, CSS, JavaScript, and React, alongside
                  back-end tools such as Node.js, Express, and databases like
                  MySQL and MongoDB. I focused on delivering seamless user
                  experiences, implementing API integrations, and optimizing
                  performance, while ensuring scalability and security. My work
                  consistently provided clients with high-quality, reliable
                  digital solutions tailored to their business goals.
                </p>
                <p className="mt-2 text-sm leading-normal text-zinc-400">
                  I also learned Google Cloud Platform along the way. Helped
                  clients automate their tasks using Google Apps Script.
                </p>
              </div>
            </div>
          </div>

          <div
            className="section mb-24 grid h-fit w-full grid-cols-2 gap-2"
            id="Projects"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-black sm:text-6xl">My Projects.</h2>
            </div>
            {[0, 1, 2].map((item, index) => (
              <div
                key={item + index}
                className="aspect-square bg-zinc-900 transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              ></div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
