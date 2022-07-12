import Loading from 'common/components/Loading'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useAuth } from '../contexts/AuthContext'

function withGuard<T>(
  Component: React.FC<T>,
  requiredData?: boolean,
  disabledRedirect?: boolean
): React.FC<T> {
  return function ComponentWithGuard(props: T) {
    const router = useRouter()
    const { isReady, isAuthenticated, user } = useAuth()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
      if (!isReady || !router.isReady) {
        return
      }

      if (!isAuthenticated) {
        localStorage.setItem('redirectPath', router.asPath)
        router.replace('/login')
        return
      }

      if (requiredData && !user?.phone) {
        localStorage.setItem('redirectPath', router.asPath)
        router.replace('/register')
        return
      }

      const redirectPath = localStorage.getItem('redirectPath')
      if (!disabledRedirect && redirectPath) {
        localStorage.removeItem('redirectPath')
        router.replace(redirectPath)
        return
      }

      setLoading(false)
    }, [isAuthenticated, isReady, router, user?.phone])

    return isLoading ? <Loading /> : <Component {...props} />
  }
}

export default withGuard
