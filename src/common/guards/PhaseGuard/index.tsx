import NotFound from 'module/NotFound'
import { useRouter } from 'next/router'
import React from 'react'

import getAllowRoute from './utils/getAllowRoute'
import getPhase from './utils/getPhase'

const PhaseGuard = ({
  children,
  currentDate,
}: React.PropsWithChildren<{ currentDate: Date }>) => {
  const router = useRouter()
  const phase = getPhase(currentDate)
  const allowRoute = getAllowRoute(phase)

  if (!allowRoute.includes(router.pathname)) {
    return <NotFound />
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

export default PhaseGuard
