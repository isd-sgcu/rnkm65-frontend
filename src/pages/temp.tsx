import Button from 'common/components/Button'
import { useSwitch } from 'common/hooks/useSwitch'
import ConfirmationModal from 'module/Profile/components/ConfirmationModal'
import KickMemberModal from 'module/Profile/components/KickMemberModal'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const mockMember = {
  title: 'นาย',
  firstname: 'เพ็ชรทาย',
  lastname: 'วงษ์คำเหลา',
  nickname: 'หม่ำ',
  image_url: '/tmp.jpg',
}

const TempPage = () => {
  const {
    state: removeMemberModalState,
    handleClose: handleRemoveMemberModalClose,
    handleOpen: handleRemoveMemberModalOpen,
  } = useSwitch(false)
  const {
    state: confirmationModalState,
    handleClose: handleConfirmationModalClose,
    handleOpen: handleConfirmationModalOpen,
  } = useSwitch(false)

  return (
    <div>
      <Button onClick={handleRemoveMemberModalOpen}>RemoveMemberModal</Button>
      <Button onClick={handleConfirmationModalOpen}>ConfirmationModal</Button>
      <KickMemberModal
        open={removeMemberModalState}
        onAccept={handleRemoveMemberModalClose}
        onDecline={handleRemoveMemberModalClose}
        member={mockMember}
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
