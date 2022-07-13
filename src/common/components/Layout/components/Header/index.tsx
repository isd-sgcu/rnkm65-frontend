import Hidden from 'common/components/Hidden'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React, { useCallback } from 'react'

import LogoutButton from './components/LogoutButton'
import LogoutIcon from './components/LogoutIcon'
import MobileIcon from './components/MobileIcon'
import TextButton from './components/TextButton'
import ToggleLanguageButton from './components/ToggleLanguageButton'
import { HeaderContainer, IconContainer, Logo, LogoContainer } from './styled'

const Header = () => {
  const { t } = useSSRTranslation()

  const handleReportIssue = useCallback(() => {
    // TODO change url
    window.location.href = 'https://airtable.com/shrWFil4igZa2UZoV'
  }, [])

  // We don't have time to do this
  // const handleHowToRegister = useCallback(() => {
  //   // TODO change url
  //   window.location.href = 'https://www.google.com/'
  // }, [])

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>{/* <Image src="/logo.svg" layout="fill" /> */}</Logo>
      </LogoContainer>

      {/* <Hidden variant="lgdown">
        <TextButton onClick={handleHowToRegister}>
          {t('howToRegister')}
        </TextButton>
      </Hidden> */}
      <Hidden variant="lgdown">
        <TextButton onClick={handleReportIssue}>{t('reportIssue')}</TextButton>
      </Hidden>

      <ToggleLanguageButton />

      <Hidden variant="lgdown">
        <LogoutButton />
      </Hidden>

      {/* Mobile */}
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
