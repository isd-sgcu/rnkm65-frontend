import { usePhase } from 'common/contexts/PhaseContext'
import NotFound from 'module/NotFound'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import getAllowRoute from './utils/getAllowRoute'
import getPhase from './utils/getPhase'

const PhaseGuard = ({
  children,
  currentDate,
}: React.PropsWithChildren<{ currentDate: Date }>) => {
  const router = useRouter()
  const phase = getPhase(currentDate)
  const allowRoute = getAllowRoute(phase)
  const { setPhase } = usePhase()

  useEffect(() => {
    setPhase(phase)
  }, [phase, setPhase])

  if (!allowRoute.includes(router.pathname)) {
    return <NotFound />
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

export default PhaseGuard
