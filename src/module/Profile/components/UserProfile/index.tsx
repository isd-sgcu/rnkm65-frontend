import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { IUser } from 'common/types/user'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiPencil } from 'react-icons/hi'

import { Container, EditProfileButton, ImageContainer } from './styled'

const UserProfile = (props: IUser) => {
  const { firstname, lastname, imageUrl } = props
  const { t } = useSSRTranslation('profile')

  return (
    <Container>
      <ImageContainer>
        <Image src={imageUrl} layout="fill" objectFit="cover" />
      </ImageContainer>
      <div>
        <Typography variant="h3" color="blue">
          {firstname}
          <br />
          {lastname}
        </Typography>
        <Link href="/register?type=edit" passHref>
          <EditProfileButton>
            <Typography variant="body">{t('editProfile')}</Typography>
            <HiPencil />
          </EditProfileButton>
        </Link>
      </div>
    </Container>
  )
}

export default UserProfile
