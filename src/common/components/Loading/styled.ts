import { keyframes, styled } from 'config/stitches.config'

export const spinner = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
})

export const Spinner = styled('div', {
  dispaly: 'inline-block',
  width: '3rem',
  height: '3rem',
  border: '2px solid white',
  borderTopColor: '$new-primary',
  borderRadius: '50%',
  animation: `${spinner} 0.6s linear infinite`,
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
  zIndex: 100,
})
