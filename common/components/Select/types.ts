import { PropsWithChildren, SelectHTMLAttributes } from 'react'

interface IOptions {
  text: string
  value: string
}

export interface ISelectFieldProps
  extends PropsWithChildren<SelectHTMLAttributes<{}>> {
  error?: boolean
  title?: string
  option: IOptions[]
}
