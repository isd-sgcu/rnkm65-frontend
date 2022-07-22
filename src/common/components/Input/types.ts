import React from 'react'

import { InputBase } from './styled'

export interface IInputFieldProps
  extends React.ComponentProps<typeof InputBase> {
  title?: string
  error?: boolean
  errorMessage?: string
  outerClassName?: string
}
