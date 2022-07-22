import Baan from 'common/components/Baan'
import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import useKing from 'module/Profile/hooks/useKing'
import Link from 'next/link'
import React from 'react'

import { BaansContainer, Container } from './styled'
import { ChoosedBaanProps } from './types'

const ChoosedBaan = (props: ChoosedBaanProps) => {
  const { baans, notChangeable } = props
  const { t } = useSSRTranslation('profile')
  const choosed = baans.length !== 0
  const { user } = useAuth()
  const isKing = useKing()

  if (!user) return null

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
      <div>
        {!notChangeable && (
          <Link href="/chooseBaan" passHref>
            <Button css={{ marginTop: '15px' }} disabled={!isKing(user)}>
              {choosed ? t('changeBaan') : t('chooseBaan')}
            </Button>
          </Link>
        )}
        {!notChangeable && !isKing(user) && (
          <Typography
            variant="description"
            color="error"
            css={{ marginTop: '5px' }}
          >
            {choosed ? t('kingCanChange') : t('kingCanChoose')}
          </Typography>
        )}
      </div>
    </Container>
  )
}

export default ChoosedBaan
