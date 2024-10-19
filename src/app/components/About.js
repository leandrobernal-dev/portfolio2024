export default function About() {
  return (
    <section
      className="section leading-relaxed text-zinc-400"
      id="About"
      aria-labelledby="about-title"
    >
      <h2 className="font-bold text-white md:hidden" id="about-title">
        About
      </h2>
      <article className="space-y-4">
        <p>
          I used to build <strong className="text-accent">robots</strong>, now I
          build websites 🔨🤖➡️🌐. I've been freelancing for{" "}
          <strong className="text-accent">3 years</strong> now, building and
          maintaining websites and web applications for my clients.
        </p>
        <div>
          <p>
            My go-to framework for both front-end and full-stack applications is{" "}
            <strong className="text-accent">Next.js</strong>. When I start
            building a new personal project, Next.js helps me quickly and
            efficiently bring ideas to life. It allows for rapid testing and
            iteration, making it perfect for exploring new concepts and refining
            them along the way.
          </p>
        </div>
        <p>
          In my spare time, I enjoy 3D printing and 3d modeling, or play
          fingerstyle on my acoustic guitar🎸.
        </p>
      </article>
    </section>
  );
}
