/* eslint-disable no-fallthrough */
import Loading from 'common/components/Loading'
import { Phase } from 'common/constants/phase'
import { useAuth } from 'common/contexts/AuthContext'
import { usePhase } from 'common/contexts/PhaseContext'
import { haveBaan } from 'common/utils/baan'
import { canJoinGroup } from 'common/utils/group'
import React from 'react'

import AnnounceBaan from './pages/AnnounceBaan'
import BaanSelecton from './pages/BaanSelecton'
import EStampProfile from './pages/EStamp'
import NotSelectBaan from './pages/NotSelectBaan'
import WaitForBaanProcessing from './pages/WaitForBaanProcessing'
import WaitForBaanSelection from './pages/WaitForBaanSelection'

const Profile = () => {
  const { user, group } = useAuth()

  const { phase } = usePhase()
  const canSelectBaan = canJoinGroup(user)
  const haveSelectedBaan = haveBaan(group)

  if (!user || !group) return <Loading />

  switch (phase) {
    case Phase.REGISTER:
    case Phase.REGISTER_END:
      return <WaitForBaanSelection />

    case Phase.BAAN_SELECTION:
      if (canSelectBaan) return <BaanSelecton />

    case Phase.BAAN_SELECTION_END:
      if (canSelectBaan && haveSelectedBaan) return <WaitForBaanProcessing />

    case Phase.BAAN_ANNOUNCE:
      if (canSelectBaan && haveSelectedBaan && user.baanId)
        return <AnnounceBaan />

      // fallthrough for not 106 and not select baan
      return <NotSelectBaan />

    case Phase.ESTAMP:
      return <EStampProfile />

    // BYPASS
    case Phase.BYPASS:
      return <BaanSelecton />
    default:
      return null
  }
}

export default Profile
