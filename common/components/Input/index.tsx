import React from 'react'

import Typography from '../Typography'
import { InputBase, InputFieldContainer, RequiredSymbol } from './styled'
import { IInputFieldProps } from './types'

const InputField = React.memo(
  React.forwardRef<HTMLInputElement, IInputFieldProps>((props, ref) => {
    const { title, children, error, outerClassName, required, ...remain } =
      props

    return (
      <InputFieldContainer>
        <Typography variant="body" css={{ marginBottom: '0.5rem' }}>
          {title || ''}
          {required && <RequiredSymbol>*</RequiredSymbol>}
        </Typography>
        <InputBase error={!!error} {...remain} ref={ref} />
        {children}
      </InputFieldContainer>
    )
  })
)

export { InputBase, InputField }
