import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
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

const RegisterForm = () => {
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
          {type === RegisterType.Edit && (
            <SubmitButton
              type="button"
              variant="secondary"
              onClick={() => router.push('/')}
            >
              {t('back')}
            </SubmitButton>
          )}
          <SubmitButton variant="primary" type="submit">
            {t('submit')}
          </SubmitButton>
        </SubmitContainer>
      </RootContainer>
      <ConfirmModal />
    </FormProvider>
  )
}

export default RegisterForm
