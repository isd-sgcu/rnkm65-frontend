import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import { Trans, useTranslation } from 'next-i18next'

import {
  ButtonContainer,
  InlineTypography,
  Message,
  modalStyle,
  Title,
} from './styled'
import { JoinGroupModalProps } from './types'

const JoinGroupModal = (props: JoinGroupModalProps) => {
  const { open, onAccept, onDecline, king, members } = props
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
          i18nKey="profile:wantToJoinGroupOrNot"
          components={[<InlineTypography color="new-primary" variant="h4" />]}
          values={{
            king: `<br />${king.firstname} ${king.lastname}`,
          }}
        />
      </Title>
      {members.length > 0 && (
        <Message variant="body">
          <Trans
            i18nKey="profile:areAlsoGroupMember"
            components={[
              <InlineTypography color="new-primary" variant="body" />,
            ]}
            values={{
              members: members
                .map((member) => `${member.firstname} ${member.lastname}`)
                .join(', '),
            }}
          />
        </Message>
      )}
      <ButtonContainer>
        <Button type="button" variant="primary" onClick={onAccept}>
          {t('want')}
        </Button>
        <Button type="button" variant="secondary" onClick={onDecline}>
          {t('notWant')}
        </Button>
      </ButtonContainer>
    </Modal>
  )
}

export default JoinGroupModal
