import Button from 'common/components/Button'
import Background from 'common/components/Layout/components/Background'
import Footer from 'common/components/Layout/components/Footer'
import {
  ContentContainer,
  LayoutContainer,
} from 'common/components/Layout/styled'
import Typography from 'common/components/Typography'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import React from 'react'
import { FallbackProps } from 'react-error-boundary'

import { Container } from './styled'

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { t } = useTranslation('common')
  const router = useRouter()

  const handleReportIssue = () => {
    window.location.href = `https://airtable.com/shrWFil4igZa2UZoV?prefill_errorMessage=${`${error} ${error.stack?.slice(
      0,
      300
    )}`}&hide_errorMessage=true`
  }

  return (
    <LayoutContainer>
      <Background />
      <ContentContainer>
        <Container>
          <Typography variant="h3">
            {t('someErrorHappen', { lng: 'en' })}
          </Typography>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Button type="button" onClick={handleReportIssue}>
              {t('reportIssue', { lng: 'en' })}
            </Button>
            <Button
              type="button"
              onClick={() => {
                router.push('/')
                resetErrorBoundary()
              }}
            >
              {t('back', { lng: 'en' })}
            </Button>
          </div>
        </Container>
      </ContentContainer>
      <Footer />
    </LayoutContainer>
  )
}

export default ErrorFallback
