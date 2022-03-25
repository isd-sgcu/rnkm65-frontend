import Typography from '../Typography'
import { InputBase } from './styled'
import { IInputFieldProps } from './types'

function InputField(props: IInputFieldProps) {
  const { title, children, error, ...remain } = props
  return (
    <div>
      <Typography>{title || ''}</Typography>
      <InputBase error={!!error} {...remain} />
      {children}
    </div>
  )
}

export { InputBase, InputField }
