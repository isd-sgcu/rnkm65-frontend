import Typography from 'common/components/Typography'
import { css, styled } from 'config/stitches.config'

export const Title = styled(Typography, {
  fontWeight: 'bold',
  textAlign: 'center',
  color: '$blue',
})

export const InlineTypography = styled(Typography, {
  display: 'inline',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  columnGap: '2rem',
  marginTop: '1.5rem',

  '@sm': {
    columnGap: '1rem',
  },
})

export const modalStyle = css({
  minWidth: '500px',
  maxWidth: '700px',

  '@sm': {
    minWidth: '300px',
  },
})
