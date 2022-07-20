import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import { ContentContainer, RootContainer } from './styled'

const CheckinSuccess = () => {
  const { t } = useSSRTranslation('checkinSuccess')
  const router = useRouter()

  const back = useCallback(() => {
    router.replace('/main')
  }, [router])

  return (
    <RootContainer>
      <ContentContainer>
        <Typography variant="h3">{t('success')}</Typography>
        <Typography variant="subhead3" css={{ textAlign: 'center' }}>
          {t('desc')}
        </Typography>
        <Button type="button" variant="eStamp" onClick={back}>
          {t('confirm')}
        </Button>
      </ContentContainer>
    </RootContainer>
  )
}

export default CheckinSuccess
