import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import { canJoinGroup } from 'common/utils/group'
import WithUserProfile from 'module/Profile/components/WithUserProfile'
import InvitationProvider from 'module/Profile/providers/InvitationProvider'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { Box, MessageContainer } from './styled'

const NotSelectBaan = () => {
  const { t } = useTranslation()
  const { user } = useAuth()
  const canSelectBaan = canJoinGroup(user)

  return (
    <InvitationProvider>
      <WithUserProfile>
        <MessageContainer>
          <Box>
            <Typography variant="h2" color="new-secondary">
              {t('profile:registrationComplete')}
            </Typography>
            <Typography variant="subhead2" color="blue">
              {t('profile:followMoreActivity')}
            </Typography>
            <Typography variant="subhead3" color="blue">
              {canSelectBaan
                ? t('profile:notSelectBaan')
                : t('profile:baanSelectionOnlyForJunior')}
            </Typography>
          </Box>
          <Typography variant="body" color="blue">
            {t('profile:askForMoreInfoAt')}
          </Typography>
        </MessageContainer>
      </WithUserProfile>
    </InvitationProvider>
  )
}

export default NotSelectBaan
