import Typography from 'common/components/Typography'
import Image from 'next/image'
import React from 'react'

import {
  BaanContainer,
  ImageContainer,
  IndexContainer,
  InformationContainer,
  StyledImage,
} from './styled'
import { BaanProps } from './types'

const Baan = (props: BaanProps) => {
  const { name, imageUrl, index, textPosition, enableModal, onClickModal } =
    props

  const handleClickInfo = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    if (onClickModal) onClickModal()
  }

  return (
    <BaanContainer textPosition={textPosition}>
      <ImageContainer>
        {index && (
          <IndexContainer>
            <Typography variant="h4" color="yellow">
              {index}
            </Typography>
          </IndexContainer>
        )}

        <InformationContainer onClick={handleClickInfo} show={enableModal}>
          <Typography color="yellow">i</Typography>
        </InformationContainer>
        <StyledImage>
          <Image src={imageUrl} layout="fill" objectFit="cover" />
        </StyledImage>
      </ImageContainer>
      <Typography variant="body" color="blue">
        {name}
      </Typography>
    </BaanContainer>
  )
}

export default Baan
