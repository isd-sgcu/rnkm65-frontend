import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import { Trans, useTranslation } from 'next-i18next'

import { ButtonContainer, InlineTypography, modalStyle, Title } from './styled'
import { KickMemberModalProps } from './types'

const KickMemberModal = (props: KickMemberModalProps) => {
  const { open, onAccept, onDecline, member } = props
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
          i18nKey="profile:wantToKickMemberOrNot"
          components={[<InlineTypography color="new-secondary" variant="h4" />]}
          values={{
            member: `${member.firstname} ${member.lastname}<br />`,
          }}
        />
      </Title>
      <ButtonContainer>
        <Button type="button" variant="decline" onClick={onDecline}>
          {t('notWant')}
        </Button>
        <Button type="button" variant="primary" onClick={onAccept}>
          {t('want')}
        </Button>
      </ButtonContainer>
    </Modal>
  )
}

export default KickMemberModal
