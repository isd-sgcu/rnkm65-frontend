import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React from 'react'

import { StyledButton } from './styled'

const LogoutButton = () => {
  const { t } = useSSRTranslation()
  const { logout, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  return (
    <StyledButton onClick={logout}>
      <Typography variant="subhead3">{t('logout')}</Typography>
    </StyledButton>
  )
}

export default LogoutButton
