import type { NextApiRequest, NextApiResponse } from 'next';
import { validatedEnv } from '@/utils/env';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Environment variables loaded successfully', databaseUrl: validatedEnv.DATABASE_URL });
}