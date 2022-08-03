import 'styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from 'common/components/Layout'
import AuthProvider from 'common/contexts/AuthContext'
import { LayoutProvider } from 'common/contexts/LayoutContext'
import { PhaseProvider } from 'common/contexts/PhaseContext'
import { REMEMBER_LOCALE } from 'config/env'
import ErrorFallback from 'module/ErrorBoundary'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
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

  // For fix edge case that animationEnd is not triggered when user click on submit button
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const rootDOM = document.getElementsByTagName('body')[0]
      if (rootDOM) {
        rootDOM.style.overflow = 'auto'
      }
    }
  }, [router])

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AuthProvider>
            <PhaseProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PhaseProvider>
          </AuthProvider>
        </ErrorBoundary>
      </LayoutProvider>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
