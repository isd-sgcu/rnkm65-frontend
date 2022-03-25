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
      .matches(/^(0[1-9][0-9]{7,8})$/, 'Phone number is not in correct format'),

    facebook: yup.string().required(),
    lineID: yup.string().required(),
  })
  .required()
