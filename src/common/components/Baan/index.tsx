import Image from 'common/components/Image'
import Typography from 'common/components/Typography'
import React from 'react'

import {
  BaanContainer,
  ImageContainer,
  IndexContainer,
  StyledImage,
} from './styled'
import { BaanProps } from './types'

const Baan = (props: BaanProps) => {
  const { name, imageUrl, index, textPosition } = props

  // Comment for rollback purpose
  // const handleClickInfo = (e: React.MouseEvent<HTMLDivElement>) => {
  //   e.stopPropagation()

  //   if (onClickModal) onClickModal()
  // }

  return (
    <BaanContainer textPosition={textPosition}>
      <ImageContainer>
        {index && (
          <IndexContainer>
            <Typography variant="h4" color="white">
              {index}
            </Typography>
          </IndexContainer>
        )}

        {/* <InformationContainer onClick={handleClickInfo} show={enableModal}>
          <Typography color="white">i</Typography>
        </InformationContainer> */}
        <StyledImage>
          <Image src={imageUrl} layout="fill" objectFit="cover" />
        </StyledImage>
      </ImageContainer>
      <Typography
        css={{
          textAlign: textPosition === 'bottom' ? 'center' : 'unset',
          maxWidth: '120px',
        }}
        variant="body"
        color="blue"
      >
        {name}
      </Typography>
    </BaanContainer>
  )
}

export default Baan
