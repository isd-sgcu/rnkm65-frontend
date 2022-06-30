import React from 'react'

import ChoosedBaan from '../ChoosedBaan'
import GroupMember from '../GroupMember'
import UserProfile from '../UserProfile'
import WaitForBaanHourglass from '../WaitForBaanHourglass'
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
    <UserProfile withoutEditButton {...tmpUser} />
    <div
      style={{
        flexGrow: 1,
        width: '100%',
      }}
    >
      <WaitForBaanHourglass />
      <GroupContainer>
        <GroupMember disabled members={[tmpUser, tmpUser]} />
        <ChoosedBaan notChangeable baans={[tmpBaan, tmpBaan, tmpBaan]} />
      </GroupContainer>
    </div>
  </Container>
)

export default Profile
