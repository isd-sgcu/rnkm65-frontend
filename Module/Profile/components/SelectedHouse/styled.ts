import Typography from 'common/components/Typography'
import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  background: '$purple400',
  border: '2px solid $blue',
  borderRadius: '20px',
  textAlign: 'center',
  padding: '20px',
  flexGrow: 1,
  flexBasis: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const HousesContainer = styled('div', {
  display: 'flex',
  gap: '16px',
  marginTop: '20px',
  justifyContent: 'center',
})

export const ConfirmText = styled(Typography, {
  margin: '10px 0 -5px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$confirm',
})
