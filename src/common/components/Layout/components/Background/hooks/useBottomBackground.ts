import { useBackground } from 'common/contexts/BackgroundContext'
import { useEffect } from 'react'

const useBottomBackground = () => {
  const { setType } = useBackground()

  useEffect(() => {
    setType('bottom')
    return () => {
      setType('default')
    }
  }, [setType])
}

export default useBottomBackground
