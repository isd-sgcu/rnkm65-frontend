import React from 'react'

import UserProfile from '../UserProfile'
import { Container } from './styled'

const WithUserProfile = ({ children }: React.PropsWithChildren<{}>) => (
  <Container>
    <UserProfile />
    <div
      style={{
        flexGrow: 1,
        width: '100%',
      }}
    >
      {children}
    </div>
  </Container>
)

export default WithUserProfile
