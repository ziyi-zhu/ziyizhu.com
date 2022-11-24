import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About
          </Link>
          <Link
            href="/newsletter"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Newsletter
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.linkedin.com/in/ziyizhu/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/ziyi-zhu">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UC0snS_FYHj_5y_uFmWzp2hg">
            YouTube
          </ExternalLink>
          <ExternalLink href="https://instagram.com/neoziyism">
            Instagram
          </ExternalLink>
          <ExternalLink href="https://twitter.com/neoziyism">
            Twitter
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/guestbook"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Guestbook
          </Link>
          <Link
            href="/snippets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Snippets
          </Link>
          <Link
            href="/tweets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Tweets
          </Link>
        </div>
      </div>
    </footer>
  );
}
