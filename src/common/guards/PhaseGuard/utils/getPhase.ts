import { PHASE_DATA } from '../constants'

const getPhase = (currentDate: Date) =>
  PHASE_DATA.find(({ startTime }) => currentDate.getTime() >= startTime)!.phase

export default getPhase
