import { keyframes, styled } from 'config/stitches.config'
import { GrClose } from 'react-icons/gr'

export const CloseAnimation = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
})

export const OpenAnimation = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

export const BackdropContainer = styled('div', {
  backdropFilter: 'blur(10px)',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  variants: {
    open: {
      true: {
        animation: `${OpenAnimation()} 300ms ease-in-out`,
      },
      false: {
        animation: `${CloseAnimation()} 300ms ease-in-out`,
      },
    },
    show: {
      true: {
        zIndex: 99,
      },
      false: {
        zIndex: -1,
      },
    },
  },

  defaultVariants: {
    open: 'false',
    show: 'false',
  },
})

export const ModalContainer = styled('div', {
  backgroundColor: '$purple400',
  height: 'fit-content',
  padding: '2rem',
  position: 'relative',
  borderRadius: '1rem',
  filter: 'drop-shadow(4px 4px 4px rgba(36, 6, 104, 0.25))',
})

export const CloseIcon = styled(GrClose, {
  cursor: 'pointer',
  position: 'absolute',
  right: '0.8rem',
  top: '0.8rem',
})
