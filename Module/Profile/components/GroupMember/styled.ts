import { styled } from 'config/stitches.config'

export const Container = styled('div', {
  background: '$purple400',
  border: '2px solid $blue',
  borderRadius: '20px',
  textAlign: 'center',
  padding: '20px',
})

export const MembersContainer = styled('div', {
  display: 'flex',
  gap: '16px',
  marginTop: '20px',
})

export const ImageContainer = styled('div', {
  height: '160px',
  width: '120px',
  position: 'relative',
  borderRadius: '5px',
  overflow: 'hidden',
  boxShadow: '2px 2px 2px 0px #24066840',
  marginBottom: '8px',
})
