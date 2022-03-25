import { styled } from '@stitches/react'

export const StyledButton = styled('button', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  fontFamily: '$FCSubjectRounded',

  backgroundColor: '$pink500',
  color: '$yellow',

  border: 'none',
  borderRadius: '16px',
  padding: '4px 14px 2px 14px',

  cursor: 'pointer',

  '@sm': {
    fontSize: '1rem',
  },

  '&:hover': { backgroundColor: '$pink600' },
  '&:disabled': { backgroundColor: '$pink400' },
})
