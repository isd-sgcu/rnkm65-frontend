import { useAuth } from 'common/contexts/AuthContext'
import React from 'react'

import MobileIcon from '../MobileIcon'

const LogoutIcon = () => {
  const { logout, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  return <MobileIcon src="/logout.svg" onClick={logout} />
}

export default LogoutIcon
