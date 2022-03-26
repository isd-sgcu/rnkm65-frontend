import { styled } from 'config/stitches.config'

export const HouseContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const StyledImage = styled('div', {
  position: 'relative',
  borderRadius: '8px',
  width: '120px',
  height: '120px',
  overflow: 'hidden',
})

export const ImageContainer = styled('div', {
  position: 'relative',
  borderRadius: '10px',
  padding: '3px',
  backgroundColor: '$pink500',
  marginBottom: '10px',
})

export const IndexContainer = styled('div', {
  borderRadius: '8px 0 8px 0',
  backgroundColor: '$pink500',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '33px',
  height: '33px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
