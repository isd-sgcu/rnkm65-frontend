import Typography from 'common/components/Typography'
import { NextPage } from 'next'
import { useTranslation } from 'next-i18next'

import { FormUI } from './components/FormUI'
import { UploadImage } from './components/UploadImage'
import { useFormHooks } from './hooks/useFormHooks'
import {
  RegisterContainer,
  RootContainer,
  SubmitButton,
  SubmitContainer,
} from './styled'

const RegisterForm: NextPage = () => {
  const { register, handleSubmitForm } = useFormHooks()
  const { t } = useTranslation('register')

  return (
    <RootContainer onSubmit={handleSubmitForm}>
      <Typography variant="h3">แก้ไขข้อมูล</Typography>
      <RegisterContainer>
        <UploadImage />
        <FormUI register={register} />
      </RegisterContainer>
      <SubmitContainer>
        <SubmitButton type="submit">{t('submit')}</SubmitButton>
      </SubmitContainer>
    </RootContainer>
  )
}

export default RegisterForm
