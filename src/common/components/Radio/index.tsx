import React from 'react'
import {} from 'react-hook-form'

import Typography from '../Typography'
import { RadioOption, RadioRootContainer } from './styled'
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
            <RadioOption key={`${title}-radio-choice-${val.text}`}>
              <input {...remain} type="radio" ref={ref} value={val.value} />
              <Typography>{val.text}</Typography>
            </RadioOption>
          ))}
        </RadioRootContainer>
      </div>
    )
  }
)
