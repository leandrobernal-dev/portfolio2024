import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen text-white">
      <div className="mx-auto max-w-4xl">
        <header className="">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-3xl text-cyan-400">
                  <img src="/logo.svg" alt="" className="w-16" />
                </div>
              </Link>
              <div className="flex items-center space-x-8">
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
                <Link href="/tags" className="hover:text-gray-300">
                  Tags
                </Link>
                <Link href="/projects" className="hover:text-gray-300">
                  Projects
                </Link>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </div>
            </nav>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
