import { IFormSchema } from 'common/types/form'
import { CSSProperties } from 'react'
import * as yup from 'yup'

import VaccineInput from '../components/VaccineInput'

// TODO: Form validation for new field
export const formSchema = yup
  .object()
  .shape({
    title: yup.mixed().oneOf(['Mr.', 'Mrs.', 'Ms.']).defined('Required title'),
    firstname: yup.string().required('Required firstname'),
    lastname: yup.string().required('Required lastname'),
    nickname: yup.string().required('Required nickname'),
    imageUrl: yup.string().required('Required'),
    years: yup.string(),
    phoneNumber: yup
      .string()
      .trim()
      .required('Required phone number')
      .matches(/^(0[1-9][0-9]{7,8})$|^(-)$/, 'Phone number is in wrong format'),
    email: yup
      .string()
      .trim()
      .required('Required email')
      .matches(
        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+|^(-)$/,
        'Email is in wrong format'
      ),
    lineID: yup.string().required('Required'),
    allergyFood: yup.string().required('Required'),
    foodRestriction: yup.string().required('Required'),
    allergyMedicine: yup.string().required('Required'),
    vaccineCertificateUrl: yup.string().required('Required'),
    disease: yup.string().required('Required'),
    joinActivity: yup.string(),
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
      fieldKey: 'allergyFood',
      type: 'text_input',
      style: {
        gridColumn: '1 / 5',
      },
    },
    {
      fieldKey: 'foodRestriction',
      type: 'text_input',
      style: {
        gridColumn: '5 / 10',
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
      Component: VaccineInput,
      style: {
        gridColumn: '1 / 10',
      },
    },
  ],
  [
    {
      fieldKey: 'joinActivity',
      type: 'radio_input',
      style: {
        gridColumn: '1 / 10',
      },
      option: [
        {
          i18nKey: 'wantToJoin',
          value: '1',
        },
        {
          i18nKey: 'dontWantToJoin',
          value: '0',
        },
      ],
    },
  ],
]
