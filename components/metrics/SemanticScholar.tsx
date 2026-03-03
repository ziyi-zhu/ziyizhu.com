import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Author } from 'lib/types';
import MetricCard from 'components/metrics/Card';

const AUTHOR_LINK =
  'https://www.semanticscholar.org/author/Ziyi-Zhu/2214424924';

export function Publications() {
  const { data } = useSWR<Author>('/api/author', fetcher);

  const paperCount = Number(data?.paperCount) || 0;

  return (
    <MetricCard
      header="Publications"
      link={AUTHOR_LINK}
      metric={paperCount}
      isCurrency={false}
    />
  );
}

export function Citations() {
  const { data } = useSWR<Author>('/api/author', fetcher);

  const citationCount = Number(data?.citationCount) || 0;

  return (
    <MetricCard
      header="Citations"
      link={AUTHOR_LINK}
      metric={citationCount}
      isCurrency={false}
    />
  );
}
