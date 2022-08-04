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
import { useCheckInData } from './hooks/useCheckInData'

const EStampProfile = () => {
  const { user } = useAuth()
  // const { baan, isLoading: isBaanLoading } = useBaanData(user?.baanId)
  const { t } = useSSRTranslation('profile')

  const {
    isLoading: isCheckInLoading,
    mainEvent_i18nKey,
    freshmenNight_i18nKey,
  } = useCheckInData()

  if (isCheckInLoading) return <Loading />
  else
    return (
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
            <div>
              <Typography variant="subhead3" color="white">
                {t(`checkInCheckOut`)}
              </Typography>

              <Typography variant="body" color="white">
                Main Event : {t(`${mainEvent_i18nKey}Button`)}
              </Typography>

              <Typography variant="body" color="white">
                Freshmen Night : {t(`${freshmenNight_i18nKey}Button`)}
              </Typography>
            </div>
          </HeaderContainer>

          <HeaderContainer>
            <Typography variant="subhead3" color="white">
              {t('scanQR')}
            </Typography>

            <Link href="/eStamp?eventId=CAMERA">{t('scanQRButton')}</Link>
          </HeaderContainer>

          <HeaderContainer>
            <Typography variant="h4" color="white">
              {t('eStampPage')}
            </Typography>

            <Link href="/eStamp">{t('eStampButton')}</Link>
          </HeaderContainer>

          <RedeemTicketContainer>
            <HeaderContainer>
              <div>
                <Typography variant="h4" color="white">
                  {t('redeemTicket')}
                </Typography>

                <Typography variant="body" color="white">
                  {user?.year === '1' ? t('redeemTicketInfo') : t('onlyCU106')}
                </Typography>
              </div>

              {/* <Button type="button" variant="eStampProfile">
                {t('redeemTicketButton')}
              </Button> */}
            </HeaderContainer>

            {user?.year === '1' && (
              <TicketStatusContainer>
                <Typography variant="h4" color="new-secondary">
                  {t('ticketStatus')}
                </Typography>
                <Typography variant="subhead3" color="new-primary">
                  {user?.isGotTicket ? t('redeemed') : t('unRedeemed')}
                </Typography>
              </TicketStatusContainer>
            )}
          </RedeemTicketContainer>
        </ActionContainer>
      </EStampProfileContainer>
    )
}

export default EStampProfile
