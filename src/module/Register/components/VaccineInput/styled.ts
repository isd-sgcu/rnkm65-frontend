import { css, styled } from '@stitches/react'

export const VaccineContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '0.5rem',
})

export const RequiredSymbol = styled('span', {
  color: '$error',
})

export const modalStyle = css({
  width: '100%',
  maxWidth: '600px',
  padding: '2rem !important',

  '@sm': {
    padding: '1rem !important',
  },
})
