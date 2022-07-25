import Hidden from 'common/components/Hidden'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import LogoutButton from './components/LogoutButton'
import LogoutIcon from './components/LogoutIcon'
import MobileIcon from './components/MobileIcon'
import TextButton from './components/TextButton'
import { StyledLink } from './components/TextButton/styled'
import ToggleLanguageButton from './components/ToggleLanguageButton'
import {
  HeaderContainer,
  IconContainer,
  LeftSideContainer,
  Logo,
  LogoContainer,
} from './styled'

const Header = () => {
  const { t } = useSSRTranslation()
  const router = useRouter()

  const handleReportIssue = useCallback(() => {
    // TODO change url
    window.location.href =
      'https://airtable.com/shrWFil4igZa2UZoV?hide_errorMessage=true'
  }, [])

  const handleLogoClick = useCallback(() => {
    router.push('/')
  }, [router])

  // We don't have time to do this
  // const handleHowToRegister = useCallback(() => {
  //   // TODO change url
  //   window.location.href = 'https://www.google.com/'
  // }, [])

  return (
    <HeaderContainer>
      <LeftSideContainer>
        <LogoContainer>
          <Logo onClick={handleLogoClick}>
            <Image src="/logo.png" layout="fill" />
          </Logo>
        </LogoContainer>

        <Link passHref href="/eStamp">
          <a>
            <IconContainer>
              <MobileIcon src="/estamp-icon.svg" onClick={() => {}} />
            </IconContainer>
          </a>
        </Link>
      </LeftSideContainer>

      {/* <Hidden variant="lgdown">
        <TextButton onClick={handleHowToRegister}>
          {t('howToRegister')}
        </TextButton>
      </Hidden> */}

      {router.pathname !== '/' && router.pathname !== '/login' && (
        <Hidden variant="lgdown">
          <Link href="/back" passHref>
            <StyledLink>
              <Typography variant="subhead3">{t('goBack')}</Typography>
            </StyledLink>
          </Link>
        </Hidden>
      )}

      <Hidden variant="lgdown">
        <TextButton onClick={handleReportIssue}>{t('reportIssue')}</TextButton>
      </Hidden>

      <ToggleLanguageButton />

      <Hidden variant="lgdown">
        <LogoutButton />
      </Hidden>

      {/* Mobile */}
      {router.pathname !== '/' && router.pathname !== '/login' && (
        <Hidden variant="xlup">
          <Link passHref href="/">
            <a>
              <IconContainer>
                {/* <MobileIcon
            src="/how-to-register.svg"
            onClick={handleHowToRegister}
          /> */}
                <MobileIcon src="/home-icon.svg" onClick={() => {}} />
              </IconContainer>
            </a>
          </Link>
        </Hidden>
      )}

      <Hidden variant="xlup">
        <IconContainer>
          {/* <MobileIcon
            src="/how-to-register.svg"
            onClick={handleHowToRegister}
          /> */}
          <MobileIcon src="/report-issue.svg" onClick={handleReportIssue} />
          <LogoutIcon />
        </IconContainer>
      </Hidden>
    </HeaderContainer>
  )
}

export default Header
