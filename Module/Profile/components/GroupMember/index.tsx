import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import React from 'react'

import Member from './components/Member'
import Placeholder from './components/Placeholder'
import { GroupMemberProps } from './props'
import { Container, MembersContainer } from './styled'

const GroupMember = (props: GroupMemberProps) => {
  const { members } = props

  // TODO change this later
  const isKing = true

  return (
    <Container>
      <Typography variant="h3" color="pink">
        สมาชิกในกลุ่ม ({members.length}/3)
      </Typography>
      <MembersContainer>
        {members.map((member, idx) => (
          <Member
            {...member}
            key={member.name}
            isKing={idx === 0 && members.length > 1}
            isDeletable={isKing && idx !== 0}
          />
        ))}
        {members.length <= 1 && (
          <Placeholder color="#DC28A3" backgroundColor="#240668" />
        )}
        {members.length <= 2 && (
          <Placeholder color="#B660B5" backgroundColor="#FFEDB3" />
        )}
      </MembersContainer>
      {!isKing && <Button css={{ marginTop: '20px' }}>ออกจากกลุ่ม</Button>}
    </Container>
  )
}

export default GroupMember
