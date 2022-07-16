import React, { InputHTMLAttributes } from 'react'

export interface IInputFieldProps
  extends React.PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  title?: string
  error?: boolean
  errorMessage?: string
  outerClassName?: string
}
