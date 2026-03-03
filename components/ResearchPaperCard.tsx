import useSWR from 'swr';
import cn from 'classnames';

import fetcher from 'lib/fetcher';

export default function ResearchPaperCard({
  title,
  venue,
  href,
  arxivId,
  gradient
}) {
  const { data } = useSWR<Record<string, number | null>>(
    '/api/citations',
    fetcher
  );
  const citations = data?.[arxivId];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-1/2 bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <span className="ml-2 align-baseline capsize">
            {citations != null ? new Number(citations).toLocaleString() : '–––'}
          </span>
        </div>
      </div>
    </a>
  );
}
