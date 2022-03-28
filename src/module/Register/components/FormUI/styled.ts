import { styled } from 'config/stitches.config'

export const FormContainer = styled('div', {
  display: 'grid',
  marginTop: '1rem',
  gridColumnGap: '1rem',
  gridRowGap: '0.5rem',
  gridTemplateColumns: 'repeat(9, 1fr)',

  '@md': {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    rowGap: '1rem',
  },
})

export const FormRootContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
