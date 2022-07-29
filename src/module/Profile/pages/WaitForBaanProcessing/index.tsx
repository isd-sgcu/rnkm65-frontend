import { useAuth } from 'common/contexts/AuthContext'
import ChoosedBaan from 'module/Profile/components/ChoosedBaan'
import GroupMember from 'module/Profile/components/GroupMember'
import WithUserProfile from 'module/Profile/components/WithUserProfile'
import React from 'react'

import WaitForBaanAnnouncement from './components/WaitForBaanAnnouncement'
import { GroupContainer } from './styled'

const WaitForBaanProcessing = () => {
  const { group } = useAuth()

  return (
    <WithUserProfile>
      <WaitForBaanAnnouncement />
      <GroupContainer>
        <GroupMember disabled />
        <ChoosedBaan baans={group?.baans ?? []} notChangeable />
      </GroupContainer>
    </WithUserProfile>
  )
}

export default WaitForBaanProcessing
