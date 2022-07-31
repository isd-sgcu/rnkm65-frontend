import { styled } from 'config/stitches.config'

export const QrContainer = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  height: 'calc(100vh - 106px)',
  '@md': {
    height: 'calc(100vh - 96px)',
  },
  '@sm': {
    height: 'calc(100vh - 68px)',
  },
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.5s ease-in-out',
})

export const Camera = styled('div', {
  width: '100%',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'all 0.5s ease-in-out',
})

export const BackButton = styled('button', {
  position: 'absolute',
  right: '15px',
  top: '15px',
  width: '30px',
  height: '30px',
  backgroundColor: '$white',
  borderRadius: '0.5rem',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  zIndex: 2,
  filter: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
})
