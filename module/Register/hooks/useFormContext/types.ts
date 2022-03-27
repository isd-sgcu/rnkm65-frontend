import { IFormSchemaType, ITemplateFormKey } from 'module/Register/utils/schema'
import { Control } from 'react-hook-form'

export interface IFormContext {
  uploadImg: string
  imgRequired: boolean
  control: Control<IFormSchemaType, any>
  setUploadImg: React.Dispatch<React.SetStateAction<string>>
  setImgRequired: React.Dispatch<React.SetStateAction<boolean>>
}

export type IErrorState = Partial<Record<ITemplateFormKey, boolean>>
