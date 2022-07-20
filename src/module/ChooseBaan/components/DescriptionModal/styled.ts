import { css, styled } from 'config/stitches.config'

export const RoundedImage = css({
  borderRadius: '1rem',
})

export const StyledImage = styled('div', {
  minWidth: '90px',
  maxWidth: '90px',
  height: '90px',
  padding: '2px',
  border: '$pink500 2px solid',
  backgroundColor: '$pink500',
  borderRadius: '4px',
})

export const RootDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
})

export const SocialDescription = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

export const modalClassName = css({
  backgroundColor: '$new-gray !important',
  maxWidth: '600px',
  maxHeight: '90vh',
  overflowY: 'auto',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
})
