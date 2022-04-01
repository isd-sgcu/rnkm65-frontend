import Typography from 'common/components/Typography'
import React from 'react'

import ChoosedBaan from './components/ChoosedBaan'
import Search from './components/Search'
import { CatalogContainer, RootContainer } from './styled'

const tmpBaan = {
  id: 0,
  name: 'Yashiro Commission',
  imageUrl: '/tmp.jpg',
}

const ChooseBaan = () => (
  <RootContainer>
    <div>
      <Typography variant="h1" color="blue">
        เลือกบ้าน
      </Typography>
      <Typography
        variant="subhead3"
        color="blue"
        style={{ marginTop: '-15px' }}
      >
        เลือก 3 บ้านที่สนใจมากที่สุด
      </Typography>
      <ChoosedBaan
        baans={[tmpBaan, tmpBaan, tmpBaan]}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        handleDelete={(idx) => {}}
        handleConfirm={() => {}}
      />
    </div>
    <CatalogContainer>
      <Search />
    </CatalogContainer>
  </RootContainer>
)

export default ChooseBaan
