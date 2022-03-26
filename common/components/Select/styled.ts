import { styled } from 'config/stitches.config'

export const SelectContainer = styled('div', {
  width: '100%',
})

export const SelectElement = styled('select', {
  fontFamily: '$FCSubjectRounded',
  width: '100%',
  position: 'relative',
  padding: '5px 10px',
  borderRadius: '4px',
  backgroundColor: '$purple400',
  fontSize: '1rem',
  border: '$black 1px solid',
  appearance: 'none',
  '-webkit-appearance': 'none',
  '-moz-appearance': 'none',
})

export const OptionElement = styled('option', {
  fontFamily: '$FCSubjectRounded',
})

export const RequiredSymbol = styled('span', {
  color: 'red',
})
