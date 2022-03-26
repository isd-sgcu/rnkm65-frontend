import { styled } from 'config/stitches.config'

export const RegisterContainer = styled('form', {
  display: 'flex',
  maxWidth: '1100px',
  padding: '2rem 1rem',
  flexDirection: 'row',
  '@md': {
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '2rem',
  },
})
