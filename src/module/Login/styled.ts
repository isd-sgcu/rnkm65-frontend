import { styled } from 'config/stitches.config'

export const RootContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem 2rem',
  gap: '1.25rem',
})

export const ContentContainer = styled('div', {
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: '$new-gray',
  padding: '2rem',
  gap: '1.5rem',
  borderRadius: '10px',
})

export const StyledLink = styled('a', {
  color: '$new-secondary',
  textDecoration: 'underline',
  wordBreak: 'keep-all',
})
