import React from 'react'

import { useModalAnimation } from './hooks/useModalAnimation'
import { BackdropContainer, CloseIcon, ModalContainer } from './styled'
import { IModalProps } from './types'

export function Modal(props: React.PropsWithChildren<IModalProps>) {
  const { onClose, open, children } = props
  const { isShow, handleAnimationStart, handleAnimationEnd, handleInnerClick } =
    useModalAnimation()

  return (
    <BackdropContainer
      open={open}
      show={isShow}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      onClick={onClose}
    >
      <ModalContainer onClick={handleInnerClick}>
        <CloseIcon onClick={onClose} size={16} />
        {isShow && children}
      </ModalContainer>
    </BackdropContainer>
  )
}
