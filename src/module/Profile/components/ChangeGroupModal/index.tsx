import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import { Trans, useTranslation } from 'next-i18next'

import { ButtonContainer, InlineTypography, modalStyle, Title } from './styled'
import { ChangeGroupModalProps } from './types'

const ChangeGroupModal = (props: ChangeGroupModalProps) => {
  const { open, onAccept, onDecline, leader } = props
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
          i18nKey="profile:wantToChangeGroupOrNot"
          components={[
            <InlineTypography color="pink" variant="h4" />,
            <InlineTypography color="pink" variant="h4" />,
          ]}
          values={{
            leader: `<br />${leader.firstname} ${leader.lastname}`,
          }}
        />
      </Title>
      <ButtonContainer>
        <Button type="button" variant="secondary" onClick={onDecline}>
          {t('notWant')}
        </Button>
        <Button type="button" variant="primary" onClick={onAccept}>
          {t('want')}
        </Button>
      </ButtonContainer>
    </Modal>
  )
}

export default ChangeGroupModal
