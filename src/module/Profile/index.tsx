import Loading from 'common/components/Loading'
import { useAuth } from 'common/contexts/AuthContext'
import { APP_BASE_URL } from 'config/env'

import ChoosedBaan from './components/ChoosedBaan'
import GroupMember from './components/GroupMember'
import InviteLink from './components/InviteLink'
import UserProfile from './components/UserProfile'
import Waiting from './components/Waiting'
import InvitationProvider from './providers/InvitationProvider'
import { Container, GroupContainer } from './styled'
import { IProfileProps } from './types'

const Profile = (props: IProfileProps) => {
  const { canAccessProfile } = props

  const { user, group } = useAuth()
  if (!user) return <Loading />

  return canAccessProfile ? (
    <InvitationProvider>
      <Container>
        <UserProfile {...user} />
        <div
          style={{
            flexGrow: 1,
            width: '100%',
          }}
        >
          <InviteLink
            inviteLink={`${APP_BASE_URL}/?join=${encodeURIComponent(
              group ? group.token : 'GROUP_TOKEN_NOT_FOUND'
            )}`}
          />
          <GroupContainer>
            <GroupMember members={group?.members ?? []} />
            <ChoosedBaan baans={group?.baans ?? []} />
          </GroupContainer>
        </div>
      </Container>
    </InvitationProvider>
  ) : (
    <Waiting />
  )
}

export default Profile
