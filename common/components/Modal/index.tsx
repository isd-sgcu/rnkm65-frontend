import { useSwitch } from 'common/hooks/useSwitch'
import React, { useCallback, useEffect, useRef } from 'react'

import {
  BackdropContainer,
  CloseAnimation,
  CloseIcon,
  ModalContainer,
  OpenAnimation,
} from './styled'
import { IModalProps } from './types'

export function Modal(props: React.PropsWithChildren<IModalProps>) {
  const { onClose, open, children } = props
  const { state: show, handleOpen, handleClose } = useSwitch(false)
  const backdropRef = useRef<HTMLDivElement | null>(null)

  const handleAnimationStart = useCallback(
    (e: React.AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === OpenAnimation.name) {
        handleOpen()
      }
    },
    [handleOpen]
  )

  const handleAnimationEnd = useCallback(
    (e: React.AnimationEvent<HTMLDivElement>) => {
      if (e.animationName === CloseAnimation.name) {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', onClose, true)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('click', onClose, true)
      }
    }
  }, [onClose])

  return (
    <BackdropContainer
      open={open}
      show={show}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      ref={backdropRef}
    >
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation()
          console.log('Inner click')
        }}
      >
        <CloseIcon onClick={onClose} size={16} />
        {children}
      </ModalContainer>
    </BackdropContainer>
  )
}
