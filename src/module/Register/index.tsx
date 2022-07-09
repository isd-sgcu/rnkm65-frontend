import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import ConfirmModal from './components/ConfirmModal'
import FormUI from './components/FormUI'
import UploadImage from './components/Image'
import { FormProvider } from './hooks/useFormContext'
import {
  RegisterContainer,
  RootContainer,
  SubmitButton,
  SubmitContainer,
} from './styled'
import { RegisterType } from './types'

const RegisterForm: NextPage = () => {
  const { t } = useSSRTranslation('register')
  const router = useRouter()
  const type = (router.query.type as RegisterType) || RegisterType.Register

  return (
    <FormProvider>
      <RootContainer>
        <Typography color="new-primary" variant="h1">
          {t(type)}
        </Typography>
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
