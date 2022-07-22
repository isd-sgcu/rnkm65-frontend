import Image from 'next/image'

import { StyledImage } from './styled'
import { StampPieceProps } from './types'

const StampPiece = (props: StampPieceProps) => {
  const gridScale = ['16.666666666%', '50%', '83.333333333%']
  const stampPieceSize = 'calc(calc(100% - 10px) / 3)'
  const { row, column, src } = props
  return (
    <StyledImage
      style={{
        position: 'absolute',
        top: gridScale[row],
        width: stampPieceSize,
        height: stampPieceSize,
        left: gridScale[column],
        transform: 'translate(-50%, -50%)',
        margin: '0px',
      }}
    >
      <Image src={src} layout="fill" />
    </StyledImage>
  )
}

export default StampPiece
