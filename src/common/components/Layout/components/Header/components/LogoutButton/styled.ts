import { styled } from 'config/stitches.config'

export const StyledButton = styled('button', {
  backgroundColor: '$new-error',
  '&:hover': {
    backgroundColor: '$new-error-active',
  },
  color: '$white',
  borderRadius: '20px',
  border: 'none',
  padding: '5px 18px',
  cursor: 'pointer',
})
