import Image from 'next/image'
import React from 'react'

import LogoutButton from './components/LogoutButton'
import ReportIssueButton from './components/ReportIssueButton'
import ToggleLanguageButton from './components/ToggleLanguageButton'
import { HeaderContainer, Logo, LogoContainer } from './styled'

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo>
        <Image src="/logo.svg" layout="fill" />
      </Logo>
    </LogoContainer>
    <ReportIssueButton />
    <ToggleLanguageButton />
    <LogoutButton />
  </HeaderContainer>
)

export default Header
