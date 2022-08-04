import Button from 'common/components/Button'
import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import useHideFooter from 'common/contexts/LayoutContext/hooks/useHideFooter'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { useCheckinHooks } from './hooks/useCheckinHooks'
import { CheckinContainer } from './styled'
import { PageType } from './types'

const Checkin = () => {
  const { t } = useTranslation('checkin')
  useHideFooter()

  const { handleSubmit, isLoading, i18nKey, pageStatus, location } =
    useCheckinHooks()

  if (isLoading) {
    return <Loading />
  }
  return (
    <div style={{ margin: 'auto' }}>
      <CheckinContainer>
        <Typography variant="h3">{t(`${i18nKey}.title`)}</Typography>
        <Typography variant="subhead3">
          {t(`${i18nKey}.description`, { location: t(`location.${location}`) })}
        </Typography>
        <Button
          variant="eStamp"
          onClick={handleSubmit}
          css={{ width: '100%', marginTop: '1.5rem' }}
        >
          {t(`${i18nKey}.buttonText`)}
        </Button>
        {(pageStatus === PageType.checkin ||
          pageStatus === PageType.checkout) && (
          <Link href="/" passHref>
            <Button
              variant="eStampSecondary"
              css={{ width: '100%', marginTop: '1rem' }}
            >
              {t('common:cancel')}
            </Button>
          </Link>
        )}
      </CheckinContainer>
    </div>
  )
}

export default Checkin
