import Button from 'common/components/Button'
import { useSwitch } from 'common/hooks/useSwitch'
import ChangeGroupModal from 'module/Profile/components/ChangeGroupModal'
import ConfirmationModal from 'module/Profile/components/ConfirmationModal'
import InfoModal from 'module/Profile/components/InfoModal'
import JoinGroupModal from 'module/Profile/components/JoinGroupModal'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const mockMember1 = {
  title: 'นาย',
  firstname: 'เพ็ชรทาย',
  lastname: 'วงษ์คำเหลา',
  nickname: 'หม่ำ',
  image_url: '/tmp.json',
}

const mockMember2 = {
  title: 'นาย',
  firstname: 'เท่ง',
  lastname: 'เถิดเทิง',
  nickname: 'ตู้',
  image_url: '/tmp.json',
}

const TempPage = () => {
  const {
    state: infoModalState,
    handleClose: handleInfoModalClose,
    handleOpen: handleInfoModalOpen,
  } = useSwitch(false)
  const {
    state: joinGroupModalState,
    handleClose: handleJoinGroupModalClose,
    handleOpen: handleJoinGroupModallOpen,
  } = useSwitch(false)
  const {
    state: changeGroupModalState,
    handleClose: handleChangeGroupModalClose,
    handleOpen: handleChangeGroupModalOpen,
  } = useSwitch(false)
  const {
    state: confirmationModalState,
    handleClose: handleConfirmationModalClose,
    handleOpen: handleConfirmationModalOpen,
  } = useSwitch(false)

  return (
    <div>
      <Button onClick={handleInfoModalOpen}>InfoModal</Button>
      <Button onClick={handleJoinGroupModallOpen}>JoinGroupModal</Button>
      <Button onClick={handleChangeGroupModalOpen}>ChangeGroupModal</Button>
      <Button onClick={handleConfirmationModalOpen}>ConfirmationModal</Button>
      <InfoModal
        open={infoModalState}
        onClose={handleInfoModalClose}
        titleI18NKey="profile:cannotChangeGroup"
        messageI18NKey="profile:becauseYouAreKing"
      />
      <JoinGroupModal
        open={joinGroupModalState}
        onAccept={handleJoinGroupModalClose}
        onDecline={handleJoinGroupModalClose}
        king={mockMember1}
        members={[mockMember2]}
      />
      <ChangeGroupModal
        open={changeGroupModalState}
        onAccept={handleChangeGroupModalClose}
        onDecline={handleChangeGroupModalClose}
        king={mockMember1}
        members={[mockMember2]}
      />
      <ConfirmationModal
        open={confirmationModalState}
        actionI18NKey="profile:leaveGroup"
        acceptButtonI18NKey="profile:leave"
        declineButtonI18NKey="profile:notLeave"
        onAccept={handleConfirmationModalClose}
        onDecline={handleConfirmationModalClose}
      />
    </div>
  )
}

export default TempPage

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'profile'])),
      // Will be passed to the page component as props
    },
  }
}
