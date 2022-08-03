import Image from 'next/image'

import { StyledImage } from './styled'
import { StampPieceProps } from './types'

const StampPiece = ({ src, status }: StampPieceProps) => (
  <StyledImage
    css={{
      filter: status ? 'grayscale(0)' : 'grayscale(1)',
    }}
  >
    <Image
      src={src}
      layout="fill"
      objectFit="contain"
      sizes="128px"
      alt="estamp"
    />
  </StyledImage>
)

export default StampPiece
