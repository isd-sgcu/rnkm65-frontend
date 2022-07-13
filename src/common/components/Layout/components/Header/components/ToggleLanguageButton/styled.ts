import { styled } from 'config/stitches.config'

export const ButtonConatiner = styled('div', {
  backgroundColor: '#7676803D',
  color: '$blue',
  borderRadius: '9px',
  padding: '3px',
  width: 'fit-content',

  '@lg': {
    padding: '2px',
  },
})

export const StyledButton = styled('button', {
  borderRadius: '7px',
  border: 'none',
  padding: '7px 15px',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  fontFamily: '$FCSubjectRounded',
  '@lg': {
    padding: '3px 12px',
  },

  variants: {
    selected: {
      true: {
        color: '$white',
        backgroundColor: '$new-secondary',
      },
      false: {
        color: '$blue',
        backgroundColor: 'transparent',
        padding: '7px 10px',
        cursor: 'pointer',
        '@lg': {
          padding: '3px 8px',
        },
      },
    },
  },
})
