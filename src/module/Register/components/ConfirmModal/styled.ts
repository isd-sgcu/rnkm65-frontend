import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { styled } from 'config/stitches.config'

export const TitleConfirm = styled(Typography, {
  fontWeight: 'bold',
  margin: '1rem 2rem',
  textAlign: 'center',
  color: '$blue',

  '@sm': {
    margin: '1.25rem 0.5rem',
  },
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  width: '100%',
  columnGap: '1rem',
  marginTop: '1rem',

  '@sm': {
    marginTop: '0.25rem',
  },
})

export const BackButton = styled(Button, {
  backgroundColor: '$error',
  width: '100%',
})

export const ConfirmButton = styled(Button, {
  width: '100%',
})
