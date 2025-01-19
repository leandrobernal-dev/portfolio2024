export default function ExperienceCards() {
  return (
    <section className="section relative flex flex-col gap-4" id="Experience">
      <h3 className="mb-4 font-bold text-white">EXPERIENCE</h3>

      {/* Full Stack Engineer Card */}
      <article className="flex flex-col justify-between gap-4 rounded-lg bg-white/10 p-8 transition-transform duration-300 ease-in-out sm:flex-row md:p-8 md:hover:scale-110">
        <time className="min-w-fit text-zinc-400" dateTime="2023-01-01">
          2023 — Present
        </time>
        <div>
          <h3 className="text-lg font-bold">Full Stack Engineer | Freelance</h3>
          <ul className="ml-8 mt-2 list-disc leading-normal text-zinc-400">
            <li>
              Worked with clients to build custom web applications, handling
              everything from designing the interface to setting up backend
              systems.
            </li>
            <li>
              Helped businesses save time by automating repetitive tasks and
              connecting tools like Google Sheets and Gmail.
            </li>
            <li>
              Built websites and blogs for clients, focusing on clean design and
              making sure they were easy for clients to update on their own.
            </li>
            <li>
              Paid close attention to performance and scalability, making sure
              websites ran smoothly, even as they grew.
            </li>
            <li>
              Fixed bugs, added features, and continually worked on improving
              the overall experience for users.
            </li>
          </ul>
        </div>
      </article>

      {/* Frontend Engineer Card */}
      <article className="flex flex-col justify-between gap-4 rounded-lg bg-white/10 p-8 transition-transform duration-300 ease-in-out sm:flex-row md:p-8 md:hover:scale-110">
        <time className="min-w-fit text-zinc-400" dateTime="2022-01-01">
          2022 — 2023
        </time>
        <div>
          <h3 className="text-lg font-bold">Frontend Engineer | Freelance</h3>
          <ul className="ml-8 mt-2 list-disc leading-normal text-zinc-400">
            <li>
              Designed and built user-friendly interfaces using React, making
              sure everything looked good and worked smoothly.
            </li>
            <li>
              Worked closely with clients to turn their ideas and designs into
              functional, interactive websites.
            </li>
            <li>
              Improved site performance by optimizing images, scripts, and other
              assets to make pages load faster.
            </li>
            <li>
              Fixed bugs and ironed out quirks to ensure websites worked
              properly across different browsers and devices.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
