import Typography from 'common/components/Typography'
import Loading from 'common/components/Loading'
import { useAuth } from 'common/contexts/AuthContext'
import { IBaan } from 'common/types/baan'
import { useBaanData } from './hooks/useBaanData'

import {
  ActionContainer,
  HeaderContainer,
  EStampProfileContainer,
  JoinBaanContainer,
  RedeemTicketContainer,
  TicketStatusContainer,
} from './styled'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { Trans } from 'next-i18next'
import UserProfile from 'module/Profile/components/UserProfile'
import Button from 'common/components/Button'
import Link from './components/Link'

const EStampProfile = () => {
  const { user } = useAuth()
  const { baan, isLoading } = useBaanData(user?.baanId)
  const { t } = useSSRTranslation('profile')

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <EStampProfileContainer>
          <Typography
            color="new-primary"
            css={{ textAlign: 'center' }}
            variant="h3"
          >
            {t('profile')}
          </Typography>
          <UserProfile />
          <ActionContainer>
            <HeaderContainer>
              <Typography variant="h4" color="white">
                {t('checkInCheckOut')}
              </Typography>

              {
                // TODO : get check in / check out status
              }
              <Link href="/">{t('checkInButton')}</Link>
            </HeaderContainer>

            <RedeemTicketContainer>
              <HeaderContainer>
                <Typography variant="h4" color="white">
                  {t('redeemTicket')}
                </Typography>

                <Button type="button" variant="eStampProfile">
                  {t('redeemTicketButton')}
                </Button>
              </HeaderContainer>

              <TicketStatusContainer>
                <Typography variant="h4" color="new-secondary">
                  {t('ticketStatus')}
                </Typography>
                <Typography variant="subhead3" color="new-primary">
                  {
                    // TODO : get ticket status from backend
                  }
                  {t('unRedeemed')}
                </Typography>
              </TicketStatusContainer>
            </RedeemTicketContainer>
          </ActionContainer>
        </EStampProfileContainer>
      )}
    </>
  )
}

export default EStampProfile
