import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import Typography from 'common/components/Typography'
import { useTranslation } from 'next-i18next'
import { useCallback, useState } from 'react'

import { ButtonContainer, modalCss, TitleConfirm } from './styled'
import { IConfirmModalProps } from './types'

const ConfirmModal = (props: IConfirmModalProps) => {
  const { onClose, onConfirm, open, allowSubmit } = props
  const { t } = useTranslation()
  const [error, setError] = useState('')
  const [linkErr, setLinkErr] = useState('')

  const handleSubmit = useCallback(async () => {
    try {
      setError('')
      await onConfirm()
    } catch (err) {
      const innerErr = JSON.parse((err as Error).message) as {
        status: number
        message: string
        stack: string
      }

      setError(t(`chooseBaan:error.${innerErr.status}`))
      setLinkErr(
        `https://airtable.com/shrWFil4igZa2UZoV?prefill_errorMessage=${
          (err as Error).message
        }(from:selectBaan)&hide_errorMessage=true`
      )
    }
  }, [onConfirm, t])

  const handleClose = useCallback(() => {
    setError('')
    onClose()
  }, [onClose])

  const handleClickReport = useCallback(() => {
    window.location.href = linkErr
  }, [linkErr])

  return (
    <Modal modalClassName={modalCss()} open={open} onClose={onClose}>
      <TitleConfirm variant="subhead3">
        {!allowSubmit
          ? t('chooseBaan:requiredBaanTitle')
          : t('chooseBaan:submitBaanTitle')}
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
              {t('chooseBaan:cancel')}
            </Button>
            <Button
              css={{ width: '50%' }}
              type="button"
              variant="primary"
              onClick={handleSubmit}
            >
              {t('chooseBaan:submit')}
            </Button>
          </>
        ) : (
          <Button
            css={{ margin: 'auto', width: '200px' }}
            type="button"
            variant="secondary"
            onClick={handleClose}
          >
            {t('common:acknowledge')}
          </Button>
        )}
      </ButtonContainer>
      {error && (
        <Typography
          css={{ marginTop: '1rem', textAlign: 'center', fontSize: '1.25rem' }}
          color="error"
          variant="h4"
        >
          {error}
          <Typography
            onClick={handleClickReport}
            css={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            {t('common:reportIssue')}
          </Typography>
        </Typography>
      )}
    </Modal>
  )
}

export default ConfirmModal
