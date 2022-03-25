import { styled } from 'config/stitches.config'

export const FormContainer = styled('form', {
  display: 'flex',
  maxWidth: '800px',
  padding: '2rem 1rem',
  flexDirection: 'row',
  '@md': {
    flexDirection: 'column',
  },
})
