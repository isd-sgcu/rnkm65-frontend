import Button from 'common/components/Button'
import Checkbox from 'common/components/Checkbox'
import useBottomBackground from 'common/components/Layout/components/Background/hooks/useBottomBackground'
import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { exchangeTicketForToken } from 'common/utils/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { ContentContainer, RootContainer, StyledLink } from './styled'

const LoginPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [isConfirm, setConfirm] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const { t } = useSSRTranslation('login')
  const { login, refreshContext, user } = useAuth()
  useBottomBackground()

  const handleToggle = () => {
    setConfirm(!isConfirm)
  }

  useEffect(() => {
    const attemptAuthentication = async () => {
      const { ticket } = router.query
      if (ticket) {
        const token = await exchangeTicketForToken(ticket.toString())
        if (!token) {
          setErrorMsg(t('unknownError'))
          router.replace('/login')
          return
        }

        if (typeof token === 'number') {
          if (token === 403) {
            setErrorMsg(t('seniorLoginError'))
          } else if (token === 429) {
            setErrorMsg(t('tooManyRequestsError'))
          } else {
            setErrorMsg(t('unknownError'))
          }

          router.replace('/login')
          return
        }

        localStorage.setItem('token', JSON.stringify(token))
        await refreshContext()
      }

      const token = localStorage.getItem('token')

      if (token) {
        if (user?.disease) {
          router.replace('/')
          return
        }

        router.replace('/register')
        return
      }

      setLoading(false)
    }
    attemptAuthentication()
  }, [router, refreshContext, user?.disease, t])

  return (
    <RootContainer>
      {loading && <Loading />}
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
          label={
            <>
              {t('checkbox')}
              <StyledLink
                href={t('privacyNoticeLink')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('privacyNotice')}
              </StyledLink>
            </>
          }
          autoComplete="off"
        />
        <Button disabled={!isConfirm} onClick={login}>
          {t('loginBtn')}
        </Button>
        {errorMsg && (
          <Typography css={{ fontWeight: '700' }} color="error">
            {errorMsg}
          </Typography>
        )}
      </ContentContainer>
    </RootContainer>
  )
}

export default LoginPage
