import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

import Typography from '../Typography'
import {
  OptionElement,
  RequiredSymbol,
  SelectContainer,
  SelectElement,
} from './styled'
import { ISelectFieldProps } from './types'

export const SelectField = React.memo(
  React.forwardRef<HTMLSelectElement, ISelectFieldProps>((props, ref) => {
    const { error, option, title, required, ...remain } = props
    return (
      <SelectContainer>
        <Typography css={{ marginBottom: '0.5rem' }}>
          {title || ''}
          {required && <RequiredSymbol>*</RequiredSymbol>}
        </Typography>
        <div style={{ position: 'relative' }}>
          <SelectElement error={error} {...remain} ref={ref}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <option hidden value="" />
            {option.map((val) => (
              <OptionElement key={val.i18nKey} value={val.value}>
                {val.i18nKey}
              </OptionElement>
            ))}
          </SelectElement>
          <BsChevronDown
            style={{
              position: 'absolute',
              transform: 'translateY(-50%)',
              right: 7,
              padding: '0px 0px',
              top: '50%',
            }}
          />
        </div>
      </SelectContainer>
    )
  })
)
