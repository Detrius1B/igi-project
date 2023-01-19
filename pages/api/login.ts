// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('reqqqq', req.body);
  console.log('ressss', res);

  // change to accessToken

  // res.status(401).json({ text: 'not allowed' });

  return res.status(200).json({ name: req.body?.username });
}
