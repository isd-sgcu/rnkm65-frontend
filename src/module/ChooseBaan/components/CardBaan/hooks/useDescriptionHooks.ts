import { useCallback, useEffect, useRef, useState } from 'react'

const COUNTDOWN_TIMEOUT = 2000

const useDescriptionHooks = (el: HTMLDivElement | null) => {
  const [pos, setPos] = useState<'left' | 'right'>('left')
  const [rootHover, setRootHover] = useState(false)

  const countdownRef = useRef<number>(-1)

  const handleResize = useCallback(() => {
    if (el) {
      const parentClientWidth = el.offsetParent!.clientWidth
      const { offsetLeft } = el
      if (parentClientWidth - offsetLeft >= 400) {
        setPos('left')
      } else {
        setPos('right')
      }
    }
  }, [el])

  const handleRootMouseOver = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (countdownRef.current !== -1) return
      countdownRef.current = window.setTimeout(() => {
        setRootHover(true)
      }, COUNTDOWN_TIMEOUT)
    }
  }, [])

  const handleRootMouseAway = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.clearTimeout(countdownRef.current)
      countdownRef.current = -1
      setRootHover(false)
    }
  }, [])

  useEffect(() => {
    handleResize()
    window?.addEventListener('resize', handleResize, true)

    return () => {
      window?.removeEventListener('resize', handleResize, true)
    }
  }, [handleResize])

  return {
    pos,
    rootHover,
    handleRootMouseOver,
    handleRootMouseAway,
  }
}

export { useDescriptionHooks }
