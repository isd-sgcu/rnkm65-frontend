import Baan from 'common/components/Baan'
import React, { memo } from 'react'

import { CardContainer } from './styled'
import { ICardBaanProps } from './types'

const CardBaan = (props: ICardBaanProps) => {
  const {
    ig,
    id,
    facebook,
    description,
    name,
    imageUrl,
    index,
    onClickModal,
    ...remain
  } = props
  return (
    <CardContainer onClick={() => onClickModal?.()}>
      <Baan
        {...remain}
        textPosition="bottom"
        id={id}
        index={index}
        name={name}
        imageUrl={imageUrl}
        enableModal
      />
    </CardContainer>
  )
}

export default memo(CardBaan)
