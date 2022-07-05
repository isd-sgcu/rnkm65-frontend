import React from 'react'
import {} from 'react-hook-form'

import Typography from '../Typography'
import { Checkmark, RadioInput, RadioLabel, RadioRootContainer } from './styled'
import { IRadioFieldProps } from './types'

export const RadioField = React.forwardRef<HTMLInputElement, IRadioFieldProps>(
  (props, ref) => {
    const { title, error, errorMessage, option, orientation, ...remain } = props

    return (
      <div>
        <Typography css={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <RadioRootContainer orientation={orientation}>
          {option.map((val) => (
            <RadioLabel key={`${title}-radio-choice-${val.text}`}>
              {val.text}
              <RadioInput
                {...remain}
                type="radio"
                ref={ref}
                value={val.value}
              />
              <Checkmark />
            </RadioLabel>
          ))}
        </RadioRootContainer>
      </div>
    )
  }
)
