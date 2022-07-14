import 'styles/globals.css'

import Layout from 'common/components/Layout'
import AuthProvider from 'common/contexts/AuthContext'
import { BackgroundProvider } from 'common/contexts/BackgroundContext'
import { REMEMBER_LOCALE } from 'config/env'
import { SWR_CONFIG } from 'config/swr'
import ErrorFallback from 'module/ErrorBoundary'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined' && REMEMBER_LOCALE) {
      const lang = window.localStorage.getItem('locale') || 'th'

      if (router.locale && lang !== router.locale) {
        router.replace(router.asPath, undefined, { locale: lang })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return (
    <SWRConfig value={SWR_CONFIG}>
      <AuthProvider>
        <BackgroundProvider>
          <Layout>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Layout>
        </BackgroundProvider>
      </AuthProvider>
    </SWRConfig>
  )
}

export default appWithTranslation(MyApp)
