import Typography from 'common/components/Typography'
import Image from 'next/image'
import React from 'react'

import {
  HouseContainer,
  ImageContainer,
  IndexContainer,
  StyledImage,
} from './styled'
import { HouseProps } from './types'

const House = (props: HouseProps) => {
  const { name, imageUrl, index } = props
  return (
    <HouseContainer>
      <ImageContainer>
        <IndexContainer>
          <Typography variant="h4" color="yellow">
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
    </HouseContainer>
  )
}

export default House
