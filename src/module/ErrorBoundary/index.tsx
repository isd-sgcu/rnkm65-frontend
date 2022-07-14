import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useRouter } from 'next/router'
import React from 'react'

import { Container } from './styled'

const ErrorFallback = () => {
  const { t } = useSSRTranslation('common')
  const router = useRouter()
  return (
    <Container>
      <Typography variant="h3">{t('someErrorHappen')}</Typography>
      <Button type="button" onClick={() => router.push('/')}>
        {t('back')}
      </Button>
    </Container>
  )
}

export default ErrorFallback
