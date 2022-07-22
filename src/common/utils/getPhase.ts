import { Phase, PHASE_DATA } from 'common/constants/phase'

const getPhase = (currentDate: Date) => {
  if (process.env.NEXT_PUBLIC_PHASE) {
    return Phase[process.env.NEXT_PUBLIC_PHASE as keyof typeof Phase]
  }

  return PHASE_DATA.find(({ startTime }) => currentDate.getTime() >= startTime)!
    .phase
}

export default getPhase
