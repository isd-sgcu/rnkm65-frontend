import StyledButton from 'common/components/Button'
import Typography from 'common/components/Typography'
import { styled } from 'config/stitches.config'

export const TitleConfirm = styled(Typography, {
  fontWeight: 'bold',
  margin: '1rem 2rem',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  width: '100%',
  columnGap: '1rem',
  marginTop: '1rem',
})

export const BackButton = styled(StyledButton, {
  backgroundColor: '$error',
  width: '100%',
})

export const ConfirmButton = styled(StyledButton, {
  width: '100%',
})
