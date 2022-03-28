import { css, styled } from 'config/stitches.config'

export const modalStyle = css({
  width: '100%',
  maxWidth: '700px',
  paddingLeft: '4rem !important',
  paddingRight: '4rem !important',

  '@sm': {
    paddingLeft: '2rem !important',
    paddingRight: '2rem !important',
  },
})

export const RootCropperContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const DescriptionList = styled('li', {
  color: '$blue',
  display: 'flex',
  marginBottom: '0.5rem',
  '&::before': {
    content: '\\2022',
    color: '$blue',
    fontWeight: 'bold',
    display: 'inline-block',
    width: '1em',
    marginLeft: '-1em',
  },
})

export const UnorderedListContainer = styled('ul', {
  listStyle: 'none',
})
