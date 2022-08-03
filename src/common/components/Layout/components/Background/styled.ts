import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: -1,
  backgroundColor: '$white',
  overflow: 'hidden',
})

export const TopRightBGContainer = styled('div', {
  width: '250px',
  height: '300px',
  position: 'absolute',
  top: 0,
  right: 0,
  '@sm': {
    width: '50vw',
    height: '60vw',
  },
})

export const BottomLeftBGContainer = styled('div', {
  position: 'absolute',
  bottom: 10,
  left: 0,
  width: '220px',
  height: '500px',
  '@sm': {
    display: 'none',
  },
})

export const LeftBGContainer = styled('div', {
  display: 'none',
  '@sm': {
    display: 'block',
    position: 'absolute',
    top: '50px',
    left: 0,
    height: '100vw',
    width: '25vw',
  },
})

export const BottomRightBGContainer = styled('div', {
  display: 'none',
  '@sm': {
    display: 'block',
    position: 'absolute',
    bottom: 10,
    right: 0,
    height: '90vw',
    width: '70vw',
  },
})

export const BottomBGContainerDesktop = styled('div', {
  position: 'absolute',
  width: '100vw',
  height: '27vw',
  bottom: '50px',
  '@lg': {
    bottom: '75px',
  },
  '@md': {
    bottom: '90px',
  },
  '@sm': {
    display: 'none',
  },
})

export const BottomBGContainerMobile = styled('div', {
  display: 'none',
  '@sm': {
    display: 'block',
    position: 'absolute',
    width: '100vw',
    height: '50vw',
    bottom: 70,
  },
  '@xs': {
    height: '60vw',
  },
})
