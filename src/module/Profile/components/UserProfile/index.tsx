import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { IUserProfileProps } from 'common/types/user'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiPencil } from 'react-icons/hi'

import { Container, EditProfileButton, ImageContainer } from './styled'

const UserProfile = (props: IUserProfileProps) => {
  const { firstname, lastname, imageUrl, withoutEditButton } = props
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
        {!withoutEditButton && (
          <Link href="/register?type=edit" passHref>
            <EditProfileButton>
              <Typography variant="body">{t('editProfile')}</Typography>
              <HiPencil />
            </EditProfileButton>
          </Link>
        )}
      </div>
    </Container>
  )
}

export default UserProfile
