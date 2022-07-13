import { IFormSchema } from 'common/types/form'
import { ControllerRenderProps } from 'react-hook-form'

export interface IUploadFieldProps
  extends ControllerRenderProps<IFormSchema, keyof IFormSchema> {
  title: string
  error: boolean
  errorMessage: string
  required?: boolean
  url?: string
}
