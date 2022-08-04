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
                Check In / Check Out
              </Typography>

              {
                // TODO : get check in / check out status
              }
              <Link href="/">Check In</Link>
            </HeaderContainer>

            <RedeemTicketContainer>
              <HeaderContainer>
                <Typography variant="h4" color="white">
                  Redeem Ticket
                </Typography>

                <Button type="button" variant="eStampProfile">
                  Redeem
                </Button>
              </HeaderContainer>

              <TicketStatusContainer>
                <Typography variant="h4" color="new-secondary">
                  TICKET STATUS:
                </Typography>
                <Typography variant="subhead3" color="new-primary">
                  {
                    // TODO : get ticket status from backend
                  }
                  ยังไม่ได้รับบัตร
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
