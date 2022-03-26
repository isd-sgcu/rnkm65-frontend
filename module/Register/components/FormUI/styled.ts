import StyledButton from 'common/components/Button'
import { styled } from 'config/stitches.config'

export const FormContainer = styled('div', {
  display: 'grid',
  marginTop: '1rem',
  marginBottom: '1rem',
  gridRowGap: '1rem',

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

export const SubmitButton = styled(StyledButton, {
  width: '100%',
  maxWidth: '400px',
})
