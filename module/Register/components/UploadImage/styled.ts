import { css, styled } from 'config/stitches.config'

export const FallbackImage = styled('div', {
  backgroundColor: '$purple500',
  width: '200px',
  height: '300px',
  borderRadius: '1rem',
  marginBottom: '1rem',
})

export const UploadImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingRight: '4rem',

  '@md': {
    paddingRight: '0rem',
  },
})

export const DescriptionList = styled('li', {
  color: '$black',
  listStyleType: 'circle',
  listStyle: 'outside',
})

export const modalStyle = css({
  width: '100%',
  maxWidth: '700px',
})
