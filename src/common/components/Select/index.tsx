import React from 'react'

import Typography from '../Typography'
import {
  DropdownIcon,
  OptionElement,
  RequiredSymbol,
  SelectContainer,
  SelectElement,
} from './styled'
import { ISelectFieldProps } from './types'

const SelectField = React.memo(
  React.forwardRef<HTMLSelectElement, ISelectFieldProps>((props, ref) => {
    const { error, errorMessage, option, title, required, ...remain } = props
    return (
      <SelectContainer>
        <Typography css={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          {title || ''}
          {required && <RequiredSymbol>*</RequiredSymbol>}
        </Typography>
        <div style={{ position: 'relative' }}>
          <SelectElement error={error} {...remain} ref={ref}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <option hidden value="" />
            {option.map((val) => (
              <OptionElement key={val.text} value={val.value}>
                {val.text}
              </OptionElement>
            ))}
          </SelectElement>
          <DropdownIcon css={{ pointerEvents: 'none' }} />
        </div>
        <Typography color="error">{errorMessage}</Typography>
      </SelectContainer>
    )
  })
)

export default SelectField
