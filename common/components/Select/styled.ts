import { styled } from 'config/stitches.config'

export const SelectContainer = styled('div', {
  width: '100%',
})

export const SelectElement = styled('select', {
  fontFamily: '$FCSubjectRounded',
  position: 'relative',
  width: '100%',
  padding: '5px 10px',
  borderRadius: '4px',
  backgroundColor: '$purple400',
  fontSize: '1rem',
  appearance: 'none',
  '-webkit-appearance': 'none',
  '-moz-appearance': 'none',
  variants: {
    error: {
      false: {
        border: '$black 1px solid',

        minHeight: '36px',
        maxHeight: '36px',
      },
      true: {
        border: '$error 2px solid',

        minHeight: '38px',
        maxHeight: '38px',
        '&:focus': {
          outline: 'none',
        },
      },
    },
  },
  defaultVariants: {
    error: false,
  },
})

export const OptionElement = styled('option', {
  fontFamily: '$FCSubjectRounded',
  borderRadius: '4px',
})

export const RequiredSymbol = styled('span', {
  color: '$error',
})
