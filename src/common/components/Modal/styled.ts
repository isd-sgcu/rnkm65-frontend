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
  '-webkit-backdrop-filter': 'blur(10px)',
  '-moz-backdrop-filter': 'blur(10px)',
  backgroundColor: 'rgba(0, 0, 0, .4)',
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
        animation: `${OpenAnimation()} 200ms ease-in-out`,
      },
      false: {
        animation: `${CloseAnimation()} 200ms ease-in-out`,
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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '1rem',
  filter: 'drop-shadow(4px 4px 4px rgba(36, 6, 104, 0.25))',
  margin: '0px 2rem',
})

export const CloseIcon = styled(GrClose, {
  cursor: 'pointer',
  position: 'absolute',
  right: '1.5rem',
  top: '1.5rem',
  width: '1.5rem',
  height: '1.5rem',

  '@sm': {
    width: '1rem',
    height: '1rem',
  },
})
