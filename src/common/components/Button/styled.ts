import { styled } from 'config/stitches.config'

export const Button = styled('button', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  fontFamily: '$FCSubjectRounded',

  border: 'none',
  borderRadius: '16px',
  padding: '4px 14px 2px 14px',

  cursor: 'pointer',
  boxShadow: '2px 2px 2px 0px #24066840',

  '@sm': {
    fontSize: '1rem',
    padding: '3px 10px 2px 10px',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$yellow',
        backgroundColor: '$pink500',
        '&:hover': { backgroundColor: '$pink600' },
        '&:disabled': { backgroundColor: '$pink400' },
      },
      secondary: {
        color: '$pink500',
        backgroundColor: '$yellow',
      },
      error: {
        color: '$white',
        backgroundColor: '$error',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
