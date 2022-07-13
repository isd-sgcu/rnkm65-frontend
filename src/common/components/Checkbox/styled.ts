import { styled } from 'config/stitches.config'

export const RootCheckbox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  maxWidth: '350px',
  columnGap: '1rem',
  position: 'relative',
})

export const Checkmark = styled('span', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: 0,
  width: '25px',
  height: '25px',
  border: '1px solid $black',
  borderRadius: '4px',
  backgroundColor: '$white',
  transition: 'all 0.2s ease-in-out',

  '@sm': {
    width: '20px',
    height: '20px',
  },

  '&:after': {
    content: '',
    position: 'absolute',
    opacity: 0,
    top: '2px',
    left: '8px',
    width: '5px',
    height: '13px',
    border: 'solid $white',
    borderWidth: '0 3px 3px 0',
    transform: 'rotate(45deg)',

    '@sm': {
      top: '2.5px',
      left: '7px',
      width: '3px',
      height: '8px',
    },
  },
})

export const InputLabel = styled('label', {
  fontFamily: '$FCSubjectRounded',
  fontSize: '0.85rem',
  lineHeight: '1.25rem',
  display: 'block',
  position: 'relative',
  paddingLeft: '2.5rem',
  cursor: 'pointer',
  userSelect: 'none',
  fontWeight: 'bold',
  color: '$blue',

  [`&:hover ~ .${Checkmark.className}`]: {
    backgroundColor: '$gray',
  },
  '@sm': {
    fontSize: '0.65rem',
    lineHeight: '1rem',
    paddingLeft: '2rem',
  },
})

export const InputBox = styled('input', {
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,

  variants: {
    variant: {
      confirm: {
        [`&:checked ~ .${Checkmark.className}`]: {
          backgroundColor: '$confirm',
        },
      },
      pink: {
        [`&:checked ~ .${Checkmark.className}`]: {
          backgroundColor: '$pink500',
        },
      },
      purple: {
        [`&:checked ~ .${Checkmark.className}`]: {
          backgroundColor: '$purple500',
        },
      },
      blue: {
        [`&:checked ~ .${Checkmark.className}`]: {
          backgroundColor: '$blue',
        },
      },
    },
  },

  [`&:checked ~ .${Checkmark.className}:after`]: {
    opacity: 1,
  },

  defaultVariants: {
    variant: 'confirm',
  },
})
