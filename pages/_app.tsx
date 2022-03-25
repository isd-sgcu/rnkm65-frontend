import 'styles/globals.css'

import { REMEMBER_LOCALE } from 'config/env'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'

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
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
