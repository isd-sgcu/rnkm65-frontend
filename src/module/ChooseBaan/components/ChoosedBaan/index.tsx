import Baan from 'common/components/Baan'
import Button from 'common/components/Button'
import Link from 'next/link'
import React from 'react'

import {
  BaanContainer,
  ButtonContainer,
  Container,
  DeleteButton,
} from './styled'
import { ChoosedBannProps } from './types'

const ChoosedBaan = (props: ChoosedBannProps) => {
  const { baans, handleDelete, handleConfirm } = props
  return (
    <Container>
      {baans.map((baan, idx) => (
        <BaanContainer key={baan.id}>
          <Baan {...baan} index={idx + 1} textPosition="right" />
          <DeleteButton onClick={() => handleDelete(idx)} />
        </BaanContainer>
      ))}
      <ButtonContainer>
        <Button onClick={handleConfirm}>ยืนยัน</Button>
        <Link href="/" passHref>
          <Button variant="error">ยกเลิก</Button>
        </Link>
      </ButtonContainer>
    </Container>
  )
}

export default React.memo(ChoosedBaan)
