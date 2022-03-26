import Typography from 'common/components/Typography'
import Image from 'next/image'
import React from 'react'
import { IoClose } from 'react-icons/io5'

import { ImageContainer } from '../../styled'
import { DeleteMemberButton, KingBadge, MemberContainer } from './styled'
import { MemberProps } from './types'

const Member = (props: MemberProps) => {
  const { name, surname, imageUrl, isKing, isDeletable } = props
  return (
    <MemberContainer>
      {isKing && (
        <KingBadge>
          <Image src="/kingBadge.svg" height={26} width={26} />
        </KingBadge>
      )}
      {isDeletable && (
        <DeleteMemberButton>
          <IoClose />
        </DeleteMemberButton>
      )}
      <ImageContainer>
        <Image src={imageUrl} layout="fill" objectFit="cover" />
      </ImageContainer>
      <Typography variant="body" color="blue">
        {name}
        <br />
        {surname}
      </Typography>
    </MemberContainer>
  )
}

export default Member
