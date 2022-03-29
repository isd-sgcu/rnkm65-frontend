import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

import House from './components/House'
import { ConfirmText, Container, HousesContainer } from './styled'
import { SelectedHouseProps } from './types'

const SelectedHouse = (props: SelectedHouseProps) => {
  const { baans } = props
  const { t } = useSSRTranslation('profile')
  const choosed = baans.length !== 0

  // TODO change this later
  const isKing = false

  return (
    <Container>
      <Typography variant="h3" color="pink">
        {t('choosedHouse')}
      </Typography>
      {choosed ? (
        <HousesContainer>
          {baans.map((baan, idx) => (
            <House {...baan} index={idx + 1} key={baan.id} />
          ))}
        </HousesContainer>
      ) : (
        <Typography
          color="blue"
          variant="h3"
          css={{ margin: '15% 0', flexGrow: 1 }}
        >
          {t('notChoose')}
        </Typography>
      )}

      {choosed && (
        <ConfirmText variant="description">
          <IoCheckmarkCircleOutline
            style={{ marginRight: '1px', fontSize: '1rem' }}
          />
          {t('saved')}
        </ConfirmText>
      )}

      <Button css={{ marginTop: '15px' }} disabled={!isKing}>
        {choosed ? t('changeHouse') : t('chooseHouse')}
      </Button>
      {!isKing && (
        <Typography
          variant="description"
          color="error"
          css={{ marginTop: '5px' }}
        >
          {choosed ? t('kingCanChange') : t('kingCanChoose')}
        </Typography>
      )}
    </Container>
  )
}

export default SelectedHouse
