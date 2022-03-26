import StyledButton from 'common/components/Button'
import { styled } from 'config/stitches.config'

export const RegisterContainer = styled('div', {
  display: 'flex',
  maxWidth: '1100px',
  padding: '2rem 0rem',
  flexDirection: 'row',
  '@md': {
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '2rem',
  },
})

export const SubmitButton = styled(StyledButton, {
  width: '100%',
  maxWidth: '400px',
})

export const RootContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 4rem',
})

export const SubmitContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})
