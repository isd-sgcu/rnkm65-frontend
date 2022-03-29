import { styled } from 'config/stitches.config'

export const RootContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 2rem',
  gap: '1.5rem',
})

export const ContentContainer = styled('div', {
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: '$purple400',
  padding: '2rem',
  gap: '1.5rem',
  boxShadow: '4px 4px 4px rgba(36, 6, 104, 0.5)',
  borderRadius: '10px',
})
