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
      router.replace('/login')
      return <Loading />
    }

    return <Component {...props} />
  }
}

export default withGuard
