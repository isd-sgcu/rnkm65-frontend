import { useSwitch } from 'common/hooks/useSwitch'
import { useCallback } from 'react'

import { CloseAnimation, OpenAnimation } from '../styled'

export function useModalAnimation(
  clickBackdrop?: boolean,
  onClose?: () => void
) {
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
    if (clickBackdrop && onClose) onClose()
  }, [clickBackdrop, onClose])

  return {
    isShow,
    handleAnimationStart,
    handleAnimationEnd,
    handleInnerClick,
    handleBackdropClick,
  }
}
