import React from 'react'

import { InputBox } from './styled'

export interface ICheckboxProps extends React.ComponentProps<typeof InputBox> {
  label?: React.ReactNode | string
}
