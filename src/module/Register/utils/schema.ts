import { IFormSchema } from 'common/types/form'
import { CSSProperties } from 'react'
import * as yup from 'yup'

// TODO: Form validation for new field
export const formSchema = yup
  .object()
  .shape({
    title: yup.mixed().oneOf(['Mr.', 'Mrs.', 'Ms.']).defined('Required title'),
    firstname: yup.string().required('Required firstname'),
    lastname: yup.string().required('Required lastname'),
    nickname: yup.string().required('Required nickname'),
    years: yup.string().required('Required'),
    phoneNumber: yup
      .string()
      .trim()
      .required('Required phone number')
      .matches(/^(0[1-9][0-9]{7,8})|-$/, 'Phone number is in wrong format'),
    email: yup
      .string()
      .trim()
      .required('Required email')
      .matches(
        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
        'Email is in wrong format'
      ),
    lineID: yup.string().required('Required'),
    foodAllergy: yup.string().required('Required'),
    foodLimitation: yup.string().required('Required'),
    drugAllergy: yup.string().required('Required'),
    congenitalDisease: yup.string().required('Required'),
  })
  .required()

export type ITemplateFormKey = keyof IFormSchema
export interface ITemplateFormItem {
  fieldKey: ITemplateFormKey
  type: 'select_input' | 'text_input'
  style?: CSSProperties
  option?: Array<{ value: string; i18nKey: string }>
}

export const templateForm: Array<Array<ITemplateFormItem>> = [
  [
    {
      fieldKey: 'title',
      type: 'select_input',
      style: {
        gridColumn: '1 / 2',
        minWidth: '95px',
      },
      option: [
        { value: 'Mr.', i18nKey: 'Mr' },
        { value: 'Mrs.', i18nKey: 'Mrs' },
        { value: 'Ms.', i18nKey: 'Ms' },
      ],
    },
    {
      fieldKey: 'firstname',
      type: 'text_input',
      style: {
        gridColumn: '2 / 6',
      },
    },
    {
      fieldKey: 'lastname',
      type: 'text_input',
      style: {
        gridColumn: '6 / 10',
      },
    },
  ],
  [
    {
      fieldKey: 'nickname',
      type: 'text_input',
      style: {
        gridColumn: '1 / 5',
      },
    },
    {
      fieldKey: 'phoneNumber',
      type: 'text_input',
      style: {
        gridColumn: '5 / 10',
      },
    },
  ],
  [
    {
      fieldKey: 'lineID',
      type: 'text_input',
      style: {
        gridColumn: '1 / 5',
      },
    },
    {
      fieldKey: 'email',
      type: 'text_input',
      style: {
        gridColumn: '5 / 10',
      },
    },
  ],
  [
    {
      fieldKey: 'foodAllergy',
      type: 'text_input',
      style: {
        gridColumn: '1 / 5',
      },
    },
    {
      fieldKey: 'foodLimitation',
      type: 'text_input',
      style: {
        gridColumn: '5 / 10',
      },
    },
  ],
  [
    {
      fieldKey: 'drugAllergy',
      type: 'text_input',
      style: {
        gridColumn: '1 / 5',
      },
    },
    {
      fieldKey: 'congenitalDisease',
      type: 'text_input',
      style: {
        gridColumn: '5 / 10',
      },
    },
  ],
]
