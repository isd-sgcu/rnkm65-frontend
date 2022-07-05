import Hidden from 'common/components/Hidden'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import Image from 'next/image'
import React, { useCallback } from 'react'

import LogoutButton from './components/LogoutButton'
import LogoutIcon from './components/LogoutIcon'
import TextButton from './components/TextButton'
import ToggleLanguageButton from './components/ToggleLanguageButton'
import { HeaderContainer, IconContainer, Logo, LogoContainer } from './styled'

const Header = () => {
  const { t } = useSSRTranslation()

  const handleReportIssue = useCallback(() => {
    // TODO change url
    window.location.href = 'https://www.google.com/'
  }, [])

  const handleHowToRegister = useCallback(() => {
    // TODO change url
    window.location.href = 'https://www.google.com/'
  }, [])

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>{/* <Image src="/logo.svg" layout="fill" /> */}</Logo>
      </LogoContainer>

      <Hidden variant="lgdown">
        <TextButton onClick={handleHowToRegister}>
          {t('howToRegister')}
        </TextButton>
      </Hidden>
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
          <Image
            src="/how-to-register.svg"
            height={24}
            width={24}
            onClick={handleHowToRegister}
          />
          <Image
            src="/report-issue.svg"
            height={24}
            width={24}
            onClick={handleReportIssue}
          />
          <LogoutIcon />
        </IconContainer>
      </Hidden>
    </HeaderContainer>
  )
}

export default Header
