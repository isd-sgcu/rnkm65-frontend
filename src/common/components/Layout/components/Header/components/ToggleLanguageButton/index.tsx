import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React, { useCallback } from 'react'

import { ButtonConatiner, StyledButton } from './styled'

const ToggleLanguageButton = () => {
  const { i18n, toggleLanguage } = useSSRTranslation()
  const handleClick = useCallback(
    (language: string) => () => {
      if (language !== i18n.language) toggleLanguage()
    },
    [i18n.language, toggleLanguage]
  )

  return (
    <ButtonConatiner>
      <StyledButton
        selected={i18n.language === 'th'}
        onClick={handleClick('th')}
      >
        TH
      </StyledButton>
      <StyledButton
        selected={i18n.language === 'en'}
        onClick={handleClick('en')}
      >
        EN
      </StyledButton>
    </ButtonConatiner>
  )
}

export default ToggleLanguageButton
