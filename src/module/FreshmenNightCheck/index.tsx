import Button from 'common/components/Button'
import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import { useLayout } from 'common/contexts/LayoutContext'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { useCheckinHooks } from './hooks/useCheckinHooks'
import { CheckinContainer } from './styled'
import { IFreshmenNightCheck, PageType } from './types'

const FreshmenNightCheck = (props: IFreshmenNightCheck) => {
  const { mode } = props
  const { t } = useTranslation('checkin')

  const { handleSubmit, isLoading, i18nKey } = useCheckinHooks(
    mode || PageType.checkin
  )
  const { setHideFooter } = useLayout()
  setHideFooter(true)

  return (
    <div style={{ margin: 'auto' }}>
      {isLoading && <Loading />}
      <CheckinContainer>
        <Typography variant="h3">{t(`${i18nKey}.title`)}</Typography>
        <Typography variant="subhead3">
          {t(`${i18nKey}.description`)}
        </Typography>
        <Button
          onClick={handleSubmit}
          css={{ width: '100%', marginTop: '1.5rem' }}
        >
          {t(`${i18nKey}.buttonText`)}
        </Button>
      </CheckinContainer>
    </div>
  )
}

export default FreshmenNightCheck
