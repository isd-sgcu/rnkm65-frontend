import { styled } from 'config/stitches.config'

export const ButtonConatiner = styled('div', {
  backgroundColor: '#7676803D',
  color: '$blue',
  borderRadius: '9px',
  padding: '3px',
  width: 'fit-content',
})

export const StyledButton = styled('button', {
  borderRadius: '7px',
  border: 'none',
  padding: '7px 15px',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  fontFamily: '$FCSubjectRounded',

  variants: {
    selected: {
      true: {
        color: '$yellow',
        backgroundColor: '$pink500',
      },
      false: {
        color: '$blue',
        backgroundColor: 'transparent',
        padding: '7px 10px',
        cursor: 'pointer',
      },
    },
  },
})
