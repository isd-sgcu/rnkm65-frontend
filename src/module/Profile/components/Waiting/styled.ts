import Typography from 'common/components/Typography'
import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '40px',
  padding: '20px',
  alignItems: 'center',
  marginTop: '-5vh',

  '@sm': {
    padding: '10px',
  },
})

export const ImageContainer = styled('div', {
  height: '300px',
  width: '180px',
  marginLeft: '-20px',
  marginTop: '50px',
  position: 'relative',

  '@md': {
    display: 'none',
  },
})

export const Description = styled(Typography, {
  backgroundColor: '$purple400',
  padding: '40px',
  borderRadius: '20px',
  whiteSpace: 'pre-line',
  textAlign: 'center',
  marginTop: '10px',

  '@sm': {
    marginTop: '30px',
    padding: '30px',
    borderRadius: '15px',
  },

  '@xs': {
    padding: '20px',
  },
})