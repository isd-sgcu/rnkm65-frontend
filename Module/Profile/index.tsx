import React from 'react'

import InviteLink from './components/InviteLink'
import UserProfile from './components/UserProfile'
import { Container } from './styled'

const Profile = () => (
  <Container>
    <UserProfile name="Kamisato" surname="Ayaka" imageUrl="/tmp.jpg" />
    <InviteLink inviteLink="www.youtube.com/watch?v=dQw4w9WgXcQ" />
  </Container>
)

export default Profile
