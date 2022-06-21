import Typography from 'common/components/Typography'
import { useSwitch } from 'common/hooks/useSwitch'
import { IBaan } from 'common/types/baan'
import React, { FC } from 'react'

import CardBaan from './components/CardBaan'
import ChoosedBaan from './components/ChoosedBaan'
import DescriptionModal from './components/DescriptionModal'
import Search from './components/Search'
import { useChoosenBaans } from './hooks/useChoosenBaans'
import { CardContainer, CatalogContainer, RootContainer } from './styled'

const ChooseBaan: FC<{ data: IBaan[] }> = ({ data: initBaans }) => {
  const { state, handleClose } = useSwitch(false)
  const { baans, choosenBaans, onChooseBaan, onRemoveBaan } = useChoosenBaans(
    initBaans,
    []
  )

  return (
    <RootContainer>
      <div>
        <Typography variant="h1" color="blue">
          เลือกบ้าน
        </Typography>
        <Typography
          variant="subhead3"
          color="blue"
          css={{ marginTop: '-15px' }}
        >
          เลือก 3 บ้านที่สนใจมากที่สุด
        </Typography>
        <ChoosedBaan
          baans={choosenBaans}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          handleDelete={onRemoveBaan}
          handleConfirm={() => {}}
        />
      </div>
      <CatalogContainer>
        <Search />
        <CardContainer>
          {baans.map((baan) => (
            <CardBaan
              onClick={onChooseBaan}
              id={baan.id}
              key={baan.id}
              name={baan.name}
              imageUrl={baan.imageUrl}
              description={baan.description}
              enableModal={baan.isSelected}
              index={baan.order ?? undefined}
            />
          ))}
        </CardContainer>
        <DescriptionModal
          baanKey="1"
          open={state}
          onClose={handleClose}
          onConfirm={() => {}}
        />
      </CatalogContainer>
    </RootContainer>
  )
}

export default ChooseBaan
