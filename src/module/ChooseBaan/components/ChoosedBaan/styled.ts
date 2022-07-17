import { styled } from 'config/stitches.config'
import { IoMdTrash } from 'react-icons/io'

export const Container = styled('div', {
  backgroundColor: '$new-gray',
  borderRadius: '20px',
  padding: '15px 18px',
  marginTop: '10px',
})

export const DeleteButton = styled(IoMdTrash, {
  color: '$blue',
  fontSize: '1.75rem',
  cursor: 'pointer',
})

export const BaanContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const ButtonContainer = styled('div', {
  marginTop: '5px',
  display: 'flex',
  gap: '15px',
  justifyContent: 'center',
})
