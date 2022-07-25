import { styled } from 'config/stitches.config'

export const GroupContainer = styled('div', {
  display: 'flex',
  marginTop: '20px',
  gap: '20px',
  '@xl': {
    gap: 0,
    flexDirection: 'column-reverse ',
  },
})
