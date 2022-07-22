import Typography from 'common/components/Typography'
import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  background: '$new-gray',
  borderRadius: '20px',
  textAlign: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  flexGrow: 1,
  flexBasis: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@md': {
    padding: '20px 10px 10px 10px',
    borderRadius: '10px',
  },
  '@xl': {
    marginBottom: '20px',
  },
})

export const BaansContainer = styled('div', {
  display: 'flex',
  gap: '16px',
  marginTop: '20px',
  justifyContent: 'center',
  '@sm': { gap: '7px' },
  '@xs': { gap: '5px' },
})

export const ConfirmText = styled(Typography, {
  margin: '10px 0 -5px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$new-success',
})
