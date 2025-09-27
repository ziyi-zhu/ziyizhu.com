import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';

export default function ViewCounter({ slug }: { slug: string }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = Number(data?.total) || 0;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      });

    registerView();
  }, [slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
}
