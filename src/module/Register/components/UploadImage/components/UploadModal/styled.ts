import { styled } from 'config/stitches.config'

export const RootCropperContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const DescriptionList = styled('li', {
  color: '$blue',
  display: 'flex',
  '&::before': {
    content: '\\2022',
    color: '$blue',
    fontWeight: 'bold',
    display: 'inline-block',
    width: '1em',
    marginLeft: '-1em',
  },
})

export const UnorderedListContainer = styled('ul', {
  listStyle: 'none',
  margin: '0.5rem 0',
})
