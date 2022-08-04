import Button from 'common/components/Button'
import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import useHideFooter from 'common/contexts/LayoutContext/hooks/useHideFooter'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { useRedeemTicket } from './hooks/useRedeemTicket'
import { RedeemContainer } from './styled'
import { PageType } from './types'

const Ticket = () => {
  const { t } = useTranslation('ticket')
  useHideFooter()

  const { handleSubmit, i18nKey, loading, pageStatus } = useRedeemTicket()

  if (loading) {
    return <Loading />
  }
  return (
    <div style={{ margin: 'auto' }}>
      <RedeemContainer>
        <Typography variant="h3">{t(`${i18nKey}.title`)}</Typography>
        <Typography variant="subhead3">
          {t(`${i18nKey}.description`)}
        </Typography>
        <Button
          variant="eStamp"
          onClick={handleSubmit}
          css={{ width: '100%', marginTop: '1.5rem' }}
        >
          {t(`${i18nKey}.buttonText`)}
        </Button>
        {pageStatus === PageType.redeem && (
          <Link href="/" passHref>
            <Button
              variant="eStampSecondary"
              css={{ width: '100%', marginTop: '1rem' }}
            >
              {t('cancel')}
            </Button>
          </Link>
        )}
      </RedeemContainer>
    </div>
  )
}

export default Ticket
