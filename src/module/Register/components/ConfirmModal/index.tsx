import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useFormContext } from 'module/Register/hooks/useFormContext'
import { useCallback, useState } from 'react'

import { ButtonContainer, TitleConfirm } from './styled'

const ConfirmModal = () => {
  const { openModal, handleCloseModal, handleModalSubmit } = useFormContext()
  const { t } = useSSRTranslation('register')
  const [error, setError] = useState('')

  const handleSubmit = useCallback(async () => {
    try {
      setError('')
      await handleModalSubmit()
    } catch (err) {
      setError((err as Error).message)
    }
  }, [handleModalSubmit])

  const handleClose = useCallback(() => {
    setError('')
    handleCloseModal()
  }, [handleCloseModal])

  return (
    <Modal open={openModal} onClose={handleClose}>
      <TitleConfirm variant="subhead3">{t('confirmModal.title')}</TitleConfirm>
      <ButtonContainer>
        <Button
          css={{ width: '100%' }}
          type="button"
          variant="primary"
          onClick={handleSubmit}
        >
          {t('confirmModal.confirm')}
        </Button>
        <Button
          css={{ width: '100%' }}
          type="button"
          variant="secondary"
          onClick={handleClose}
        >
          {t('confirmModal.back')}
        </Button>
      </ButtonContainer>
      {error && (
        <Typography
          css={{ marginTop: '1rem', textAlign: 'center' }}
          color="error"
        >
          {error}
        </Typography>
      )}
    </Modal>
  )
}

export default ConfirmModal
