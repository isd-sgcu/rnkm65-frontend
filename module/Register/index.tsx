import { yupResolver } from '@hookform/resolvers/yup'
import StyledButton from 'common/components/Button'
import { Input } from 'common/components/Input'
import { NextPage } from 'next'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { formSchema } from './schema'
import { FormContainer } from './styled'

const RegisterForm: NextPage = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  })

  const handleSubmitSuccess = useCallback(async (e: Record<string, any>) => {
    console.log(e)
  }, [])

  const handleSubmitFailed = useCallback((e) => {
    console.log(e)
  }, [])

  return (
    <FormContainer
      onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitFailed)}
    >
      <div>
        <div>
          <div style={{ backgroundColor: '#ABCDEF' }}>Hello</div>
          <StyledButton type="button">อัพโหลดรูป</StyledButton>
        </div>
      </div>
      <div>
        <Input placeholder="" {...register('title')} />
        <Input placeholder="" {...register('firstname')} />
        <Input {...register('lastname')} />
        <Input {...register('nickname')} />
        <Input {...register('phoneNumber')} />
        <Input {...register('facebook')} />
        <Input {...register('lineID')} />

        <button type="submit">Submit Form</button>
      </div>
    </FormContainer>
  )
}

export default RegisterForm
