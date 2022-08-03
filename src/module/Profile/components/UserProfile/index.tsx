import Image from 'common/components/Image'
import Typography from 'common/components/Typography'
import { CAN_EDIT_PROFILE } from 'common/constants/phase'
import { useAuth } from 'common/contexts/AuthContext'
import { usePhase } from 'common/contexts/PhaseContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import Link from 'next/link'
import React from 'react'
import { HiPencil } from 'react-icons/hi'

import { Container, EditProfileButton, ImageContainer } from './styled'

const UserProfile = () => {
  const { checkPhase } = usePhase()
  const { user } = useAuth()
  const withoutEditButton = !checkPhase(CAN_EDIT_PROFILE)

  const { firstname, lastname, imageUrl } = user!
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
