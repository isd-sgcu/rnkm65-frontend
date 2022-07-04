import { styled } from 'config/stitches.config'
import { BsChevronDown } from 'react-icons/bs'

export const SelectContainer = styled('div', {
  width: '100%',
})

export const SelectElement = styled('select', {
  fontFamily: '$FCSubjectRounded',
  position: 'relative',
  width: '100%',
  padding: '5px 10px',
  borderRadius: '4px',
  backgroundColor: '$new-gray',
  fontSize: '1rem',
  appearance: 'none',
  '-webkit-appearance': 'none',
  '-moz-appearance': 'none',
  color: '$black',
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
  '&::placeholder': {
    color: '$gray',
  },
  defaultVariants: {
    error: false,
  },
})

export const OptionElement = styled('option', {
  fontFamily: '$FCSubjectRounded',
  borderRadius: '4px',
  color: '$black',
})

export const RequiredSymbol = styled('span', {
  color: '$error',
})

export const DropdownIcon = styled(BsChevronDown, {
  position: 'absolute',
  transform: 'translateY(-50%)',
  right: 7,
  padding: '0px 0px',
  top: '50%',
})
