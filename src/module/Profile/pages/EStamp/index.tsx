import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import WithUserProfile from 'module/Profile/components/WithUserProfile'

import Link from './components/Link'
import { useCheckInData } from './hooks/useCheckInData'
import {
  ActionContainer,
  HeaderContainer,
  RedeemTicketContainer,
  TicketStatusContainer,
} from './styled'

const EStampProfile = () => {
  const { user } = useAuth()
  // const { baan, isLoading: isBaanLoading } = useBaanData(user?.baanId)
  const { t } = useSSRTranslation('profile')

  const { isLoading: isCheckInLoading } = useCheckInData()

  if (isCheckInLoading) return <Loading />
  return (
    <WithUserProfile>
      <ActionContainer>
        {/* <HeaderContainer>
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
          </HeaderContainer> */}

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
    </WithUserProfile>
  )
}

export default EStampProfile
