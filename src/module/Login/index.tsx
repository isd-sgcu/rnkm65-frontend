import Button from 'common/components/Button'
import Checkbox from 'common/components/Checkbox'
import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { exchangeTicketForToken } from 'common/utils/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { ContentContainer, RootContainer } from './styled'

const LoginPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [isConfirm, setConfirm] = useState(false)
  const { t } = useSSRTranslation('login')
  const { login, refreshContext } = useAuth()

  const handleToggle = () => {
    setConfirm(!isConfirm)
  }

  useEffect(() => {
    const attemptAuthentication = async () => {
      const { ticket } = router.query
      if (ticket) {
        const token = await exchangeTicketForToken(ticket.toString())
        if (!token) {
          // TODO: Handle error
        }

        localStorage.setItem('token', JSON.stringify(token))
        refreshContext()
      }

      const token = localStorage.getItem('token')
      if (token) {
        router.replace('/')
        return
      }

      setLoading(false)
    }
    attemptAuthentication()
  }, [router, refreshContext])

  return (
    <RootContainer>
      <Typography color="new-primary" variant="h2">
        {t('title')}
      </Typography>
      <ContentContainer>
        <Typography color="new-primary" css={{ textAlign: 'center' }}>
          {t('desc')}
        </Typography>
        <Checkbox
          checked={isConfirm}
          onChange={handleToggle}
          label={t('checkbox')}
          autoComplete="off"
        />
        <Button disabled={!isConfirm} onClick={login}>
          {t('loginBtn')}
        </Button>
      </ContentContainer>
    </RootContainer>
  )
}

export default LoginPage
