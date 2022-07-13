import { styled } from 'config/stitches.config'

export const RadioRootContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  variants: {
    orientation: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
  },
})

export const Checkmark = styled('div', {
  position: 'absolute',
  top: '50%',
  left: 0,
  height: '20px',
  width: '20px',
  border: '1px solid $new-secondary',
  borderRadius: '50%',
  transform: 'translateY(-50%)',
})

export const RadioInput = styled('input', {
  cursor: 'pointer',
  appearance: 'none',
  opacity: 0,
  position: 'relative',

  [`&:checked ~ .${Checkmark.className}:after`]: {
    content: ' ',
    position: 'absolute',
    width: '10px',
    height: '10px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    backgroundColor: '$new-secondary',
  },
})

export const RadioLabel = styled('label', {
  display: 'flex',
  position: 'relative',
  paddingLeft: '1.75rem',
  cursor: 'pointer',
  fontFamily: '$FCSubjectRounded',
  fontSize: '1rem',
  '@sm': {
    fontSize: '0.75rem',
  },

  [`&:hover .${RadioInput.className} ~ .${Checkmark.className}`]: {
    borderWidth: '2px',
  },
})
