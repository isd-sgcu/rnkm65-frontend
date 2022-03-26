import { NextPage } from 'next'

import { FormUI } from './components/FormUI'
import { UploadImage } from './components/UploadImage'
import { useFormHooks } from './hooks/useFormHooks'
import { RegisterContainer } from './styled'

const RegisterForm: NextPage = () => {
  const { register, handleSubmitForm } = useFormHooks()

  return (
    <RegisterContainer onSubmit={handleSubmitForm}>
      <UploadImage />
      <FormUI register={register} />
    </RegisterContainer>
  )
}

export default RegisterForm
