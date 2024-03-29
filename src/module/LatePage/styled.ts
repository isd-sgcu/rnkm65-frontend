import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginInline: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Link = styled('a', {
  display: 'inline',
  textDecoration: 'underline',
})

export const Box = styled('div', {
  textAlign: 'center',
  maxWidth: '495px',
  marginInline: '40px',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  gap: '20px',
  background: '#ECEDF2',
  borderRadius: '20px',
  fontFamily: '$FCSubjectRounded',
  fontWeight: '400',
  '@md': {
    fontSize: '12px',
  },
})

export const Title = styled('h1', {
  position: 'absolute',
  fontSize: '58px',
  fontFamily: '$FCSubjectRounded',
  margin: '20px 0',
  top: '-120px',
  color: '$new-primary',

  '@md': {
    fontSize: '48px',
  },
})
