import { PropsWithChildren, SelectHTMLAttributes } from 'react'

interface IOptions {
  text: string
  value: string
}

export interface IRadioFieldProps
  extends PropsWithChildren<SelectHTMLAttributes<{}>> {
  error?: boolean
  errorMessage?: string
  title?: string
  orientation?: 'horizontal' | 'vertical'
  option: IOptions[]
}
