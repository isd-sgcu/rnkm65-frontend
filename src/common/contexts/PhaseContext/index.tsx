import { Phase } from 'common/constants/phase'
import getAllowRoute from 'common/utils/getAllowRoute'
import getPhase from 'common/utils/getPhase'
import NotFound from 'module/NotFound'
import { useRouter } from 'next/router'
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

export const PhaseProvider = ({
  children,
  currentDate,
}: React.PropsWithChildren<{ currentDate: Date }>) => {
  const [phase, setPhase] = useState<Phase>(getPhase(currentDate))
  const allowRoute = useMemo(() => getAllowRoute(phase), [phase])
  const router = useRouter()
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

  if (!allowRoute.includes(router.pathname) && phase !== Phase.BYPASS) {
    return <NotFound />
  }

  return <PhaseContext.Provider value={value}>{children}</PhaseContext.Provider>
}
