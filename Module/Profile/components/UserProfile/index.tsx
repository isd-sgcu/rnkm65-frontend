import Typography from 'common/components/Typography'
import { User } from 'common/types/user'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiPencil } from 'react-icons/hi'

import { EditProfileButton, ImageContainer } from './styled'

const UserProfile = (props: User) => {
  const { name, surname, imageUrl } = props
  return (
    <div>
      <ImageContainer>
        <Image src={imageUrl} layout="fill" objectFit="cover" />
      </ImageContainer>
      <Typography variant="h3" color="blue">
        {name}
        <br />
        {surname}
      </Typography>
      <Link href="/register" passHref>
        <EditProfileButton>
          <Typography variant="body">แก้ไขข้อมูล</Typography>
          <HiPencil />
        </EditProfileButton>
      </Link>
    </div>
  )
}

export default UserProfile
