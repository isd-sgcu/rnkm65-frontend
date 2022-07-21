import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useCallback, useState } from 'react'

import { ButtonContainer, modalCss, TitleConfirm } from './styled'
import { IConfirmModalProps } from './types'

const ConfirmModal = (props: IConfirmModalProps) => {
  const { onClose, onConfirm, open, allowSubmit } = props
  const { t } = useSSRTranslation('chooseBaan')
  const [error, setError] = useState('')

  const handleSubmit = useCallback(async () => {
    try {
      setError('')
      await onConfirm()
    } catch (err) {
      setError((err as Error).message)
    }
  }, [onConfirm])

  const handleClose = useCallback(() => {
    setError('')
    onClose()
  }, [onClose])

  return (
    <Modal modalClassName={modalCss()} open={open} onClose={onClose}>
      <TitleConfirm variant="subhead3">
        {!allowSubmit ? t('requiredBaanTitle') : t('submitBaanTitle')}
      </TitleConfirm>
      <ButtonContainer>
        {allowSubmit ? (
          <>
            <Button
              css={{ width: '50%' }}
              type="button"
              variant="secondary"
              onClick={handleClose}
            >
              {t('cancel')}
            </Button>
            <Button
              css={{ width: '50%' }}
              type="button"
              variant="primary"
              onClick={handleSubmit}
            >
              {t('submit')}
            </Button>
          </>
        ) : (
          <Button
            css={{ margin: 'auto', width: '200px' }}
            type="button"
            variant="secondary"
            onClick={handleClose}
          >
            {t('cancel')}
          </Button>
        )}
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
