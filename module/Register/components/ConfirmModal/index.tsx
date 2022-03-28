import { Modal } from 'common/components/Modal'
import { useFormContext } from 'module/Register/hooks/useFormContext'

import {
  BackButton,
  ButtonContainer,
  ConfirmButton,
  TitleConfirm,
} from './styled'

export const ConfirmModal = () => {
  const { openModal, handleCloseModal, handleModalSubmit } = useFormContext()
  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <TitleConfirm variant="h3">คุณต้องการยืนยันหรือไม่</TitleConfirm>
      <ButtonContainer>
        <BackButton type="button" onClick={handleCloseModal}>
          กลับ
        </BackButton>
        <ConfirmButton type="button" onClick={handleModalSubmit}>
          ยืนยัน
        </ConfirmButton>
      </ButtonContainer>
    </Modal>
  )
}
