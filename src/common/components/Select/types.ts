import { PropsWithChildren, SelectHTMLAttributes } from 'react'

interface IOptions {
  text: string
  value: string
}

export interface ISelectFieldProps
  extends PropsWithChildren<SelectHTMLAttributes<{}>> {
  error?: boolean
  errorMessage?: string
  title?: string
  option: IOptions[]
}
