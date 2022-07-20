import Baan from 'common/components/Baan'
import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import Link from 'next/link'
import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

import { BaansContainer, ConfirmText, Container } from './styled'
import { ChoosedBaanProps } from './types'

const ChoosedBaan = (props: ChoosedBaanProps) => {
  const { baans, notChangeable } = props
  const { t } = useSSRTranslation('profile')
  const choosed = baans.length !== 0

  // TODO change this later
  const isKing = true

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
          {t('notChoosed')}
        </Typography>
      )}

      {!notChangeable && choosed && (
        <ConfirmText variant="description">
          <IoCheckmarkCircleOutline
            style={{ marginRight: '1px', fontSize: '1rem' }}
          />
          {t('saved')}
        </ConfirmText>
      )}

      {!notChangeable && (
        <Link href="/chooseBaan" passHref>
          <Button css={{ marginTop: '15px' }} disabled={!isKing}>
            {choosed ? t('changeBaan') : t('chooseBaan')}
          </Button>
        </Link>
      )}
      {!notChangeable && !isKing && (
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
