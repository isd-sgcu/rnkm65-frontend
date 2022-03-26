import StyledButton from 'common/components/Button'
import { InputField } from 'common/components/Input'
import { NextPage } from 'next'
import { useTranslation } from 'next-i18next'

import { UploadImage } from './components/UploadImage'
import { useFormHooks } from './hooks/useFormHooks'
import { FormContainer } from './styled'

const RegisterForm: NextPage = () => {
  const { register, handleSubmitForm } = useFormHooks()
  const { t } = useTranslation('register')

  return (
    <FormContainer onSubmit={handleSubmitForm}>
      <UploadImage />
      <div>
        <InputField title={t('nameTitle')} {...register('title')} />
        <InputField title={t('firstname')} {...register('firstname')} />
        <InputField title={t('lastname')} {...register('lastname')} />
        <InputField title={t('nickname')} {...register('nickname')} />
        <InputField title={t('phone')} {...register('phoneNumber')} />
        <InputField title={t('facebook')} {...register('facebook')} />
        <InputField title={t('lineID')} {...register('lineID')} />

        <StyledButton type="submit">{t('submit')}</StyledButton>
      </div>
    </FormContainer>
  )
}

export default RegisterForm
