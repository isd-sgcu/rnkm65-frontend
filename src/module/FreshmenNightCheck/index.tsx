import Button from 'common/components/Button'
import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import { useLayout } from 'common/contexts/LayoutContext'
import React from 'react'

import { useCheckinHooks } from './hooks/useCheckinHooks'
import { CheckinContainer } from './styled'
import { IFreshmenNightCheck } from './types'

const FreshmenNightCheck = (props: IFreshmenNightCheck) => {
  const { mode } = props

  const { handleSubmit, isLoading } = useCheckinHooks(mode)
  const { setHideFooter } = useLayout()
  setHideFooter(true)

  return (
    <div style={{ margin: 'auto' }}>
      {isLoading && <Loading />}
      <CheckinContainer>
        <Typography variant="h3">ต้องการเช็คเอ้าท์หรือไม่</Typography>
        <Typography variant="subhead3">
          คุณกำลังจะเช็กอินเข้างาน Freshmen’s Night
        </Typography>
        <Button
          onClick={handleSubmit}
          css={{ width: '100%', marginTop: '1.5rem' }}
        >
          กลับ
        </Button>
      </CheckinContainer>
    </div>
  )
}

export default FreshmenNightCheck
