import Loading from 'common/components/Loading'
import { useRouter } from 'next/router'

import { useAuth } from '../contexts/AuthContext'

function withGuard<T>(Component: React.FC<T>): React.FC<T> {
  return function ComponentWithGuard(props: T) {
    const router = useRouter()
    const { isReady, isAuthenticated } = useAuth()

    if (!isReady || !router.isReady) {
      return <Loading />
    }

    if (!isAuthenticated) {
      localStorage.setItem('redirectPath', router.asPath)
      router.replace('/login')
      return <Loading />
    }

    const redirectPath = localStorage.getItem('redirectPath')
    if (redirectPath) {
      localStorage.removeItem('redirectPath')
      router.replace(redirectPath)
      return <Loading />
    }

    return <Component {...props} />
  }
}

export default withGuard
