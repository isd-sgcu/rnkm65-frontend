import { styled } from 'config/stitches.config'

export const StyledButton = styled('button', {
  color: '$blue',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  border: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
})

export const StyledLink = styled('a', {
  color: '$blue',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  border: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
})
