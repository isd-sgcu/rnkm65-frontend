import Button from 'common/components/Button'
import Checkbox from 'common/components/Checkbox'
import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { ContentContainer, RootContainer } from './styled'

const LoginPage = () => {
  const router = useRouter()
  const [isConfirm, setConfirm] = useState(false)
  const { t } = useSSRTranslation('login')
  const { login } = useAuth()

  const handleToggle = () => {
    setConfirm(!isConfirm)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      router.replace('/')
    }
  }, [router])

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
        <Button disabled={!isConfirm} onClick={login}>
          {t('loginBtn')}
        </Button>
      </ContentContainer>
    </RootContainer>
  )
}

export default LoginPage
