import Image from 'common/components/Image'
import Typography from 'common/components/Typography'
import { CAN_EDIT_PROFILE, Phase } from 'common/constants/phase'
import { useAuth } from 'common/contexts/AuthContext'
import { usePhase } from 'common/contexts/PhaseContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import Link from 'next/link'
import React from 'react'
import { HiPencil } from 'react-icons/hi'
import { useBaanData } from './hooks/useBaanData'

import { Container, EditProfileButton, ImageContainer } from './styled'

const UserProfile = () => {
  const { phase, checkPhase } = usePhase()
  const { user } = useAuth()
  const withoutEditButton = !checkPhase(CAN_EDIT_PROFILE)

  const { firstname, lastname, year, imageUrl } = user!
  const { t } = useSSRTranslation('profile')

  const { baan, isLoading } = useBaanData(user?.baanId)

  return (
    <Container variant={phase === Phase.ESTAMP ? 'eStamp' : 'normal'}>
      <ImageContainer>
        <Image src={imageUrl} layout="fill" objectFit="cover" />
      </ImageContainer>
      <div>
        <Typography variant="h3" color="blue">
          {firstname}
          <br />
          {lastname}
        </Typography>

        {phase === Phase.ESTAMP && (
          <Typography variant="subhead2" color="blue">
            {t('year')} {year}
          </Typography>
        )}

        {phase === Phase.ESTAMP && baan && (
          <Typography variant="subhead3" color="blue">
            {baan?.name}
          </Typography>
        )}

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
