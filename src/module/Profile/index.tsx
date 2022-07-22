import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import { CAN_ACCESS_PROFILE, CAN_REGISTER } from 'common/constants/phase'
import { useAuth } from 'common/contexts/AuthContext'
import { usePhase } from 'common/contexts/PhaseContext'
import { APP_BASE_URL } from 'config/env'
import { useTranslation } from 'next-i18next'
import React from 'react'

import ChoosedBaan from './components/ChoosedBaan'
import GroupMember from './components/GroupMember'
import InviteLink from './components/InviteLink'
import UserProfile from './components/UserProfile'
import Waiting from './components/Waiting'
import InvitationProvider from './providers/InvitationProvider'
import { Box, Container, GroupContainer, MessageContainer } from './styled'

const Profile = () => {
  const { checkPhase } = usePhase()
  const canAccessProfile = checkPhase(CAN_ACCESS_PROFILE)
  const canRegister = checkPhase(CAN_REGISTER)

  const { t } = useTranslation()
  const { user, group } = useAuth()

  if (!user) return <Loading />

  if (!canAccessProfile) return <Waiting />

  return (
    <InvitationProvider>
      {(canSelectBaan) => (
        <Container>
          <UserProfile {...user} withoutEditButton={!canRegister} />
          <div
            style={{
              flexGrow: 1,
              width: '100%',
            }}
          >
            {canSelectBaan ? (
              <>
                <InviteLink
                  inviteLink={`${APP_BASE_URL}/?join=${encodeURIComponent(
                    group ? group.token : 'GROUP_TOKEN_NOT_FOUND'
                  )}`}
                />
                <GroupContainer>
                  <GroupMember />
                  <ChoosedBaan baans={group?.baans ?? []} />
                </GroupContainer>
              </>
            ) : (
              <MessageContainer>
                <Box>
                  <Typography variant="h2" color="new-secondary">
                    {t('profile:registrationComplete')}
                  </Typography>
                  <Typography variant="subhead2" color="blue">
                    {t('profile:followMoreActivity')}
                  </Typography>
                </Box>
                <Typography variant="body" color="blue">
                  {t('profile:askForMoreInfoAt')}
                </Typography>
              </MessageContainer>
            )}
          </div>
        </Container>
      )}
    </InvitationProvider>
  )
}

export default Profile
