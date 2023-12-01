import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-10 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="hidden h-6 text-2xl font-semibold sm:block">
          Najma&apos;s Blog
        </Link>
        <nav className="flex items-center space-x-4 leading-5 sm:space-x-">
          <Link
            href="/"
            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
