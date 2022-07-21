import { Phase, PHASE_DATA } from '../../../constants/phase'

const getPhase = (currentDate: Date) => {
  if (process.env.NODE_ENV !== 'production' && process.env.NEXT_PUBLIC_PHASE) {
    return Phase[process.env.NEXT_PUBLIC_PHASE as keyof typeof Phase]
  }

  return PHASE_DATA.find(({ startTime }) => currentDate.getTime() >= startTime)!
    .phase
}

export default getPhase
