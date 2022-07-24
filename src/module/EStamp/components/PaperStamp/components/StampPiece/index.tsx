import Image from 'next/image'

import { StyledImage } from './styled'
import { StampPieceProps } from './types'

const StampPiece = (props: StampPieceProps) => {
  const gridScale = ['16.666666666%', '50%', '83.333333333%']
  const { row, column, src, status } = props
  return (
    <StyledImage
      css={{
        top: gridScale[row],
        left: gridScale[column],
        filter: status ? 'grayscale(0)' : 'grayscale(1)',
      }}
    >
      <Image src={src} layout="fill" />
    </StyledImage>
  )
}

export default StampPiece
