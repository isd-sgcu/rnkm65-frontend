import React from 'react'

import LogoutButton from './components/LogoutButton'
import ToggleLanguageButton from './components/ToggleLanguageButton'

const Header = () => (
  <div>
    <ToggleLanguageButton />
    <LogoutButton />
  </div>
)

export default Header
