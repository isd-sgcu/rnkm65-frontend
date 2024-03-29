import Image from 'common/components/Image'
import { css, styled } from 'config/stitches.config'

export const FallbackImage = styled('div', {
  backgroundColor: '$new-gray',
  width: '200px',
  height: '300px',
  borderRadius: '1rem',
  marginBottom: '1rem',
  variants: {
    error: {
      true: {
        border: '$error 4px solid',
      },
      false: {},
    },
  },

  defaultVariants: {
    error: false,
  },
})

export const StyledImage = styled(Image, {
  width: '200px',
  height: '300px',
  borderRadius: '1rem',
  marginBottom: '1rem',
  objectFit: 'cover',
})

export const UploadImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'fit-content',
  paddingRight: '2rem',

  '@md': {
    paddingRight: '0rem',
  },
})

export const FallbackImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const modalStyle = css({
  width: '100%',
  maxWidth: '700px',
  padding: '2rem !important',

  '@sm': {
    padding: '1rem @important',
  },
})
