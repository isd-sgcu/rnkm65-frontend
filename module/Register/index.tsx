import Typography from 'common/components/Typography'
import { NextPage } from 'next'
import { useTranslation } from 'next-i18next'

import { FormUI } from './components/FormUI'
import { UploadImage } from './components/UploadImage'
import { useFormHooks } from './hooks/useFormHooks'
import { RegisterContainer, SubmitButton } from './styled'

const RegisterForm: NextPage = () => {
  const { register, handleSubmitForm } = useFormHooks()
  const { t } = useTranslation('register')

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', padding: '2rem 4rem' }}
    >
      <Typography variant="h3">แก้ไขข้อมูล</Typography>
      <RegisterContainer onSubmit={handleSubmitForm}>
        <UploadImage />
        <FormUI register={register} />
      </RegisterContainer>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SubmitButton type="submit">{t('submit')}</SubmitButton>
      </div>
    </div>
  )
}

export default RegisterForm
