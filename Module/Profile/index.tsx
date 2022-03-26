import React from 'react'

import GroupMember from './components/GroupMember'
import InviteLink from './components/InviteLink'
import UserProfile from './components/UserProfile'
import { Container, GroupContainer } from './styled'

const tmpUser = {
  name: 'Kamisato',
  surname: 'Ayaka',
  imageUrl: '/tmp.jpg',
}
const Profile = () => (
  <Container>
    <UserProfile {...tmpUser} />
    <div style={{ flexGrow: 1 }}>
      <InviteLink inviteLink="www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <GroupContainer>
        <GroupMember members={[tmpUser, tmpUser]} />
      </GroupContainer>
    </div>
  </Container>
)

export default Profile
