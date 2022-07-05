import { useAuth } from 'common/contexts/AuthContext'
import Image from 'next/image'
import React from 'react'

const LogoutIcon = () => {
  const { logout, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  return <Image src="/logout.svg" height={24} width={24} onClick={logout} />
}

export default LogoutIcon
