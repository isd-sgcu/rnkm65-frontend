import { styled } from 'config/stitches.config'

export const MemberContainer = styled('div', {
  position: 'relative',
})

export const KingBadge = styled('div', {
  position: 'absolute',
  top: '-13px',
  left: '-13px',
  zIndex: 1,
})

export const DeleteMemberButton = styled('div', {
  position: 'absolute',
  top: '-13px',
  right: '-13px',
  zIndex: 1,
  backgroundColor: '$new-error',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$white',
  borderRadius: '30px',
  padding: '2px',
  fontSize: '1.25rem',
  cursor: 'pointer',
})
