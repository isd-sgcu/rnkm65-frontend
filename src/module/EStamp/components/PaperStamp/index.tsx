import Image from 'next/image'

import StampPiece from './components/StampPiece'
import { PaperStampContainer, StampPieceContainer, StyledImage } from './styled'
import { PaperStampProps } from './types'

const PaperStamp = (props: PaperStampProps) => {
  const { status } = props
  return (
    <PaperStampContainer>
      <StyledImage>
        <Image src="/e-stamp/eStamp-background.svg" layout="fill" />
      </StyledImage>
      <StampPieceContainer>
        {status.map((stampPieceStatus, inx) => {
          const row = Math.floor(inx / 3)
          const column = inx % 3
          return (
            <StampPiece
              key={`stampPiece${row}${column}`}
              row={row}
              column={column}
              status={stampPieceStatus}
              src={`/e-stamp/stamp-piece/${inx}.jpg`}
            />
          )
        })}
      </StampPieceContainer>
    </PaperStampContainer>
  )
}
export default PaperStamp
