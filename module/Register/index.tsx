import Typography from 'common/components/Typography'
import { NextPage } from 'next'
import { useTranslation } from 'next-i18next'

import { ConfirmModal } from './components/ConfirmModal'
import { FormUI } from './components/FormUI'
import { UploadImage } from './components/UploadImage'
import { FormProvider } from './hooks/useFormContext'
import {
  RegisterContainer,
  RootContainer,
  SubmitButton,
  SubmitContainer,
} from './styled'

const RegisterForm: NextPage = () => {
  const { t } = useTranslation('register')

  return (
    <FormProvider>
      <RootContainer>
        <Typography variant="h1">{t('register')}</Typography>
        <RegisterContainer>
          <UploadImage />
          <FormUI />
        </RegisterContainer>
        <SubmitContainer>
          <SubmitButton type="submit">{t('submit')}</SubmitButton>
        </SubmitContainer>
      </RootContainer>
      <ConfirmModal />
    </FormProvider>
  )
}

export default RegisterForm
