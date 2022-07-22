import { styled } from 'config/stitches.config'

export const Card = styled('div', {
  // width: 'min(100%, 345px)',
  width: '100%',
  height: '58px',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  border: '1px solid #E6E7EA',
  borderRadius: '6px',
  backgroundColor: '$white',
})
export const StyledImage = styled('div', {
  position: 'relative',
  width: '64px',
  height: '64px',
  overflow: 'hidden',
})
export const StyledIcon = styled('div', {
  position: 'relative',
  width: '32.19px',
  height: '64px',
  overflow: 'hidden',
})

export const StyledButton = styled('button', {
  backgroundColor: 'rgba(0,0,0,0)',
  '&:hover': {
    backgroundColor: '$gray',
  },
  color: '$white',
  border: 'none',
  padding: '5px 18px',
  cursor: 'pointer',
  marginLeft: 'auto',
})
