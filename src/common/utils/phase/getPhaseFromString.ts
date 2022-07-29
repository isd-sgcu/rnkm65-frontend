import { Phase } from 'common/constants/phase'

const getPhaseFromString = (phase: string) => Phase[phase as keyof typeof Phase]

export default getPhaseFromString
