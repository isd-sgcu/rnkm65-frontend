import { Phase } from 'common/constants/phase'
import React, { createContext, useContext, useMemo, useState } from 'react'

import { IPhaseContext } from './types'

const PhaseContext = createContext<IPhaseContext>({} as IPhaseContext)

export const usePhase = () => useContext(PhaseContext)

export const PhaseProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [phase, setPhase] = useState<Phase>(Phase.REGISTER)
  const value = useMemo(
    () => ({
      phase,
      setPhase,
    }),
    [phase, setPhase]
  )

  return <PhaseContext.Provider value={value}>{children}</PhaseContext.Provider>
}
