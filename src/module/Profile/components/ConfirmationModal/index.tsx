import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import { Trans, useTranslation } from 'next-i18next'

import { ButtonContainer, InlineTypography, modalStyle, Title } from './styled'
import { ConfirmationModalProps } from './types'

const ConfirmationModal = (props: ConfirmationModalProps) => {
  const {
    open,
    actionI18NKey,
    acceptButtonI18NKey = 'want',
    onAccept,
    onDecline,
    declineButtonI18NKey = 'notWant',
  } = props
  const { t } = useTranslation('common')

  return (
    <Modal
      modalClassName={modalStyle()}
      open={open}
      onClose={onDecline}
      showCloseIcon={false}
    >
      <Title variant="h4">
        <Trans
          i18nKey="profile:wantToConfirmAction"
          components={[<InlineTypography color="error" variant="h4" />]}
          values={{
            action: t(actionI18NKey),
          }}
        />
      </Title>
      <ButtonContainer>
        <Button type="button" variant="decline" onClick={onDecline}>
          {t(declineButtonI18NKey)}
        </Button>
        <Button type="button" variant="primary" onClick={onAccept}>
          {t(acceptButtonI18NKey)}
        </Button>
      </ButtonContainer>
    </Modal>
  )
}

export default ConfirmationModal
