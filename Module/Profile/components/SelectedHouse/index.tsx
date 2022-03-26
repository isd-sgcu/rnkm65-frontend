import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import React from 'react'

import House from './components/House'
import { Container, HousesContainer } from './styled'
import { SelectedHouseProps } from './types'

const SelectedHouse = (props: SelectedHouseProps) => {
  const { houses } = props
  return (
    <Container>
      <Typography variant="h3" color="pink">
        บ้านรับน้องที่เลือก
      </Typography>
      <HousesContainer>
        {houses.map((house, idx) => (
          <House {...house} index={idx + 1} key={house.name} />
        ))}
      </HousesContainer>
      <Button css={{ marginTop: '15px' }}>เปลี่ยนบ้าน</Button>
    </Container>
  )
}

export default SelectedHouse
