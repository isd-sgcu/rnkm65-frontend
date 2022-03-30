import { Checkmark, InputBox, InputLabel, RootCheckbox } from './styled'
import { ICheckboxProps } from './types'

const Checkbox = (props: ICheckboxProps) => {
  const { label, ...remain } = props
  return (
    <RootCheckbox>
      <InputLabel>
        {label}
        <InputBox type="checkbox" {...remain} />
        <Checkmark />
      </InputLabel>
    </RootCheckbox>
  )
}

export default Checkbox
