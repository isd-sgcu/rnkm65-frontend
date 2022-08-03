import Image from 'next/image'
import { useMemo } from 'react'

import StampPiece from './components/StampPiece'
import {
  EStampsContainer,
  PaperStampContainer,
  StampPieceContainer,
} from './styled'
import { PaperStampProps } from './types'

const PaperStamp = ({ estamps }: PaperStampProps) => {
  const stampPieces = useMemo(
    () =>
      estamps.map((estamp, inx) => {
        const order = (inx + 1).toString().padStart(2, '0')
        return (
          <StampPiece
            key={estamp.id}
            status={estamp.status}
            src={`https://storage.googleapis.com/rnkm-public/E-Stamp-${order}.png`}
          />
        )
      }),
    [estamps]
  )

  return (
    <PaperStampContainer>
      <EStampsContainer>
        <Image
          src="/e-stamp/eStamp-background.png"
          layout="fill"
          sizes="304px"
          alt="estamps container"
          priority
        />
      </EStampsContainer>
      <StampPieceContainer>{stampPieces}</StampPieceContainer>
    </PaperStampContainer>
  )
}
export default PaperStamp
