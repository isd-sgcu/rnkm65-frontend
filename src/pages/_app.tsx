import 'styles/globals.css'

import Layout from 'common/components/Layout'
import AuthProvider from 'common/contexts/AuthContext'
import { REMEMBER_LOCALE } from 'config/env'
import { SWR_CONFIG } from 'config/swr'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined' && REMEMBER_LOCALE) {
      const lang = window.localStorage.getItem('locale')

      if (lang) {
        router.replace(router.asPath, undefined, { locale: lang })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SWRConfig value={SWR_CONFIG}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SWRConfig>
  )
}

export default appWithTranslation(MyApp)
