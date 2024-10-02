export default function About() {
  return (
    <section
      className="section mb-24 leading-relaxed text-zinc-400"
      id="About"
      aria-labelledby="about-title"
    >
      <h2 className="font-bold text-white md:hidden" id="about-title">
        About
      </h2>
      <article className="space-y-4">
        <p>
          I started out curious about robotics and computers, but eventually
          fell in love with web development. I've been freelancing for about 3
          years now, building and maintaining websites and web applications for
          my clients.
        </p>
        <div>
          <p>
            My go to framework is Next.js for both front-end only and full stack
            applications. Here's why:
          </p>
          <p>
            Whenever I come up with a new idea and start building a personal
            project, I approach it with the mindset that it could eventually
            become a business. During the development process, there’s always a
            point where I can evaluate whether the idea has real potential or if
            it's not worth pursuing. Next.js allows me to reach that point as
            quickly and efficiently as possible, making it my go-to framework
            for testing and iterating on ideas.
          </p>
        </div>
        <p>
          In my spare time, I enjoy 3D printing and modeling, or playing
          fingerstyle on my acoustic guitar🎸.
        </p>
      </article>
    </section>
  );
}
