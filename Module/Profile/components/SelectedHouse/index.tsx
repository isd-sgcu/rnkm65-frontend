import React from 'react'

import { Container } from './styled'
import { SelectedHouseProps } from './types'

const SelectedHouse = (props: SelectedHouseProps) => {
  const { houses } = props
  return (
    <Container>
      {houses.map((house) => (
        <div>{house.name}</div>
      ))}
    </Container>
  )
}

export default SelectedHouse
