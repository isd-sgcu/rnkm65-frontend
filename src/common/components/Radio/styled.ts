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

export const RadioOption = styled('div', {
  display: 'flex',
  gap: '0.5rem',
})

export const RadioInput = styled('input', {})
