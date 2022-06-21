import { HTMLAttributes } from 'react'

export interface IUploadFieldProps extends HTMLAttributes<HTMLInputElement> {
  title: string
  error: boolean
  errorMessage: string
  required?: boolean
  url?: string
}
