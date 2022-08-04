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
      decline: {
        color: '$new-secondary',
        backgroundColor: '$white',
        '&:hover': { backgroundColor: '$new-gray' },
        '&:disabled': {
          backgroundColor: '$new-secondary-disabled',
          color: '$new-gray',
        },
        border: '1px solid $new-secondary',
      },
      eStamp: {
        fontSize: '1rem',
        color: '$white',
        backgroundColor: '$new-primary',
        width: '100%',
        borderRadius: '6px',
        padding: '8px 16px',
        '&:disabled': {
          backgroundColor: '$white',
          border: '1px solid $gray300',
          color: '$new-primary',
        },
      },
      eStampSecondary: {
        fontSize: '1rem',
        color: '$new-primary',
        border: '1px solid $new-gray',
        backgroundColor: '$white',
        width: '100%',
        borderRadius: '6px',
        padding: '8px 16px',
      },
      error: {
        color: '$white',
        backgroundColor: '$error',
      },
      eStampProfile: {
        fontSize: '1.25rem',
        fontWeight: 'normal',
        backgroundColor: '$white',
        color: '$new-primary',
        borderRadius: '10rem',
        padding: '8px 16px',
        '&:hover': { backgroundColor: '$new-gray' },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
