import { styled } from 'config/stitches.config'

export const AnnounceContainer = styled('div', {
  display: 'flex',
  gap: '3rem',
  paddingLeft: '2rem',
  '@lg': {
    flexDirection: 'column',
  },
  '@md': {
    paddingLeft: '0',
  },
})
