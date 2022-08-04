import { styled } from 'config/stitches.config'

export const Box = styled('div', {
  borderRadius: '30px 30px 0 0',
  boxShadow: '0px -1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
  maxWidth: '500px',
  background: '$white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '1.25rem',
  padding: '3.5rem 0',
  height: '100%',
})

export const LoadingSpinnerContainer = styled('div', {
  width: 60,
  height: 60,
})

export const CloseButtonContainer = styled('div', {
  position: 'absolute',
  top: '20px',
  right: '20px',
  cursor: 'pointer',
})

export const ImageContainer = styled('div', {
  flexShrink: '0',
})

export const PlaceDetailsContainer = styled('div', {
  margin: '0 2rem',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
  rowGap: '2.5rem',
})

export const TextBox = styled('div', {
  overflowY: 'auto',
  padding: '0 4px',
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
