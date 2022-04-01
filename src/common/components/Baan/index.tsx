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
  const { name, imageUrl, index, textPosition, enableModal } = props
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

        <InformationContainer show={enableModal}>
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
