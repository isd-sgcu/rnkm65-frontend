import { DEFAULT_ROUTE, Phase, PHASE_DATA } from '../constants/phase'

const getAllowRoute = (phase: Phase) => {
  const { allowRoute } = PHASE_DATA.find(
    (phaseData) => phaseData.phase === phase
  ) || { allowRoute: [] }

  return DEFAULT_ROUTE.concat(allowRoute)
}

export default getAllowRoute
