import React, { InputHTMLAttributes } from 'react'

export interface IInputFieldProps
  extends React.PropsWithChildren<InputHTMLAttributes<{}>> {
  title?: string
  error?: boolean
  outerClassName?: string
}
