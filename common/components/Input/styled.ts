import { styled } from 'config/stitches.config'

export const InputBase = styled('input', {
  backgroundColor: '$purple400',
  fontFamily: '$FCSubjectRounded',
  borderRadius: '4px',
  padding: '5px 8px',
  fontSize: '1rem',

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
