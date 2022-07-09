import Typography from 'common/components/Typography'
import React from 'react'

import { TextButtonProps } from './props'
import { StyledButton } from './styled'

const TextButton = ({ children, onClick }: TextButtonProps) => (
  <StyledButton onClick={onClick}>
    <Typography variant="subhead3">{children}</Typography>
  </StyledButton>
)

export default TextButton
