import { IFormSchema } from 'common/types/form'
import { ITemplateFormKey } from 'module/Register/utils/schema'
import { Control } from 'react-hook-form'

export interface IFormContext {
  uploadImg: string
  imgRequired: boolean
  control: Control<IFormSchema, any>
  setUploadImg: React.Dispatch<React.SetStateAction<string>>
  setImgRequired: React.Dispatch<React.SetStateAction<boolean>>
  handleModalSubmit: () => void
  handleCloseModal: () => void
  openModal: boolean
}

export type IErrorState = Partial<Record<ITemplateFormKey, boolean>>
