import { IFormSchema } from 'common/types/form'
import dynamic from 'next/dynamic'
import { CSSProperties } from 'react'
import { object, string } from 'yup'

const VaccineInput = dynamic(() => import('../components/VaccineInput'))

// TODO: Form validation for new field
export const formSchema = object()
  .shape({
    title: string()
      .required('Required title')
      .oneOf(['นาย', 'นางสาว', 'นาง'], 'Required'),
    firstname: string().required('Required firstname'),
    lastname: string().required('Required lastname'),
    nickname: string().required('Required nickname'),
    imageUrl: string().required('Required'),
    years: string(),
    phoneNumber: string()
      .trim()
      .required('Required phone number')
      .matches(/^(0[1-9][0-9]{7,8})$|^(-)$/, 'Phone number is in wrong format'),
    email: string()
      .trim()
      .required('Required email')
      .matches(
        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
        'Email is in wrong format'
      ),
    lineID: string().required('Required'),
    allergyFood: string(),
    foodRestriction: string().required('Required'),
    allergyMedicine: string().required('Required'),
    vaccineCertificateUrl: string()
      .oneOf(['true'], 'Required')
      .required('Required'),
    disease: string().required('Required'),
    canSelectBaan: string().oneOf(['true', 'false']).required('Required'),
  })
  .required()

export type ITemplateFormKey = keyof IFormSchema
export interface ITemplateFormItem {
  fieldKey: ITemplateFormKey
  type:
    | 'select_input'
    | 'text_input'
    | 'upload_input'
    | 'radio_input'
    | 'custom'
  style?: CSSProperties
  errorKey?: string
  option?: Array<{ value: string; i18nKey: string; text?: string }>
  Component?: React.ComponentType<any>
}

export const templateForm: Array<Array<ITemplateFormItem>> = [
  [
    {
      fieldKey: 'title',
      type: 'select_input',
      style: {
        gridColumn: '1 / 2',
        minWidth: '100px',
      },
      option: [
        { value: 'นาย', i18nKey: 'Mr' },
        { value: 'นางสาว', i18nKey: 'Miss' },
        { value: 'นาง', i18nKey: 'Mrs' },
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
      fieldKey: 'foodRestriction',
      type: 'text_input',
      style: {
        gridColumn: '1 / 10',
      },
    },
  ],
  [
    {
      fieldKey: 'allergyMedicine',
      type: 'text_input',
      style: {
        gridColumn: '1 / 5',
      },
    },
    {
      fieldKey: 'disease',
      type: 'text_input',
      style: {
        gridColumn: '5 / 10',
      },
    },
  ],
  [
    {
      fieldKey: 'vaccineCertificateUrl',
      type: 'custom',
      errorKey: 'File',
      Component: VaccineInput,
      style: {
        gridColumn: '1 / 10',
      },
    },
  ],
]
