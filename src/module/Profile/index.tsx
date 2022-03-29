import React from 'react'

import ChoosedBaan from './components/ChoosedBaan'
import GroupMember from './components/GroupMember'
import InviteLink from './components/InviteLink'
import UserProfile from './components/UserProfile'
import { Container, GroupContainer } from './styled'

const tmpUser = {
  firstname: 'Kamisato',
  lastname: 'Ayaka',
  imageUrl: '/tmp.jpg',
}

const tmpBaan = {
  id: 0,
  name: 'Yashiro Commission',
  imageUrl: '/tmp.jpg',
}

const Profile = () => (
  <Container>
    <UserProfile {...tmpUser} />
    <div
      style={{
        flexGrow: 1,
        width: '100%',
      }}
    >
      <InviteLink inviteLink="www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <GroupContainer>
        <GroupMember members={[tmpUser, tmpUser]} />
        <ChoosedBaan baans={[tmpBaan, tmpBaan, tmpBaan]} />
      </GroupContainer>
    </div>
  </Container>
)

export default Profile
