import React from 'react'

import { useModalAnimation } from './hooks/useModalAnimation'
import { BackdropContainer, CloseIcon, ModalContainer } from './styled'
import { IModalProps } from './types'

const Modal = (props: React.PropsWithChildren<IModalProps>) => {
  const {
    onClose,
    open,
    children,
    canClickBackdrop,
    showCloseIcon = true,
    rootClassName,
    modalClassName,
  } = props
  const {
    isShow,
    handleAnimationStart,
    handleAnimationEnd,
    handleInnerClick,
    handleBackdropClick,
  } = useModalAnimation(canClickBackdrop, onClose)

  return (
    <BackdropContainer
      open={open}
      show={isShow}
      className={rootClassName || ''}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      onClick={handleBackdropClick}
    >
      <ModalContainer
        className={modalClassName || ''}
        onClick={handleInnerClick}
      >
        {showCloseIcon && <CloseIcon onClick={onClose} />}
        {isShow && children}
      </ModalContainer>
    </BackdropContainer>
  )
}

export default Modal
