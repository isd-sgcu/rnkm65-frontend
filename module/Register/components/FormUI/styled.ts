import { styled } from 'config/stitches.config'

export const FormContainer = styled('div', {
  display: 'grid',
  marginTop: '1rem',
  marginBottom: '1rem',
  gridColumnGap: '1rem',
  gridRowGap: '1rem',
  gridTemplateRows: 'repeat(3, 3fr)',
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
