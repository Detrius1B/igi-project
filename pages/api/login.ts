// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
  | {
      name: string;
      role: string;
    }
  | { text: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (
    req.body?.username?.toLowerCase() === 'manager' &&
    req.body.password?.toLowerCase() === '123123'
  ) {
    return res.status(200).redirect('').json({ name: req.body?.username, role: 'manager' });
  }

  if (
    req.body?.username?.toLowerCase() === 'employee' &&
    req.body.password?.toLowerCase() === '123123'
  ) {
    return res.status(200).json({ name: req.body?.username, role: 'employee' });
  }

  return res.status(401).json({ text: 'not correct' });
}
