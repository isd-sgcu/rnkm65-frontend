import { REMEMBER_LOCALE } from 'config/env'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useCallback } from 'react'

export default function useSSRTranslation(ns?: string) {
  const { t, i18n } = useTranslation(ns)
  const router = useRouter()

  const toggleLanguage = useCallback(() => {
    const lang = i18n.language === 'en' ? 'th' : 'en'

    if (typeof window !== 'undefined' && REMEMBER_LOCALE) {
      window.localStorage.setItem('locale', lang)
      router.replace(router.asPath, undefined, { locale: lang })
      return
    }

    router.replace(router.asPath, undefined, { locale: lang })
  }, [i18n, router])

  return { t, i18n, toggleLanguage }
}
