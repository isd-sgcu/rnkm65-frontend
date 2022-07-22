import { styled } from 'config/stitches.config'

export const SearchInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  paddingBottom: '1rem',
})

export const ButtonFilterContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
})

export const BaanFilter = styled('button', {
  color: '$white',
  padding: '10px',
  fontFamily: '$FCSubjectRounded',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  variants: {
    selected: {
      true: { backgroundColor: '$new-secondary' },
      false: {
        backgroundColor: '#C6608D',
      },
    },
  },
  defaultVariants: {
    selected: 'false',
  },
})
