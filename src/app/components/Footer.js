export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-zinc-500 sm:pb-0">
      <p>
        Design Inspired by{" "}
        <a
          href="https://brittanychiang.com/"
          className="font-medium text-zinc-400 hover:text-zinc-300 focus-visible:text-zinc-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (opens in a new tab)"
        >
          Brittany Chiang
        </a>{" "}
        and coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-zinc-400 hover:text-zinc-300 focus-visible:text-zinc-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code
        </a>{" "}
        by yours truly. Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-zinc-400 hover:text-zinc-300 focus-visible:text-zinc-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-zinc-400 hover:text-zinc-300 focus-visible:text-zinc-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-zinc-400 hover:text-zinc-300 focus-visible:text-zinc-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
        >
          Vercel.
        </a>
      </p>
    </footer>
  );
}
