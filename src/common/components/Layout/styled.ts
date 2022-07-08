import { styled } from 'config/stitches.config'

export const LayoutContainer = styled('div', {
  backgroundColor: '$white',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const ContentContainer = styled('div', {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})
