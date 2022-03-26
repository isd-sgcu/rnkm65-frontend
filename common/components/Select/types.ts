import { PropsWithChildren, SelectHTMLAttributes } from 'react'

interface IOptions {
  i18nKey: string
  value: string
}

export interface ISelectFieldProps
  extends PropsWithChildren<SelectHTMLAttributes<{}>> {
  error?: boolean
  title?: string
  option: IOptions[]
}
