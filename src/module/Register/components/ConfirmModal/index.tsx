import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useFormContext } from 'module/Register/hooks/useFormContext'

import { ButtonContainer, TitleConfirm } from './styled'

const ConfirmModal = () => {
  const { openModal, handleCloseModal, handleModalSubmit } = useFormContext()
  const { t } = useSSRTranslation('register')
  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <TitleConfirm variant="subhead3">{t('confirmModal.title')}</TitleConfirm>
      <ButtonContainer>
        <Button
          css={{ width: '100%' }}
          type="button"
          variant="primary"
          onClick={handleModalSubmit}
        >
          {t('confirmModal.confirm')}
        </Button>
        <Button
          css={{ width: '100%' }}
          type="button"
          variant="error"
          onClick={handleCloseModal}
        >
          {t('confirmModal.back')}
        </Button>
      </ButtonContainer>
    </Modal>
  )
}

export default ConfirmModal
