import Image from 'common/components/Image'
import Typography from 'common/components/Typography'
import { css } from 'config/stitches.config'
import React from 'react'
import { IoClose } from 'react-icons/io5'

import { ImageContainer } from '../../styled'
import { DeleteMemberButton, KingBadge, MemberContainer } from './styled'
import { MemberProps } from './types'

const Member = (props: MemberProps) => {
  const { user, isKing, isDeletable, onDelete } = props
  const { firstname, lastname, imageUrl } = user

  return (
    <MemberContainer>
      {isKing && (
        <KingBadge>
          <Image
            src="/kingBadge.svg"
            height={26}
            width={26}
            className={css({ backgroundColor: 'transparent !important' })()}
          />
        </KingBadge>
      )}
      {isDeletable && (
        <DeleteMemberButton onClick={() => onDelete(user)}>
          <IoClose />
        </DeleteMemberButton>
      )}
      <ImageContainer>
        <Image src={imageUrl} layout="fill" objectFit="cover" />
      </ImageContainer>
      <Typography variant="body" color="blue">
        {firstname}
        <br />
        {lastname}
      </Typography>
    </MemberContainer>
  )
}

export default Member
