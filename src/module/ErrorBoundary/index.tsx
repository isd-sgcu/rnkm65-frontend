import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useRouter } from 'next/router'
import React from 'react'
import { FallbackProps } from 'react-error-boundary'

import { Container } from './styled'

const ErrorFallback = ({ error }: FallbackProps) => {
  const { t } = useSSRTranslation('common')
  const router = useRouter()

  const handleReportIssue = () => {
    window.location.href = `https://airtable.com/shrWFil4igZa2UZoV?prefill_errorMessage=${error}&hide_errorMessage=true`
  }

  return (
    <Container>
      <Typography variant="h3">{t('someErrorHappen')}</Typography>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Button type="button" onClick={handleReportIssue}>
          {t('reportIssue')}
        </Button>
        <Button type="button" onClick={() => router.push('/')}>
          {t('back')}
        </Button>
      </div>
    </Container>
  )
}

export default ErrorFallback
