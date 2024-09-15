export default function Home() {
  return (
    <div className="flex justify-center py-8 text-white md:py-[120px]">
      <div className="grid h-screen w-full max-w-6xl gap-4 px-4 md:grid-cols-2">
        <div className="hidden md:block"></div>

        <div className="md:fixed md:w-[500px]">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-5xl font-black">Leandro Bernal.</h1>
              <br />
              <h2 className="text-3xl font-light">
                Full Stack Software Engineer.
              </h2>
              <h3 className="text-2xl font-light">
                <strong>|</strong> Web Developer.
              </h3>
              <br />
            </div>
            <div>
              <p className="">
                I build responsive, scalable, and user-focused web applications
                with modern full-stack technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="textbase leading-relaxed text-zinc-400">
            <h3 className="md:hidden">About</h3>
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

          <div className="flex flex-col gap-2">
            <div className="h-48 bg-zinc-900"></div>
          </div>

          <div className="grid h-fit w-full grid-cols-2 gap-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-6xl font-black">Some of My Projects.</h2>
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
