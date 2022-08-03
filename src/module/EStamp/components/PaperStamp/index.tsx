import Image from 'next/image'
import { useMemo } from 'react'

import StampPiece from './components/StampPiece'
import { PaperStampContainer, StampPieceContainer, StyledImage } from './styled'
import { PaperStampProps } from './types'

const PaperStamp = (props: PaperStampProps) => {
  const { status } = props

  const stampPieces = useMemo(
    () =>
      status.map((stampPieceStatus, inx) => {
        const order = (inx + 1).toString().padStart(2, '0')
        return (
          <StampPiece
            key={`stampPiece${order}`}
            status={stampPieceStatus}
            src={`/e-stamp/E-Stamp-${order}.webp`}
          />
        )
      }),
    [status]
  )

  return (
    <PaperStampContainer>
      <StyledImage>
        <Image src="/e-stamp/eStamp-background.svg" layout="fill" priority />
      </StyledImage>
      <StampPieceContainer>{stampPieces}</StampPieceContainer>
    </PaperStampContainer>
  )
}
export default PaperStamp
