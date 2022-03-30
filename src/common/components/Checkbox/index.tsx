import { forwardRef, memo } from 'react'

import { Checkmark, InputBox, InputLabel, RootCheckbox } from './styled'
import { ICheckboxProps } from './types'

const Checkbox = memo(
  forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => {
    const { label, ...remain } = props
    return (
      <RootCheckbox>
        <InputLabel>
          {label}
          <InputBox type="checkbox" {...remain} ref={ref} />
          <Checkmark />
        </InputLabel>
      </RootCheckbox>
    )
  })
)

export default Checkbox
