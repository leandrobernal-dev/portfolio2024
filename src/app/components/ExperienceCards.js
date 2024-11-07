export default function ExperienceCards() {
  return (
    <section className="section relative flex flex-col gap-2" id="Experience">
      <h3 className="mb-2 font-bold text-white">EXPERIENCE</h3>

      <article className="flex flex-col justify-between gap-4 bg-zinc-800 p-8 transition-transform duration-300 ease-in-out sm:flex-row md:p-8 md:hover:scale-110">
        <time className="min-w-fit text-zinc-400" dateTime="2022-01-01">
          2022 — Present
        </time>
        <div>
          <h3 className="text-lg font-bold">Full Stack Engineer | Freelance</h3>

          <ul className="ml-8 mt-2 list-disc leading-normal text-zinc-400">
            <li>
              Designed and developed responsive web applications for clients,
              managing both front-end and back-end processes.
            </li>
            <li>
              Automated workflows and integrated Google Suite solutions to
              enhance productivity.
            </li>
            <li>
              Built and maintained custom portfolio and blog websites for
              businesses and individuals.
            </li>
            <li>
              Developed, optimized, and maintained web applications, ensuring
              performance and scalability.
            </li>
            <li>
              Diagnosed and fixed bugs, while continuously implementing new
              features to improve user experience.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
