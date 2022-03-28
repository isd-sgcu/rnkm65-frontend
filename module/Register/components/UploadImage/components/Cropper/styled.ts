import { styled } from 'config/stitches.config'

export const RootContainer = styled('div', {
  width: '100%',
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const CropperContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$black',
  width: '100%',
  height: '300px',
  '@sm': {
    height: '250px',
  },
})

export const InputFileContainer = styled('div', {
  width: '100%',
  height: '300px',
  borderRadius: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '@md': {
    height: '200px',
  },
  backgroundColor: '$gray',
  cursor: 'pointer',
})

export const InputFileZone = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
})

export const ZoomContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1rem',
  marginBottom: '1rem',
})

export const ZoomInput = styled('input', {
  marginRight: '1rem',
  marginLeft: '1rem',
})
