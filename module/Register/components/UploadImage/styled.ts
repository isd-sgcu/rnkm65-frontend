import StyledButton from 'common/components/Button'
import { styled } from 'config/stitches.config'

export const FallbackImage = styled('div', {
  backgroundColor: '$purple500',
  width: '200px',
  height: '280px',
  borderRadius: '1rem',
  marginBottom: '1rem',
})

export const UploadImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingRight: '4rem',

  '@md': {
    paddingRight: '0rem',
  },
})

export const UploadButton = styled(StyledButton, {
  width: 'fit-content',
})
