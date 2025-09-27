import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

import googleAuth from 'lib/google';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const youtube = google.youtube({
    version: 'v3',
    auth: googleAuth
  });

  const response = await youtube.channels.list({
    id: ['UC0snS_FYHj_5y_uFmWzp2hg'],
    part: ['statistics']
  });

  const channel = response.data.items[0];
  const { subscriberCount, viewCount } = channel.statistics;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    subscriberCount,
    viewCount
  });
}
