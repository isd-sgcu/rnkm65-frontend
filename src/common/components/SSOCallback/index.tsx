import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Loading from '../Loading'

const SSOCallback = () => {
  const router = useRouter()

  useEffect(() => {
    const { ticket } = router.query
    if (ticket) {
      // TODO: exchange ticket for token and user profile from backend
      localStorage.setItem('token', '42')
      router.replace('/')
    }
  }, [router])

  return <Loading />
}

export default SSOCallback
