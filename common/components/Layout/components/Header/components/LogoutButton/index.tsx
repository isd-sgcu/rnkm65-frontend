import { useTranslation } from 'next-i18next'
import React from 'react'

const LogoutButton = () => {
  const { t } = useTranslation()
  return <div> {t('logout')}</div>
}

export default LogoutButton
