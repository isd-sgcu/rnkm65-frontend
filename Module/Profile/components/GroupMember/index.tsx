import Typography from 'common/components/Typography'
import Image from 'next/image'
import React from 'react'

import { GroupMemberProps } from './props'
import { Container, ImageContainer, MemberContainer } from './styled'

const GroupMember = (props: GroupMemberProps) => {
  const { members } = props
  return (
    <Container>
      <Typography variant="h3" color="pink">
        สมาชิกในกลุ่ม ({members.length}/3)
      </Typography>
      <MemberContainer>
        {members.map(({ name, surname, imageUrl }) => (
          <div>
            <ImageContainer>
              <Image src={imageUrl} layout="fill" objectFit="cover" />
            </ImageContainer>
            <Typography variant="body" color="blue">
              {name}
              <br />
              {surname}
            </Typography>
          </div>
        ))}
      </MemberContainer>
    </Container>
  )
}

export default GroupMember
