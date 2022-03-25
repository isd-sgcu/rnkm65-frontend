import { yupResolver } from '@hookform/resolvers/yup'
import { NextPage } from 'next'
import { FormEvent, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup
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

const RegisterForm: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  })

  const handleFormSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      await handleSubmit(() => {})(e)

      const { errors } = formState
      const errorsKey = Object.keys(errors)

      if (errorsKey.length !== 0) {
        const firstKey = errorsKey[0]
        errors[firstKey].focus()
      } else {
        // Somehow posting and redirect
      }
    },
    [formState, handleSubmit]
  )

  return (
    <form onSubmit={handleFormSubmit}>
      <input {...register('firstname')} />
      <input {...register('lastname')} />
      <input {...register('nickname')} />
      <input {...register('phoneNumber')} />
      <input {...register('facebook')} />
      <input {...register('lineID')} />

      <button type="submit">Submit Form</button>
    </form>
  )
}

export default RegisterForm
