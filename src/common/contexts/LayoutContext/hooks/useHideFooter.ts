import { useLayout } from 'common/contexts/LayoutContext'
import { useEffect } from 'react'

const useHideFooter = () => {
  const { setHideFooter } = useLayout()

  useEffect(() => {
    setHideFooter(true)
    return () => {
      setHideFooter(false)
    }
  }, [setHideFooter])
}

export default useHideFooter
