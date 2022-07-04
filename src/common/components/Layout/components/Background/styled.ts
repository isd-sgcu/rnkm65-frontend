import { styled } from 'config/stitches.config'

export const TopRightBGContainer = styled('div', {
  position: 'absolute',
  top: 'max(-280px, -30vh)',
  right: 'max(-80px, -5vw)',
  width: '372px',
  height: '100%',
  zIndex: 0,
})

export const BottomLeftBGContainer = styled('div', {
  position: 'absolute',
  top: 'calc(100vh-max(-200px, -27.5vh))',
  left: 'max(-20px, -5vw)',
  width: '372px',
  height: '100%',
  zIndex: 0,
})

export const BottomRightBGContainer = styled('div', {
  position: 'absolute',
  bottom: 'max(-200px, -27.5vh)',
  right: 'max(-20px, -5vw)',
  width: '372px',
  height: '100%',
  zIndex: 0,
  display: 'none',
  '@md': {
    display: 'block',
  },
})
