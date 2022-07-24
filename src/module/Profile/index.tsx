import Loading from 'common/components/Loading'
import { Phase } from 'common/constants/phase'
import { useAuth } from 'common/contexts/AuthContext'
import { usePhase } from 'common/contexts/PhaseContext'
import { canJoinGroup } from 'common/utils/group'
import React from 'react'

import AnnounceBaan from './pages/AnnounceBaan'
import BaanSelecton from './pages/BaanSelecton'
import CannotSelectBaan from './pages/CannotSelectBaan'
import WaitForBaanProcessing from './pages/WaitForBaanProcessing'
import WaitForBaanSelection from './pages/WaitForBaanSelection'

const Profile = () => {
  const { user, group } = useAuth()

  const { phase } = usePhase()
  const canSelectBaan = canJoinGroup(user)

  if (!user || !group) return <Loading />

  switch (phase) {
    case Phase.REGISTER:
    case Phase.REGISTER_END:
      return <WaitForBaanSelection />
    case Phase.BAAN_SELECTION:
      if (canSelectBaan) return <BaanSelecton />
      return <CannotSelectBaan />
    case Phase.BAAN_SELECTION_END:
      if (canSelectBaan) return <WaitForBaanProcessing />
      return <CannotSelectBaan />
    case Phase.BAAN_ANNOUNCE:
      if (canSelectBaan) return <AnnounceBaan />
      return <CannotSelectBaan />
    case Phase.ESTAMP:
      // TODO: Implement profile page for e-stamp
      return null

    // BYPASS
    case Phase.BYPASS:
      return <BaanSelecton />
    default:
      return null
  }
}

export default Profile
