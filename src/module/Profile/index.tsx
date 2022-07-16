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

const tmpUser = {
  title: 'Mr.',
  id: 'uuid',
  studentID: '6530000021',
  faculty: 'Faculty of Engineering',
  year: '1',
  firstname: 'Kamisato',
  lastname: 'Ayaka',
  nickname: '',
  email: '',
  phone: '',
  lineID: '',
  disease: '',
  allergyFood: '',
  allergyMedicine: '',
  foodRestriction: '',
  imageUrl: '/tmp.jpg',
  vaccineCertificateUrl: '',
  canSelectBaan: true,
  isVerify: true,
} as IUser

const tmpBaan = {
  id: 0,
  name: 'Yashiro Commission',
  imageUrl: '/tmp.jpg',
}

const Profile = (props: IProfileProps) => {
  const { canAccessProfile } = props

  const { user } = useAuth()
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
          <GroupMember members={[tmpUser, tmpUser]} />
          <ChoosedBaan baans={[tmpBaan, tmpBaan, tmpBaan]} />
        </GroupContainer>
      </div>
    </Container>
  ) : (
    <Waiting />
  )
}

export default Profile
