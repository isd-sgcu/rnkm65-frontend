import Typography from 'common/components/Typography'
import { useSwitch } from 'common/hooks/useSwitch'
import React from 'react'

import CardBaan from './components/CardBaan'
import ChoosedBaan from './components/ChoosedBaan'
import DescriptionModal from './components/DescriptionModal'
import Search from './components/Search'
import { CardContainer, CatalogContainer, RootContainer } from './styled'

const tmpBaan = {
  id: 0,
  name: 'Yashiro Commission',
  imageUrl: '/tmp.jpg',
}

const ChooseBaan = () => {
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
          baans={[tmpBaan, tmpBaan, tmpBaan]}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          handleDelete={(idx) => {}}
          handleConfirm={() => {}}
        />
      </div>
      <CatalogContainer>
        <Search />
        <CardContainer>
          <CardBaan
            imageUrl="/tmp.jpg"
            id={0}
            name="บ้านทรายทอง"
            ig="บ้านทรายทอง"
            description="นี่คือสถาน
แห่งบ้านทรายทอง ที่ฉันปองมาสู่
ฉันยังไม่รู้
เขาจะต้อนรับ
ขับสู้เพียงไหน
อาจมียิ้มอาบ
ฉาบบนสีหน้า
ว่ามีน้ำใจ
แต่สิ่งซ่อนไว้ในดวงจิต คือความริษยา"
            facebook="บ้านทรายทอง"
            enableModal
          />
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
