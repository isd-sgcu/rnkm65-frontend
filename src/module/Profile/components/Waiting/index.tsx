import useBottomBackground from 'common/components/Layout/components/Background/hooks/useBottomBackground'
import Typography from 'common/components/Typography'
import Image from 'next/image'
import { Trans, useTranslation } from 'next-i18next'
import React from 'react'

import { Container, Description, ImageContainer, TextContainer } from './styled'

const Waiting = () => {
  const { t } = useTranslation('profile')
  useBottomBackground()

  return (
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
                href="https://www.instagram.com/rubpuenkaomai2022/"
                aria-label="rubpuenkaomai2022"
              />,
            ]}
          />
        </Description>
      </TextContainer>
    </Container>
  )
}

export default Waiting
