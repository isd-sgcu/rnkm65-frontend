import { Phase } from 'common/constants/phase'
import getPhase from 'common/utils/phase/getPhase'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  phase: Phase
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ phase: getPhase(new Date()) })
}
