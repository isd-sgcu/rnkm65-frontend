import { CSSProperties } from 'react'
import * as yup from 'yup'

export const formSchema = yup
  .object()
  .shape({
    title: yup.mixed().oneOf(['Mr.', 'Mrs.', 'Ms.']).defined(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    nickname: yup.string().required(),
    phoneNumber: yup
      .string()
      .trim()
      .required()
      .matches(
        /^(0[1-9][0-9]{7,8})|-$/,
        'Phone number is not in correct format'
      ),

    facebook: yup.string().required(),
    lineID: yup.string().required(),
  })
  .required()

export interface IFormSchemaType {
  title: 'Mr.' | 'Mrs.' | 'Ms.'
  firstname: string
  lastname: string
  nickname: string
  phoneNumber: string
  facebook: string
  lineID: string
}

interface ITemplateFormItem {
  key: keyof IFormSchemaType
  type: string
  style?: CSSProperties
  option?: { value: string; i18nKey: string }[]
}

export const templateForm: ITemplateFormItem[] = [
  {
    key: 'title',
    type: 'select_input',
    style: {
      gridColumn: '1 / 2',
      minWidth: '80px',
    },
    option: [
      { value: 'Mr.', i18nKey: 'Mr.' },
      { value: 'Mrs.', i18nKey: 'Mrs.' },
      { value: 'Ms.', i18nKey: 'Ms.' },
    ],
  },
  {
    key: 'firstname',
    type: 'text_input',
    style: {
      gridColumn: '2 / 6',
    },
  },
  {
    key: 'lastname',
    type: 'text_input',
    style: {
      gridColumn: '6 / 10',
    },
  },
  {
    key: 'nickname',
    type: 'text_input',
    style: {
      gridColumn: '1 / 5',
    },
  },
  {
    key: 'phoneNumber',
    type: 'text_input',
    style: {
      gridColumn: '5 / 10',
    },
  },
  {
    key: 'facebook',
    type: 'text_input',
    style: {
      gridColumn: '1 / 5',
    },
  },
  {
    key: 'lineID',
    type: 'text_input',
    style: {
      gridColumn: '5 / 10',
    },
  },
]
