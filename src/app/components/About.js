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
            My go-to framework for both front-end and full-stack applications is
            Next.js. When I start building a new personal project, Next.js helps
            me quickly and efficiently bring ideas to life. It allows for rapid
            testing and iteration, making it perfect for exploring new concepts
            and refining them along the way.
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
