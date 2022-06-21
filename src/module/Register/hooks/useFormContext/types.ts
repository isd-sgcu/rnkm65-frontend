import { IFormSchema } from 'common/types/form'
import { ITemplateFormKey } from 'module/Register/utils/schema'
import { Control } from 'react-hook-form'

export interface IFormContext {
  control: Control<IFormSchema, any>
  setUploadImg: (url: string) => void
  handleModalSubmit: () => void
  handleCloseModal: () => void
  openModal: boolean
}

export type IErrorState = Partial<Record<ITemplateFormKey, boolean>>
