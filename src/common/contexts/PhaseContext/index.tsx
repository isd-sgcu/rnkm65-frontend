import { Phase } from 'common/constants/phase'
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { IPhaseContext } from './types'

const PhaseContext = createContext<IPhaseContext>({} as IPhaseContext)

export const usePhase = () => useContext(PhaseContext)

export const PhaseProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [phase, setPhase] = useState<Phase>(Phase.REGISTER)
  const checkPhase = useCallback(
    (allowPhase: Phase[]) => {
      if (phase === Phase.BYPASS) return true
      return allowPhase.includes(phase)
    },
    [phase]
  )

  const value = useMemo(
    () => ({
      phase,
      setPhase,
      checkPhase,
    }),
    [phase, setPhase, checkPhase]
  )

  return <PhaseContext.Provider value={value}>{children}</PhaseContext.Provider>
}
