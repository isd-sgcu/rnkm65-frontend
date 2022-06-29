import React from 'react'

import Announce from '../Profile/components/Announce'
import UserProfile from '../Profile/components/UserProfile'
import { Container } from '../Profile/styled'

const tmpUser = {
  firstname: 'Kamisato',
  lastname: 'Ayaka',
  imageUrl: '/tmp.jpg',
}

const TestPage = () => (
  <Container>
    <UserProfile {...tmpUser} />
    <div
      style={{
        flexGrow: 1,
        width: '100%',
      }}
    >
      <Announce
        baanName="บ้านทรายทองsssssssssss"
        imageUrl="/tmp.jpg"
        description="sadasdasdasaasdfsadfsadfasdsdasdasdas"
        facebook="asdasd"
        ig="asdasdsa"
      />
    </div>
  </Container>
)

export default TestPage
