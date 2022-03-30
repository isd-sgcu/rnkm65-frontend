import Button from 'common/components/Button'
import Checkbox from 'common/components/Checkbox'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useState } from 'react'

import { ContentContainer, RootContainer } from './styled'

const LoginPage = () => {
  const [isConfirm, setConfirm] = useState(false)
  const { t } = useSSRTranslation('login')

  const handleToggle = () => {
    setConfirm(!isConfirm)
  }

  return (
    <RootContainer>
      <Typography color="blue" variant="h2">
        {t('title')}
      </Typography>
      <ContentContainer>
        <Typography color="blue" css={{ textAlign: 'center' }}>
          {t('desc')}
        </Typography>
        <Checkbox
          checked={isConfirm}
          onChange={handleToggle}
          label={t('checkbox')}
        />
        <Button disabled={!isConfirm}>{t('loginBtn')}</Button>
      </ContentContainer>
    </RootContainer>
  )
}

export default LoginPage
