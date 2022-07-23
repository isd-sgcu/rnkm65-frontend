import { useLayout } from 'common/contexts/LayoutContext'
import { useEffect } from 'react'

const useBottomBackground = () => {
  const { setBackgroundType } = useLayout()

  useEffect(() => {
    setBackgroundType('bottom')
    return () => {
      setBackgroundType('default')
    }
  }, [setBackgroundType])
}

export default useBottomBackground
