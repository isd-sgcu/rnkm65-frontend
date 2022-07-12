import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

import Baan from './components/Baan'
import { BaansContainer, ConfirmText, Container } from './styled'
import { ChoosedBaanProps } from './types'

const ChoosedBaan = (props: ChoosedBaanProps) => {
  const { baans } = props
  const { t } = useSSRTranslation('profile')
  const choosed = baans.length !== 0

  // TODO change this later
  const isKing = false

  return (
    <Container>
      <Typography variant="h3" color="new-primary">
        {t('choosedBaan')}
      </Typography>
      {choosed ? (
        <BaansContainer>
          {baans.map((baan, idx) => (
            <Baan {...baan} index={idx + 1} key={baan.id} />
          ))}
        </BaansContainer>
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
        {choosed ? t('changeBaan') : t('chooseBaan')}
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

export default ChoosedBaan
