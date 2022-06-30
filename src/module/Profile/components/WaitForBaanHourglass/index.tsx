import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import Image from 'next/image'
import { HourglassContainer, Container, TextContainer } from './styled'

const ChoosedBaan = () => {
  const { t } = useSSRTranslation('profile')

  return (
    <Container>
      <HourglassContainer>
        <Image src="/processingHourglass.svg" alt="hourglass" layout="fill" />
      </HourglassContainer>
      <TextContainer>
        <Typography variant="h3" color="pink">
          {t('processingBaan')}
        </Typography>
        <Typography variant="subhead2" color="blue">
          {t('goFollowCUForFreshmen')}
        </Typography>
      </TextContainer>
    </Container>
  )
}

export default ChoosedBaan
