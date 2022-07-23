import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { CAN_REGISTER } from 'common/constants/phase'
import useBottomBackground from 'common/contexts/LayoutContext/hooks/useBottomBackground'
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
  const canRegister = checkPhase(CAN_REGISTER)

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
      {canRegister && (
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
