export default function ExperienceCards() {
  return (
    <section
      className="section relative mb-24 flex flex-col gap-2"
      id="Experience"
    >
      <h3 className="font-bold text-white md:hidden">EXPERIENCE</h3>

      <article className="flex flex-col justify-between gap-4 bg-zinc-800 p-8 transition-transform duration-300 ease-in-out sm:flex-row md:p-8 md:hover:scale-110">
        <time className="min-w-fit text-zinc-400" dateTime="2022-01-01">
          2022 — Present
        </time>
        <div>
          <h3 className="text-lg font-bold">Full Stack Engineer | Freelance</h3>
          <p className="mt-2 text-sm leading-normal text-zinc-400">
            I worked with clients to design and build responsive web
            applications from concept to deployment. I utilized front-end
            technologies like HTML, CSS, JavaScript, and React, alongside
            back-end tools such as Node.js, Express, and databases like MySQL
            and MongoDB. I focused on delivering seamless user experiences,
            implementing API integrations, and optimizing performance, while
            ensuring scalability and security. My work consistently provided
            clients with high-quality, reliable digital solutions tailored to
            their business goals.
          </p>
          <p className="mt-2 text-sm leading-normal text-zinc-400">
            I also learned Google Cloud Platform along the way. Helped clients
            automate their tasks using Google Apps Script.
          </p>
        </div>
      </article>
    </section>
  );
}
