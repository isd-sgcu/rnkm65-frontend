import axios from 'axios'
import Loading from 'common/components/Loading'
import { Phase } from 'common/constants/phase'
import getAllowRoute from 'common/utils/phase/getAllowRoute'
import getPhaseFromString from 'common/utils/phase/getPhaseFromString'
import NotFound from 'module/NotFound'
import { useRouter } from 'next/router'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useErrorHandler } from 'react-error-boundary'

import { IPhaseContext } from './types'

const PhaseContext = createContext<IPhaseContext>({} as IPhaseContext)

export const usePhase = () => useContext(PhaseContext)

export const PhaseProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [phase, setPhase] = useState<Phase | null>(null)
  const allowRoute = useMemo(() => getAllowRoute(phase), [phase])
  const router = useRouter()
  const handleError = useErrorHandler()

  const checkPhase = useCallback(
    (allowPhase: Phase[]) => {
      if (phase === Phase.BYPASS) return true
      return allowPhase.includes(phase!)
    },
    [phase]
  )

  useEffect(() => {
    const getDate = async () => {
      try {
        const res = await axios.get('/api/phase')
        setPhase(getPhaseFromString(res.data.phase))
      } catch (err) {
        handleError(err)
      }
    }
    getDate()
  }, [handleError])

  const value = useMemo(
    () => ({
      phase: phase as Phase,
      setPhase,
      checkPhase,
    }),
    [phase, setPhase, checkPhase]
  )

  if (!phase) return <Loading />

  if (!allowRoute.includes(router.pathname) && phase !== Phase.BYPASS) {
    return <NotFound />
  }

  return <PhaseContext.Provider value={value}>{children}</PhaseContext.Provider>
}
