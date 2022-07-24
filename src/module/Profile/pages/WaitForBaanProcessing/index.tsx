import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import Image from 'next/image'
import React from 'react'

import { Container, HourglassContainer, TextContainer } from './styled'

const WaitForBaanProcessing = () => {
  const { t } = useSSRTranslation('profile')

  return (
    <Container>
      <HourglassContainer>
        <Image src="/processingHourglass.svg" alt="hourglass" layout="fill" />
      </HourglassContainer>
      <TextContainer>
        <Typography
          variant="h3"
          color="new-primary"
          css={{
            '@lg': { textAlign: 'center', marginTop: '16px' },
          }}
        >
          {t('processingBaan')}
        </Typography>
        <Typography
          variant="subhead2"
          color="blue"
          css={{
            '@lg': { textAlign: 'center', whiteSpace: 'pre-line' },
          }}
        >
          {t('goFollowCUForFreshmen')}
        </Typography>
      </TextContainer>
    </Container>
  )
}

export default WaitForBaanProcessing
