import { styled } from 'config/stitches.config'

export const CameraMenuContainer = styled('div', {
  display: 'flex',
  position: 'fixed',
  bottom: '0%',
  width: '100vw',
  justifyContent: 'center',
  zIndex: '2',
  transition: 'display 0.3s ease',
})

export const BackgroundMenu = styled('div', {
  position: 'absolute',
  display: 'flex',
  width: '100vw',
  height: '72px',
  zIndex: '2',
  backgroundColor: '$new-background-gray',
  border: '1px solid $new-border-gray',
})

export const StyledIcon = styled('div', {
  position: 'relative',
  width: '56px',
  height: '49px',
  overflow: 'hidden',
})

export const BackgroundButton = styled('div', {
  position: 'absolute',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '-30px',
  background: '$new-background-gray',
  outline: 'none',
  zIndex: '-1',
})

export const StyledButton = styled('button', {
  width: '100px',
  height: '100px',
  color: '$white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '-30px',
  background: '$new-background-gray',
  zIndex: '2',
})
