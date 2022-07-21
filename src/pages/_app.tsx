import 'styles/globals.css'

import Layout from 'common/components/Layout'
import AuthProvider from 'common/contexts/AuthContext'
import { BackgroundProvider } from 'common/contexts/BackgroundContext'
import PhaseGuard from 'common/guards/PhaseGuard'
import { REMEMBER_LOCALE } from 'config/env'
import ErrorFallback from 'module/ErrorBoundary'
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

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
    <BackgroundProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AuthProvider>
          <Layout>
            <PhaseGuard currentDate={new Date(pageProps.currentDate)}>
              <Component {...pageProps} />
            </PhaseGuard>
          </Layout>
        </AuthProvider>
      </ErrorBoundary>
    </BackgroundProvider>
  )
}

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context) // Retrion=getLeftNav`);

  return {
    ...pageProps,
    pageProps: { currentDate: new Date() },
  }
}

export default appWithTranslation(MyApp)
