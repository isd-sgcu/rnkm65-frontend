import Typography from 'common/components/Typography'
import Image from 'next/image'
import React from 'react'

import {
  BaanContainer,
  ImageContainer,
  IndexContainer,
  StyledImage,
} from './styled'
import { BaanProps } from './types'

const Baan = (props: BaanProps) => {
  const { name, imageUrl, index } = props
  return (
    <BaanContainer>
      <ImageContainer>
        <IndexContainer>
          <Typography variant="h4" color="white">
            {index}
          </Typography>
        </IndexContainer>
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
