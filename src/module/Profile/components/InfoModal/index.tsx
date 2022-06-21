import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import { useTranslation } from 'next-i18next'

import { ButtonContainer, Message, modalStyle, Title } from './styled'
import { InfoModalProps } from './types'

const InfoModal = (props: InfoModalProps) => {
  const { open, onClose, titleI18NKey, messageI18NKey } = props
  const { t } = useTranslation('common')

  return (
    <Modal
      modalClassName={modalStyle()}
      open={open}
      onClose={onClose}
      showCloseIcon={false}
    >
      <Title variant="h4">{t(titleI18NKey)}</Title>
      <Message variant="body">{t(messageI18NKey)}</Message>
      <ButtonContainer>
        <Button type="button" variant="primary" onClick={onClose}>
          {t('acknowledge')}
        </Button>
      </ButtonContainer>
    </Modal>
  )
}

export default InfoModal
