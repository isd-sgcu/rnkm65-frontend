import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

import House from './components/House'
import { ConfirmText, Container, HousesContainer } from './styled'
import { SelectedHouseProps } from './types'

const SelectedHouse = (props: SelectedHouseProps) => {
  const { houses } = props

  // TODO change this later
  const isKing = false

  return (
    <Container>
      <Typography variant="h3" color="pink">
        บ้านรับน้องที่เลือก
      </Typography>
      {houses.length === 0 ? (
        <Typography
          color="blue"
          variant="h3"
          css={{ margin: '15% 0', flexGrow: 1 }}
        >
          ยังไม่ได้เลือก
        </Typography>
      ) : (
        <HousesContainer>
          {houses.map((house, idx) => (
            <House {...house} index={idx + 1} key={house.name} />
          ))}
        </HousesContainer>
      )}

      {houses.length !== 0 && (
        <ConfirmText variant="description">
          <IoCheckmarkCircleOutline
            style={{ marginRight: '1px', fontSize: '1rem' }}
          />
          ระบบได้ทำการบันทึกเรียบร้อยแล้ว
        </ConfirmText>
      )}

      <Button css={{ marginTop: '15px' }} disabled={!isKing}>
        {houses.length === 0 ? 'เลือกบ้าน' : 'เปลี่ยนบ้าน'}
      </Button>
      {!isKing && (
        <Typography
          variant="description"
          color="error"
          css={{ marginTop: '5px' }}
        >
          หัวหน้ากลุ่มเท่านั้นที่สามารถ
          {houses.length === 0 ? 'เลือก' : 'เปลี่ยน'}บ้านได้
        </Typography>
      )}
    </Container>
  )
}

export default SelectedHouse
