import Typography from 'common/components/Typography'
import { useSwitch } from 'common/hooks/useSwitch'
import { IBaan } from 'common/types/baan'
import React, { FC } from 'react'

import CardBaan from './components/CardBaan'
import ChoosedBaan from './components/ChoosedBaan'
import DescriptionModal from './components/DescriptionModal'
import Search from './components/Search'
import { CardContainer, CatalogContainer, RootContainer } from './styled'

const tmpBaans = [
  {
    id: 0,
    name: 'Yashiro Commission',
    imageUrl: '/tmp.jpg',
  },
  {
    id: 1,
    name: 'Yashiro Commission',
    imageUrl: '/tmp.jpg',
  },
  {
    id: 2,
    name: 'Yashiro Commission',
    imageUrl: '/tmp.jpg',
  },
]
const ChooseBaan: FC<{ data: IBaan[] }> = ({ data: baans }) => {
  const { state, handleClose } = useSwitch(false)
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
          baans={tmpBaans}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          handleDelete={(idx) => {}}
          handleConfirm={() => {}}
        />
      </div>
      <CatalogContainer>
        <Search />
        <CardContainer>
          {baans.map((baan) => (
            <CardBaan
              id={baan.id}
              key={baan.id}
              name={baan.name}
              imageUrl={baan.imageUrl}
              description={baan.description}
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
