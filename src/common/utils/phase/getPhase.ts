import { PHASE_DATA } from 'common/constants/phase'

import getPhaseFromString from './getPhaseFromString'

const getPhase = (currentDate: Date) => {
  if (process.env.NEXT_PUBLIC_PHASE) {
    return getPhaseFromString(process.env.NEXT_PUBLIC_PHASE)
  }

  return PHASE_DATA.find(({ startTime }) => currentDate.getTime() >= startTime)!
    .phase
}

export default getPhase
