import Hidden from 'common/components/Hidden'
import Image from 'next/image'
import React from 'react'

import LogoutButton from './components/LogoutButton'
import ReportIssueButton from './components/ReportIssueButton'
import ToggleLanguageButton from './components/ToggleLanguageButton'
import { HeaderContainer, Logo, LogoContainer, Menu } from './styled'

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo>
        <Image src="/logo.svg" layout="fill" />
      </Logo>
    </LogoContainer>
    <Hidden variant="mddown">
      <ReportIssueButton />
    </Hidden>
    <ToggleLanguageButton />
    <Hidden variant="mddown">
      <LogoutButton />
    </Hidden>
    <Hidden variant="lgup">
      <Menu />
    </Hidden>
  </HeaderContainer>
)

export default Header
