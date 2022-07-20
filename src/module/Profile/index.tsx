import Loading from 'common/components/Loading'
import { useAuth } from 'common/contexts/AuthContext'
import { IUser } from 'common/types/user'
import React from 'react'

import ChoosedBaan from './components/ChoosedBaan'
import GroupMember from './components/GroupMember'
import InviteLink from './components/InviteLink'
import UserProfile from './components/UserProfile'
import Waiting from './components/Waiting'
import { Container, GroupContainer } from './styled'
import { IProfileProps } from './types'

const Profile = (props: IProfileProps) => {
  const { canAccessProfile } = props

  const { user, group } = useAuth()
  if (!user) return <Loading />

  return canAccessProfile ? (
    <Container>
      <UserProfile {...user} />
      <div
        style={{
          flexGrow: 1,
          width: '100%',
        }}
      >
        <InviteLink inviteLink="www.youtube.com/watch?v=dQw4w9WgXcQ" />
        <GroupContainer>
          <GroupMember members={group?.members ?? []} />
          <ChoosedBaan baans={group?.baans ?? []} />
        </GroupContainer>
      </div>
    </Container>
  ) : (
    <Waiting />
  )
}

export default Profile
