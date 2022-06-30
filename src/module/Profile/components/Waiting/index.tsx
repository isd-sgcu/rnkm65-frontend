import Typography from 'common/components/Typography'
import Image from 'next/image'
import { Trans, useTranslation } from 'next-i18next'
import React from 'react'

import { Container, Description, ImageContainer } from './styled'

const Waiting = () => {
  const { t } = useTranslation('profile')

  return (
    <Container>
      <ImageContainer>
        <Image src="/hourglass.svg" alt="hourglass" layout="fill" />
      </ImageContainer>
      <div>
        <Typography variant="h1" color="blue" style={{ textAlign: 'center' }}>
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
      </div>
    </Container>
  )
}

export default Waiting
