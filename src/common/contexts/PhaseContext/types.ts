import { Phase } from 'common/constants/phase'

export interface IPhaseContext {
  phase: Phase
  setPhase: (phase: Phase) => void
  checkPhase: (allowPhase: Phase[]) => boolean
}
