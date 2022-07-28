import { styled } from 'config/stitches.config'

export const Box = styled('div', {
  position: 'relative',
  borderRadius: '30px 30px 0 0',
  boxShadow: '0px -1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
  height: 'calc(100vh - 106px)',
  maxWidth: '420px',
  background: '$white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '1.25rem',
  padding: '2rem 0',
  '@sm': {
    height: 'calc(100vh - 68px)',
  },
})

export const TextBox = styled('div', {
  overflowY: 'scroll',
  width: 'fit-content',
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#F3F4F6',
    borderRadius: '20px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#D1D5DB',
    borderRadius: '20px',
  },
})

export const CloseButtonContainer = styled('div', {
  position: 'absolute',
  top: '20px',
  right: '20px',
  cursor: 'pointer',
})

export const PlaceDetailsContainer = styled('div', {
  margin: '0 2rem',
  display: 'flex',
  height: '50%',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '3rem',
})
