import Loading from 'common/components/Loading'
import ChangeGroupModal from 'module/Profile/components/ChangeGroupModal'
import InfoModal from 'module/Profile/components/InfoModal'
import JoinGroupModal from 'module/Profile/components/JoinGroupModal'
import React, { useState } from 'react'

import useInvitationLinkMonitor from './hooks/useInvitationLinkMonitor'
import { IDialogState } from './types'

interface InvitationProviderProps {
  children: JSX.Element
}

const InvitationProvider = (props: InvitationProviderProps) => {
  const { children } = props

  const [loading, setLoading] = useState(true)
  const [dialog, setDialog] = useState<IDialogState | null>(null)
  useInvitationLinkMonitor({ setLoading, setDialog })

  if (loading) {
    return <Loading />
  }

  if (dialog?.type === 'info') {
    return <InfoModal {...dialog.props} />
  }
  if (dialog?.type === 'join') {
    return <JoinGroupModal {...dialog.props} />
  }
  if (dialog?.type === 'change') {
    return <ChangeGroupModal {...dialog.props} />
  }

  return children
}

export default InvitationProvider
