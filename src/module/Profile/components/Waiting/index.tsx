import Button from 'common/components/Button'
import useBottomBackground from 'common/components/Layout/components/Background/hooks/useBottomBackground'
import Typography from 'common/components/Typography'
import { CAN_EDIT_PROFILE } from 'common/constants/phase'
import { usePhase } from 'common/contexts/PhaseContext'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Trans, useTranslation } from 'next-i18next'
import React from 'react'

import {
  Container,
  Description,
  ImageContainer,
  RootContainer,
  TextContainer,
} from './styled'

const Waiting = () => {
  const { t } = useTranslation('profile')
  const router = useRouter()
  useBottomBackground()

  const { checkPhase } = usePhase()
  const canEditProfile = checkPhase(CAN_EDIT_PROFILE)

  return (
    <RootContainer>
      <Container>
        <ImageContainer>
          <Image src="/hourglass.svg" alt="hourglass" layout="fill" />
        </ImageContainer>
        <TextContainer>
          <Typography variant="h1" color="blue" css={{ textAlign: 'center' }}>
            {t('waiting.title')}
          </Typography>
          <Description color="blue">
            <Trans
              i18nKey="profile:waiting:description"
              components={[
                <span style={{ fontWeight: 700 }} />,
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                <a
                  style={{ textDecoration: 'underline' }}
                  href="https://www.facebook.com/chulafreshmen"
                  aria-label="cu-for-freshmen"
                />,
              ]}
            />
          </Description>
        </TextContainer>
      </Container>
      {canEditProfile && (
        <Button
          css={{ width: '100%', maxWidth: '250px' }}
          onClick={() => router.push('/register?type=edit')}
        >
          {t('editProfile')}
        </Button>
      )}
    </RootContainer>
  )
}

export default Waiting
