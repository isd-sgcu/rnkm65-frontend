import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import { APP_BASE_URL } from 'config/env'
import { useTranslation } from 'next-i18next'

import ChoosedBaan from './components/ChoosedBaan'
import GroupMember from './components/GroupMember'
import InviteLink from './components/InviteLink'
import UserProfile from './components/UserProfile'
import Waiting from './components/Waiting'
import InvitationProvider from './providers/InvitationProvider'
import { Box, Container, GroupContainer, MessageContainer } from './styled'
import { IProfileProps } from './types'

const Profile = (props: IProfileProps) => {
  const { canAccessProfile } = props

  const { t } = useTranslation()
  const { user, group } = useAuth()
  if (!user) return <Loading />

  return canAccessProfile ? (
    <InvitationProvider>
      {(canSelectBaan) => (
        <Container>
          <UserProfile {...user} />
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
                  <GroupMember members={group?.members ?? []} />
                  <ChoosedBaan baans={group?.baans ?? []} />
                </GroupContainer>
              </>
            ) : (
              <MessageContainer>
                <Box>
                  <Typography variant="h4" color="blue">
                    {t('profile:registrationComplete')}
                  </Typography>
                  <Typography variant="body" color="blue">
                    {t('profile:followMoreActivity')}
                  </Typography>
                </Box>
              </MessageContainer>
            )}
          </div>
        </Container>
      )}
    </InvitationProvider>
  ) : (
    <Waiting />
  )
}

export default Profile
