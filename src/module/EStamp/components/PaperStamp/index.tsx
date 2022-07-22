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
        {status.map((stampPieceStatus, inx) => (
          <StampPiece
            key={`stampPiece${Math.floor(inx / 3).toString()}${(
              inx % 3
            ).toString()}`}
            row={Math.floor(inx / 3)}
            column={inx % 3}
            src={`/e-stamp/stamp-piece/${
              stampPieceStatus ? 'color' : 'grey-scale'
            }/${inx}.jpg`}
          />
        ))}
      </StampPieceContainer>
    </PaperStampContainer>
  )
}
export default PaperStamp
