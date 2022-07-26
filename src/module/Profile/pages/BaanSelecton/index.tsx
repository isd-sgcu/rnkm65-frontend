import { useAuth } from 'common/contexts/AuthContext'
import { APP_BASE_URL } from 'config/env'
import ChoosedBaan from 'module/Profile/components/ChoosedBaan'
import GroupMember from 'module/Profile/components/GroupMember'
import InviteLink from 'module/Profile/components/InviteLink'
import WithUserProfile from 'module/Profile/components/WithUserProfile'
import InvitationProvider from 'module/Profile/providers/InvitationProvider'
import React from 'react'

import { GroupContainer } from './styled'

const BaanSelecton = () => {
  const { group } = useAuth()
  return (
    <InvitationProvider>
      <WithUserProfile>
        <InviteLink
          inviteLink={`${APP_BASE_URL}/?join=${encodeURIComponent(
            group ? group.token : 'GROUP_TOKEN_NOT_FOUND'
          )}`}
        />
        <GroupContainer>
          <GroupMember />
          <ChoosedBaan baans={group?.baans ?? []} />
        </GroupContainer>
      </WithUserProfile>
    </InvitationProvider>
  )
}

export default BaanSelecton
