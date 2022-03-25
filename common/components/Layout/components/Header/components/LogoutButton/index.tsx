import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React from 'react'

import { StyledButton } from './styled'

const LogoutButton = () => {
  const { t } = useSSRTranslation()
  return (
    <StyledButton>
      <Typography variant="subhead3"> {t('logout')}</Typography>
    </StyledButton>
  )
}

export default LogoutButton
