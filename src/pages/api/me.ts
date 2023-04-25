import { validateRoute } from '@/functions/auth';
import prisma from '@/functions/prisma';
import {NextApiRequest, NextApiResponse} from 'next';

export default validateRoute(async (req: NextApiRequest, res: NextApiResponse, user) => {
  res.json({ status: "succes", user });
})