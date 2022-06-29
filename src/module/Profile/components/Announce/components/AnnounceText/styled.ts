import { styled } from 'config/stitches.config'

export const AnnounceTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  '@md': {
    alignItems: 'center',
  },
})

export const JoinBaanContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '0.5rem',
})
