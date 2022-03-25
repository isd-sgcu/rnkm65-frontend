import { styled } from 'config/stitches.config'

export const LayoutContainer = styled('div', {
  backgroundColor: '$yellow',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const ContentContainer = styled('div', {
  flexGrow: 1,
})
