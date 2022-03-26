import { styled } from 'config/stitches.config'

export const InputBase = styled('input', {
  backgroundColor: '$purple400',
  fontFamily: '$FCSubjectRounded',
  borderRadius: '4px',
  padding: '5px 8px',
  fontSize: '1rem',
  width: '100%',

  outline: 'none',

  variants: {
    error: {
      true: {
        border: '$error 2px solid',
      },
      false: {
        border: '$blue 1px solid',
      },
    },
  },

  defaultVariants: {
    error: false,
  },
})

export const InputFieldContainer = styled('div', {
  width: '100%',
})

export const RequiredSymbol = styled('span', {
  color: 'red',
})
