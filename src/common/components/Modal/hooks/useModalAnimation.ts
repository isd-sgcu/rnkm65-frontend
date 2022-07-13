import { useSwitch } from 'common/hooks/useSwitch'
import { useCallback, useEffect } from 'react'

import { CloseAnimation, OpenAnimation } from '../styled'

export const useModalAnimation = (
  clickBackdrop?: boolean,
  onClose?: () => void
) => {
  const { state: isShow, handleOpen, handleClose } = useSwitch(false)

  const handleAnimationStart = useCallback(
    (e: React.AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === OpenAnimation.name) {
        if (typeof document !== 'undefined') {
          const rootDOM = document.getElementsByTagName('body')[0]
          if (rootDOM) {
            rootDOM.style.overflow = 'hidden'
          }
        }
        handleOpen()
      }
    },
    [handleOpen]
  )

  const handleAnimationEnd = useCallback(
    (e: React.AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === CloseAnimation.name) {
        if (typeof document !== 'undefined') {
          const rootDOM = document.getElementsByTagName('body')[0]
          if (rootDOM) {
            rootDOM.style.overflow = 'auto'
          }
        }
        handleClose()
      }
    },
    [handleClose]
  )

  const handleInnerClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation(),
    []
  )

  const handleBackdropClick = useCallback(() => {
    if (onClose && clickBackdrop) onClose()
  }, [clickBackdrop, onClose])

  const handleKeyboardClick = useCallback(
    (e: KeyboardEvent) => {
      if (onClose && e.key === 'Escape' && isShow) onClose()
    },
    [isShow, onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardClick, true)
    return () => {
      document.removeEventListener('keydown', handleKeyboardClick, true)
    }
  }, [handleKeyboardClick])

  return {
    isShow,
    handleAnimationStart,
    handleAnimationEnd,
    handleInnerClick,
    handleBackdropClick,
  }
}
