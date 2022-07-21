import Typography from 'common/components/Typography'
import { apiClient } from 'common/utils/axios'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { IoClose } from 'react-icons/io5'

import { ImageContainer } from '../../styled'
import { DeleteMemberButton, KingBadge, MemberContainer } from './styled'
import { MemberProps } from './types'

const Member = (props: MemberProps) => {
  const { user, isKing, isDeletable } = props
  const { firstname, lastname, imageUrl, id } = user

  const handleDelete = useCallback(() => {
    apiClient.delete(`/group/members/${id}`)
  }, [id])

  return (
    <MemberContainer>
      {isKing && (
        <KingBadge>
          <Image src="/kingBadge.svg" height={26} width={26} />
        </KingBadge>
      )}
      {isDeletable && (
        <DeleteMemberButton onClick={handleDelete}>
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
