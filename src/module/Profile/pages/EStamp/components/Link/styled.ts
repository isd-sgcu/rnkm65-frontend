import { styled } from 'config/stitches.config'

export const LinkElement = styled('a', {
  fontFamily: '$FCSubjectRounded',
  fontSize: '1.25rem',
  fontWeight: 'normal',
  backgroundColor: '$white',
  color: '$new-primary',
  borderRadius: '10rem',
  padding: '8px 16px',
  '&:hover': { backgroundColor: '$new-gray' },
})
