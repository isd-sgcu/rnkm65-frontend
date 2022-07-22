import Hidden from 'common/components/Hidden'
import { Phase } from 'common/constants/phase'
import { usePhase } from 'common/contexts/PhaseContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import LogoutButton from './components/LogoutButton'
import LogoutIcon from './components/LogoutIcon'
import MobileIcon from './components/MobileIcon'
import TextButton from './components/TextButton'
import ToggleLanguageButton from './components/ToggleLanguageButton'
import { HeaderContainer, IconContainer, Logo, LogoContainer } from './styled'

const Header = () => {
  const { t } = useSSRTranslation()
  const router = useRouter()
  const { phase } = usePhase()
  const showHowTo = phase === Phase.BAAN_SELECTION

  const handleReportIssue = useCallback(() => {
    // TODO change url
    window.location.href =
      'https://airtable.com/shrWFil4igZa2UZoV?hide_errorMessage=true'
  }, [])

  const handleLogoClick = useCallback(() => {
    router.push('/')
  }, [router])

  const handleHowToSelectBaan = useCallback(() => {
    window.open('https://www.instagram.com/p/CgT2KRSpVsG', '_blank')
  }, [])

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo onClick={handleLogoClick}>
          <Image src="/logo.png" layout="fill" />
        </Logo>
      </LogoContainer>

      {showHowTo && (
        <Hidden variant="lgdown">
          <TextButton onClick={handleHowToSelectBaan}>
            {t('howToSelectBaan')}
          </TextButton>
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
      <Hidden variant="xlup">
        <IconContainer>
          {showHowTo && (
            <MobileIcon
              src="/how-to-register.svg"
              onClick={handleHowToSelectBaan}
            />
          )}
          <MobileIcon src="/report-issue.svg" onClick={handleReportIssue} />
          <LogoutIcon />
        </IconContainer>
      </Hidden>
    </HeaderContainer>
  )
}

export default Header
