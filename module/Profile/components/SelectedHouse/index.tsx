import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

import House from './components/House'
import { ConfirmText, Container, HousesContainer } from './styled'
import { SelectedHouseProps } from './types'

const SelectedHouse = (props: SelectedHouseProps) => {
  const { houses } = props
  const { t } = useSSRTranslation('profile')

  // TODO change this later
  const isKing = false

  return (
    <Container>
      <Typography variant="h3" color="pink">
        {t('choosedHouse')}
      </Typography>
      {houses.length === 0 ? (
        <Typography
          color="blue"
          variant="h3"
          css={{ margin: '15% 0', flexGrow: 1 }}
        >
          {t('notChoose')}
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
          {t('saved')}
        </ConfirmText>
      )}

      <Button css={{ marginTop: '15px' }} disabled={!isKing}>
        {houses.length === 0 ? t('chooseHouse') : t('changeHouse')}
      </Button>
      {!isKing && (
        <Typography
          variant="description"
          color="error"
          css={{ marginTop: '5px' }}
        >
          {houses.length === 0 ? t('kingCanChoose') : t('kingCanChange')}
        </Typography>
      )}
    </Container>
  )
}

export default SelectedHouse
