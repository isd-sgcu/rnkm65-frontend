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
        color: '$white',
        backgroundColor: '$new-primary',
        '&:hover': { backgroundColor: '$new-primary-active' },
        '&:disabled': {
          backgroundColor: '$new-primary-disabled',
          color: '$new-gray',
        },
      },
      secondary: {
        color: '$white',
        backgroundColor: '$new-secondary',
      },
      eStamp: {
        color: '$white',
        backgroundColor: '$new-primary',
        width: '100%',
        borderRadius: '6px',
        padding: '10px 16px',
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
