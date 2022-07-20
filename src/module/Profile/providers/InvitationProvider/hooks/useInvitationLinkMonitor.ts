import { useAuth } from 'common/contexts/AuthContext'
import { IGroupPublic } from 'common/types/group'
import { getGroupPublicProfile, postJoinGroup } from 'common/utils/group'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef } from 'react'

import { IDialogState } from '../types'

export interface IInvitationLinkMonitor {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setDialog: React.Dispatch<React.SetStateAction<IDialogState | null>>
}

const useInvitationLinkMonitor = ({
  setLoading,
  setDialog,
}: IInvitationLinkMonitor) => {
  const router = useRouter()
  const { user, group, refreshContext } = useAuth()
  const isAttempted = useRef(false)

  const joinGroup = useCallback(
    async (invitedGroup: IGroupPublic) => {
      setLoading(true)
      try {
        await postJoinGroup(invitedGroup.token)
      } catch (err) {
        const { message } = err as Error
        if (message === 'group full') {
          setDialog({
            type: 'info',
            props: {
              open: true,
              onClose: () => {
                setDialog(null)
                setLoading(false)
                router.replace('/')
              },
              titleI18NKey: 'profile:cannotJoinGroup',
              messageI18NKey: 'profile:becauseGroupFull',
            },
          })
          return
        }

        // Unknown error
        setDialog({
          type: 'info',
          props: {
            open: true,
            onClose: () => {
              setDialog(null)
              setLoading(false)
              router.replace('/')
            },
            titleI18NKey: 'profile:invitation.unknownError',
            messageI18NKey: '',
            overridedI18NMessage: message,
          },
        })
        return
      }

      await refreshContext()
      setLoading(false)
      setDialog(null)
      router.replace('/')
    },
    [router, setLoading, setDialog, refreshContext]
  )

  const askToJoinGroup = useCallback(
    (type: 'join' | 'change', invitedGroup: IGroupPublic) => {
      if (type === 'change') {
        setDialog({
          type: 'change',
          props: {
            open: true,
            leader: invitedGroup.leader,
            onAccept: () => {
              joinGroup(invitedGroup)
            },
            onDecline: () => {
              setDialog(null)
              router.replace('/')
            },
          },
        })
        setLoading(false)
      } else {
        setDialog({
          type: 'join',
          props: {
            open: true,
            leader: invitedGroup.leader,
            onAccept: () => {
              joinGroup(invitedGroup)
            },
            onDecline: () => {
              setDialog(null)
              router.replace('/')
            },
          },
        })
        setLoading(false)
      }
    },
    [router, joinGroup, setDialog, setLoading]
  )

  useEffect(() => {
    const attemptJoinInvite = async () => {
      if (!router.isReady) {
        return
      }

      if (isAttempted.current) {
        return
      }
      isAttempted.current = true

      const token = router.query.join
      if (!token) {
        setLoading(false)
        return
      }

      if (!user || !group) {
        setDialog({
          type: 'info',
          props: {
            open: true,
            onClose: () => {
              window.location.href = `https://airtable.com/shrWFil4igZa2UZoV?prefill_errorMessage=${JSON.stringify(
                { error: 'groupProfileNotFound', userId: user?.id }
              )}&hide_errorMessage=true`
            },
            titleI18NKey: 'profile:invitation.groupProfileNotFound',
            messageI18NKey: 'profile:invitation.groupProfileNotFoundMessage',
            buttonI18NKey: 'reportIssue',
          },
        })
        setLoading(false)
        return
      }

      // Join own group
      if (token === group.token) {
        setDialog({
          type: 'info',
          props: {
            open: true,
            onClose: () => {
              setDialog(null)
              router.replace('/')
            },
            titleI18NKey: 'profile:invitation.joinOwnGroup',
            messageI18NKey: 'profile:invitation.joinOwnGroupMessage',
          },
        })
        setLoading(false)
        return
      }

      const invitedGroup = await getGroupPublicProfile(token as string)
      if (!invitedGroup) {
        // Invalid invite link
        setDialog({
          type: 'info',
          props: {
            open: true,
            onClose: () => {
              setDialog(null)
              router.replace('/')
            },
            titleI18NKey: 'profile:invitation.invalidInviteLink',
            messageI18NKey: 'profile:invitation.invalidInviteLinkMessage',
          },
        })
        setLoading(false)
        return
      }

      // Join other group when is alone in current group
      if (group.members.length === 1) {
        askToJoinGroup('join', invitedGroup)
        return
      }

      // Join other group when current group already has member
      // if leader of current group
      if (user.id === group.leaderID) {
        setDialog({
          type: 'info',
          props: {
            open: true,
            onClose: () => {
              setDialog(null)
              router.replace('/')
            },
            titleI18NKey: 'profile:cannotChangeGroup',
            messageI18NKey: 'profile:becauseYouAreKing',
          },
        })
        setLoading(false)
        return
      }

      askToJoinGroup('change', invitedGroup)
    }
    attemptJoinInvite()
  }, [askToJoinGroup, group, router, setDialog, setLoading, user])
}

export default useInvitationLinkMonitor
